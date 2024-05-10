"use client";

import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import React from "react";
import FormPageTemplate from "@/components/authentication-page-template";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
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
  CommandShortcut,
  CommandSeparator,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Check, ChevronsUpDown } from "lucide-react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { orgSizeOptions, countries } from "@/constants";

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

  const [countryPopover, setCountryPopover] = React.useState(false);
  const [country, setCountry] = React.useState("");

  const [timeZonePopover, settimeZonePopover] = React.useState(false);
  const [timeZone, settimeZone] = React.useState("");

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

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

  const handelClick = () => {
    console.log("clicked");
  };

  return (
    <FormPageTemplate>
      <Button
        className="mb-[1.9rem] mt-[0.625rem] w-full sm:w-[15rem]"
        variant="default"
        onClick={handelClick}
      >
        Create Organization
      </Button>
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
                <Label htmlFor={"organizationName"} required={true}>
                  Name
                </Label>

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
                <Label htmlFor={"organizationName"} required={true}>
                  Organization Size
                </Label>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        className=" !text-red-700"
                        placeholder="Select"
                      />
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

          <div className="flex">
            <FormField
              control={form.control}
              name="timeZone"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col">
                  <Label htmlFor={"country"} required={true}>
                    Country
                  </Label>

                  <Popover
                    open={countryPopover}
                    onOpenChange={setCountryPopover}
                  >
                    <PopoverTrigger asChild>
                      <Button role="combobox" aria-expanded={open}>
                        {country
                          ? countries?.find((con) => con?.value === country)
                              ?.label
                          : "Select framework..."}
                        <ChevronDown className="h-4 w-4 text-placeholder" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="!w-full p-0"
                      // side="left"
                      // align="start"
                    >
                      <Command>
                        <CommandInput placeholder="Select" />
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup>
                          <CommandList>
                            {countries?.map((con) => (
                              <CommandItem
                                key={con?.value}
                                value={con?.value}
                                onSelect={(currentValue) => {
                                  setCountry(
                                    currentValue === country
                                      ? ""
                                      : currentValue,
                                  );
                                  setCountryPopover(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    country === con?.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                                {con?.label}
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
              name="country"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col">
                  <Label htmlFor={"country"} required={true}>
                    TimeZone
                  </Label>

                  <Popover
                    open={timeZonePopover}
                    onOpenChange={settimeZonePopover}
                  >
                    <PopoverTrigger asChild>
                      <Button role="combobox" aria-expanded={open}>
                        {timeZone
                          ? countries?.find((zone) => zone?.value === timeZone)
                              ?.label
                          : "Select framework..."}
                        <ChevronDown className="h-4 w-4 text-placeholder" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="!w-full p-0">
                      <Command>
                        <CommandInput placeholder="Select" />
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup>
                          <CommandList>
                            {countries?.map((zone) => (
                              <CommandItem
                                key={zone?.value}
                                value={zone?.value}
                                onSelect={(currentValue) => {
                                  settimeZone(
                                    currentValue === timeZone
                                      ? ""
                                      : currentValue,
                                  );
                                  settimeZonePopover(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    timeZone === zone?.value
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

          {/* <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "Select framework..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  <CommandList>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandList>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover> */}

          {/* <Popover>
            <PopoverTrigger asChild>
              <Button>Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input
                      id="maxWidth"
                      defaultValue="300px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      defaultValue="25px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Max. height</Label>
                    <Input
                      id="maxHeight"
                      defaultValue="none"
                      className="col-span-2 h-8"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover> */}

          <Button
            className="mb-[1.9rem] mt-[0.625rem] w-full sm:w-[15rem]"
            variant="default"
            type="submit"
          >
            Create Organization
          </Button>
        </form>
      </Form>
    </FormPageTemplate>
  );
};

export default SignUp;
