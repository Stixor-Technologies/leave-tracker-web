"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { SignUpFormDetails, signUpFormDetails } from "@/formik/initial-values";
import { signUpValidationSchema } from "@/formik/validations";
import { Button } from "@/components/ui/button";
import { signUpForm } from "@/formik/forms";
import { inter } from "@/app/fonts";
import { FcGoogle } from "react-icons/fc";
import { FaJira } from "react-icons/fa6";
import { SiSlack } from "react-icons/si";
import { NextPage } from "next";
import InputField from "@/components/formik/input-field";
import React, { ReactNode } from "react";
import FormPageTemplate from "@/components/ui/form-page-template";

const SignUp: NextPage = () => {
  const {
    fields: { email, password, confirmPassword },
  } = signUpForm;

  const onSubmitHandler = (
    values: SignUpFormDetails,
    formikHelpers: FormikHelpers<SignUpFormDetails>,
  ) => {
    console.log(values, formikHelpers);
  };

  const socialLink = (icon: ReactNode, name: string) => {
    return (
      <div className="flex grow items-center justify-center gap-[0.5rem] rounded-md border px-4 py-2">
        {icon}
        <span className="text-sm font-medium">{name}</span>
      </div>
    );
  };

  return (
    <FormPageTemplate redirectTo="sign-in">
      <Formik
        onSubmit={onSubmitHandler}
        initialValues={signUpFormDetails}
        validationSchema={signUpValidationSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form>
            <div className="flex  flex-col gap-6">
              <InputField
                name={email.name}
                label={email.label}
                extraClasses="w-[70vw] sm:w-[30rem] md:w-[34.38rem] lg:w-[39.5rem]"
                placeholder={email.placeholder}
                required={true}
                error={errors?.email}
                touched={touched?.email}
              />

              <InputField
                name={password.name}
                label={password.label}
                extraClasses="w-[70vw] sm:w-[30rem] md:w-[34.38rem] lg:w-[39.5rem]"
                placeholder={password.placeholder}
                required={true}
                error={errors?.password}
                touched={touched?.password}
                isPassword={true}
              />

              <InputField
                name={confirmPassword.name}
                label={confirmPassword.label}
                extraClasses="w-[70vw] sm:w-[30rem] md:w-[34.38rem] lg:w-[39.5rem]"
                placeholder={confirmPassword.placeholder}
                required={true}
                error={errors?.confirmPassword}
                touched={touched?.confirmPassword}
                isPassword={true}
              />
            </div>

            <div className="pb-[1.9rem] pt-[2.13rem]">
              <Button
                // disabled={isLoading}
                className="w-full sm:w-[15rem]"
                variant="default"
                onClick={() => handleSubmit()}
              >
                Sign Up
              </Button>
            </div>

            <div className="flex flex-col gap-6">
              <div className="mb-4 flex items-center">
                <span
                  className={`text-sm text-themeLightGray ${inter.className}`}
                >
                  Or signup with
                </span>
                <div className="ml-1 h-px grow bg-themeLightGray"></div>
              </div>

              <div className="flex flex-wrap gap-[0.625rem]">
                {socialLink(<FcGoogle size={18} />, "Google")}

                {socialLink(<SiSlack size={18} />, "Slack")}

                {socialLink(
                  <FaJira size={18} className="text-[#2584FF]" />,
                  "Jira",
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </FormPageTemplate>
  );
};

export default SignUp;
