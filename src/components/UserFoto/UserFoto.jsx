import css from "./UserFoto.module.css";
import card_user from "../../images/user1.png";
// import Ellipse from "../../images/Ellipse 1.svg";

const UserFoto = (userUrl) => {
  console.log("userUrl", userUrl);
  const url = userUrl.userUrl;

  return (
    <div className={css.cardUser}>
      {/* <img className={css.card_User} src={Ellipse} alt="Ellipse" /> */}
      <img className={css.cardUser_foto} src={url} alt="urlUser" />
    </div>
  );
};

export default UserFoto;
