import React from "react";
import ApprovalFlowHeader from "@/components/approval-flow/approval-flow-header";
import { NextPage } from "next";
import ApprovalFlowTable from "@/components/approval-flow/approval-flow-table";

const ApprovalFlows: NextPage = () => {
  return (
    <div className="container">
      <ApprovalFlowHeader />
      <ApprovalFlowTable />
    </div>
  );
};

export default ApprovalFlows;
