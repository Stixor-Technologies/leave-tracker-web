"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useEmployeeListQuery } from "@/redux/apis/auth-api";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import AddEmployee from "../add-employee-form";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";

const EmployeeList = () => {
  const { data, isLoading } = useEmployeeListQuery();

  const pathname = usePathname();
  const employeeNumber = parseInt(pathname.split("/")[2]);

  return (
    <>
      <div className="top-0 mt-2 flex w-full max-w-xl md:absolute">
        <Input placeholder="Search" className="flex-1" />
        <Button variant={"primary"}>Filter</Button>
      </div>
      <div className="flex h-full flex-col overflow-y-auto md:w-[17.813rem]">
        {data?.map((employee, idx) => {
          return (
            <Link
              href={`/employees/${employee?.id}`}
              key={employee?.id}
              className={`flex items-center`}
            >
              <div
                className={`relative flex h-auto w-full items-center justify-between border-b border-stroke px-1 py-3 ${employee?.id === employeeNumber ? "rounded-md bg-primary text-white" : "bg-transparent text-textColor"}`}
              >
                <div className=" flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={"/assets/images/sample-avater.png"} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <span className="text-left text-sm leading-[0.875rem]">
                    {` ${employee?.firstName || ""} ${employee?.lastName || ""} `}
                  </span>
                </div>
              </div>
              <span
                className={`relative right-1 h-5 w-5 -rotate-[0deg] rounded-br-[3rem] bg-primary [clip-path:polygon(0%_0,100%_50%,0_100%)]  ${employee?.id !== employeeNumber && "invisible opacity-0"}`}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default EmployeeList;
