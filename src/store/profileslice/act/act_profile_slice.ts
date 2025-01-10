import { RootState } from "@/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const act_profile_slice = createAsyncThunk(
  "profileslice/act_progile_slice",
  async (_, thunk) => {
    const { getState, rejectWithValue } = thunk;
    const { user_auth } = getState() as RootState;
    const { user } = user_auth;
    const { username } = user;
    try {
      const response = await axios.get(
        `http://localhost:3001/order_complete?username=${username}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default act_profile_slice;
