"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddEmployee from "@/components/employees/add-employee-form";
import Header from "@/components/ui/header";
import { CirclePlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EmployeeDetail from "@/components/employees/employee-detail";
import { useEmployeeListQuery } from "@/redux/apis/auth-api";

const Employees: NextPage = () => {
  const { data, isLoading } = useEmployeeListQuery();

  console.log(data);
  const [openEmployeeForm, setOpenEmployeeForm] = useState<boolean>(false);

  return (
    //   <Header title="Employee" navigate>
    //   <Dialog open={openEmployeeForm} onOpenChange={setOpenEmployeeForm}>
    //     <DialogTrigger asChild>
    //       <Button variant={"primary"} className="w-[92vw] sm:w-[12rem]">
    //         <CirclePlus className="mr-2" size={16} />
    //         Add New Employee
    //       </Button>
    //     </DialogTrigger>
    //     <DialogContent className=" w-[90%] max-w-[45rem] overflow-hidden p-0">
    //       <AddEmployee setOpenEmployeeForm={setOpenEmployeeForm} />
    //     </DialogContent>
    //   </Dialog>
    // </Header>

    <div className="container flex h-screen flex-col">
      <Header title="Employee" navigate>
        <Dialog open={openEmployeeForm} onOpenChange={setOpenEmployeeForm}>
          <DialogTrigger asChild>
            <Button variant={"primary"} className="w-[92vw] sm:w-[12rem]">
              <CirclePlus className="mr-2" size={16} />
              Add New Employee
            </Button>
          </DialogTrigger>
          <DialogContent className=" w-[90%] max-w-[45rem] overflow-hidden p-0">
            <AddEmployee setOpenEmployeeForm={setOpenEmployeeForm} />
          </DialogContent>
        </Dialog>
      </Header>

      <div className="w-full flex-1 overflow-hidden">
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

                  <span className="text-left text-sm leading-[0.875rem] text-textColor">
                    Waseeq Aftab Mughal
                  </span>
                </div>
              </Button>
            ))}
          </div>

          <div className="flex-1 self-start rounded-2xl border border-stroke px-[1.375rem] py-3">
            <EmployeeDetail />
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default Employees;
