"use client";

import React from "react";
import AuthenticationPageTemplate from "@/components/authentication-page-template";
import SocialSignUp from "@/components/social-sign-up";
import { signUpFormDetails } from "@/utils/forms/initial-values";
import { SignUpFormDetails } from "@/utils/forms/interfaces";
import { signUpValidationSchema } from "@/utils/forms/validations";
import { Button } from "@/components/ui/button";
import { signUpForm } from "@/utils/forms/form-details";
import { NextPage } from "next";
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
import { useSignUpMutation } from "@/redux/apis/auth-api";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/constants";

const SignUp: NextPage = () => {
  const {
    fields: { email, password, confirmPassword },
  } = signUpForm;

  const [signUp, { isLoading }] = useSignUpMutation();

  const router = useRouter();

  const form = useForm({
    resolver: yupResolver(signUpValidationSchema),
    defaultValues: signUpFormDetails,
  });

  const onSubmit = async (values: SignUpFormDetails) => {
    const result = await signUp(values);
    if (result?.error) {
      alert(result?.error?.data?.message);
    } else {
      alert(result?.data?.message);

      router.push(ROUTES.VERIFICATION);
    }
  };

  return (
    <AuthenticationPageTemplate redirectTo="sign-in">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-wrap gap-6"
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
                    isPassword={true}
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
                    isPassword={true}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading}
            loading={isLoading}
            className="mb-[1.875rem] mt-[0.625rem] "
            variant="primary"
            size={"medium"}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </Form>

      <SocialSignUp />
    </AuthenticationPageTemplate>
  );
};

export default SignUp;
