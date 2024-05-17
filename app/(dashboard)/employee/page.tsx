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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EmployeeDetail from "@/components/employees/employee-detail";

const Employee: NextPage = () => {
  const tabs = [
    "Overview",
    "Additional",
    "Entitlement",
    "Requests",
    "Entitlement changes",
  ];

  return (
    <div className="container flex h-screen">
      <div className="w-full">
        <h5 className="text-xs font-medium uppercase leading-[0.75rem] text-lightGray">
          Employee
        </h5>

        <div className="flex h-full gap-5">
          <div className="w-[16.625rem] divide-y divide-stroke overflow-y-auto">
            {Array.from({ length: 25 }).map((_, idx) => (
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

          <div className="flex-1 self-start rounded-2xl border border-stroke p-[1.375rem]">
            <EmployeeDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
