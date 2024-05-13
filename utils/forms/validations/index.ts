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
