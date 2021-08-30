import { FormErrorResponse } from "../../types/RegisterForm";
import React from "react";

export default function catchFormErrors(
  errors: FormErrorResponse,
  setFieldError?: (field: string, message: string | undefined) => void,
  setNonFieldError?: React.Dispatch<string>
) {
  if (errors) {
    //Assume that each array has a length of only 1
    for (const [key, value] of Object.entries(errors)) {
      if (setFieldError) {
        setFieldError(key, value[0].message);
      } else if (setNonFieldError) {
        console.log(value);
        setNonFieldError(value[0].message);
      }
    }
    return true;
  }
  return false;
}
