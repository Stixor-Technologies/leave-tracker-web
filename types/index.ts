import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface RootState {
  user: UserState;
}

export interface UserState {
  user: {
    id: number | null;
    name: string | null;
    email: string | null;
    slackId: string | null;
    role: string | null;
    deleted: boolean;
    createdAt: string | null;
    updatedAt: string | null;
    verified: boolean;
    orgUser: [];
  };
  isOrg: boolean;
}

export interface Route {
  name: string;
  href: string;
  icon:
    | ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >
    | string;
}

export interface EmployeeBase {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  slackId?: string;
  role?: string;
  hireDate?: string;
  approvalFlowId?: string;
  holidayCalender?: string;
  gender?: string;
  probationEnd?: string;
  seniorityYears?: string;
  seniorityMonths?: string;
  workScheduleId?: string;
  contractEnd?: string;
  deleted: boolean;
  verified: boolean;
  directManagerId?: string;
  inviteAccepted?: boolean;
}
