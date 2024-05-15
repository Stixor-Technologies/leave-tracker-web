import React from "react";
import { NextPage } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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

const Employee: NextPage = () => {
  const tabs = [
    "Overview",
    "Additional",
    "Entitlement",
    "Requests",
    "Entitlement changes",
  ];

  return (
    <div>
      <div>
        <h5 className=" text-lightGray text-xs font-medium uppercase leading-[0.75rem]">
          Employee
        </h5>

        <div className="flex gap-5">
          <div className="divide-stroke w-[16.625rem] divide-y">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Button
                key={idx}
                className="relative z-10 h-auto w-full justify-start bg-transparent px-1 py-3"
              >
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={"/assets/images/sample-avater.png"} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <span className=" text-textColor text-sm leading-[0.875rem]">
                    Waseeq Aftab Mughal
                  </span>
                </div>
              </Button>
            ))}
          </div>

          <div className=" border-stroke flex-1 rounded-2xl border p-[1.375rem]">
            <div className="border-stroke flex items-center justify-between border-b py-[0.469rem]">
              <div className="flex gap-5">
                <h5>Waseeq Aftab Mughal</h5>

                <div className="flex items-center gap-8 text-primary">
                  <Mail />
                  <Archive />
                  <MailOpen />
                  <User />
                  <Lock />
                  <Settings />
                  <FileDiff />
                </div>
              </div>

              <Button
                variant={"primary"}
                className="gap-8 text-sm font-medium leading-[1.5rem]"
              >
                <span className="flex items-center gap-2">
                  <SquarePen className="h-4 w-4" />
                  Edit Profile
                </span>
              </Button>
            </div>

            <Tabs defaultValue="Overview" className="w-[400px]">
              <TabsList className=" divide-x-2 divide-green-500">
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
              <TabsContent value="Additional">
                Change your password here.
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
