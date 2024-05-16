"use client";
import React from "react";
import SetPassword from "@/components/set-password";
import ForgotPasswordForm from "@/app/forgot-password-form";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";

const ForgotPassword: NextPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return token ? <SetPassword type="RESET" /> : <ForgotPasswordForm />;
};

export default ForgotPassword;
