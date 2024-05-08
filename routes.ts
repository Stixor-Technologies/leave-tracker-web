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
