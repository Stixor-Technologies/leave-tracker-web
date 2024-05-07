import React, { ReactNode } from "react";
import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";
import backgroundLogo from "@/public/assets/images/background-logo.svg";
import Link from "next/link";
import { ROUTES } from "@/constants";

interface AuthenticationPageTemplateProps {
  children: ReactNode;
  redirectTo?: string;
}

const AuthenticationPageTemplate: React.FC<AuthenticationPageTemplateProps> = ({
  children,
  redirectTo = "",
}) => {
  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-themeGray">
      <Image
        src={logo}
        alt="logo"
        className="absolute left-5 top-[1.125rem] z-0"
      />

      <Image
        src={backgroundLogo}
        alt="Background Logo"
        className="absolute bottom-0 left-5 z-0 w-[17.5rem] md:w-auto"
      />

      {redirectTo === "" ? (
        <div className="z-10 mt-[4rem] rounded-2xl border bg-white px-7 py-6 md:rounded-[1.5rem] md:px-11 md:py-9">
          {children}
        </div>
      ) : (
        <div className="mt-[4rem] flex flex-col items-center sm:items-end">
          <div className="z-10 rounded-2xl border bg-white px-7 py-6 md:rounded-[1.5rem] md:px-11 md:py-9">
            {children}
          </div>
          <div className="pt-6 text-sm text-[#BBBBBB]">
            {redirectTo !== "sign-up" ? (
              <>
                Already have an account?{" "}
                <Link
                  href={ROUTES.SIGN_IN}
                  className="text-lg font-bold text-primary"
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                Don&apos;t have an account yet?{" "}
                <Link
                  href={ROUTES.SIGN_UP}
                  className="text-lg font-bold text-primary"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthenticationPageTemplate;
