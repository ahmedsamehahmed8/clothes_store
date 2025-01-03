import { createSlice } from "@reduxjs/toolkit";
import act_profile_slice from "./act/act_profile_slice";
import Tprofile from "@/types/Tprofile";

const initialState: Tprofile = {
  profiles: [],
  loading: "idle",
  error: null,
};

const profileslice = createSlice({
  name: "profileslice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(act_profile_slice.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(act_profile_slice.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.profiles = action.payload;
    });
    builder.addCase(act_profile_slice.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default profileslice.reducer;
