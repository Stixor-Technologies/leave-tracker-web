"use client";

import Image from "next/image";
import { signUpValidationSchema } from "@/utils/forms/validations";
import { Button } from "@/components/ui/button";
import { signUpForm } from "@/utils/forms/form-details";
import { NextPage } from "next";
import React, { ReactNode } from "react";
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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export interface OrganizatonFormDetail {
  name: string;
  organizationSize: string;
  country: string;
  timeZone: string;
}

export const signUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .email("Organization name is required address")
    .required(`${signUpEmail.label} is required`),

  organizationSize: Yup.string().required("Organization Size is required"),

  country: Yup.string(),
});

const SignUp: NextPage = () => {
  const {
    fields: { email, password, confirmPassword },
  } = signUpForm;

  const form = useForm({
    resolver: yupResolver(signUpValidationSchema),
    defaultValues: {
      name: "",
      organizationSize: "",
      country: "",
      timeZone: "",
    },
  });

  const onSubmit = (values: OrganizatonFormDetail) => {
    console.log(values);
  };

  const socialLink = (icon: ReactNode, name: string) => {
    return (
      <Button
        className="flex grow items-center justify-center gap-[0.5rem] rounded-md border px-4 py-2"
        variant={"transparent"}
      >
        {icon}
        <span className="text-sm font-medium">{name}</span>
      </Button>
    );
  };

  return (
    <FormPageTemplate redirectTo="sign-in">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor={email.name} required={true}>
                  {email.label}
                </Label>

                <FormControl>
                  <Input
                    placeholder={email.placeholder}
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
            name={"password"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor={password.name} required={true}>
                  {password.label}
                </Label>

                <FormControl>
                  <Input
                    placeholder={password.placeholder}
                    type={password.type}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={"confirmPassword"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor={confirmPassword.name} required={true}>
                  {confirmPassword.label}
                </Label>

                <FormControl>
                  <Input
                    placeholder={confirmPassword.placeholder}
                    type={confirmPassword.type}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            // disabled={isLoading}
            className="mb-[1.9rem] mt-[0.625rem] w-full sm:w-[15rem]"
            variant="default"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </Form>

      <div className="flex flex-col gap-6">
        <div className="mb-4 flex items-center">
          <span className={`text-sm text-themeLightGray`}>Or signup with</span>
          <div className="ml-1 h-px grow bg-themeLightGray"></div>
        </div>

        <div className="flex flex-wrap gap-[0.625rem]">
          {socialLink(
            <Image
              src={"/assets/images/social-icons/google-icon.svg"}
              alt="google icon"
              width={18}
              height={18}
            />,
            "Google",
          )}

          {socialLink(
            <Image
              src={"/assets/images/social-icons/slack-icon.svg"}
              alt="google icon"
              width={18}
              height={18}
            />,
            "Slack",
          )}

          {socialLink(
            <Image
              src={"/assets/images/social-icons/jira-icon.svg"}
              alt="google icon"
              width={18}
              height={18}
            />,
            "Jira",
          )}
        </div>
      </div>
    </FormPageTemplate>
  );
};

export default SignUp;
