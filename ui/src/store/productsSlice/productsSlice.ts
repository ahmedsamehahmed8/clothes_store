import { createSlice } from "@reduxjs/toolkit";
import Tproducts from "@/types/Tproducts";
import Tloading from "@/types/Tloading";

import actproductsSlice from "./act/actproductsSlice";
import actproductsCategoreSlice from "./act/actproductsCategoreSlice";
import act_get_categories from "./act/act_get_categories";

type T = {
  products: Tproducts[];
  loading: Tloading;
  error: null | string;
  categories: { id: number; name: string; img: string }[];
};

const initialState: T = {
  products: [],
  loading: "idle",
  error: null,
  categories: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    logg: (state) => {
      console.log(state.products);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actproductsSlice.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actproductsSlice.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(actproductsSlice.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
    //##############################   actproductsCategoreSlice   #########################################
    builder.addCase(actproductsCategoreSlice.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actproductsCategoreSlice.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(actproductsCategoreSlice.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
    //############################   act_get_categories  ###########################################
    builder.addCase(act_get_categories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(act_get_categories.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(act_get_categories.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = "failed";
    });
  },
});

export default productsSlice.reducer;
export { actproductsSlice, actproductsCategoreSlice, act_get_categories };
export const { logg } = productsSlice.actions;
