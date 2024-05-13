"use client";

import React, { useEffect } from "react";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

const Dashboard: NextPage = () => {
  const searchParams = useSearchParams();
  let socialLogin = searchParams.get("socialLogin");

  useEffect(() => {
    if (socialLogin === "true") {
      toast.success("Logged in successfully");
      socialLogin = "Displayed already";
    }
  }, [socialLogin]);

  return <div>Dashboard</div>;
};

export default Dashboard;
