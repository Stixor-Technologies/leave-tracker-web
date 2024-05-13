"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import AuthenticationPageTemplate from "@/components/authentication-page-template";
import { Input } from "@/components/ui/input";
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
import { ORG_SIZE_OPTIONS, COUNTRIES, TIMEZONES } from "@/utils/constants";
import { organizationDefaultValues } from "@/utils/forms/initial-values";
import { OrganizationFormDetail } from "@/utils/forms/interfaces";
import { organizationSchema } from "@/utils/forms/validations";
import { useCreateOrganizationMutation } from "@/redux/apis/auth-api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/constants";

const SignUp: NextPage = () => {
  const router = useRouter();
  const [countryPopover, setCountryPopover] = useState(false);
  const [timeZonePopover, settimeZonePopover] = useState(false);

  const [createOrganization, { isLoading }] = useCreateOrganizationMutation();

  const form = useForm({
    resolver: yupResolver(organizationSchema),
    defaultValues: organizationDefaultValues,
  });

  const onSubmit = async (formValues: OrganizationFormDetail) => {
    console.log(formValues);

    try {
      const res = await createOrganization(formValues).unwrap();
      if (res?.data) {
        toast.success(res?.message);
        form.reset();
        setTimeout(() => {
          router.replace(ROUTES.DASHBOARD);
        }, 500);
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
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
            name={"name"}
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Organization name</FormLabel>

                <FormControl>
                  <Input placeholder={"name"} type={"string"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
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
                    {ORG_SIZE_OPTIONS?.map((orgSizes, index) => (
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
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col">
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
                          ? COUNTRIES?.find(
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
                            {COUNTRIES?.map((country) => (
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
              )}
            />

            <FormField
              control={form.control}
              name="timeZone"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col">
                  <FormLabel required>TimeZone</FormLabel>

                  <Popover
                    open={timeZonePopover}
                    onOpenChange={settimeZonePopover}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="popover"
                        className={`${field?.value === "" ? "text-placeholder" : "text-textColor"}`}
                        role="combobox"
                      >
                        {field?.value
                          ? TIMEZONES?.find(
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
                            {TIMEZONES?.map((zone) => (
                              <CommandItem
                                key={zone?.value}
                                value={zone?.label}
                                onSelect={() => {
                                  console.log(zone?.value);
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
            loading={isLoading}
            disabled={isLoading}
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