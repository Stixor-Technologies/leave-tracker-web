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
import InputField from "@/components/formik/input-field";
import React, { ReactNode } from "react";
import FormPageTemplate from "@/components/ui/form-page-template";

const SignUp = () => {
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
      <div className="flex grow items-center justify-center gap-[8px] rounded-md border px-4 py-2">
        {icon}
        {/* <FcGoogle size={18} />{" "} */}
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
            <div className="flex flex-col gap-6">
              <div>
                <InputField
                  name={email.name}
                  label={email.label}
                  extraClasses="w-[70vw] sm:w-[480px] md:w-[550px] lg:w-[632px]"
                  placeholder={email.placeholder}
                  required={true}
                  error={errors?.email}
                  touched={touched?.email}
                />
              </div>

              <div>
                <InputField
                  name={password.name}
                  label={password.label}
                  extraClasses="w-[70vw] sm:w-[480px] md:w-[550px] lg:w-[632px]"
                  placeholder={password.placeholder}
                  required={true}
                  error={errors?.password}
                  touched={touched?.password}
                  isPassword={true}
                />
              </div>

              <div>
                <InputField
                  name={confirmPassword.name}
                  label={confirmPassword.label}
                  extraClasses="w-[70vw] sm:w-[480px] md:w-[550px] lg:w-[632px]"
                  placeholder={confirmPassword.placeholder}
                  required={true}
                  error={errors?.confirmPassword}
                  touched={touched?.confirmPassword}
                  isPassword={true}
                />
              </div>
            </div>

            <div className="pb-[30px] pt-[34px]">
              <Button
                // disabled={isLoading}
                className="w-[100%] sm:w-[15rem]"
                variant="default"
                onClick={() => handleSubmit()}
              >
                Sign Up
              </Button>
            </div>

            <div className="flex flex-col gap-6">
              <div className="mb-4 flex items-center">
                <span
                  className={`text-sm font-normal text-themeLightGray ${inter.className}`}
                >
                  Or signup with
                </span>
                <div className="ml-1 h-[1px] flex-grow bg-themeLightGray"></div>
              </div>

              <div className="flex flex-wrap gap-[10px]">
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
