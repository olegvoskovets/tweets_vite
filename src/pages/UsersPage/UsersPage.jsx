import { useEffect } from "react";

import css from "./UsersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/UsersSlice/operationsUsers";
import {
  selectFilterFollowing,
  selectIsLoadingUsers,
  selectPage,
} from "../../redux/UsersSlice/selectorsUsers";
import { Loader } from "../../components/Loader/Loader";
import UsersList from "../../components/UsersList/UsersList";
import { addPage } from "../../redux/UsersSlice/UsersSlice";

const UsersPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    if (page > 1) return;
    dispatch(getUsers(page));
    dispatch(addPage());
  });

  const isLoading = useSelector(selectIsLoadingUsers);
  const usersfilter = useSelector(selectFilterFollowing);

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
          <UsersList users={usersfilter} />
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
