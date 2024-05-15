import { NextResponse } from "next/server";
import { PROTECTED_ROUTES, AUTH_ROUTES } from "./utils/constants";

export const config = {
  matcher: [
    "/",
    "/apply/:path*",
    "/calendar/:path*",
    "/requests/:path*",
    "/entitlement/:path*",
    "/dashboard/:path*",
    "/reports/:path*",
    "/billing/:path*",
    "/sign-in/:path*",
    "/sign-up/:path*",
    "/verification/:path*",
  ],
};

export default function middleware(req: any) {
  // Replace "AUTH_COOKIE_NAME" with your actual cookie name
  const authToken = req.cookies.get("Authentication");
  const isAuthenticated = !!authToken; // Check if token exists

  console.log(isAuthenticated, authToken);

  // Create a regular expression to match protected routes (dynamic segments replaced with ".+")
  const protectedRoutesRegex = new RegExp(
    PROTECTED_ROUTES.map((route) => route.replace(/:path/g, ".+")).join("|"),
  );

  // if user is not authenticated and accessing a protected route, redirect to login page
  if (!isAuthenticated && protectedRoutesRegex.test(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // if user is logged in and tries to access AUTH_ROUTES
  if (isAuthenticated && AUTH_ROUTES.includes(req.nextUrl.pathname)) {
    console.log("home");
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
