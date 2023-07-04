// import { useSelector } from "react-redux";
// import { selectFollowingCurrentUser } from "../redux/currentUser/selectorsCurrentUser";
// import { selectUsers } from "../redux/UsersSlice/selectorsUsers";
// //import { updateFilter } from "../redux/UsersSlice/UsersSlice";

// export const VisibleUsersFilter = (value) => {
//   const followers = useSelector(selectFollowingCurrentUser);
//   const users = useSelector(selectUsers);
//   //const dispatch = useDispatch();
//   let filter = [];
//   if (value === "followings") {
//     filter = users.filter((user) =>
//       followers.find((userId) => Number(user.id) === Number(userId))
//     );
//   } else if (value === "follow") {
//     users.forEach((user) => {
//       const result = followers.includes(Number(user.id));

//       if (!result) {
//         filter.push(user);
//       }
//     });
//   } else {
//     filter = [...users];
//   }
//   //dispatch(updateFilter(filter));
//   return filter;
// };
