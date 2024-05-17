"use client";
import React, { useState } from "react";
import Header from "../ui/header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const ApprovalFlowHeader = () => {
  const [selectedOption, setSelectedOption] = useState("Approval flows");
  const headerOptions = ["Employee", "Dummy", "Approval flows"];

  return (
    <Header title="Approval flows" layout="row" navigate className="pt-0">
      <Select
        onValueChange={(value) => setSelectedOption(value)}
        defaultValue={selectedOption}
      >
        <SelectTrigger className="flex h-10 w-[8.5rem] items-center border-0 bg-white p-0 pt-0 text-sm font-medium text-textColor focus:ring-transparent md:w-[10.5rem] md:px-3 md:pb-3 lg:px-4">
          <span className="flex items-center justify-center text-base font-medium text-textColor">
            {selectedOption}
          </span>
        </SelectTrigger>

        <SelectContent>
          {headerOptions?.map(
            (option: string, index: number) =>
              option !== selectedOption && (
                <SelectItem value={option} key={index}>
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-textColor">
                    {option}
                  </div>
                </SelectItem>
              ),
          )}
        </SelectContent>
      </Select>
    </Header>
  );
};

export default ApprovalFlowHeader;
