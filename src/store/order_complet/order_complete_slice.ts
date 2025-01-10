import { createSlice } from "@reduxjs/toolkit";
import act_order_complete_slice from "./act/act_order_complete_slice";

type tt = {
  loading: "pending" | "success" | "failure" | "idle";
  error: string | null;
  complete: boolean;
  order_id: number;
};

const initialState: tt = {
  loading: "idle",
  error: null,
  complete: false,
  order_id: 0,
};

const order_complete_slice = createSlice({
  name: "user_checkout",
  initialState,
  reducers: {
    order_complete_from_order_complete_slice: (state) => {
      state.complete = true;
    },
    reset_complete_from_order_complete_slice: (state) => {
      state.complete = false;
    },
    order_idd: (state) => {
      state.order_id = state.order_id + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(act_order_complete_slice.fulfilled, (state) => {
      state.loading = "success";
      state.error = null;
    });
    builder.addCase(act_order_complete_slice.rejected, (state, action) => {
      state.loading = "pending";
      state.error = action.payload;
    });
    builder.addCase(act_order_complete_slice.pending, (state) => {
      state.loading = "pending";
    });
  },
});

export const {
  order_complete_from_order_complete_slice,
  reset_complete_from_order_complete_slice,
  order_idd,
} = order_complete_slice.actions;
export default order_complete_slice.reducer;
