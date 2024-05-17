import React from "react";
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

const EmployeeDetail = () => {
  return (
    <>
      <div className="grid grid-cols-2 items-center gap-7 border-b border-stroke py-[0.469rem] xl:flex xl:gap-9">
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
          variant={"primary"}
          className="col-start-2 row-end-2 ml-auto max-w-[8.75rem] gap-8 text-sm font-medium leading-[1.5rem] "
        >
          <span className="flex items-center gap-2">
            <SquarePen className="h-4 w-4" />
            Edit Profile
          </span>
        </Button>
      </div>

      <Tabs defaultValue="Overview" className=" max-w-xl">
        <TabsList className="">
          {tabs?.map((tab, idx) => (
            <TabsTrigger key={idx} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
          {/* <TabsTrigger value="account">Account</TabsTrigger> */}
          {/* <TabsTrigger value="password">Password</TabsTrigger> */}
        </TabsList>
        <TabsContent value="Overview">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="Additional">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
};

export default EmployeeDetail;
