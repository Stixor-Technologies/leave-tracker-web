"use client";

import React from "react";
import { NextPage } from "next";
import { signInDefaultValues } from "@/utils/forms/initial-values";
import { SignInFormDetails } from "@/utils/forms/interfaces";
import { signInValidationSchema } from "@/utils/forms/validations";
import { Button } from "@/components/ui/button";
import { signInForm } from "@/utils/forms/form-details";
import AuthenticationPageTemplate from "@/components/authentication-page-template";
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
import SocialSignUp from "@/components/social-sign-up";

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
    } catch (err: any) {
      console.log(err);
      toast.error(err?.data?.message);
    }
  };

  return (
    <AuthenticationPageTemplate redirectTo="sign-up">
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
                      isPassword={true}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Link href={"/"} className="text-gray mt-1.5 inline-block text-sm">
              I forgot my password
            </Link>
          </div>

          <Button
            className="mb-[1.9rem] mt-[0.625rem] w-full sm:w-[15rem]"
            variant="primary"
            type="submit"
            loading={isLoading}
            disabled={isLoading}
          >
            Login
          </Button>
        </form>
      </Form>

      <SocialSignUp title="login" />
    </AuthenticationPageTemplate>
  );
};

export default SignIn;
