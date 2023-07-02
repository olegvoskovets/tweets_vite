import { useEffect } from "react";
// import UserCard from "../../components/UserCard/UserCard";
// import css from "./UsersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/UsersSlice/operationsUsers";
import {
  selectIsLoadingUsers,
  selectUsers,
} from "../../redux/UsersSlice/selectorsUsers";
import { Loader } from "../../components/Loader/Loader";
import UsersList from "../../components/UsersList/UsersList";

const UsersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoadingUsers);

  return <>{isLoading ? <Loader /> : <UsersList users={users} />}</>;
};

export default UsersPage;
