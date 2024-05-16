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
    <div className="container flex min-h-screen">
      <div className="w-full">
        <h5 className="text-xs font-medium uppercase leading-[0.75rem] text-lightGray">
          Employee
        </h5>

        <div className="flex h-full gap-5">
          <div className="w-[16.625rem] divide-y divide-stroke">
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

                  <span className=" text-sm leading-[0.875rem] text-textColor">
                    Waseeq Aftab Mughal
                  </span>
                </div>
              </Button>
            ))}
          </div>

          <div className=" flex-1 self-start rounded-2xl border border-stroke p-[1.375rem]">
            <div className="flex flex-col gap-4 border-b border-stroke py-[0.469rem] xl:flex-row xl:items-center xl:gap-9">
              <h5>Waseeq Aftab Mughal</h5>
              <div className="flex flex-1 justify-between">
                <div className="flex items-center gap-6 text-primary">
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
                  className="gap-8 text-sm font-medium leading-[1.5rem]"
                >
                  <span className="flex items-center gap-2">
                    <SquarePen className="h-4 w-4" />
                    Edit Profile
                  </span>
                </Button>
              </div>
            </div>

            <Tabs defaultValue="Overview" className="w-[400px]">
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
