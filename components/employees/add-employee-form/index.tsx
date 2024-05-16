import React, { Dispatch, FC } from "react";

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

type AddEmployeeProps = {
  setOpenEmployeeForm: Dispatch<React.SetStateAction<boolean>>;
};

const AddEmployee: FC<AddEmployeeProps> = ({ setOpenEmployeeForm }) => {
  const [addEmployee, { isLoading }] = useAddEmployeeMutation();

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
      <form onSubmit={form.handleSubmit(onSubmit)}>
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

          <div className="flex items-end gap-4">
            <FormField
              control={form.control}
              name={"seniorityYears"}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>{seniorityYears?.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={seniorityYears.placeholder}
                      type={seniorityMonths.type}
                      inputMode="numeric"
                      {...field}
                      value={field.value !== null ? field.value : ""}
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
                  <FormLabel>{seniorityMonths?.label}</FormLabel>

                  <FormControl>
                    <Input
                      placeholder={seniorityMonths.placeholder}
                      type={seniorityMonths.type}
                      inputMode="numeric"
                      {...field}
                      value={field.value !== null ? field.value : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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

        <div className="mt-4 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:gap-[1.5rem]">
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
        </div>
      </form>
    </Form>
  );
};

export default AddEmployee;
