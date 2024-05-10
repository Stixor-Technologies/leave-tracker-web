import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "@/types";

const initialUserState: UserState = {
  user: {
    id: null,
    name: null,
    email: null,
    slackId: null,
    role: null,
    deleted: false,
    createdAt: null,
    updatedAt: null,
    verified: false,
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
