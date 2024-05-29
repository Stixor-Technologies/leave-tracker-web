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

const commonEmployeeFields = {
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
};

export const addEmployeeForm = {
  id: "01-add-employee-form",
  fields: {
    ...commonEmployeeFields,
  },
};

// export const addEmployeeForm = {
//   id: "01-add-employee-form",
//   fields: {
//     firstName: {
//       type: "string",
//       label: "First Name",
//       placeholder: "Enter the fisrt name",
//     },
//     lastName: {
//       type: "string",
//       label: "Last Name",
//       placeholder: "Enter the last name",
//     },
//     email: {
//       type: "string",
//       label: "Email Name",
//       placeholder: "Enter the email address",
//     },
//     hireDate: {
//       type: "string",
//       label: "Hire Date",
//       placeholder: "16/05/2024",
//     },

//     role: {
//       type: "string",
//       label: "Role",
//       placeholder: "Select",
//     },

//     approvalFlow: {
//       type: "string",
//       label: "Approval Flow",
//       placeholder: "Select",
//     },

//     holidayCalender: {
//       type: "string",
//       label: "Holiday Calender",
//       placeholder: "Select",
//     },
//     gender: {
//       type: "string",
//       label: "Gender",
//       placeholder: "Select",
//     },
//     probationEnd: {
//       type: "string",
//       label: "Probation End",
//       placeholder: "16/05/2024",
//     },
//     directManager: {
//       type: "string",
//       label: "Direct Manager",
//       placeholder: "Select",
//     },
//     seniorityYears: {
//       type: "string",
//       label: "Seniority Before Hire",
//       placeholder: "Years",
//     },
//     seniorityMonths: {
//       type: "string",
//       label: "",
//       placeholder: "Months",
//     },

//     workSchedule: {
//       type: "string",
//       label: "Work Schedule",
//       placeholder: "Select",
//     },
//     contractExpiryDate: {
//       type: "string",
//       label: "Contract Expiry Date",
//       placeholder: "16/05/2024",
//     },
//   },
// };

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

// export const employeeOverview = {
//   id: "01-employee-overview",
//   fields: {
//     email: {
//       type: "string",
//       label: "Email",
//       placeholder: "Name",
//     },
//     approvalFlow: {
//       type: "string",
//       label: "Approval flow",
//       placeholder: "Select",
//     },
//     teams: {
//       type: "string",
//       label: "Teams",
//       placeholder: "Select",
//     },
//     position: {
//       type: "string",
//       label: "Position",
//       placeholder: "Select",
//     },
//     holidayCalender: {
//       type: "string",
//       label: "Holidays calendar",
//       placeholder: "Select",
//     },
//     contractType: {
//       type: "string",
//       label: "Contract type",
//       placeholder: "Select",
//     },
//     userRole: {
//       type: "string",
//       label: "User Role",
//       placeholder: "Select",
//     },

//     workSchedule: {
//       type: "string",
//       label: "Work schedule",
//       placeholder: "Select",
//     },
//   },
// };

export const employeeOverview = {
  id: "01-employee-overview",
  fields: {
    email: commonEmployeeFields?.email,
    approvalFlow: commonEmployeeFields?.approvalFlow,
    holidayCalender: commonEmployeeFields?.holidayCalender,
    role: commonEmployeeFields?.role,
    workSchedule: commonEmployeeFields?.workSchedule,
    teams: {
      type: "string",
      label: "Teams",
      placeholder: "Select",
    },
    position: {
      type: "string",
      label: "Position",
      placeholder: "Select",
    },
    contractType: {
      type: "string",
      label: "Contract type",
      placeholder: "Select",
    },
  },
};

export const employeeAdditonal = {
  id: "01-employee-additional",
  fields: {
    gender: commonEmployeeFields?.gender,
    directManager: commonEmployeeFields?.directManager,
    hireDate: commonEmployeeFields?.hireDate,
    probationEnd: commonEmployeeFields?.probationEnd,
    seniorityYears: commonEmployeeFields?.seniorityYears,
    seniorityMonths: commonEmployeeFields?.seniorityMonths,
    terminationDate: {
      type: "string",
      label: "Termination Date",
      placeholder: "16/05/2024",
    },
    employeeNumber: {
      type: "string",
      label: "Employee Number",
      placeholder: "Employee number",
    },

    customNote: {
      type: "string",
      label: "Custom note",
      placeholder: "Custom note",
    },
  },
};
