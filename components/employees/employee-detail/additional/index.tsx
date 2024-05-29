import React, { Dispatch, SetStateAction, FC, useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import DatePicker from "@/components/employees/date-picker";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { employeeAdditonal } from "@/utils/forms/form-details";
import { GENDERS } from "@/utils/constants";
import { Label } from "@/components/ui/label";

type AdditionalProps = {
  employeeData: any;
};

const Additional: FC<AdditionalProps> = ({ employeeData }) => {
  const form = useForm();

  const [hiringDate, setHiringDate] = useState<Date | undefined>(undefined);
  const [contractEndDate, setContractEndDate] = useState<Date | undefined>(
    undefined,
  );
  const [probationEndDate, setProbationEndDate] = useState<Date | undefined>(
    undefined,
  );

  const {
    fields: {
      gender,
      directManager,
      hireDate,
      probationEnd,
      terminationDate,
      seniorityYears,
      seniorityMonths,
      employeeNumber,
      customNote,
    },
  } = employeeAdditonal;

  React.useEffect(() => {
    form.reset(employeeData);

    setHiringDate(new Date(employeeData?.hireDate ?? ""));
    setProbationEndDate(new Date(employeeData?.probationEnd ?? ""));
    setContractEndDate(new Date(employeeData?.contractEnd ?? ""));
  }, [employeeData]);

  const onSubmit = async (formValues: any) => {
    console.log(formValues);
  };

  const handleDateSelect =
    (
      field: ControllerRenderProps<any, any>,
      setState: Dispatch<SetStateAction<Date | undefined>>,
    ) =>
    (date: Date | undefined) => {
      field.onChange(date);
      setState(date);
    };

  // TODO: Need to change readOnly, applyDisabledStyles, disabled prop values when we will work Edit employee information story

  return (
    <TabsContent value="Additional">
      <p>{employeeData?.email || "asasa"}</p>
      {/* {employeeData && ( */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>{gender?.label}</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field?.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          applyDisabledStyles={false}
                          disabled
                          className={`${field?.value == undefined ? "text-placeholder" : "capitalize text-textColor"}`}
                        >
                          <SelectValue placeholder={gender.placeholder}>
                            {field?.value?.toLowerCase() ?? gender.placeholder}
                          </SelectValue>
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
                );
              }}
            />

            <FormField
              control={form.control}
              name="directManagerId"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>{directManager?.label}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field?.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          applyDisabledStyles={false}
                          disabled
                          className={`${field?.value == undefined ? "text-placeholder" : "capitalize text-textColor"}`}
                        >
                          <SelectValue placeholder={directManager.placeholder}>
                            {field?.value?.toLowerCase() ??
                              directManager.placeholder}
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* TODO: list will be added later */}
                        {/* <SelectItem></SelectItem> */}
                        <div>Not Found</div>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <fieldset className="sm:col-span-2">
              <legend className="font text-sm leading-[0.875rem] text-primary ">
                Job Experience
              </legend>
              <hr className=" mt-2 h-[1px] bg-stroke" />

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                <FormField
                  control={form.control}
                  name={"hireDate"}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>{hireDate?.label}</FormLabel>

                        <FormControl>
                          <DatePicker
                            onSelect={handleDateSelect(field, setHiringDate)}
                            placeholder={hireDate?.placeholder}
                            value={field?.value}
                            disabled={(date: Date) =>
                              date < new Date("1900-01-01") ||
                              (contractEndDate
                                ? date >= contractEndDate
                                : false) ||
                              (probationEndDate
                                ? date >= probationEndDate
                                : false)
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
                  name={"probationEnd"}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>{probationEnd?.label}</FormLabel>

                        <FormControl>
                          <DatePicker
                            onSelect={handleDateSelect(
                              field,
                              setProbationEndDate,
                            )}
                            placeholder={probationEnd?.placeholder}
                            value={field?.value}
                            disabled={(date: Date) =>
                              date < new Date("1900-01-01") ||
                              (hiringDate ? date <= hiringDate : false) ||
                              (contractEndDate ? date > contractEndDate : false)
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
                  name={"contractEnd"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{terminationDate?.label}</FormLabel>

                      <FormControl>
                        <DatePicker
                          onSelect={handleDateSelect(field, setContractEndDate)}
                          placeholder={terminationDate?.placeholder}
                          value={field?.value}
                          disabled={(date: Date) =>
                            date < new Date("1900-01-01") ||
                            (hiringDate ? date <= hiringDate : false) ||
                            (probationEndDate ? date < probationEndDate : false)
                          }
                        />
                      </FormControl>
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
                              readOnly
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
                              readOnly
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="sm:col-span-2">
              <legend className="font text-sm leading-[0.875rem] text-primary ">
                Custom fields
              </legend>
              <hr className=" mt-2 h-[1px] bg-stroke" />

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                <FormField
                  control={form.control}
                  name={"employeeNumber"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{employeeNumber?.label}</FormLabel>

                      <FormControl>
                        <Input
                          placeholder={employeeNumber.placeholder}
                          type={"string"}
                          {...field}
                          readOnly
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={"customNote"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{customNote?.label}</FormLabel>

                      <FormControl>
                        <Input
                          placeholder={customNote.placeholder}
                          type={"string"}
                          {...field}
                          readOnly
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
          </div>
        </form>
      </Form>
      {/* )} */}
    </TabsContent>
  );
};

export default Additional;
