import React from "react";
import LikePost from "./LikePost";
import { useState, useEffect } from "react";
import axios from "axios";
import DeletePost from "./DeletePost";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../feature/post.slice";
function Post({ post }) {
  const [isAuthor, setIsAuthor] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  useEffect(() => {
    if (post.author === userId) {
      setIsAuthor(true);
    } else {
      setIsAuthor(false);
    }
  }, [userId, post.author]);

  const handleEdit = () => {
    if (newMessage) {
      axios.put("http://localhost:5000/start/" + post._id, {
        message: newMessage,
      });
      dispatch(editPost(newMessage, post._id));
    }
  };
  const dateFormater = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };
  return (
    <div className="shadow p-2 rounded-md border m-2 bg-white w-96 mx-auto my-2 ">
      <div className="flex justify-between items-center p-1">
        <h3 className="font-bold text-indigo-500">{post.author}</h3>
        <p className="italic">posté le {dateFormater(post.createdAt)}</p>
      </div>
      {isEdit ? (
        <form className="flex flex-col align-center">
          <textarea
            defaultValue={post.message}
            className="p-2 border-2 rounded border-indigo-500/100 m-2"
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="rounded bg-indigo-500/100 p-2 text-white fond-bold m-2"
            onClick={() => {
              setIsEdit(false);
              handleEdit();
            }}
          >
            Editer
          </button>
        </form>
      ) : (
        <p>{newMessage ? newMessage : post.message}</p>
      )}
      <div className="flex justify-between">
        <LikePost post={post} userId={userId} />

        {isAuthor && (
          <div>
            <span className="m-2">
              <i
                className="fa fa-pencil-square text-gray-400 "
                aria-hidden="true"
                onClick={() => {
                  setIsEdit(!isEdit);
                  handleEdit();
                }}
              ></i>
            </span>

            <DeletePost postId={post._id} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
