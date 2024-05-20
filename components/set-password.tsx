"use client";

import React from "react";
import AuthenticationPageTemplate from "@/components/authentication-page-template";
import { verifiedSignUpFormDetails } from "@/utils/forms/initial-values";
import { VerifiedSignUpFormDetails } from "@/utils/forms/interfaces";
import { verifiedSignUpValidationSchema } from "@/utils/forms/validations";
import { Button } from "@/components/ui/button";
import { verifiedSignUpForm } from "@/utils/forms/form-details";
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
import { useSetPasswordMutation } from "@/redux/apis/auth-api";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTES } from "@/utils/constants";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { loginUser } from "@/redux/slice/user-slice";

const SetPassword = ({ type }: { type: "INVITE" | "RESET" }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const [setupPassword, { isLoading }] = useSetPasswordMutation();
  const token = searchParams.get("token");

  const {
    fields: { password, confirmPassword },
  } = verifiedSignUpForm;

  const form = useForm({
    resolver: yupResolver(verifiedSignUpValidationSchema),
    defaultValues: verifiedSignUpFormDetails,
  });

  const onSubmit = async (values: VerifiedSignUpFormDetails) => {
    try {
      const result = await setupPassword({
        ...values,
        token: token as string,
        type,
      }).unwrap();

      toast.success(result?.message);

      if (type === "INVITE") {
        dispatch(loginUser(result?.data?.user));
      }

      setTimeout(
        () =>
          type === "RESET"
            ? router.replace(ROUTES.SIGN_IN)
            : router.replace(ROUTES.APPLY),
        500,
      );
    } catch (error: any) {
      toast.error(error?.data?.message[0]);
    }
  };

  return (
    <AuthenticationPageTemplate
      className="md:!p-11"
      innerContainerClassName="h-[84vh] lg:h-auto"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-wrap gap-6"
        >
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
            className="mt-[0.625rem]"
            variant="primary"
            size={"medium"}
            type="submit"
          >
            Save Password
          </Button>
        </form>
      </Form>
    </AuthenticationPageTemplate>
  );
};

export default SetPassword;
