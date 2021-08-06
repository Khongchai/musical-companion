import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../components/Formik/InputField";
import { FormContainer } from "../Elements/FormContainer";
import { useTokenAuthMutation } from "../generated/graphql";
import { client } from "../utils/apolloClient";
import catchFormErrors from "../utils/forms/catchFormErrors";

const Login: React.FC = ({}) => {
  const router = useRouter();
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
                email: usernameOrEmail,
              }
            : { username: usernameOrEmail };
          const response = await login({
            variables: { password: password, ...usernameOrEmail_checked },
          });
          const errors = response.data?.tokenAuth?.errors;
          if (!errors) {
            const token = response.data?.tokenAuth?.token;
            localStorage.setItem("login-token", token ? token : "");
            client.resetStore();
            router.push("/");
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
