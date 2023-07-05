import css from "./UserFoto.module.css";

const UserFoto = (props) => {
  const url = props;
  const urlCurrent = url.url;

  return (
    <div className={css.cardUser}>
      {/* <img className={css.card_User} src={Ellipse} alt="Ellipse" /> */}

      <img className={css.cardUser_foto} src={urlCurrent} alt="urlUser" />
    </div>
  );
};

export default UserFoto;
