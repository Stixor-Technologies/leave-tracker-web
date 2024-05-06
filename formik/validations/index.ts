import * as Yup from "yup";

import { signUpForm } from "../forms";

const {
  fields: { email: signUpEmail, password, confirmPassword },
} = signUpForm;

export const signUpValidationSchema = Yup.object().shape({
  [signUpEmail.name]: Yup.string()
    .email("Invalid email address")
    .required(`${signUpEmail.label} is required`),

  [password.name]: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be at most 32 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&`~^#@${}%[\]/\\"'()\-_=+|;:<>\.])[A-Za-z\d@$!%*?&`~^#@${}%[\]/\\"'()\-_=+|;:<>\.]{8,32}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special characters",
    )
    .required("Password is required"),

  [confirmPassword.name]: Yup.string()
    .oneOf([Yup.ref(password.name)], "Passwords must match")
    .required("Please confirm your password"),
});
