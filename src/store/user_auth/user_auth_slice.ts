import { createSlice } from "@reduxjs/toolkit";
import act_user_signup from "./act/act_user_signup";
import act_user_signin from "./act/act_user_signin";

import Tauthslice from "../../types/Tauth";

const initialState: Tauthslice = {
  user: {},
  token: "",
  loading: "idle",
  error: "",
  new_user: false,
};

const user_auth_slice = createSlice({
  name: "user_auth",
  initialState,
  reducers: {
    reset_new_user: (state) => {
      state.new_user = false;
    },
    logout: (state) => {
      state.token = "";
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(act_user_signup.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(act_user_signup.fulfilled, (state) => {
      state.loading = "succeeded";
      state.new_user = true;
      state.error = "";
    });
    builder.addCase(act_user_signup.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
    //################################################################
    builder.addCase(act_user_signin.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(act_user_signin.fulfilled, (state, action) => {
      state.token = action.payload.accessToken;
      state.loading = "succeeded";
      state.error = "";

      state.user = action.payload.user;
    });
    builder.addCase(act_user_signin.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default user_auth_slice.reducer;

export const { reset_new_user, logout } = user_auth_slice.actions;
