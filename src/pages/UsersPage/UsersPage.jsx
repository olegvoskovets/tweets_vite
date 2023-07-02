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

const UsersPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    if (page > 1) return;
    dispatch(getUsers(page));
    dispatch(addPage());
  }, []);

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoadingUsers);

  const handleClick = () => {
    dispatch(addPage());
    dispatch(getUsers(page));
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <UsersList users={users} />
          {page <= 6 && (
            <button className={css.load_more} onClick={handleClick}>
              Load More
            </button>
          )}
        </>
      )}
    </>
  );
};

export default UsersPage;
