import css from "./Post.module.css";

const Post = (post) => {
  const post_Current = post?.post;

  const getDateFormat = (date) => {
    const newDate = new Date(date);
    let day = newDate.getDate();
    console.log(day); // 23

    let month = newDate.getMonth();
    console.log(month + 1); // 8

    let year = newDate.getFullYear();
    return `${day}.${month + 1}.${year}`;
  };
  return (
    <div className={css.post}>
      <div className={css.header}>
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
        <button className={css.btnFooter} onClick={"handleLikesPost"}>
          {/* <ThumbUpOffAltIcon /> */}
          Подобається
        </button>
        <button className={css.btnFooter} onClick={"nandleAddComment"}>
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
