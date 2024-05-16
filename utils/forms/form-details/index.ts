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

export const verifiedSignUpForm = {
  id: "02-verified-sign-up-form",
  fields: {
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
export const forgotPasswordForm = {
  id: "03-forgot-password-form",
  fields: {
    email: {
      type: "string",
      name: "email",
      label: "Email",
      placeholder: "Email",
      errMsg: "Email is required",
    },
  },
};

export const signInForm = {
  id: "03-sign-in-form",
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
  id: "04-sign-in-form",
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
