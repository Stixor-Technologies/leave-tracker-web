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
      <Header
        title="Dashboard"
        layout="column"
        innerClassName="self-center sm:self-end"
        className="pb-3"
      >
        <Button variant="primary" className="w-[91vw] sm:w-auto">
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
              index !== 1 ? (
                <singleRoute.icon className="h-[3.25rem] w-[3.25rem] md:h-[3.75rem] md:w-[3.75rem]" />
              ) : (
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  className="h-[3.25rem] w-[3.25rem] hover:text-primaryDark md:h-[3.75rem] md:w-[3.75rem]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.5 52.5V47.5C42.5 44.8478 41.4464 42.3043 39.5711 40.4289C37.6957 38.5536 35.1522 37.5 32.5 37.5H17.5C14.8478 37.5 12.3043 38.5536 10.4289 40.4289C8.55357 42.3043 7.5 44.8478 7.5 47.5V52.5"
                    className="transition-all duration-300 group-hover:stroke-primaryDark"
                    stroke="#754BDD"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 27.5C30.5228 27.5 35 23.0228 35 17.5C35 11.9772 30.5228 7.5 25 7.5C19.4772 7.5 15 11.9772 15 17.5C15 23.0228 19.4772 27.5 25 27.5Z"
                    className="transition-all duration-300 group-hover:stroke-primaryDark"
                    stroke="#754BDD"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M55 17.5L45 27.5L55 37.5"
                    className="transition-all duration-300 group-hover:stroke-primaryDark"
                    stroke="#754BDD"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              )
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
