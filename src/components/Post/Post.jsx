import css from "./Post.module.css";

const Post = (post) => {
  const post_Current = post.post;

  return (
    <div className={css.post}>
      <div className={css.header}>
        {/* <img className={css.avatar} src={user.avatar} alt="avatar" />
        <span>{user.name}</span> */}
      </div>
      <div className={css.post_text}>{post_Current.post}</div>
      <div className={css.footer}></div>
    </div>
  );
};

export default Post;
