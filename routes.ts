import { Route } from "./app/types";
import { ROUTES } from "./constants";

export const routes: Route[] = [
  {
    name: "Apply",
    href: ROUTES.APPLY,
    icon: "/assets/images/sidebar/normal-icons/apply.svg",
    activeIcon: "/assets/images/sidebar/active-icons/apply.svg",
  },
  {
    name: "Calendar",
    href: ROUTES.CALENDAR,
    icon: "/assets/images/sidebar/normal-icons/calendar.svg",
    activeIcon: "/assets/images/sidebar/active-icons/calendar.svg",
    // nestedRoutes: [
    //   {
    //     name: "Products",
    //     href: "/products/all-products",
    //   },
    // ],
  },
  {
    name: "Requests",
    href: ROUTES.REQUESTS,
    icon: "/assets/images/sidebar/normal-icons/requests.svg",
    activeIcon: "/assets/images/sidebar/active-icons/requests.svg",
  },
  {
    name: "Entitlement",
    href: ROUTES.ENTITLEMENT,
    icon: "/assets/images/sidebar/normal-icons/entitlement.svg",
    activeIcon: "/assets/images/sidebar/active-icons/entitlement.svg",
  },
  {
    name: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: "/assets/images/sidebar/normal-icons/dashboard.svg",
    activeIcon: "/assets/images/sidebar/active-icons/dashboard.svg",
  },
  {
    name: "Reports",
    href: ROUTES.REPORTS,
    icon: "/assets/images/sidebar/normal-icons/reports.svg",
    activeIcon: "/assets/images/sidebar/active-icons/reports.svg",
  },
  {
    name: "Billing",
    href: ROUTES.BILLING,
    icon: "/assets/images/sidebar/normal-icons/billing.svg",
    activeIcon: "/assets/images/sidebar/active-icons/billing.svg",
  },
];
