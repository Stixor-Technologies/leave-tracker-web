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
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { employeeAdditonal } from "@/utils/forms/form-details";
import { GENDERS } from "@/utils/constants";

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
    },
  } = employeeAdditonal;

  React.useEffect(() => {
    form.reset({
      gender: employeeData?.gender,
    });
  }, [employeeData]);

  const onSubmit = async (formValues: any) => {
    console.log(formValues);
  };

  return (
    <TabsContent value="Additional">
      <p>{employeeData?.email || "asasa"}</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{gender?.label}</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={employeeData?.gender}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={`${field?.value === undefined ? "text-placeholder" : "text-textColor"}`}
                      >
                        <SelectValue />
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
          </div>
        </form>
      </Form>
    </TabsContent>
  );
};

export default Additional;
