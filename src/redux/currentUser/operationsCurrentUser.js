import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../api/Api";

export const getFollowingCurrentUser = createAsyncThunk(
  "currentUser/getFollowingCurrentUser",
  async (_, thunk_Api) => {
    try {
      const { data } = await Api.get(`followinf`);
      // const following=[]
      if (data.length > 0) {
        return data.map((el) => el.userId);
      }
      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
export const deleteFollowingCurrentUser = createAsyncThunk(
  "currentUser/updateFollowingCurrentUser",
  async (id, thunk_Api) => {
    try {
      const { data } = await Api.get(`followinf`);
      // const following=[]
      if (data.length > 0) {
        return data.map((el) => el.userId);
      }
      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
