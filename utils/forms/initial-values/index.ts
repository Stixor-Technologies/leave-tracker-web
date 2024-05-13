import {
  SignUpFormDetails,
  SignInFormDetails,
  OrganizationFormDetail,
} from "../interfaces";

export const signUpFormDetails: SignUpFormDetails = {
  email: "",
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
