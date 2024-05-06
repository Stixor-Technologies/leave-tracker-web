// import { OptionsType } from "cookies-next/lib/types";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// export const cookieConfig: OptionsType = {
//   path: "/",
//   httpOnly: process.env.NODE_ENV === "development" ? true : false,
//   maxAge: 24 * 60 * 60,
// };

export const ROUTES = {
  SIGN_UP: "/sign-up",
  SIGN_IN: "/sign-in",
  APPLY: "/apply",
  CALENDAR: "/calendar",
  REQUESTS: "/requests",
  ENTITLEMENT: "/entitlement",
  DASHBOARD: "/dashboard",
  REPORTS: "/reports",
  BILLING: "/billing",
};

export const PROTECTED_ROUTES = [
  ROUTES.APPLY,
  ROUTES.CALENDAR,
  ROUTES.REQUESTS,
  ROUTES.ENTITLEMENT,
  ROUTES.DASHBOARD,
  ROUTES.REPORTS,
  ROUTES.BILLING,
];

export const AUTH_ROUTES = [ROUTES.SIGN_UP, ROUTES.SIGN_IN];
