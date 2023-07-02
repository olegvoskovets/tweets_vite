import css from "./CardUser.module.css";
import card_user from "../../images/user1.png";
// import Ellipse from "../../images/Ellipse 1.svg";

const CardUser = () => {
  return (
    <div className={css.cardUser}>
      {/* <img className={css.card_User} src={Ellipse} alt="Ellipse" /> */}
      <img className={css.cardUser_foto} src={card_user} alt="" />
    </div>
  );
};

export default CardUser;
