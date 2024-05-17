"use client";

import React, { FC, ReactNode, useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Additional from "./additional";
import Overview from "./overview";
import Entitlement from "./entitlement";
import Requests from "./requests";
import EntitlementChanges from "./entitlement-changes";

type EmployeeDetailProp = {
  children?: ReactNode;
  activeEmployeeId: number;
};

const EmployeeDetail: FC<EmployeeDetailProp> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [activateFields, setActivateFields] = useState<boolean>(false);

  console.log(activateFields);

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

  return (
    <>
      <div className="grid grid-cols-2 items-center gap-5 border-b border-stroke pb-[0.469rem] xl:flex xl:gap-9">
        <h5>Waseeq Aftab Mughal</h5>
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

      <Tabs
        // defaultValue="Overview"
        value={activeTab}
        onValueChange={onTabChange}
        className="mt-5 w-full"
      >
        <TabsList className="">
          {tabs?.map((tab, idx) => (
            <TabsTrigger key={idx} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* {children} */}

        <Overview activateFields={activateFields} />
        <Additional />
        <Entitlement />
        <Requests />
        <EntitlementChanges />
      </Tabs>
    </>
  );
};

export default EmployeeDetail;
