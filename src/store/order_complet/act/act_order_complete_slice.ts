import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useAppDispatch } from "@/store/hooks/hooks_store";
import { order_idd } from "../order_complete_slice";
import axios from "axios";
import { RootState } from "@/store/index";

const order_complete = createAsyncThunk(
  "order_complete_slice/order_complet",
  async (_, thunk) => {
    const dispatch = thunk.dispatch;
    const { getState, rejectWithValue } = thunk;
    const { user_items, user_auth, order_complete } = getState() as RootState;
    const { item_info } = user_items;
    const { ...user } = user_auth.user;
    const { email, username } = user;
    const { order_id } = order_complete;

    try {
      await axios.post(`http://localhost:3001/order_complete`, {
        id: order_id,
        email,
        username,

        items: [...item_info],
      });

      dispatch(order_idd());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default order_complete;
