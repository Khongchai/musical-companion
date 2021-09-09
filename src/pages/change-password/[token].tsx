import { Box, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../../components/Formik/InputField";
import GenericFormStatusMessage from "../../components/GenericFormStatusMessage";
import { ToHomeIfLoggedIn } from "../../components/Shared/AuthCheck";
import { FormContainer } from "../../Elements/FormContainer";
import {
  useResetPasswordMutation,
  useTokenAuthMutation,
} from "../../generated/graphql";
import useFormStatusMessages from "../../utils-hooks/useFormStatusMessages";
import redirectAfterTokenAuth from "../../utils/authentication/redirectAfterTokenAuth";
import catchFormErrors from "../../utils/forms/catchFormErrors";

const ChangePassword: React.FC = ({}) => {
  const bg = useColorModeValue("mainGrey", "white");
  const bgFlip = useColorModeValue("white", "mainGrey");

  const router = useRouter();
  const { token, email: userEmail } = router.query;

  const [resetPassword] = useResetPasswordMutation();
  const [login] = useTokenAuthMutation();

  const { errorMessage, setErrorMessage, finishedMessage, setFinishedMessage } =
    useFormStatusMessages();

  const [passwordForLoggingIn, setPasswordForLoggingIn] = useState("");

  return (
    <ToHomeIfLoggedIn>
      <FormContainer>
        <Formik
          initialValues={{
            newPassword1: "",
            newPassword2: "",
          }}
          onSubmit={async (passwords) => {
            if (!token) {
              return;
            }
            await resetPassword({
              variables: { token: token as string, ...passwords },
            })
              //Catch expected failures (password too easy, password not the same, etc.)
              .then((result) => {
                if (
                  !catchFormErrors(
                    result.data?.resetPassword?.errors,
                    undefined,
                    setErrorMessage
                  )
                ) {
                  //Success
                  setFinishedMessage("Password changed successfully");

                  //For logging in after changing the password
                  setPasswordForLoggingIn(passwords.newPassword1);
                }
              })
              //Catch unexpected backend failures (backend fails to respond, etc.)
              .catch((error) => {
                setErrorMessage(
                  "Send this error to the admin: " + error.message
                );
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box as={Stack} mt={["6rem", null, "0"]} spacing="1.2rem">
                <InputField
                  name="newPassword1"
                  type="password"
                  label="New Password"
                />
                <InputField
                  name="newPassword2"
                  type="password"
                  label="Confirm New Password"
                />
                {errorMessage && (
                  <GenericFormStatusMessage color="red">
                    <b>Error</b>: {errorMessage}
                  </GenericFormStatusMessage>
                )}
                {finishedMessage && (
                  <GenericFormStatusMessage color="green">
                    {finishedMessage}
                  </GenericFormStatusMessage>
                )}
                <Button
                  mt={4}
                  color={bgFlip}
                  bg={bg}
                  isLoading={isSubmitting}
                  _hover={{ opacity: 0.7 }}
                  type="submit"
                  onClick={async () => {
                    if (finishedMessage) {
                      const response = await login({
                        variables: {
                          password: passwordForLoggingIn,
                          email: userEmail as string,
                        },
                      });
                      const token = response.data?.tokenAuth?.token;
                      token && redirectAfterTokenAuth(token);
                    }
                  }}
                >
                  {finishedMessage
                    ? "Click Here to Log In"
                    : "Set New Password"}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </ToHomeIfLoggedIn>
  );
};

export default ChangePassword;
