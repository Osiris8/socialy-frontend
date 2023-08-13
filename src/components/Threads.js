import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feature/post.slice";
function Threads() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postsData);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="container">
      {posts &&
        posts
          .slice()
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
          .map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
}
export default Threads;
