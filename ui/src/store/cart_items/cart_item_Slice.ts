import { createSlice } from "@reduxjs/toolkit";

import Tcart_items from "@/types/Tcart_items";

import cart_item_info from "@/store/cart_items/act/cart_item_info";

const initialState: Tcart_items = {
  item_id: {},
  item_info: [],
  loading: "idle",
  error: null,
};

const cart_items_Slice = createSlice({
  name: "cart_items",
  initialState,
  reducers: {
    add_item: (state, action) => {
      const id = action.payload;
      if (state.item_id[id]) {
        state.item_id[id] += 1;
      } else {
        state.item_id[id] = 1;
      }
    },
    increment: (state, action) => {
      const id = action.payload;
      state.item_id[action.payload] = state.item_id[action.payload] += 1;
      state.item_info.map((e) => (e.id == id ? (e.quantity += 1) : e));
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state.item_id[action.payload] === 1) {
        delete state.item_id[action.payload];
        state.item_info = state.item_info.filter(
          (e) => e.id !== action.payload
        );
      } else {
        state.item_info.map((e) => (e.id == id ? (e.quantity -= 1) : e));
        state.item_id[action.payload] = state.item_id[action.payload] -= 1;
      }
    },
    submit_order: (state) => {
      state.item_id = {};
      state.item_info = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cart_item_info.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(cart_item_info.fulfilled, (state, action) => {
      state.item_info = action.payload;
      state.loading = "succeeded";
      //   Object.values(state.item_id)
      state.item_info.map((e) => (e.quantity = state.item_id[e.id]));
    });
    builder.addCase(cart_item_info.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default cart_items_Slice.reducer;
export const { add_item, increment, decrement, submit_order } =
  cart_items_Slice.actions;
