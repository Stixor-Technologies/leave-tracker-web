export const signUpForm = {
  id: "01-sign-up-form",
  fields: {
    email: {
      type: "string",
      name: "email",
      label: "Email",
      placeholder: "Email",
      errMsg: "Email is required",
    },
    password: {
      type: "password",
      name: "password",
      label: "New Password",
      placeholder: "New Password",
      errMsg: "Password is required.",
    },
    confirmPassword: {
      type: "password",
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Confirm Password",
      errMsg: "Password confirmation is required.",
    },
  },
};

export const signInForm = {
  id: "01-sign-in-form",
  fields: {
    email: {
      type: "string",
      name: "email",
      label: "Email",
      placeholder: "Email",
      errMsg: "Email is required",
    },
    password: {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Password",
      errMsg: "Password is required.",
    },
  },
};
