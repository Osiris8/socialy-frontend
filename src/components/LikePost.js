import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
function LikePost({ post }) {
  const [userLiked, setUserLiked] = useState(false);
  const userId = useSelector((state) => state.user.userId);
  useEffect(() => {
    if (post.likers) {
      if (post.likers.includes(userId)) {
        setUserLiked(true);
      } else {
        setUserLiked(false);
      }
      console.log(userLiked);
    }
  }, [userId, post.likers, userLiked]);

  const likePost = () => {
    axios.patch("http://localhost:5000/start/like-post/" + post._id, {
      userId: userId,
    });
    setUserLiked(true);
  };

  const dislikePost = () => {
    axios.patch("http://localhost:5000/start/dislike-post/" + post._id, {
      userId: userId,
    });
    setUserLiked(false);
  };

  return (
    <div>
      <p>
        <span className="p-2">{post.likers ? post.likers.length : 0}</span>
        {userLiked ? (
          <span onClick={() => dislikePost()}>
            <i className="fa fa-heart text-indigo-500" aria-hidden="true"></i>
          </span>
        ) : (
          <span onClick={() => likePost()}>
            <i className="fa fa-heart text-gray-400" aria-hidden="true"></i>
          </span>
        )}
      </p>
    </div>
  );
}
export default LikePost;
