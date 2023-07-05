import { createSlice } from "@reduxjs/toolkit";
import { getPosts, getUsers, getUsersProfile } from "./operationsUsers";

const initialState = {
  users: [],
  posts: [],
  dropdown_following: "all_follow",
  page: 1,
  isLoading: false,
  isError: null,
  usersProfile: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addPage(state) {
      state.page = state.page + 1;
    },
    resetPage(state) {
      state.page = 1;
    },
    updateFilter(state, { payload }) {
      state.filterFollowing = payload;
    },
    updateDropdownFollowing(state, { payload }) {
      state.dropdown_following = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = [...state.users, ...payload];
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(getUsersProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(getUsersProfile.fulfilled, (state, { payload }) => {
        state.usersProfile = payload;
        state.isLoading = false;
      })
      .addCase(getUsersProfile.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.posts = [...payload];
        state.isLoading = false;
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const { addPage, resetPage, updateFilter, updateDropdownFollowing } =
  usersSlice.actions;
export const usersReduser = usersSlice.reducer;
