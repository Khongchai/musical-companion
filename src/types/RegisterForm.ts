export type RegisterFormErrorResponse = {
  username?: [responseField];
  email?: [responseField];
  password1?: [responseField];
  password2?: [responseField];
  isStudent?: [responseField];
};

type responseField = {
  code: string;
  message: string;
};
