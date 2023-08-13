import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deletePost } from "../feature/post.slice";
function DeletePost({ postId }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    axios.delete("http://localhost:5000/start/" + postId);
    dispatch(deletePost(postId));
  };
  return (
    <span
      onClick={() => {
        handleDelete();
        alert("Votre post a bien été supprimé");
      }}
      className="text-red-500"
    >
      <i className="fa fa-trash text-red-500" aria-hidden="true"></i>
    </span>
  );
}
export default DeletePost;
