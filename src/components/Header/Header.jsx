import { Link } from "react-router-dom";
import currentUser from "../../images/currentUser.jpg";
import Select from "react-select";
import css from "./Header.module.css";
import { useDispatch } from "react-redux";
import { updateDropdownFollowing } from "../../redux/UsersSlice/UsersSlice";

const Header = () => {
  const dispatch = useDispatch();
  const options = [
    { value: "all_follow", label: "All follow" },
    { value: "follow", label: "Follow " },
    { value: "followings", label: "Followings " },
  ];

  const nahdleChange = (value) => {
    dispatch(updateDropdownFollowing(value.value));
  };
  return (
    <div className={css.header}>
      <div className={`${css.container} ${css.header_position}`}>
        <div className="left">
          <Link to="./ " className={css.logo}>
            <span>Social tweets</span>
          </Link>
        </div>
        <Select
          options={options}
          className={css.select}
          defaultValue={options[0]}
          onChange={nahdleChange}
        />

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
