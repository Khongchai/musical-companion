import { Box, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "../components/Formik/InputField";
import GenericFormStatusMessage from "../components/GenericFormStatusMessage";
import { FormContainer } from "../Elements/FormContainer";
import { useSendResetPasswordEmailMutation } from "../generated/graphql";
import useAuthRedirect from "../utils-hooks/useAuthRedirect";
import useFormStatusMessages from "../utils-hooks/useFormStatusMessages";

const ForgotPassword: React.FC = ({}) => {
  useAuthRedirect("toHomeIfLoggedIn");
  const bg = useColorModeValue("mainGrey", "white");
  const bgFlip = useColorModeValue("white", "mainGrey");
  const [forgotPassword] = useSendResetPasswordEmailMutation();
  const { finishedMessage, setFinishedMessage, errorMessage, setErrorMessage } =
    useFormStatusMessages();

  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async ({ email }) => {
          if (!email) {
            setErrorMessage("Please enter your email");
            return;
          }
          await forgotPassword({
            variables: { email },
          })
            .then(() => {
              setFinishedMessage(
                "Reset password email sent (if a user with the provided email exsits)"
              );
            })
            .catch((error) => {
              setErrorMessage(
                "Send this error message to the admin: " + error.message
              );
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box as={Stack} mt={["6rem", null, "0"]} spacing="1.2rem">
              <InputField name="email" type="email" label="Email" />
              {finishedMessage && (
                <GenericFormStatusMessage color="green">
                  {finishedMessage}
                </GenericFormStatusMessage>
              )}
              {errorMessage && (
                <GenericFormStatusMessage color="red">
                  {errorMessage}
                </GenericFormStatusMessage>
              )}
              <Button
                mt={4}
                color={bgFlip}
                bg={bg}
                isLoading={isSubmitting}
                _hover={{ opacity: 0.7 }}
                type="submit"
              >
                Send Reset Password Link
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};
export default ForgotPassword;
