"use client";

import AuthenticationPageTemplate from "@/components/authentication-page-template";
import employeeImage from "@/public/assets/images/registration-types/employee.svg";
import organizationImage from "@/public/assets/images/registration-types/organization.svg";
import Image from "next/image";
import React, { useEffect } from "react";
import { ROUTES } from "@/utils/constants";
import { NextPage } from "next";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";

const RegisterationType: NextPage = () => {
  const searchParams = useSearchParams();
  let socialLogin = searchParams.get("socialLogin");

  const router = useRouter();

  useEffect(() => {
    if (socialLogin === "true") {
      toast.success("Logged in successfully");
      // eslint-disable-next-line react-hooks/exhaustive-deps
      socialLogin = "Displayed already";
    }
  }, [socialLogin]);

  const card = (
    imageURL: string,
    alt: string,
    heading: string,
    content: string,
    className?: string,
    handleClick?: () => void,
  ) => (
    <div
      className={`flex w-[60vw] min-w-[18.125rem] cursor-pointer flex-col items-center justify-between rounded-[2.5rem] bg-white py-6 pr-9 ps-[2.188rem] md:h-[27.688rem] md:w-[22rem] md:pb-[3.563rem] md:pt-7 lg:w-[27.688rem] ${className}`}
      onClick={handleClick}
    >
      <Image src={imageURL} alt={alt} className="mb-5 md:mb-0" />

      <div>
        <h2 className="pb-2.5 text-center text-xl font-semibold uppercase leading-8 text-primary md:text-2xl lg:text-[1.75rem]">
          {heading}
        </h2>

        <p className="text-center text-sm leading-4 text-placeholder">
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <AuthenticationPageTemplate
      needGeneralStyles={false}
      className="mb-5 sm:mb-0"
    >
      <h1 className="px-4 pb-8 text-center text-xl font-medium text-textColor sm:px-0 md:text-2xl lg:pb-16 lg:text-[1.75rem]">
        Embrace My Leave Tracker as your go-to solution for:
      </h1>

      <div className="!flex flex-col items-center justify-center gap-8 md:flex-row">
        {card(
          organizationImage,
          "Organization Image",
          "Organization",
          "Set up your organization to easily track employee activity with an all-in-one HR system",
          "",
          () => router.replace(ROUTES.ORGANIZATION_REGISTRATION),
        )}

        {card(
          employeeImage,
          "Employee Image",
          "Employee",
          "Join an organization that you are affiliated with.",
          "!pt-[2.688rem]",
          () => toast.error("You need an invite from the admin to continue"),
        )}
      </div>
    </AuthenticationPageTemplate>
  );
};

export default RegisterationType;
