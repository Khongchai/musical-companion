import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

type InputFieldProps = {
  name: string;
  type: string;
  label: string;
};

export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, { error, touched }] = useField(props as any);
  return (
    <FormControl isInvalid={!!error && touched}>
      <FormLabel htmlFor={field.name} textTransform="capitalize">
        {label}
      </FormLabel>
      <Input {...field} {...props} id={field.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
