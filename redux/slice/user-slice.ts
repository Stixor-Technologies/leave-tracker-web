import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "@/types";
// * Slice will be changed accordingly later

const initialUserState: UserState = {
  user: {
    id: undefined,
    email: undefined,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginSuccess(state, action: PayloadAction<UserState>) {
      state.user = action.payload.user;
    },
  },
});

export const { loginSuccess } = userSlice.actions;
