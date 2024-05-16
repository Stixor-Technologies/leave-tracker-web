"use client";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddEmployee from "@/components/employees/add-employee-form";

const Employees: NextPage = () => {
  const [openEmployeeForm, setOpenEmployeeForm] = useState<boolean>(false);

  return (
    <div>
      <Dialog open={openEmployeeForm} onOpenChange={setOpenEmployeeForm}>
        <DialogTrigger>
          <Button variant={"primary"}>Add New Employee</Button>
        </DialogTrigger>
        <DialogContent className="w-[90%] max-w-[45rem] px-5 md:w-full md:px-11 md:py-[2.375rem]">
          <AddEmployee setOpenEmployeeForm={setOpenEmployeeForm} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Employees;
