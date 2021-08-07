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
import React from "react";
import { InputField } from "../components/Formik/InputField";
import { FormContainer } from "../Elements/FormContainer";
import { useRegisterMutation } from "../generated/graphql";
import { useIsAuthed } from "../utils-hooks/useIsAuthed";
import redirectAfterTokenAuth from "../utils/authentication/redirectAfterTokenAuth";
import catchFormErrors from "../utils/forms/catchFormErrors";

const Register: React.FC = ({}) => {
  useIsAuthed();
  const bg = useColorModeValue("mainGrey", "white");
  const bgFlip = useColorModeValue("white", "mainGrey");
  const [register] = useRegisterMutation();
  return (
    <FormContainer>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password1: "",
          password2: "",
          isStudent: false,
        }}
        onSubmit={async (values, { setFieldError }) => {
          const response = await register({
            variables: { ...values },
          });
          if (
            !catchFormErrors(response.data?.register?.errors, setFieldError)
          ) {
            const token = response.data?.register?.token;
            token && redirectAfterTokenAuth(token);
          }
        }}
      >
        {({ isSubmitting, values: { isStudent } }) => (
          <Form>
            <Box as={Stack} mt={["6rem", null, "0"]} spacing="1.2rem">
              <InputField name="username" type="usename" label="Username" />
              <InputField name="email" type="email" label="Email" />
              <InputField name="password1" type="password" label="Password" />
              <InputField
                name="password2"
                type="password"
                label="Confirm Password"
              />

              <FormLabel>
                <Flex>
                  <Field
                    colorScheme="green"
                    mr=".75rem"
                    as={Checkbox}
                    type="checkbox"
                    name="isStudent"
                    w="fit-content"
                  />
                  <Text>I am a student</Text>
                </Flex>
                {isStudent ? (
                  <small style={{ color: "var(--chakra-colors-mainGrey)" }}>
                    As a student, you will be granted access to all content on
                    this site free of charge.{" "}
                  </small>
                ) : null}
              </FormLabel>
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
export default Register;