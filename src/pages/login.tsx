import { Box, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { InputField } from "../components/Formik/InputField";
import { FormContainer } from "../Elements/FormContainer";
import { useTokenAuthMutation } from "../generated/graphql";
import redirectAfterTokenAuth from "../utils/authentication/redirectAfterTokenAuth";
import Link from "next/link";
import { ToHomeIfLoggedIn } from "../components/Shared/AuthCheck";

const Login: React.FC = ({}) => {
  const bg = useColorModeValue("mainGrey", "white");
  const bgFlip = useColorModeValue("white", "mainGrey");
  const [login] = useTokenAuthMutation();
  const [genericLoginError, setGenericLoginError] = useState("");

  return (
    <ToHomeIfLoggedIn>
      <FormContainer>
        <Formik
          initialValues={{
            usernameOrEmail: "",
            password: "",
          }}
          onSubmit={async ({ password, usernameOrEmail }) => {
            setGenericLoginError("");
            const usernameOrEmail_checked = usernameOrEmail.includes("@")
              ? {
                  email: usernameOrEmail.toLowerCase(),
                }
              : { username: usernameOrEmail.toLowerCase() };
            const response = await login({
              variables: { password: password, ...usernameOrEmail_checked },
            });
            const errors = response.data?.tokenAuth?.errors;
            if (!errors) {
              const token = response.data?.tokenAuth?.token;
              token && redirectAfterTokenAuth(token);
            } else {
              //Doesn't have to be specific with the fields. We just need to give a generic info.
              setGenericLoginError("Invalid credentials");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box as={Stack} mt={["6rem", null, "0"]} spacing="1.2rem">
                <InputField
                  name="usernameOrEmail"
                  type="username"
                  label="Username or Email"
                />
                <InputField name="password" type="password" label="Password" />
                {genericLoginError && (
                  <small style={{ color: "red" }}>{genericLoginError}</small>
                )}
                <Link href="/forgotPassword">
                  <small
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Forgot password?
                  </small>
                </Link>
                <Button
                  mt={4}
                  color={bgFlip}
                  bg={bg}
                  isLoading={isSubmitting}
                  _hover={{ opacity: 0.7 }}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </ToHomeIfLoggedIn>
  );
};
export default Login;
