import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const act_get_categories = createAsyncThunk(
  "products/act_get_categories",
  async (_, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const response = await axios
        .get(`http://localhost:3001/categories`)
        .then((res) => res.data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default act_get_categories;
