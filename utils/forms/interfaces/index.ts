import { EmployeeBase } from "@/types";
export interface SignUpFormDetails {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInFormDetails
  extends Omit<SignUpFormDetails, "confirmPassword"> {}

export interface OrganizationFormDetail {
  name: string;
  size: string;
  country: string;
  timeZone: string;
}

// export interface AddEmployeeFormDetail
//   extends Pick<
//     EmployeeBase,
//     | "firstName"
//     | "lastName"
//     | "email"
//     | "hireDate"
//     | "role"
//     | "approvalFlowId"
//     | "holidayCalender"
//     | "gender"
//     | "probationEnd"
//     | "directManagerId"
//     | "seniorityYears"
//     | "seniorityMonths"
//     | "workScheduleId"
//     | "contractEnd"
//   > {}

export type AddEmployeeFormDetail = Pick<
  EmployeeBase,
  | "firstName"
  | "lastName"
  | "email"
  | "hireDate"
  | "role"
  | "approvalFlowId"
  | "holidayCalender"
  | "gender"
  | "probationEnd"
  | "directManagerId"
  | "seniorityYears"
  | "seniorityMonths"
  | "workScheduleId"
  | "contractEnd"
>;

// export interface AddEmployeeFormDetail {
//   firstName: string;
//   lastName: string;
//   email: string;
//   hireDate?: string;
//   role?: string;
//   approvalFlowId?: string;
//   holidayCalender?: string;
//   gender?: string;
//   probationEnd?: string;
//   directManagerId?: string;
//   seniorityYears?: string;
//   seniorityMonths?: string;
//   workScheduleId?: string;
//   contractEnd?: string;
// }
