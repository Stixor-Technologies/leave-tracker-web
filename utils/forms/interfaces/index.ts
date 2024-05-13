export interface SignUpFormDetails {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInFormDetails
  extends Omit<SignUpFormDetails, "confirmPassword"> {}
