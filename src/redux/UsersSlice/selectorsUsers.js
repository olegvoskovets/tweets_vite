import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectFollowingCurrentUser } from "../currentUser/selectorsCurrentUser";

export const selectUsers = (state) => state.users.users;
export const selectIsLoadingUsers = (state) => state.users.isLoading;
export const selectPage = (state) => state.users.page;
export const selectFilterFollowing = (state) => state.users.filterFollowing;
export const selectDropdownFollowing = (state) =>
  state.users.dropdown_following;

export const selectFilterSearch = createSelector(
  [selectUsers, selectDropdownFollowing],
  (users, filter) => {
    console.log(users);
    if (users.length === 0) return [];

    let visibleCard = [];
    const followers = useSelector(selectFollowingCurrentUser);

    if (filter === "followings") {
      console.log("followings");
      visibleCard = users?.filter((user) =>
        followers?.find((userId) => Number(user.id) === Number(userId))
      );
    } else if (filter === "follow") {
      users.forEach((user) => {
        const result = followers?.includes(Number(user.id));

        if (!result) {
          visibleCard.push(user);
        }
      });
    } else {
      visibleCard = [...users];
    }
    return visibleCard;
  }
);
