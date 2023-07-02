import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../api/Api";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, thunk_Api) => {
    try {
      const { data } = await Api.get(`users?count=${3}`);

      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
