import { useState } from "react";
import Logo from "../../images/logo.png";
import css from "./Tweet.module.css";
import CardUser from "../CardUser/CardUser";

const Tweet = () => {
  const [following, setFollowing] = useState(false);

  const handleClickFollowing = () => {
    setFollowing(!following);
  };
  return (
    <div className={css.tweet}>
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
        <CardUser />
      </div>
      <div className={css.button_block}>
        <div className={css.button_block_position}>
          <div className={css.tweets_count}>777 Tweets</div>
          <div className={css.followers_count}>100,500 Followers</div>
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
    </div>
  );
};

export default Tweet;
