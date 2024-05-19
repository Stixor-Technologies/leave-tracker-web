"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import AddEmployee from "../add-employee-form";
import { usePathname } from "next/navigation";

const EmployeeHeader = () => {
  const [openEmployeeForm, setOpenEmployeeForm] = useState<boolean>(false);
  const pathname = usePathname();

  const isEmployeeDetailPage = /^\/employees\/\d+$/.test(pathname);

  return (
    <Header title="Employee" navigate>
      {/* {!isEmployeeDetailPage && ( */}
      <Dialog open={openEmployeeForm} onOpenChange={setOpenEmployeeForm}>
        <DialogTrigger
          asChild
          className={`${isEmployeeDetailPage && "hidden md:block"}`}
        >
          <Button variant={"primary"} className="w-[92vw] sm:w-[12rem]">
            <CirclePlus className="mr-2" size={16} />
            Add New Employee
          </Button>
        </DialogTrigger>
        <DialogContent className=" w-[90%] max-w-[45rem] overflow-hidden p-0">
          <AddEmployee setOpenEmployeeForm={setOpenEmployeeForm} />
        </DialogContent>
      </Dialog>
      {/* )} */}
    </Header>
  );
};

export default EmployeeHeader;
