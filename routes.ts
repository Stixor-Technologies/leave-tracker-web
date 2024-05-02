import { Route } from "./app/types";

export const routes: Route[] = [
  {
    name: "Apply",
    href: "/panel/apply",
    icon: "/assets/images/sidebar/normal-icons/apply.svg",
    activeIcon: "/assets/images/sidebar/active-icons/apply.svg",
  },
  {
    name: "Calendar",
    href: "/panel/calendar",
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
    href: "/panel/requests",
    icon: "/assets/images/sidebar/normal-icons/requests.svg",
    activeIcon: "/assets/images/sidebar/active-icons/requests.svg",
  },
  {
    name: "Entitlement",
    href: "/panel/entitlement",
    icon: "/assets/images/sidebar/normal-icons/entitlement.svg",
    activeIcon: "/assets/images/sidebar/active-icons/entitlement.svg",
  },
  {
    name: "Dashboard",
    href: "/panel/dashboard",
    icon: "/assets/images/sidebar/normal-icons/dashboard.svg",
    activeIcon: "/assets/images/sidebar/active-icons/dashboard.svg",
  },
  {
    name: "Reports",
    href: "/panel/reports",
    icon: "/assets/images/sidebar/normal-icons/reports.svg",
    activeIcon: "/assets/images/sidebar/active-icons/reports.svg",
  },
  {
    name: "Billing",
    href: "/panel/billing",
    icon: "/assets/images/sidebar/normal-icons/billing.svg",
    activeIcon: "/assets/images/sidebar/active-icons/billing.svg",
  },
];
