"use client";

// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
import { Form, Formik, FormikHelpers } from "formik";
import { SignUpFormDetails, signUpFormDetails } from "@/formik/initial-values";
import { addAdminValidationSchema } from "@/formik/validations";
import { Button } from "@/components/ui/button";
import { signUpForm } from "@/formik/forms";
import InputField from "@/components/formik/input-field";
import React from "react";
import FormPageTemplate from "@/components/ui/form-page-template";

const SignUp = () => {
  //   const router = useRouter();

  const {
    fields: { email, newPassword, confirmPassword },
  } = signUpForm;

  const onSubmitHandler = (
    values: SignUpFormDetails,
    formikHelpers: FormikHelpers<SignUpFormDetails>,
  ) => {
    console.log(values, formikHelpers);
  };

  return (
    <FormPageTemplate>
      <Formik
        onSubmit={onSubmitHandler}
        initialValues={signUpFormDetails}
        validationSchema={addAdminValidationSchema}
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
                  name={newPassword.name}
                  label={newPassword.label}
                  extraClasses="w-[70vw] sm:w-[480px] md:w-[550px] lg:w-[632px]"
                  placeholder={newPassword.placeholder}
                  required={true}
                  error={errors?.newPassword}
                  touched={touched?.newPassword}
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
                />
              </div>
            </div>

            <div className="mt-9">
              <Button
                // disabled={isLoading}
                className="w-[100%] sm:w-[15rem]"
                variant="default"
                onClick={() => handleSubmit()}
              >
                Sign Up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </FormPageTemplate>
    // <div className="relative flex h-screen w-screen items-center justify-center ">
    //   <Image
    //     src={logo}
    //     alt="logo"
    //     className="logo absolute left-5 top-[18px]"
    //   />

    //   <div className="rounded-[24px] border bg-white px-7 py-6 md:px-11 md:py-9">

    //   </div>
    // </div>
  );
};

export default SignUp;
