"use client";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { addEmployeeForm } from "@/utils/forms/form-details";

const Employees: NextPage = () => {
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
      seniority,
      workSchedule,
      contractExpiryDate,
    },
  } = addEmployeeForm;

  const form = useForm({
    // resolver: yupResolver(),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      hireDate: "",
      role: "",
      approvalFlow: "",
      holidayCalender: "",
      gender: "",
      probationEnd: "",
      directManager: "",
      seniority: "",
      workSchedule: "",
      contractExpiryDate: "",
    },
  });

  const onSubmit = async (values: any) => {};

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant={"primary"}>Add New Employee</Button>
        </DialogTrigger>
        <DialogContent className=" max-w-[45rem] px-11">
          {/* <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader> */}

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              // className="flex flex-col flex-wrap gap-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name={"firstName"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{firstName?.label}</FormLabel>

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
                      <FormLabel>{lastName?.label}</FormLabel>

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
                    <FormItem className="col-span-2">
                      <FormLabel>{email?.label}</FormLabel>

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
                    console.log(field);
                    return (
                      <FormItem>
                        <FormLabel>{hireDate?.label}</FormLabel>

                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"primary"}
                                  className={`font-normal", w-[240px] pl-3 text-left
                                ${!field.value} && "text-muted-foreground",
                              `}
                                >
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />

                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={new Date(field.value)}
                                onSelect={field.onChange}
                                // defaultMonth={field?.value}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>

              <Button
                // disabled={isLoading}
                // loading={isLoading}
                className="mb-[1.875rem] mt-[0.625rem] "
                variant="primary"
                size={"medium"}
                type="submit"
              >
                Add Employee
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Employees;
