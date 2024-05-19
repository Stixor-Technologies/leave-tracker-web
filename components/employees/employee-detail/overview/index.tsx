import React, { FC, useEffect } from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import InfoBlock from "../../info-block";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { employeeOverview } from "@/utils/forms/form-details";
import { AddEmployeeFormDetail } from "@/utils/forms/interfaces";

type OverviewProps = {
  loading: boolean;
  activateFields: boolean;
  employeeData: any;
};

const Overview: FC<OverviewProps> = ({
  activateFields,
  employeeData,
  loading,
}) => {
  // console.log("employeeData", employeeData?.data?.user?.email);

  const form = useForm({
    // defaultValues: {
    //   // email: "employeeData?.data?.user?.email",
    //   // approvalFlowId: undefined,
    //   // role: undefined,
    //   // holidayCalender: undefined,
    //   // workScheduleId: undefined,
    // },
  });

  // console.log("isLoading", loading);

  useEffect(() => {
    // reset form with user data
    // console.log("Reset form");
    form.reset({
      email: employeeData?.email,
    });
  }, [employeeData]);

  const {
    fields: {
      email,
      approvalFlow,
      teams,
      position,
      holidayCalender,
      contractType,
      userRole,
      workSchedule,
    },
  } = employeeOverview;

  const onSubmit = async (formValues: any) => {
    console.log(formValues);
  };

  return (
    <>
      <TabsContent value="Overview">
        <p>{employeeData?.email || "asasa"}</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              <FormField
                control={form.control}
                name={"email"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{"Email"}</FormLabel>

                    <FormControl>
                      <Input
                        // placeholder={firstName.placeholder}
                        type={"string"}
                        disabled={!activateFields}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="approvalFlowId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{approvalFlow?.label}</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                        >
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* TODO: ApprovalFlow will be added later */}
                        {/* <SelectItem></SelectItem> */}
                        <div>Not Found</div>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={"teams"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>{teams?.label}</FormLabel>

                    <FormControl>
                      <Input
                        placeholder={email?.placeholder}
                        type={email.type}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={"position"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>{position?.label}</FormLabel>

                    <FormControl>
                      <Input type={email.type} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="holidayCalender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{holidayCalender?.label}</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                        >
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* TODO: Holiday Calender will be added later */}
                        {/* <SelectItem></SelectItem> */}
                        <div>Not Found</div>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contractType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contractType?.label}</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field?.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                        >
                          <SelectValue
                            placeholder={contractType?.placeholder}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* TODO: Contract Type will be added later */}
                        {/* <SelectItem></SelectItem> */}
                        <div>Not Found</div>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{userRole?.label}</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field?.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                        >
                          <SelectValue placeholder={userRole?.placeholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* TODO: User Role will be added later */}
                        {/* <SelectItem></SelectItem> */}
                        <div>Not Found</div>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="workSchedule"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{workSchedule?.label}</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field?.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                        >
                          <SelectValue
                            placeholder={workSchedule?.placeholder}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* TODO: Work Schedule will be added later */}
                        {/* <SelectItem></SelectItem> */}
                        <div>Not Found</div>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </TabsContent>
    </>
  );
};

export default Overview;
