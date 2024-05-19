"use client";
import React, { FC, useState } from "react";
import {
  Archive,
  Mail,
  MailOpen,
  FileDiff,
  User,
  Lock,
  Settings,
  SquarePen,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Overview from "@/components/employees/employee-detail/overview";
import Additional from "@/components/employees/employee-detail/additional";
import Entitlement from "@/components/employees/employee-detail/entitlement";
import Requests from "@/components/employees/employee-detail/requests";
import EntitlementChanges from "@/components/employees/employee-detail/entitlement-changes";
import { useGetEmployeeDetailQuery } from "@/redux/apis/auth-api";

type EmployeeDetailProps = {
  params: {
    id: string;
  };
};

const EmployeeDetail: FC<EmployeeDetailProps> = ({ params: { id } }) => {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [activateFields, setActivateFields] = useState<boolean>(false);

  const { data, isLoading } = useGetEmployeeDetailQuery(id, {
    skip: !id,
  });

  const tabs = [
    "Overview",
    "Additional",
    "Entitlement",
    "Requests",
    "Entitlement changes",
  ];

  const onTabChange = (value: string) => {
    setActiveTab(value);
  };

  //   self-start
  return (
    <div className="relative flex-1 overflow-y-scroll rounded-2xl border border-stroke px-[1.375rem] py-0">
      <div className="sticky top-0 z-40 grid grid-cols-2 items-center gap-5 border-b border-stroke bg-white pb-2.5 pt-5 xl:flex xl:gap-9">
        <h5 className="w-full max-w-[7.5rem] ">{data?.firstName}</h5>
        <div className="col-span-2 flex items-center justify-between gap-6 text-primary">
          <Mail />
          <Archive />
          <MailOpen />
          <User />
          <Lock />
          <Settings />
          <FileDiff />
        </div>

        <Button
          onClick={() => {
            activateFields;
          }}
          variant={"primary"}
          className="col-start-2 row-end-2 ml-auto max-w-[8.75rem] gap-8 text-sm font-medium leading-[1.5rem] "
        >
          <span className="flex items-center gap-2">
            <SquarePen className="h-4 w-4" />
            Edit Profile
          </span>
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={onTabChange} className="mt-5">
        <div className=" w-full max-w-[566px] overflow-x-auto">
          <TabsList className="">
            {tabs?.map((tab, idx) => (
              <TabsTrigger key={idx} value={tab} className="flex-1">
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <Overview
          loading={isLoading}
          employeeData={data}
          activateFields={activateFields}
        />
        <Additional employeeData={data} />
        <Entitlement />
        <Requests />
        <EntitlementChanges />
      </Tabs>
    </div>
  );
};

export default EmployeeDetail;
