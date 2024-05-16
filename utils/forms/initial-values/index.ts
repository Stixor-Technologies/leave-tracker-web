import {
  SignUpFormDetails,
  SignInFormDetails,
  OrganizationFormDetail,
  VerifiedSignUpFormDetails,
  ForgotPasswordFormDetails,
} from "../interfaces";

export const signUpFormDetails: SignUpFormDetails = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const forgotPasswordFormDetails: ForgotPasswordFormDetails = {
  email: "",
};

export const verifiedSignUpFormDetails: VerifiedSignUpFormDetails = {
  password: "",
  confirmPassword: "",
};

export const signInDefaultValues: SignInFormDetails = {
  email: "",
  password: "",
};

export const organizationDefaultValues: OrganizationFormDetail = {
  name: "",
  size: "",
  country: "",
  timeZone: "",
};
