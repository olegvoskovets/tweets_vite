import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./operationsUsers";
// import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
  users: [],
  //   filter: "",
  isLoading: false,
  isError: null,
  //   visibleForm: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

// export const { getFilter, toogleVisibleForm, logOutContacts } = usersSlice.actions;
export const usersReduser = usersSlice.reducer;
