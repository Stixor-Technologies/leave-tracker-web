import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "@/types";

const initialUserState: UserState = {
  user: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    slackId: "",
    role: "",
    hireDate: "",
    approvalFlowId: 0,
    holidayCalender: "",
    gender: "",
    probationEnd: "",
    seniorityYears: "",
    seniorityMonths: "",
    workScheduleId: 0,
    contractEnd: "",
    deleted: false,
    createdAt: "",
    updatedAt: "",
    verified: false,
    directManagerId: 0,
    inviteAccepted: false,
    orgUser: [],
  },
  isOrg: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser(state, action: PayloadAction<UserState>) {
      state.user = action.payload.user;
    },
    updateEmail(state, action: PayloadAction<string>) {
      if (state.user) {
        state.user.email = action.payload;
      }
    },
  },
});

export const { loginUser, updateEmail } = userSlice.actions;
