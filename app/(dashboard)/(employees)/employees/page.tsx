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
import Overview from "@/components/employees/employee-detail/overview";
import Additional from "@/components/employees/employee-detail/additional";
import EntitlementChanges from "@/components/employees/employee-detail/entitlement-changes";
import Entitlement from "@/components/employees/employee-detail/entitlement";
import Requests from "@/components/employees/employee-detail/requests";
import EmployeeList from "@/components/employees/employee-list";
// import Entitlement from "../entitlement/page";
// import Requests from "../requests/page";

const Employees: NextPage = () => {
  // const { data, isLoading } = useEmployeeListQuery();
  // console.log(data);
  const [openEmployeeForm, setOpenEmployeeForm] = useState<boolean>(false);
  const [activeEmployeeId, setActiveEmployeeId] = useState<number>(1);

  return (
    <div className="block w-full flex-1 overflow-hidden  md:hidden">
      <h5 className="text-xs font-medium uppercase leading-[0.75rem] text-black">
        Employee
      </h5>

      {/* <div className="flex h-full gap-5"> */}
      {/* <div className="flex-1 self-start rounded-2xl border border-stroke px-[1.375rem] py-3">
          <EmployeeDetail activeEmployeeId={activeEmployeeId} />
        </div> */}
      <EmployeeList />
      {/* <div className="block w-full lg:hidden"><EmployeeList /></div> */}
    </div>
    // </div>
  );
};

export default Employees;
