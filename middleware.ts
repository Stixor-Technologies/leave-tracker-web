import { NextResponse } from "next/server";
import { PROTECTED_ROUTES, AUTH_ROUTES } from "./utils/constants";
import { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const cookie = request.cookies.get("Authentication");

  if (PROTECTED_ROUTES.includes(request.nextUrl.pathname) && !cookie?.value) {
    // const response = NextResponse.redirect(new URL("/sign-in", request.url));
    // return response;
  }

  if (AUTH_ROUTES.includes(request.nextUrl.pathname) && cookie?.value) {
    // return NextResponse.redirect(new URL("/", request.url));
  }
};
