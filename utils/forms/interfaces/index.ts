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

export interface AddEmployeeFormDetail {
  firstName: string;
  lastName: string;
  email: string;
  hireDate?: string;
  role?: string;
  approvalFlowId?: string;
  holidayCalender?: string;
  gender?: string;
  probationEnd?: string;
  directManagerId?: string;
  seniorityYears?: string;
  seniorityMonths?: string;
  workScheduleId?: string;
  contractEnd?: string;
}
