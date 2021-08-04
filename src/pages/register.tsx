import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { InputField } from "../components/Formik/InputField";
import { FormContainer } from "../Elements/FormContainer";
import { RegisterForm } from "../types/RegisterForm";

interface loginProps {}

//TODO Add a student field later
const Register: React.FC<loginProps> = ({}) => {
  const bg = useColorModeValue("mainGrey", "white");
  const bgFlip = useColorModeValue("white", "mainGrey");
  function validateRegisterForm(value: RegisterForm) {
    console.log(value);
  }
  return (
    <FormContainer>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          isStudent: false,
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting, values: { isStudent } }) => (
          <Form>
            <Box as={Stack} spacing="1.2rem">
              <InputField name="username" type="usename" label="Username" />
              <InputField name="email" type="email" label="Email" />
              <InputField name="password" type="password" label="Password" />
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
