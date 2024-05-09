export const ROUTES = {
  SIGN_UP: "/sign-up",
  SIGN_IN: "/sign-in",
  VERIFICATION: "/verification",
  REGISTRATION_TYPE: "/registration-type",
  ORGANIZATION_REGISTRATION: "/organization-registration",
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

export const AUTH_ROUTES = [
  ROUTES.SIGN_UP,
  ROUTES.SIGN_IN,
  ROUTES.VERIFICATION,
  ROUTES.REGISTRATION_TYPE,
  ROUTES.ORGANIZATION_REGISTRATION,
];

export const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_BASE_URL;
