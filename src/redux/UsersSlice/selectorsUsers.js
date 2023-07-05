export const selectUsers = (state) => state.users.users;
export const selectIsLoadingUsers = (state) => state.users.isLoading;
export const selectPage = (state) => state.users.page;
export const selectFilterFollowing = (state) => state.users.filterFollowing;
export const selectDropdownFollowing = (state) =>
  state.users.dropdown_following;
export const selectUsersProofile = (state) => state.users.usersProfile;
export const selectPosts = (state) => state.users.posts;
