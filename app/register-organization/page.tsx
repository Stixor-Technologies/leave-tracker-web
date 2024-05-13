"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import AuthenticationPageTemplate from "@/components/authentication-page-template";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { orgSizeOptions, countries } from "@/utils/constants";

export interface OrganizatonFormDetail {
  organizationName: string;
  organizationSize: string;
  country: string;
  timeZone: string;
}

export const organizationSchema = Yup.object().shape({
  organizationName: Yup.string().required(`Organization name is required`),
  organizationSize: Yup.string().required("Organization Size is required"),
  country: Yup.string().required("Organization Size is required"),
  timeZone: Yup.string().required("Organization Size is required"),
});

const SignUp: NextPage = () => {
  // const {
  //   fields: { email, password, confirmPassword },
  // } = signUpForm;

  const [countryPopover, setCountryPopover] = useState(false);
  const [timeZonePopover, settimeZonePopover] = useState(false);

  const form = useForm({
    resolver: yupResolver(organizationSchema),
    defaultValues: {
      organizationName: "",
      organizationSize: "",
      country: "",
      timeZone: "",
    },
  });

  const onSubmit = (values: OrganizatonFormDetail) => {
    console.log(values);
  };

  return (
    <AuthenticationPageTemplate className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name={"organizationName"}
            render={({ field }) => (
              <FormItem>
                {/* <Label htmlFor={"organizationName"} required={true}>
                  Name
                </Label> */}

                <FormLabel required>Name</FormLabel>

                <FormControl>
                  <Input
                    placeholder={"Organization Name"}
                    // type={}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="organizationSize"
            render={({ field }) => (
              <FormItem>
                {/* <Label htmlFor={"organizationSize"} required={true}>
                  Organization Size
                </Label> */}
                <FormLabel required> Organization Size</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={`${field?.value === "" ? "text-placeholder" : "text-text-color"}`}
                    >
                      <SelectValue placeholder="select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {orgSizeOptions?.map((orgSizes, index) => (
                      <SelectItem key={index} value={orgSizes?.value}>
                        {orgSizes?.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-6 sm:flex-row">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => {
                console.log(field);
                return (
                  <FormItem className="flex flex-1 flex-col">
                    {/* <Label htmlFor={"country"} required={true}>
                      Country
                    </Label> */}

                    <FormLabel required>Country</FormLabel>

                    <Popover
                      open={countryPopover}
                      onOpenChange={setCountryPopover}
                    >
                      <PopoverTrigger asChild>
                        <Button
                          variant="popover"
                          className={`${field?.value === "" ? "text-placeholder" : "text-textColor"}`}
                          role="combobox"
                        >
                          {field?.value
                            ? countries?.find(
                                (country) => country?.value === field?.value,
                              )?.label
                            : "select"}
                          <ChevronDown
                            className={`h-4 w-4 text-placeholder ${countryPopover && "rotate-180"} transition-transform duration-200
                            `}
                          />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <Command>
                          <CommandInput placeholder="Search country..." />
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup>
                            <CommandList>
                              {countries?.map((country) => (
                                <CommandItem
                                  key={country?.value}
                                  value={country?.value}
                                  onSelect={() => {
                                    form.setValue("country", country?.value);
                                    setCountryPopover(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      field?.value === country?.value
                                        ? "opacity-100"
                                        : "opacity-0",
                                    )}
                                  />
                                  {country?.label}
                                </CommandItem>
                              ))}
                            </CommandList>
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="timeZone"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col">
                  <Label htmlFor={"timeZone"} required={true}>
                    TimeZone
                  </Label>

                  <Popover
                    open={timeZonePopover}
                    onOpenChange={settimeZonePopover}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="popover"
                        className={`${field?.value === "" ? "text-placeholder" : "text-textColor"}`}
                        role="combobox"
                        // aria-expanded={open}
                      >
                        {field?.value
                          ? countries?.find(
                              (zone) => zone?.value === field?.value,
                            )?.label
                          : "select"}
                        <ChevronDown
                          className={`h-4 w-4 text-placeholder ${timeZonePopover && "rotate-180"} transition-transform duration-200`}
                        />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput placeholder="Search timezone..." />
                        <CommandEmpty>No timezone found.</CommandEmpty>
                        <CommandGroup>
                          <CommandList>
                            {countries?.map((zone) => (
                              <CommandItem
                                key={zone?.value}
                                value={zone?.value}
                                onSelect={() => {
                                  form.setValue("timeZone", zone?.value);
                                  settimeZonePopover(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    field?.value === zone?.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                                {zone?.label}
                              </CommandItem>
                            ))}
                          </CommandList>
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            className="mt-3.5"
            variant="primary"
            size={"medium"}
            type="submit"
          >
            Create Organization
          </Button>
        </form>
      </Form>
    </AuthenticationPageTemplate>
  );
};

export default SignUp;
