import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";
import backgroundLogo from "@/public/assets/images/background-logo.svg";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { ROUTES } from "@/utils/constants";

interface AuthenticationPageTemplateProps {
  children: ReactNode;
  redirectTo?: string;
  className?: string;
  needGeneralStyles?: boolean;
}

const AuthenticationPageTemplate: React.FC<AuthenticationPageTemplateProps> = ({
  children,
  redirectTo = "",
  className = "",
  needGeneralStyles = true,
}) => {
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const handleWindowResize = () => setWindowHeight(window.innerHeight);

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const generalClasses = `${windowHeight <= 675 && "mt-[5rem]"} z-10 ${needGeneralStyles && "rounded-2xl border bg-white px-7 py-6 md:rounded-[1.5rem] md:px-11 md:pt-9 md:pb-11 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[45rem]"}`;

  return (
    <div
      className={`bg-lightGray relative flex min-h-screen w-screen flex-col items-center justify-center`}
    >
      <Image
        src={logo}
        alt="logo"
        className="absolute left-5 top-[1.125rem] !z-0"
      />

      <Image
        src={backgroundLogo}
        alt="Background Logo"
        className="absolute bottom-0 left-0 !z-0 w-[17.5rem] md:w-auto"
      />

      {redirectTo === "" ? (
        <div className={`${generalClasses} ${className}`}>{children}</div>
      ) : (
        <div className={`flex flex-col items-center sm:items-end`}>
          <div className={`${generalClasses} ${className}`}>{children}</div>

          <div className="pt-3 text-sm sm:pt-6">
            {redirectTo !== "sign-up" ? (
              <>
                <span className="text-textColor opacity-50">
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
                <span className="text-textColor opacity-50">
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
  );
};

export default AuthenticationPageTemplate;
