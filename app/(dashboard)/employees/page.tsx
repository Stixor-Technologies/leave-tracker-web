"use client";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddEmployee from "@/components/employees/add-employee-form";
import Header from "@/components/ui/header";
import { CirclePlus } from "lucide-react";

const Employees: NextPage = () => {
  const [openEmployeeForm, setOpenEmployeeForm] = useState<boolean>(false);

  return (
    <div className="container">
      <Header title="Employee" navigate>
        <Dialog open={openEmployeeForm} onOpenChange={setOpenEmployeeForm}>
          <DialogTrigger asChild>
            <Button variant={"primary"} className="w-full sm:w-[12rem]">
              <CirclePlus className="mr-2" size={16} />
              Add New Employee
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%] max-w-[45rem] px-5 md:w-full md:px-11 md:py-[2.375rem]">
            <AddEmployee setOpenEmployeeForm={setOpenEmployeeForm} />
          </DialogContent>
        </Dialog>
      </Header>
    </div>
  );
};

export default Employees;
