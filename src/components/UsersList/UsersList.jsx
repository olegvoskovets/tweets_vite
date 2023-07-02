import Card from "../Card/Card";
//import UserCard from "../UserCard/UserCard";
// import UserFoto from "../UserFoto/UserFoto";
// import Logo from "../../images/logo.png";
import css from "./UsersList.module.css";
// import { useState } from "react";

const UsersList = (users) => {
  const data = users.users;
  console.log("UsersList ", data);

  return (
    <>
      <ul className={css.user_list}>
        {data.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
