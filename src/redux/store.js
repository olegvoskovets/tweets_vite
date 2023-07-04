import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { usersReduser } from "./UsersSlice/UsersSlice";
import { currentUserReduser } from "./currentUser/currentUserSlice";

const persistFollowingCurrentUser = {
  key: "wollowing",
  storage,
  whitelist: ["following"],
};

const persistedFollowingReducer = persistReducer(
  persistFollowingCurrentUser,
  currentUserReduser
);

export const store = configureStore({
  reducer: {
    users: usersReduser,
    followingCurrentUser: persistedFollowingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
