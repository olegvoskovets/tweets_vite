import { useState } from "react";
import Logo from "../../images/logo.png";
import UserFoto from "../UserFoto/UserFoto";
import css from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFollowingCurrentUser } from "../../redux/currentUser/selectorsCurrentUser";
import {
  addFollowing,
  resetFollowing,
} from "../../redux/currentUser/currentUserSlice";
import { Link, useLocation } from "react-router-dom";

const Card = (props) => {
  const location = useLocation();

  const dispatch = useDispatch();

  const user = props;
  const currentUser = user.user;

  const follows = useSelector(selectFollowingCurrentUser);
  const [following, setFollowing] = useState(
    follows.includes(Number(currentUser.id))
  );
  const [followers, setFollowers] = useState(
    following ? currentUser.followers + 1 : currentUser.followers
  );

  const schangeFollowers = () => {
    setFollowers((prev) => (following ? prev - 1 : prev + 1));
  };

  const handleClickFollowing = () => {
    setFollowing(!following);
    schangeFollowers();

    dispatch(
      following ? resetFollowing(currentUser.id) : addFollowing(currentUser.id)
    );
  };
  const outputFollowers = (value) => {
    const arr = String(value).split("");

    if (arr.length > 3) {
      arr.splice(-3, 0, ",");
      return arr.join("");
    } else {
      return value;
    }
  };

  return (
    <>
      <li className={css.cardUser}>
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
          <Link to={`/profile/${currentUser.id}`} state={{ from: location }}>
            <UserFoto url={currentUser.avatar} id={currentUser.id} />
          </Link>
        </div>
        <div className={css.button_block}>
          <div className={css.button_block_position}>
            <div className={css.tweets_count}>{currentUser.tweets} Tweets</div>
            <div className={css.followers_count}>
              {outputFollowers(followers)} Followers
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
    </>
  );
};

export default Card;
