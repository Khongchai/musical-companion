import { FormErrorResponse } from "../../types/RegisterForm";

export default function catchFormErrors(
  errors: FormErrorResponse,
  setFieldError: (field: string, message: string | undefined) => void
) {
  if (errors) {
    console.log(errors);
    //Assume that each array has a length of only 1
    for (const [key, value] of Object.entries(errors)) {
      setFieldError(key, value[0].message);
    }
    return true;
  }
  return false;
}
