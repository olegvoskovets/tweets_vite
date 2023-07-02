import { useState } from "react";
import Logo from "../../images/logo.png";
// import difoltFoto from "../../images/user18.png";
import UserFoto from "../UserFoto/UserFoto";
import css from "./Card.module.css";

const Card = (props) => {
  const user = props;
  const currentUser = user.user;
  // console.log("currentUser ", currentUser);
  const [following, setFollowing] = useState(false);

  const handleClickFollowing = () => {
    setFollowing(!following);
  };
  return (
    <li className={css.cardUser}>
      {/* <img src={difoltFoto} alt="" /> */}
      <div className={css.top}>
        <img
          className={css.logo}
          src={Logo}
          width={"76px"}
          height={"22px"}
          alt="logo"
        />
        <div className={css.background_card}></div>
      </div>
      <div className={css.rectangle}>
        <UserFoto userUrl={currentUser.avatar} />
      </div>
      <div className={css.button_block}>
        <div className={css.button_block_position}>
          <div className={css.tweets_count}>{currentUser.tweets} Tweets</div>
          <div className={css.followers_count}>
            {currentUser.followers} Followers
          </div>
          <button
            className={
              following
                ? `${css.btn_follow} ${css.btn_following}`
                : `${css.btn_follow}`
            }
            onClick={handleClickFollowing}
          >
            <span className={css.btn_text}>
              {following ? "Following" : "Follow"}
            </span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
