export const signUpForm = {
  id: "01-sign-up-form",
  fields: {
    email: {
      type: "string",
      name: "email",
      label: "Email",
      placeholder: "email",
      errMsg: "Email is required",
    },
    password: {
      type: "password",
      name: "password",
      label: "New Password",
      placeholder: "new password",
      errMsg: "Password is required.",
    },
    confirmPassword: {
      type: "password",
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "confirm password",
      errMsg: "Password confirmation is required.",
    },
  },
};

export const signInForm = {
  id: "01-sign-in-form",
  fields: {
    email: {
      type: "string",
      name: "email",
      label: "Email",
      placeholder: "email",
      errMsg: "Email is required",
    },
    password: {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "password",
      errMsg: "Password is required.",
    },
  },
};

export const addEmployeeForm = {
  id: "01-add-employee-form",
  fields: {
    firstName: {
      type: "string",
      label: "First Name",
      placeholder: "Enter the fisrt name",
    },
    lastName: {
      type: "string",
      label: "Last Name",
      placeholder: "Enter the last name",
    },
    email: {
      type: "string",
      label: "Email Name",
      placeholder: "Enter the email address",
    },
    hireDate: {
      type: "string",
      label: "Hire Date",
      placeholder: "13/05/2024",
    },

    role: {
      type: "string",
      label: "Role",
      placeholder: "Select",
    },

    approvalFlow: {
      type: "string",
      label: "Approval Flow",
      placeholder: "Basic Approval Flow",
    },

    holidayCalender: {
      type: "string",
      label: "Holiday Calender",
      placeholder: "",
    },
    gender: {
      type: "string",
      label: "Gender",
      placeholder: "Default",
    },
    probationEnd: {
      type: "string",
      label: "Probation End",
      placeholder: "Select",
    },
    directManager: {
      type: "string",
      label: "Direct Manager",
      placeholder: "Select",
    },
    seniority: {
      type: "string",
      label: "Seniority Before Hire",
      placeholder: "",
    },
    workSchedule: {
      type: "string",
      label: "Work Schedule",
      placeholder: "Daily meeting",
    },
    contractExpiryDate: {
      type: "string",
      label: "Contract Expiry Date",
      placeholder: "13/05/2024",
    },
  },
};
