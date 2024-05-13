"use client";

import AuthenticationPageTemplate from "@/components/authentication-page-template";
import pendingImage from "@/public/assets/images/verification/pending.svg";
import verifyingImage from "@/public/assets/images/verification/verifying.svg";
import approvedImage from "@/public/assets/images/verification/approved.svg";
import failedImage from "@/public/assets/images/verification/failed.svg";
import VerificationPageTemplate from "@/components/verification-page-template";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  useCheckUserVerificationQuery,
  useResendEmailVerificationLinkMutation,
  useVerifyLinkQuery,
} from "@/redux/apis/auth-api";
import { useRouter } from "next/navigation";
import { LOCAL, ROUTES } from "@/utils/constants";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux/slice/user-slice";
import { NextPage } from "next";
import { toast } from "sonner";

const Verification: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [resendLink, { isLoading }] = useResendEmailVerificationLinkMutation();
  const storedEmail = useSelector(
    (state: RootState) => state?.user?.user?.email,
  );

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { data: checkVerificationData } = useCheckUserVerificationQuery(
    storedEmail as string,
  );

  const { data, isLoading: verifyLoading } = useVerifyLinkQuery(
    token as string,
  );

  useEffect(() => {
    if (data?.status === 200) dispatch(loginUser(data.data));
  }, [data]);

  useEffect(() => {
    console.log(checkVerificationData);
  }, [checkVerificationData]);

  const handleClick = async () => {
    if (!token && !checkVerificationData?.data?.verified) {
      try {
        await resendLink({
          email: storedEmail as string,
          local: LOCAL,
        }).unwrap();
        toast.success("Verification link sent to email successfully");
      } catch (error: any) {
        toast.error(error?.data?.message);
      }
    } else {
      router.push(
        data?.data?.isOrg ? ROUTES.DASHBOARD : ROUTES.REGISTRATION_TYPE,
      );
    }
  };

  const content = {
    imageURL: !token
      ? checkVerificationData?.data?.verified
        ? approvedImage
        : pendingImage
      : verifyLoading
        ? verifyingImage
        : data?.status === 200
          ? approvedImage
          : failedImage,

    headingText: !token
      ? checkVerificationData?.data?.verified
        ? "Email verification successful"
        : "Please verify your email address"
      : verifyLoading
        ? "Verifying provided email"
        : data?.status === 200
          ? "Email verification successful"
          : "Email verification failed, Please try again",

    buttonText:
      !token && !checkVerificationData?.data?.verified
        ? "Resend Verification link"
        : "Proceed",

    showButton:
      !token ||
      (token && data?.status === 200) ||
      checkVerificationData?.data?.verified
        ? true
        : false,
  };

  return (
    <AuthenticationPageTemplate
      className=" flex flex-col items-center justify-center !p-7 sm:!px-12 sm:!py-8  md:w-[45rem] md:!py-9
    md:px-[7.25rem]"
    >
      <VerificationPageTemplate
        imageURL={content.imageURL}
        headingText={content.headingText}
        showButton={content.showButton}
        buttonText={content.buttonText}
        handleClick={handleClick}
        loading={isLoading}
      />
    </AuthenticationPageTemplate>
  );
};

export default Verification;
