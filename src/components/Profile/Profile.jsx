import Facebook from "../../images/facebook.png";
import Linkedin from "../../images/linked.png";
import Tweetter from "../../images/tweeter.png";
import Instagram from "../../images/instagr.jpg";
import Telegramm from "../../images/telegram.png";
import currentUserFoto from "../../images/currentUser.jpg";
import { useEffect, useRef, useState } from "react";
import css from "./Prpfile.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersProfile } from "../../redux/UsersSlice/operationsUsers";
import {
  selectIsLoadingUsers,
  selectUsersProofile,
} from "../../redux/UsersSlice/selectorsUsers";
import { Loader } from "../Loader/Loader";
import fotoBackgound from "../../images/profile_background.png";
import { selectFollowingCurrentUser } from "../../redux/currentUser/selectorsCurrentUser";
import {
  addFollowing,
  resetFollowing,
} from "../../redux/currentUser/currentUserSlice";
// import

const Profile = () => {
  const location = useLocation();
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id !== "currentUser") {
      dispatch(getUsersProfile(id));
    }
  }, [dispatch, id]);

  const { current } = useRef(location.state?.from);

  const friend = true;

  const isLoading = useSelector(selectIsLoadingUsers);

  const follows = useSelector(selectFollowingCurrentUser);
  const [following, setFollowing] = useState(follows.includes(Number(id)));

  const userProfile = useSelector(selectUsersProofile);

  const toogleFollowinf = () => {
    setFollowing(!following);
    dispatch(following ? resetFollowing(id) : addFollowing(id));
  };

  // if (!userProfile) return;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={css.images}>
            <img src={fotoBackgound} alt="picture" className={css.cover} />
            <img
              src={id !== "currentUser" ? userProfile?.avatar : currentUserFoto}
              alt="avatap"
              className={css.profilePic}
            />
          </div>

          <div className={css.profileContainer}>
            <div className={css.uInfo}>
              <div className={css.left}>
                <a href="http://facebook.com">
                  <img src={Facebook} alt="facebook" className={css.iconImg} />
                </a>
                <a href="http://linkedin.com">
                  <img src={Linkedin} alt="facebook" className={css.iconImg} />
                </a>
                <a href="http://twetter.com">
                  <img src={Tweetter} alt="twetter" className={css.iconImg} />
                </a>
                <a href="http://Instagram.com">
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className={css.iconImg}
                  />
                </a>
                <a href="http://telegram.com">
                  <img src={Telegramm} alt="telegram" className={css.iconImg} />
                </a>
              </div>
              <div className={css.center}>
                <span className={css.profileName}>
                  {id !== "currentUser" ? userProfile?.name : "Djon"}
                </span>
                <div className={css.info}>
                  <div className={css.item}>
                    {/* <PlaceIcon /> */}
                    <span>Київ</span>
                  </div>
                  <div className={css.item}>
                    {/* <LanguageIcon /> */}
                    <span>website</span>
                  </div>
                </div>
                {id !== "currentUser" && (
                  <button
                    className={following ? `${css.active}` : `${css.btn}`}
                    onClick={toogleFollowinf}
                  >
                    {following ? "Following" : "Follow"}
                  </button>
                )}

                {id !== "currentUser" && (
                  <button>
                    {friend ? "Ви друзі. Видалити?" : "Ви не друзі"}
                    {/*  whatRequests()*/}
                  </button>
                )}
              </div>
              <div className={css.right}>
                {/* <EmailOutlinedIcon /> */}
                <span>
                  {id !== "currentUser"
                    ? `${userProfile.name}_1989@ukr.net`
                    : "Djon_1986@ukr.net"}
                </span>

                {/* <MoreVertIcon /> */}
              </div>
            </div>
          </div>
          <button className={css.black}>
            <Link to={current ?? "/"}>
              <span className={css.btnText}>Повернутись</span>
            </Link>
          </button>
        </>
      )}
    </>
  );
};

export default Profile;
