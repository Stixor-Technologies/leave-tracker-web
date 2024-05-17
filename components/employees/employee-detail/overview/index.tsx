import React from "react";
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

const Overview = () => {
  const form = useForm({
    // defaultValues: addEmployeeDefaultValues,
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
      <div className="grid grid-cols-2 gap-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="h-full max-h-[80vh] overflow-y-auto px-6 pb-0 pt-[2.375rem] md:px-11"
          >
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
                          <SelectValue
                            placeholder={approvalFlow?.placeholder}
                          />
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
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{gender?.label}</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field?.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                        >
                          <SelectValue placeholder={gender?.placeholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {GENDERS?.map((gender, index) => (
                          <SelectItem key={index} value={gender?.value}>
                            {gender?.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={"probationEnd"}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>{probationEnd?.label}</FormLabel>

                      <FormControl>
                        <DatePicker
                          onSelect={field.onChange}
                          placeholder={probationEnd?.placeholder}
                          value={field?.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="directManagerId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{directManager?.label}</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field?.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                        >
                          <SelectValue
                            placeholder={directManager?.placeholder}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* TODO: Direct Manager list will be added later */}
                        {/* <SelectItem></SelectItem> */}
                        <div>Not Found</div>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-1.5">
                <Label>{seniorityYears?.label}</Label>

                <div className="flex items-start gap-4">
                  <FormField
                    control={form.control}
                    name={"seniorityYears"}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder={seniorityYears.placeholder}
                            type={seniorityYears.type}
                            inputMode="numeric"
                            maxLength={2}
                            {...field}
                            value={field?.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={"seniorityMonths"}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder={seniorityMonths.placeholder}
                            type={seniorityMonths.type}
                            maxLength={2}
                            inputMode="numeric"
                            {...field}
                            value={field?.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name={"contractEnd"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contractExpiryDate?.label}</FormLabel>

                    <FormControl>
                      <DatePicker
                        onSelect={field.onChange}
                        placeholder={contractExpiryDate?.placeholder}
                        value={field?.value}
                      />
                    </FormControl>
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
                        >
                          <SelectValue
                            placeholder={workSchedule?.placeholder}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* TODO: Work Schedule list will be added later */}
                        {/* <SelectItem></SelectItem> */}
                        <div>Not Found</div>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="sticky bottom-0 -mx-1 flex flex-col gap-4 bg-white py-3 sm:flex-row sm:items-center sm:gap-6 sm:py-[2.375rem]">
              <div className="flex items-center gap-2 sm:order-1">
                <Checkbox id="terms" />
                <FormLabel
                  htmlFor="terms"
                  className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Send Invite
                </FormLabel>
              </div>

              <Button
                disabled={isLoading}
                loading={isLoading}
                className="sm:order-0"
                variant="primary"
                size={"medium"}
                type="submit"
              >
                Add Employee
              </Button>
            </DialogFooter>
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
      </div>
    </TabsContent>
  );
};

export default Overview;
