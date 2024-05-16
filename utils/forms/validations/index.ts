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

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required(`${signInEmail?.label} is required`),
  password: Yup.string().required(`${signInPassword?.label} is required`),
});

export const organizationSchema = Yup.object().shape({
  name: Yup.string()
    .required(`Organization name is required`)
    .min(3, "Name should be atleast 3 characters long.")
    .max(50, "Name should be at most 50 characters long.")
    .matches(/^[^\s]+(?:\s[^\s]+)*$/, "Name cannot start/end with space"),
  size: Yup.string().required("Organization Size is required"),
  country: Yup.string().required("Country is required"),
  timeZone: Yup.string().required("Time Zone is required"),
});

export const addEmployeeSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters long")
    .max(30, "First name must be at most 30 characters long")
    .matches(/^[^\s]+(?:\s[^\s]+)*$/, "First name cannot start/end with space"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  role: Yup.string().optional(),
  approvalFlowId: Yup.string().optional(),
  holidayCalender: Yup.string().optional(),
  gender: Yup.string().optional(),
  probationEnd: Yup.string().optional(),
  directManagerId: Yup.string().optional(),
  seniorityYears: Yup.number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? undefined : value,
    )
    .positive("Years must be positive numbers")
    .max(25, "Years cannot be more than 25")
    .test(
      "is-valid-pattern",
      "Years must be in the format 01, 02",
      function (value) {
        if (value === undefined || value === null) {
          return true;
        }
        return /^[0-9]{2}$/.test(value.toString());
      },
    )
    .nullable(),

  seniorityMonths: Yup.number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? undefined : value,
    )
    .positive("Months must be positive numbers")
    .max(12, "Months cannot be more than 12")
    .test(
      "is-valid-pattern",
      "Months must be in the format 01, 02",
      function (value) {
        if (value === undefined || value === null) {
          return true;
        }
        return /^[0-9]{2}$/.test(value.toString());
      },
    )
    .nullable(),
  hireDate: Yup.string().optional(),
  contractEnd: Yup.string().optional(),
  workScheduleId: Yup.string().optional(),
});
