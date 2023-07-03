import { createSlice } from "@reduxjs/toolkit";
import { getFollowingCurrentUser } from "./operationsCurrentUser";

// import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
  following: [],

  isLoading: false,
  isError: null,
  //   visibleForm: false,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    addPage(state) {
      state.page = state.page + 1;
    },
    resetPage(state) {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFollowingCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(getFollowingCurrentUser.fulfilled, (state, { payload }) => {
        state.following = [...payload];
        state.isLoading = false;
      })
      .addCase(getFollowingCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

// export const { getFollowingCurrentUser } = currentUserSlice.actions;
export const currentUserReduser = currentUserSlice.reducer;
