import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";
import backgroundLogo from "@/public/assets/images/background-logo.svg";
import Link from "next/link";
import React, { ReactNode } from "react";
import { ROUTES } from "@/utils/constants";

interface AuthenticationPageTemplateProps {
  children: ReactNode;
  redirectTo?: string;
  className?: string;
  innerContainerClassName?: string;
  needGeneralStyles?: boolean;
}

const AuthenticationPageTemplate: React.FC<AuthenticationPageTemplateProps> = ({
  children,
  redirectTo = "",
  className = "",
  innerContainerClassName = "",
  needGeneralStyles = true,
}) => {
  const generalClasses = `z-10 w-full ${needGeneralStyles && "rounded-2xl border bg-white px-7 py-6 md:rounded-[1.5rem] md:px-11 md:pt-9 md:pb-11 "}`;

  return (
    <div
      className={`relative flex min-h-screen w-screen flex-col items-center bg-lightGray`}
    >
      <Image src={logo} alt="logo" className="ms-5 mt-[1.125rem] self-start" />

      <Image
        src={backgroundLogo}
        alt="Background Logo"
        className="absolute bottom-0 left-0 !z-0 w-[17.5rem] md:w-auto"
      />
      <div
        className={`${innerContainerClassName} my-6 flex w-full items-center md:flex-1 ${needGeneralStyles && "min-w-[90vw] max-w-[90vw]  sm:min-w-0 sm:max-w-[80vw] lg:max-w-[45rem]"}`}
      >
        {redirectTo === "" ? (
          <div className={` ${generalClasses} ${className}`}>{children}</div>
        ) : (
          <div className={`flex w-full flex-col items-center sm:items-end`}>
            <div className={`${generalClasses} ${className}`}>{children}</div>

            <div className="z-10 pt-3 text-sm sm:pt-6">
              {redirectTo !== "sign-up" ? (
                <>
                  <span className="text-placeholder">
                    Already have an account?{" "}
                  </span>

                  <Link
                    href={ROUTES.SIGN_IN}
                    className="text-lg font-bold text-primary"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <>
                  <span className="text-placeholder">
                    Don&apos;t have an account yet?{" "}
                  </span>

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
    </div>
  );
};

export default AuthenticationPageTemplate;
