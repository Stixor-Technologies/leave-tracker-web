import {
  SignUpFormDetails,
  SignInFormDetails,
  OrganizationFormDetail,
  VerifiedSignUpFormDetails,
  ForgotPasswordFormDetails,
  AddEmployeeFormDetail,
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

export const addEmployeeDefaultValues: AddEmployeeFormDetail = {
  firstName: "",
  lastName: "",
  email: "",
  hireDate: undefined,
  role: undefined,
  approvalFlowId: undefined,
  holidayCalender: undefined,
  gender: undefined,
  probationEnd: undefined,
  directManagerId: undefined,
  seniorityYears: undefined,
  seniorityMonths: undefined,
  workScheduleId: undefined,
  contractExpiryDate: undefined,
};
