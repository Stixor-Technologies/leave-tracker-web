"use client";

import Header from "@/components/ui/header";
import DashboardPagesGridItem from "@/components/dashboard-pages-grid-item";
import React, { useEffect } from "react";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { dashboardRoutes } from "@/routes";

const Dashboard: NextPage = () => {
  const searchParams = useSearchParams();
  let socialLogin = searchParams.get("socialLogin");

  useEffect(() => {
    if (socialLogin === "true") {
      toast.success("Logged in successfully");
      // eslint-disable-next-line react-hooks/exhaustive-deps
      socialLogin = "Displayed already";
    }
  }, [socialLogin]);

  return (
    <div className="container">
      <Header title="Dashboard">
        <Button variant="primary" className="w-[92vw] sm:w-auto">
          <ExternalLink size={16} className="me-2" />
          Integrations
        </Button>
      </Header>

      <div
        className={`grid grid-cols-[repeat(auto-fill,_minmax(8.6rem,_1fr))] items-center justify-items-center gap-4 text-center sm:grid-cols-[repeat(auto-fill,_minmax(12rem,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(13.719rem,_1fr))]`}
      >
        {dashboardRoutes.map((singleRoute, index) => (
          <DashboardPagesGridItem
            icon={
              <singleRoute.icon className=" h-[3.25rem] w-[3.25rem] md:h-[3.75rem] md:w-[3.75rem]" />
            }
            title={singleRoute.name}
            href={singleRoute.href}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
