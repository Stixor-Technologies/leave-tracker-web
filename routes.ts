import { Route } from "./types";
import { ROUTES } from "./utils/constants";
import {
  PenLine,
  CalendarDays,
  FileSpreadsheet,
  BarChart4,
  Settings2,
  Layers,
  Calculator,
  Users,
  UserCheck,
  Lock,
  Palmtree,
  GitPullRequest,
  CalendarRange,
  Bell,
  Cog,
  FolderUp,
  Trees,
} from "lucide-react";

export const routes: Route[] = [
  {
    name: "Apply",
    href: ROUTES.APPLY,
    icon: PenLine,
  },
  {
    name: "Calendar",
    href: ROUTES.CALENDAR,
    icon: CalendarDays,
  },
  {
    name: "Requests",
    href: ROUTES.REQUESTS,
    icon: FileSpreadsheet,
  },
  {
    name: "Entitlement",
    href: ROUTES.ENTITLEMENT,
    icon: BarChart4,
  },
  {
    name: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: Settings2,
  },
  {
    name: "Reports",
    href: ROUTES.REPORTS,
    icon: Layers,
  },
  {
    name: "Billing",
    href: ROUTES.BILLING,
    icon: Calculator,
  },
];

export const dashboardRoutes: Route[] = [
  {
    name: "Employee",
    href: ROUTES.EMPLOYEE,
    icon: Users,
  },
  {
    name: "Roles",
    href: ROUTES.ROLES,
    icon: UserCheck,
  },
  {
    name: "Permissions",
    href: ROUTES.PERMISSIONS,
    icon: Lock,
  },
  {
    name: "Holidays",
    href: ROUTES.HOLIDAYS,
    icon: Palmtree,
  },
  {
    name: "Approval flows",
    href: ROUTES.APPROVAL_FLOWS,
    icon: GitPullRequest,
  },
  {
    name: "Work schedule",
    href: ROUTES.WORK_SCHEDULE,
    icon: CalendarRange,
  },
  {
    name: "Notifications",
    href: ROUTES.NOTIFICATIONS,
    icon: Bell,
  },
  {
    name: "Account Settings",
    href: ROUTES.ACCOUNT_SETTINGS,
    icon: Cog,
  },
  {
    name: "Import",
    href: ROUTES.IMPORT,
    icon: FolderUp,
  },
  {
    name: "Absence Types",
    href: ROUTES.ABSENCE_TYPES,
    icon: Trees,
  },
];
