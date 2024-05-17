"use client";
import React from "react";
import AuthenticationPageTemplate from "@/components/authentication-page-template";
import { useSendPasswordSetupLinkMutation } from "@/redux/apis/auth-api";
import { forgotPasswordFormDetails } from "@/utils/forms/initial-values";
import { ForgotPasswordFormDetails } from "@/utils/forms/interfaces";
import { forgotPasswordValidationSchema } from "@/utils/forms/validations";
import { Button } from "@/components/ui/button";
import { forgotPasswordForm } from "@/utils/forms/form-details";
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
import { toast } from "sonner";
import { LOCAL } from "@/utils/constants";

const ForgotPasswordForm = () => {
  const [sendPasswordLink, { isLoading }] = useSendPasswordSetupLinkMutation();

  const {
    fields: { email },
  } = forgotPasswordForm;

  const form = useForm({
    resolver: yupResolver(forgotPasswordValidationSchema),
    defaultValues: forgotPasswordFormDetails,
  });

  const onSubmit = async (values: ForgotPasswordFormDetails) => {
    try {
      const result = await sendPasswordLink({
        ...values,
        type: "RESET",
        local: LOCAL,
      }).unwrap();

      toast.success(result?.message);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <AuthenticationPageTemplate className="md:!p-11">
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

          <Button
            disabled={isLoading}
            loading={isLoading}
            className="mt-[0.625rem]"
            variant="primary"
            size={"medium"}
            type="submit"
          >
            Send Reset Link
          </Button>
        </form>
      </Form>
    </AuthenticationPageTemplate>
  );
};

export default ForgotPasswordForm;
