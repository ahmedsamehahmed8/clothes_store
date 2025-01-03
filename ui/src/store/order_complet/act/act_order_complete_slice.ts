import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "@/store/index";

const order_complete = createAsyncThunk(
  "order_complete_slice/order_complet",
  async (_, thunk) => {
    const { getState, rejectWithValue } = thunk;
    const { user_items, user_auth } = getState() as RootState;
    const { item_info } = user_items;
    const { user } = user_auth;

    try {
      await axios.post("http://localhost:3001/order_complete", {
        ...user,
        items: [...item_info],
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default order_complete;
