import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const act_user_signup = createAsyncThunk(
  "user_auth/act_user_signup",
  async (new_user, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const response = await axios.post(
        "http://localhost:3001/signup",
        new_user
      );
      console.log(response);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default act_user_signup;
