import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Tproducts from "@/types/Tproducts";

const actproductsCategoreSlice = createAsyncThunk(
  "products/actproductsCategoreSlice",
  async (category, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const response = await axios
        .get<Tproducts>(`http://localhost:3001/allprpduct?category=${category}`)
        .then((res) => res.data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actproductsCategoreSlice;
