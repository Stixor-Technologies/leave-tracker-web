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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { employeeOverview } from "@/utils/forms/form-details";

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
  const form = useForm({});

  useEffect(() => {
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
      role,
      workSchedule,
    },
  } = employeeOverview;

  const onSubmit = async (formValues: any) => {
    console.log(formValues);
  };

  // TODO: Need to change readOnly, applyDisabledStyles, disabled prop values when we will work Edit employee information story

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
                      <Input type={"string"} readOnly {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="approvalFlowId"
                render={({ field }) => {
                  console.log(field?.value);
                  return (
                    <FormItem>
                      <FormLabel>{approvalFlow?.label}</FormLabel>

                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger
                            applyDisabledStyles={false}
                            disabled
                            className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                          >
                            <SelectValue
                              placeholder={approvalFlow?.placeholder}
                            />
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
                  );
                }}
              />

              <FormField
                control={form.control}
                name={"teams"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{teams?.label}</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          applyDisabledStyles={false}
                          disabled
                          className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                        >
                          <SelectValue placeholder={teams?.placeholder} />
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
                name={"position"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{position?.label}</FormLabel>

                    <FormControl>
                      <Input type={email.type} readOnly {...field} />
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
                          applyDisabledStyles={false}
                          disabled
                          className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                        >
                          <SelectValue
                            placeholder={holidayCalender?.placeholder}
                          />
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
                          applyDisabledStyles={false}
                          disabled
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
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{role?.label}</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field?.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          applyDisabledStyles={false}
                          disabled
                          className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                        >
                          <SelectValue placeholder={role?.placeholder} />
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
                name="workScheduleId"
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
                          disabled
                          applyDisabledStyles={false}
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
