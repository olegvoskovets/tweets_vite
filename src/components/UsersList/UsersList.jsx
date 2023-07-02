import Card from "../Card/Card";
//import UserCard from "../UserCard/UserCard";
// import UserFoto from "../UserFoto/UserFoto";
// import Logo from "../../images/logo.png";
import css from "./UsersList.module.css";
// import { useState } from "react";

const UsersList = (users) => {
  const data = users.users;
  // console.log("UsersList ", data);
  // const [following, setFollowing] = useState(false);

  // const handleClickFollowing = () => {
  //   setFollowing(!following);
  // };
  // const getResult = (user) => {
  //   console.log("user&&& ===", user);
  //   return (
  //     <li key={user.id}>
  //       <li className={css.cardUser}>
  //         <div className={css.top}>
  //           <img
  //             className={css.logo}
  //             src={Logo}
  //             width={"76px"}
  //             height={"22px"}
  //             alt="logo"
  //           />
  //           <div className={css.background_card}></div>
  //         </div>
  //         <div className={css.rectangle}>
  //           <UserFoto userUrl={"user"} />
  //         </div>
  //         <div className={css.button_block}>
  //           <div className={css.button_block_position}>
  //             <div className={css.tweets_count}>{user.tweets} Tweets</div>
  //             <div className={css.followers_count}>100,500 Followers</div>
  //             <button
  //               className={
  //                 following
  //                   ? `${css.btn_follow} ${css.btn_following}`
  //                   : `${css.btn_follow}`
  //               }
  //               onClick={handleClickFollowing}
  //             >
  //               <span className={css.btn_text}>
  //                 {following ? "Following" : "Follow"}
  //               </span>
  //             </button>
  //           </div>
  //         </div>
  //       </li>
  //     </li>
  //   );
  // };
  return (
    <ul className={css.user_list}>
      {data.map(
        (user) => (
          <Card key={user.id} user={user} />
          // <UserCard key={user.id} props={user} />
        )
        // getResult(user)
        // <li key={user.id}>{user}</li>
        // console.log("user========", user){}
        //
      )}
    </ul>
  );
};

export default UsersList;
