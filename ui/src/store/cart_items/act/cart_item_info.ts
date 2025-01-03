import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import axios from "axios";

const cart_item_info = createAsyncThunk(
  "cart_items/cart_item_info",
  async (_, thunk) => {
    const { getState } = thunk;
    const { user_items } = getState() as RootState;
    const itemsId = Object.keys(user_items.item_id);
    const prepare_get = itemsId.map((e) => `id=${e}`).join("&");
    console.log(prepare_get);
    const respons = await axios
      .get(`http://localhost:3001/allprpduct?${prepare_get}`)
      .then((e) => e.data);
    return respons;
  }
);

export default cart_item_info;
