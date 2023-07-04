// import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import PlaceIcon from "@mui/icons-material/Place";
// import LanguageIcon from "@mui/icons-material/Language";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import Facebook from "../../images/facebook.png";
import Linkedin from "../../images/linked.png";
import Tweetter from "../../images/tweeter.png";
import Instagram from "../../images/instagr.jpg";
import Telegramm from "../../images/telegram.png";
import { useEffect } from "react";
import css from "./Prpfile.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersProfile } from "../../redux/UsersSlice/operationsUsers";
import {
  selectIsLoadingUsers,
  selectUsersProofile,
} from "../../redux/UsersSlice/selectorsUsers";
import { Loader } from "../Loader/Loader";
import fotoBackgound from "../../images/profile_background.png";
// import

const Profile = () => {
  const { id } = useParams();
  console.log("Profile", id);

  const currentUser = true;

  const friend = true;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;
    dispatch(getUsersProfile(id));
  }, [dispatch, id]);
  const userProfile = useSelector(selectUsersProofile);
  const isLoading = useSelector(selectIsLoadingUsers);
  const setOpenUpdate = () => {
    console.log("setOpenUpdate");
  };
  return (
    <div className={css.profile}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {userProfile && (
            <>
              <div className={css.images}>
                <img src={fotoBackgound} alt="picture" className={css.cover} />
                <img
                  src={userProfile.avatar}
                  alt="avatap"
                  className={css.profilePic}
                />
              </div>

              <div className={css.profileContainer}>
                <div className={css.uInfo}>
                  <div className={css.left}>
                    <a href="http://facebook.com">
                      <img
                        src={Facebook}
                        alt="facebook"
                        className={css.iconImg}
                      />
                    </a>
                    <a href="http://linkedin.com">
                      <img
                        src={Linkedin}
                        alt="facebook"
                        className={css.iconImg}
                      />
                    </a>
                    <a href="http://twetter.com">
                      <img
                        src={Tweetter}
                        alt="twetter"
                        className={css.iconImg}
                      />
                    </a>
                    <a href="http://Instagram.com">
                      <img
                        src={Instagram}
                        alt="Instagram"
                        className={css.iconImg}
                      />
                    </a>
                    <a href="http://telegram.com">
                      <img
                        src={Telegramm}
                        alt="telegram"
                        className={css.iconImg}
                      />
                    </a>
                  </div>
                  <div className={css.center}>
                    <span className={css.profileName}>{userProfile.name}</span>
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
                    {userProfile === currentUser ? (
                      <button
                        className={css.save_foto}
                        onClick={() => setOpenUpdate(true)}
                      >
                        Змінити данні
                      </button>
                    ) : (
                      <button>follow</button>
                    )}

                    {userProfile.id !== 2 && (
                      <button
                        onClick={
                          () => console.log("FFF")
                          //   inviteToBeFriends(
                          //     friend ? "Ви друзі" : requestOpcion.message
                          //   )
                        }
                      >
                        {friend ? "Ви друзі. Видалити?" : "Ви не друзі"}
                        {/*  whatRequests()*/}
                      </button>
                    )}
                  </div>
                  <div className={css.right}>
                    {/* <EmailOutlinedIcon /> */}
                    <span>{userProfile.name}_1989@ukr.net</span>

                    {/* <MoreVertIcon /> */}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}

      {/* {openUpdate && (
        <Update
          setOpenUpdate={setOpenUpdate}
          user={userProfile}
          setNewCurrentUser={setNewCurrentUser}
        />
      )}
      {userProfile && <PostProfile userProfile={userProfile} />}
      <GamesUser userId={userId} /> */}
    </div>
  );
};

export default Profile;
