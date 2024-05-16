export interface SignUpFormDetails {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface VerifiedSignUpFormDetails
  extends Omit<SignUpFormDetails, "email"> {}

export interface ForgotPasswordFormDetails {
  email: string;
}

export interface SignInFormDetails
  extends Omit<SignUpFormDetails, "confirmPassword"> {}

export interface OrganizationFormDetail {
  name: string;
  size: string;
  country: string;
  timeZone: string;
}
