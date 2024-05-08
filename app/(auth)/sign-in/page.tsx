"use client";

import React, { ReactNode } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { signInDefaultValues } from "@/utils/forms/initial-values";
import { SignInFormDetails } from "@/utils/forms/interfaces";
import { signInValidationSchema } from "@/utils/forms/validations";
import { Button } from "@/components/ui/button";
import { signInForm } from "@/utils/forms/form-details";
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
import Link from "next/link";
import { useSignInMutation } from "@/redux/apis/auth-api";
import { toast } from "sonner";

const SignIn: NextPage = () => {
  const {
    fields: { email, password },
  } = signInForm;

  const [signIn, { isLoading }] = useSignInMutation();

  const form = useForm({
    resolver: yupResolver(signInValidationSchema),
    defaultValues: signInDefaultValues,
  });

  console.log(isLoading);

  const onSubmit = async (formValues: SignInFormDetails) => {
    try {
      const { data } = await signIn(formValues).unwrap();
      toast.success("Login successfull");
      console.log("res", data);
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message);
    }
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
    <FormPageTemplate redirectTo="sign-up">
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
                    placeholder={email?.placeholder}
                    type={email?.type}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormField
              control={form.control}
              name={"password"}
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor={password?.name} required={true}>
                    {password?.label}
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

            <Link
              href={"/"}
              className="mt-1.5 inline-block text-sm text-[#E2E2E2]"
            >
              I forgot my password
            </Link>
          </div>

          <Button
            className="mb-[1.9rem] mt-[0.625rem] w-full sm:w-[15rem]"
            variant="default"
            type="submit"
            isLoading={isLoading}
          >
            Login
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

export default SignIn;
