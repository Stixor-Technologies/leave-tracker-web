export const signUpForm = {
  id: "01-sign-up-form",
  fields: {
    email: {
      type: "string",
      name: "email",
      label: "Email",
      placeholder: "Email",
      errMsg: "Email is required",
    },
    password: {
      type: "password",
      name: "password",
      label: "New Password",
      placeholder: "New Password",
      errMsg: "Password is required.",
    },
    confirmPassword: {
      type: "password",
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Confirm Password",
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
      placeholder: "Email",
      errMsg: "Email is required",
    },
    password: {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Password",
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
      placeholder: "16/05/2024",
    },

    role: {
      type: "string",
      label: "Role",
      placeholder: "Select",
    },

    approvalFlow: {
      type: "string",
      label: "Approval Flow",
      placeholder: "Select",
    },

    holidayCalender: {
      type: "string",
      label: "Holiday Calender",
      placeholder: "Select",
    },
    gender: {
      type: "string",
      label: "Gender",
      placeholder: "Select",
    },
    probationEnd: {
      type: "string",
      label: "Probation End",
      placeholder: "16/05/2024",
    },
    directManager: {
      type: "string",
      label: "Direct Manager",
      placeholder: "Select",
    },
    seniorityYears: {
      type: "string",
      label: "Seniority Before Hire",
      placeholder: "Years",
    },
    seniorityMonths: {
      type: "string",
      label: "",
      placeholder: "Months",
    },

    workSchedule: {
      type: "string",
      label: "Work Schedule",
      placeholder: "Select",
    },
    contractExpiryDate: {
      type: "string",
      label: "Contract Expiry Date",
      placeholder: "16/05/2024",
    },
  },
};

export const createOrganizationForm = {
  id: "01-sign-in-form",
  fields: {
    name: {
      type: "string",
      label: "Organization name",
      placeholder: "Name",
    },
    size: {
      type: "string",
      label: "Organization size",
      placeholder: "Select",
    },
    country: {
      type: "string",
      label: "Country",
      placeholder: "Select",
    },
    timeZone: {
      type: "string",
      label: "Time Zone",
      placeholder: "Select",
    },
  },
};
