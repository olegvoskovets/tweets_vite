import { Link } from "react-router-dom";
import currentUser from "../../images/currentUser.jpg";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <div className={`${css.container} ${css.header_position}`}>
        <div className="left">
          <Link to="./ " className={css.logo}>
            <span>Social tweets</span>
          </Link>
        </div>
        <div className={css.rigth}>
          <Link to="/profile/:id">
            <div className={css.currentUser_login}>
              <img
                src={currentUser}
                alt="currentUser"
                className={css.currentUser_foto}
              />
              <span className={css.name}>Djon</span>
            </div>
          </Link>
          <span className={css.logOut}>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
