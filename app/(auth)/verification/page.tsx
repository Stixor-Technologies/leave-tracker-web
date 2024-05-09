"use client";

import AuthenticationPageTemplate from "@/components/authentication-page-template";
import React from "react";
import verificationImage from "@/public/assets/images/verification.svg";
import VerificationPageTemplate from "@/components/verification-page-template";

const Verification = () => {
  const handleClick = async () =>
    alert("Link send karne wali api nhi bani abhi :)");

  return (
    <AuthenticationPageTemplate
      className=" flex flex-col items-center justify-center !p-7 sm:!px-12 sm:!py-8  md:w-[45rem] md:!py-9
    md:px-[7.25rem]"
    >
      <VerificationPageTemplate
        imageURL={verificationImage}
        headingText="Please verify you email address"
        buttonText="Resend Verification link"
        handleClick={handleClick}
      />
    </AuthenticationPageTemplate>
  );
};

export default Verification;
