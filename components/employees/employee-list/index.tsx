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

const EmployeeList = () => {
  const { data, isLoading } = useEmployeeListQuery();
  const [activeEmployeeId, setActiveEmployeeId] = useState<number>(1);
  const [openEmployeeForm, setOpenEmployeeForm] = useState<boolean>(false);
  console.log(data);

  return (
    // flex h-full gap-5

    // <div className="">

    <>
      <div className="top-0 mt-2 flex w-full max-w-xl md:absolute">
        <Input placeholder="Search" className="flex-1" />
        <Button variant={"primary"}>Filter</Button>
      </div>
      <div className="flex h-full flex-col divide-y divide-stroke overflow-y-auto md:w-[16.625rem]">
        {/* <Dialog open={openEmployeeForm} onOpenChange={setOpenEmployeeForm}>
          <DialogTrigger asChild>
            <Button variant={"primary"} className="w-[92vw] sm:w-[12rem]">
              <CirclePlus className="mr-2" size={16} />
              Add New Employee
            </Button>
          </DialogTrigger>
          <DialogContent className=" w-[90%] max-w-[45rem] overflow-hidden p-0">
            <AddEmployee setOpenEmployeeForm={setOpenEmployeeForm} />
          </DialogContent>
        </Dialog> */}

        {/* {Array.from({ length: 25 }).map((_, idx) => ( */}
        {data?.map((employee, idx) => {
          return (
            <Link
              href={`/employees/${employee?.id}`}
              key={employee?.id}
              className=" h-auto w-full justify-start bg-transparent px-1 py-3"
              //   onClick={() => {
              //     setActiveEmployeeId(employee?.id);
              //   }}
            >
              {/* {employee?.id} */}
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={"/assets/images/sample-avater.png"} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <span className="text-left text-sm leading-[0.875rem] text-textColor">
                  {` ${employee?.firstName || ""} ${employee?.lastName || ""} `}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
    // </div>
  );
};

export default EmployeeList;
