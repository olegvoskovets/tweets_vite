import css from "./UsersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/UsersSlice/operationsUsers";
import {
  selectDropdownFollowing,
  selectIsLoadingUsers,
  selectPage,
  selectUsers,
} from "../../redux/UsersSlice/selectorsUsers";
import { Loader } from "../../components/Loader/Loader";
import UsersList from "../../components/UsersList/UsersList";
import { addPage } from "../../redux/UsersSlice/UsersSlice";
import { useEffect } from "react";
import { selectFollowingCurrentUser } from "../../redux/currentUser/selectorsCurrentUser";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const isLoading = useSelector(selectIsLoadingUsers);

  const users = useSelector(selectUsers);
  const followers = useSelector(selectFollowingCurrentUser);
  const filterValue = useSelector(selectDropdownFollowing);

  useEffect(() => {
    if (page > 1) return;
    dispatch(getUsers(page));
    dispatch(addPage());
  }, [dispatch, page]);

  const visibleUsersFilter = (value) => {
    let filter = [];
    if (value === "followings") {
      filter = users.filter((user) =>
        followers.find((userId) => Number(user.id) === Number(userId))
      );
    } else if (value === "follow") {
      users.forEach((user) => {
        const result = followers.includes(Number(user.id));

        if (!result) {
          filter.push(user);
        }
      });
    } else {
      filter = [...users];
    }

    return filter;
  };

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
          <button className={css.btnBack}>
            <Link to="/">
              <span className={css.back}>Back</span>{" "}
            </Link>
          </button>
          <UsersList
            users={
              filterValue === "all_follow"
                ? users
                : visibleUsersFilter(filterValue)
            }
          />
          {page <= 6 && !isLoading && (
            <button className={css.load_more} onClick={handleClick}>
              Load More
            </button>
          )}
          {isLoading && <Loader />}
        </>
      )}
    </section>
  );
};

export default UsersPage;
