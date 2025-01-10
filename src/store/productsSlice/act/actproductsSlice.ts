import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Tproducts from "@/types/Tproducts";

const actproductsSlice = createAsyncThunk(
  "products/actproductsSlice",
  async (_, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const response = await axios
        .get<Tproducts>("http://localhost:3001/allprpduct")
        .then((res) => res.data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actproductsSlice;
