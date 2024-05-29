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
import DatePicker from "@/components/employees/date-picker";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { employeeAdditonal } from "@/utils/forms/form-details";
import { GENDERS } from "@/utils/constants";
import { Label } from "@/components/ui/label";

type AdditionalProps = {
  employeeData: any;
};

const Additional: FC<AdditionalProps> = ({ employeeData }) => {
  const form = useForm({
    // defaultValues: {
    //   gender: employeeData?.gender,
    // },
  });

  console.log(employeeData);

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
  }, [employeeData]);

  const onSubmit = async (formValues: any) => {
    console.log(formValues);
  };

  // TODO: Need to change readOnly, applyDisabledStyles, disabled prop values when we will work Edit employee information story

  return (
    <TabsContent value="Additional">
      <p>{employeeData?.email || "asasa"}</p>
      {employeeData && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => {
                  // console.log(field?.value);
                  return (
                    <FormItem>
                      <FormLabel>{gender?.label}</FormLabel>

                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field?.value}

                        // defaultValue={employeeData?.gender}
                      >
                        <FormControl>
                          <SelectTrigger
                            applyDisabledStyles={false}
                            disabled
                            className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                          >
                            <SelectValue placeholder={gender.placeholder} />
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
                  // console.log(field?.value);
                  return (
                    <FormItem>
                      <FormLabel>{directManager?.label}</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        // defaultValue={employeeData?.gender}
                      >
                        <FormControl>
                          <SelectTrigger
                            applyDisabledStyles={false}
                            disabled
                            className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                          >
                            <SelectValue
                              placeholder={directManager.placeholder}
                            />
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
                              onSelect={field.onChange}
                              placeholder={hireDate?.placeholder}
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
                    name={"terminationDate"}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{terminationDate?.label}</FormLabel>

                        <FormControl>
                          <DatePicker
                            onSelect={field.onChange}
                            placeholder={terminationDate?.placeholder}
                            value={employeeData?.updatedAt}
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
      )}
    </TabsContent>
  );
};

export default Additional;
