import { Box, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { InputField } from "../components/Formik/InputField";
import { FormContainer } from "../Elements/FormContainer";
import { useTokenAuthMutation } from "../generated/graphql";
import useAuthRedirect from "../utils-hooks/useAuthRedirect";
import redirectAfterTokenAuth from "../utils/authentication/redirectAfterTokenAuth";

const Login: React.FC = ({}) => {
  useAuthRedirect("toHomeIfLoggedIn");
  const bg = useColorModeValue("mainGrey", "white");
  const bgFlip = useColorModeValue("white", "mainGrey");
  const [login] = useTokenAuthMutation();
  const [genericLoginError, setGenericLoginError] = useState("");
  return (
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
  );
};
export default Login;
