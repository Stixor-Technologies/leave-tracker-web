export const signUpForm = {
  id: "01-sign-up-form",
  fields: {
    email: {
      type: "string",
      name: "email",
      label: "Email",
      placeholder: "email",
      errMsg: "Email is required",
    },
    password: {
      type: "string",
      name: "password",
      label: "New Password",
      placeholder: "new password",
      errMsg: "Password is required.",
    },
    confirmPassword: {
      type: "string",
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "confirm password",
      errMsg: "Password confirmation is required.",
    },
  },
};
