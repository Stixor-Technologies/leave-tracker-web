import React, { FC } from "react";
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

type OverviewProps = {
  activateFields: boolean;
};

const Overview: FC<OverviewProps> = ({ activateFields }) => {
  const form = useForm({
    defaultValues: {
      email: "fawad.mehmood11@gmail.com",
    },
  });

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
    <TabsContent value="Overview">
      {/* <div className="grid grid-cols-2 gap-6"> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            <FormField
              control={form.control}
              name={"email"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>{"Email"}</FormLabel>

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
              name={"approvalFlow"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>{approvalFlow?.label}</FormLabel>

                  <FormControl>
                    <Input type={approvalFlow?.type} {...field} />
                  </FormControl>
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
                      {/* TODO: Role list will be added later */}
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
              name="approvalFlowId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{approvalFlow?.label}</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field?.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                      >
                        <SelectValue placeholder={approvalFlow?.placeholder} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* TODO: Approval Flows will be added later */}
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
              name="holidayCalender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{holidayCalender?.label}</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field?.value}
                  >
                    <FormControl>
                      <SelectTrigger
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
              name="holidayCalender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{holidayCalender?.label}</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field?.value}
                  >
                    <FormControl>
                      <SelectTrigger
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
              name={"contractType"}
              render={({ field }) => {
                return (
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
                          // placeholder={holidayCalender?.placeholder}
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
                );
              }}
            />

            <FormField
              control={form.control}
              name={"userRole"}
              render={({ field }) => {
                return (
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
                          <SelectValue
                          // placeholder={userRole?.placeholder}
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
                );
              }}
            />
          </div>
        </form>
      </Form>

      {/* <InfoBlock value="Fawad.mehmood@stixor.com">
          <Label>Email </Label>
        </InfoBlock>

        <InfoBlock value="Basic Approval Flow">
          <Label>Approval Flow</Label>
        </InfoBlock>

        <InfoBlock value="-">
          <Label>Teams</Label>
        </InfoBlock>

        <InfoBlock value="-">
          <Label>Position</Label>
        </InfoBlock>

        <InfoBlock value="Default">
          <Label>Holiday Calender</Label>
        </InfoBlock>

        <InfoBlock value="-">
          <Label>Contract Type</Label>
        </InfoBlock>

        <InfoBlock value="Regular Employee">
          <Label>User Role</Label>
        </InfoBlock>

        <InfoBlock textInfo={false}>
          <Label>Integrated with</Label>
        </InfoBlock>

        <InfoBlock value="Daily Meetings">
          <Label>Work Schedule</Label>
        </InfoBlock> */}
      {/* </div> */}
    </TabsContent>
  );
};

export default Overview;
