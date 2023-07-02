import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./operationsUsers";
// import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
  users: [],
  page: 1,
  isLoading: false,
  isError: null,
  //   visibleForm: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addPage(state) {
      console.log("adding addPage");
      state.page = state.page + 1;
    },
    resetPage(state) {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        console.log("payload: " + payload);
        state.users = [...state.users, ...payload];
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const { addPage, resetPage } = usersSlice.actions;
export const usersReduser = usersSlice.reducer;
