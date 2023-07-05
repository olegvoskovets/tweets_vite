import { useEffect, useState } from "react";
import css from "./Post.module.css";
import { getUsersProfile } from "../../redux/UsersSlice/operationsUsers";
import { useDispatch } from "react-redux";

const Post = (post) => {
  const post_Current = post?.post;
  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // You can await here
      const response = await dispatch(
        getUsersProfile(post_Current.userId)
      ).unwrap();
      // ...
      setUserPosts(response);
    };
    fetchData();
  }, [dispatch, post_Current]);

  const getDateFormat = (date) => {
    const newDate = new Date(date);
    let day = newDate.getDate();

    let month = newDate.getMonth();

    let year = newDate.getFullYear();
    return `${day}.${month + 1}.${year}`;
  };
  return (
    <div className={css.post}>
      <div className={css.header}>
        <div className={css.header_position}>
          <img className={css.avatar} src={userPosts?.avatar} alt="" />
          <span>{userPosts?.name}</span>
        </div>

        <span>{getDateFormat(post_Current.date)}</span>
      </div>

      <div className={css.post_text}>{post_Current.post}</div>
      <div className={css.foto_position}>
        <img
          className={css.postFoto}
          src={post_Current.postFoto}
          alt="avatar"
        />
      </div>

      <div className={css.post_footer_btn}>
        <button className={css.btnFooter}>
          {/* <ThumbUpOffAltIcon /> */}
          Подобається
        </button>
        <button className={css.btnFooter}>
          {/* <ChatBubbleOutlineIcon /> */}
          Коментувати
        </button>
        <button className={css.btnFooter}>
          {/* <ScreenShareIcon /> */}
          Поширити
        </button>
      </div>
    </div>
  );
};

export default Post;
