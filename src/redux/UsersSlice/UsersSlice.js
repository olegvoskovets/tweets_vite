import { createSlice } from "@reduxjs/toolkit";
import { getUsers, updateFilterVisible } from "./operationsUsers";

const initialState = {
  users: [],
  filterFollowing: [],
  dropdown_following: "all_follow",
  page: 1,
  isLoading: false,
  isError: null,
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
      .addCase(updateFilterVisible.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(updateFilterVisible.fulfilled, (state, { payload }) => {
        state.filterFollowing = payload;
        state.isLoading = false;
      })
      .addCase(updateFilterVisible.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const { addPage, resetPage, updateFilter, updateDropdownFollowing } =
  usersSlice.actions;
export const usersReduser = usersSlice.reducer;
