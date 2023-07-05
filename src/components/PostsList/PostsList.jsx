import { useEffect } from "react";
import Post from "../Post/Post";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/UsersSlice/operationsUsers";
import {
  selectIsLoadingUsers,
  selectPosts,
} from "../../redux/UsersSlice/selectorsUsers";
import { Loader } from "../Loader/Loader";
import css from "./PostsList.module.css";

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoadingUsers);
  // console.log("PostsList", posts);

  return (
    <section className={css.containerPost}>
      <ul className={css.posts}>
        {isLoading && <Loader />}

        {posts?.map((post) => (
          <li className={css.list} key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostsList;
