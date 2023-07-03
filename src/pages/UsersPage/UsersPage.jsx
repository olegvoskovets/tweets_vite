import { useEffect } from "react";
// import UserCard from "../../components/UserCard/UserCard";
import css from "./UsersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/UsersSlice/operationsUsers";
import {
  selectIsLoadingUsers,
  selectPage,
  selectUsers,
} from "../../redux/UsersSlice/selectorsUsers";
import { Loader } from "../../components/Loader/Loader";
import UsersList from "../../components/UsersList/UsersList";
import { addPage } from "../../redux/UsersSlice/UsersSlice";
// import { getFollowingCurrentUser } from "../../redux/currentUser/operationsCurrentUser";

const UsersPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    if (page > 1) return;
    dispatch(getUsers(page));
    dispatch(addPage());
    // dispatch(getFollowingCurrentUser());
  });

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoadingUsers);

  const handleClick = () => {
    dispatch(getUsers(page));
    dispatch(addPage());
  };
  return (
    <section className={css.usersPage}>
      {isLoading && page < 2 ? (
        <Loader />
      ) : (
        <>
          <UsersList users={users} />
          {page <= 6 && !isLoading && (
            <button className={css.load_more} onClick={handleClick}>
              Load More
            </button>
          )}
        </>
      )}
      {isLoading && <Loader />}
    </section>
  );
};

export default UsersPage;
