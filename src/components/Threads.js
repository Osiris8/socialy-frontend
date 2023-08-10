import axios from "axios";
import React, { useEffect } from "react";
import Post from "./Post";
function Threads({ userId }) {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/start/`).then((res) => {
      setPosts(res.data);
    });
  }, []);
  return (
    <div className="container">
      {posts
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((post) => (
          <Post key={post._id} post={post} userId={userId} />
        ))}
    </div>
  );
}
export default Threads;
