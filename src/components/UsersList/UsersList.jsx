// import { useSelector } from "react-redux";
import Card from "../Card/Card";

import css from "./UsersList.module.css";
// import { selectFollowingCurrentUser } from "../../redux/currentUser/selectorsCurrentUser";

const UsersList = (users) => {
  const data = users.users;
  // const follows = useSelector(selectFollowingCurrentUser);
  return (
    <>
      <ul className={css.user_list}>
        {data.map((user) => (
          <Card
            key={user.id}
            user={user}
            // follows={follows.includes(Number(user.id))}
          />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
