import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface RootState {
  user: UserState;
}

export interface OrgUser {
  id: number;
  userId: number;
  orgId: number;
  org: {
    id: number;
    name: string;
    size: string;
    country: string;
    timeZone: string;
  };
}

export interface UserState {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    slackId: null | string;
    role: string;
    hireDate: string;
    approvalFlowId: number;
    holidayCalender: string;
    gender: string;
    probationEnd: string;
    seniorityYears: string;
    seniorityMonths: string;
    workScheduleId: number;
    contractEnd: string;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
    verified: boolean;
    directManagerId: number;
    inviteAccepted: boolean;
    orgUser: OrgUser[];
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
