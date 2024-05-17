import React, { Dispatch, FC, useState } from "react";

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
import { Checkbox } from "@/components/ui/checkbox";

import { Input } from "@/components/ui/input";
import { GENDERS } from "@/utils/constants";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { addEmployeeForm } from "@/utils/forms/form-details";
import DatePicker from "@/components/employees/date-picker";
import { Button } from "@/components/ui/button";
import { AddEmployeeFormDetail } from "@/utils/forms/interfaces";
import { addEmployeeDefaultValues } from "@/utils/forms/initial-values";
import { addEmployeeSchema } from "@/utils/forms/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddEmployeeMutation } from "@/redux/apis/auth-api";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";

type AddEmployeeProps = {
  setOpenEmployeeForm: Dispatch<React.SetStateAction<boolean>>;
};

const AddEmployee: FC<AddEmployeeProps> = ({ setOpenEmployeeForm }) => {
  const [addEmployee, { isLoading }] = useAddEmployeeMutation();

  const [hiringDate, setHiringDate] = useState<Date | undefined>(undefined);
  const [contractEndDate, setContractEndDate] = useState<Date | undefined>(
    undefined,
  );
  const [probationEndDate, setProbationEndDate] = useState<Date | undefined>(
    undefined,
  );

  const {
    fields: {
      firstName,
      lastName,
      email,
      hireDate,
      role,
      approvalFlow,
      holidayCalender,
      gender,
      probationEnd,
      directManager,
      seniorityYears,
      seniorityMonths,
      workSchedule,
      contractExpiryDate,
    },
  } = addEmployeeForm;

  const form = useForm({
    resolver: yupResolver(addEmployeeSchema),
    defaultValues: addEmployeeDefaultValues,
  });

  const onSubmit = async (formValues: AddEmployeeFormDetail) => {
    try {
      await addEmployee(formValues).unwrap();
      toast.success("Employee Added");
      setOpenEmployeeForm(false);
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-full max-h-[80vh] overflow-y-auto px-6 py-0  md:px-11"
        // pt-[2.375rem]
      >
        <DialogHeader />
        {/* Add Employee */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          <FormField
            control={form.control}
            name={"firstName"}
            render={({ field }) => (
              <FormItem>
                <FormLabel required>{firstName?.label}</FormLabel>

                <FormControl>
                  <Input
                    placeholder={firstName.placeholder}
                    type={firstName.type}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={"lastName"}
            render={({ field }) => (
              <FormItem>
                <FormLabel required>{lastName?.label}</FormLabel>

                <FormControl>
                  <Input
                    placeholder={lastName.placeholder}
                    type={lastName?.type}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel required>{email?.label}</FormLabel>

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
            name={"hireDate"}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>{hireDate?.label}</FormLabel>

                  <FormControl>
                    <DatePicker
                      onSelect={(date) => {
                        field.onChange(date);
                        setHiringDate(date);
                      }}
                      placeholder={probationEnd?.placeholder}
                      value={field?.value}
                      disabled={(date: Date) =>
                        date < new Date("1900-01-01") ||
                        (contractEndDate && date >= contractEndDate) ||
                        (probationEndDate && date >= probationEndDate)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{role?.label}</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                    >
                      <SelectValue placeholder={role?.placeholder} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* TODO: Role list will be added later */}
                    {/* <SelectItem value=""></SelectItem> */}

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
                      <SelectValue placeholder={holidayCalender?.placeholder} />
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
                      onSelect={(date) => {
                        field.onChange(date);
                        setProbationEndDate(date);
                      }}
                      placeholder={probationEnd?.placeholder}
                      value={field?.value}
                      disabled={(date: Date) =>
                        date < new Date("1900-01-01") ||
                        (hiringDate && date <= hiringDate) ||
                        (contractEndDate && date > contractEndDate)
                      }
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
                      <SelectValue placeholder={directManager?.placeholder} />
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
                    onSelect={(date) => {
                      field.onChange(date);
                      setContractEndDate(date);
                    }}
                    placeholder={contractExpiryDate?.placeholder}
                    value={field?.value}
                    disabled={(date: Date) =>
                      date < new Date("1900-01-01") ||
                      (hiringDate && date <= hiringDate) ||
                      (probationEndDate && date < probationEndDate)
                    }
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
                      <SelectValue placeholder={workSchedule?.placeholder} />
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
  );
};

export default AddEmployee;
