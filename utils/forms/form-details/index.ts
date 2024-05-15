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

export const createOrganizationForm = {
  id: "01-sign-in-form",
  fields: {
    name: {
      type: "string",
      label: "Organization name",
      placeholder: "Name",
    },
    size: {
      type: "string",
      label: "Organization Size",
      placeholder: "Select",
    },
    country: {
      type: "string",
      label: "Country",
      placeholder: "Select",
    },
    timeZone: {
      type: "string",
      label: "TimeZone",
      placeholder: "Select",
    },
  },
};
