import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const act_user_signin = createAsyncThunk(
  "user_auth/act_user_signin",
  async (user, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const response = await axios.post(" http://localhost:3001/signin", user);

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export default act_user_signin;
