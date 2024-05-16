import * as Yup from "yup";

import { signInForm, signUpForm } from "../form-details";

const {
  fields: { email: signUpEmail, password: signUpPassword },
} = signUpForm;

const {
  fields: { email: signInEmail, password: signInPassword },
} = signInForm;

export const signUpValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required(`${signUpEmail.label} is required`),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be at most 32 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&`~^#@${}%[\]/\\"'()\-_=+|;:<>\.])[A-Za-z\d@$!%*?&`~^#@${}%[\]/\\"'()\-_=+|;:<>\.]{8,32}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special characters",
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref(signUpPassword.name)], "Passwords do not match")
    .required("Please confirm your password"),
});

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required(`${signUpEmail.label} is required`),
});

export const verifiedSignUpValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be at most 32 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&`~^#@${}%[\]/\\"'()\-_=+|;:<>\.])[A-Za-z\d@$!%*?&`~^#@${}%[\]/\\"'()\-_=+|;:<>\.]{8,32}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special characters",
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref(signUpPassword.name)], "Passwords do not match")
    .required("Please confirm your password"),
});

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required(`${signInEmail?.label} is required`),
  password: Yup.string().required(`${signInPassword?.label} is required`),
});

export const organizationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only characters are allowed")
    .min(3, "Name should be atleast 3 characters long.")
    .max(20, "Name should be at most 20 characters long.")
    .required(`Organization name is required`),
  size: Yup.string().required("Organization Size is required"),
  country: Yup.string().required("Country is required"),
  timeZone: Yup.string().required("Time Zone is required"),
});
