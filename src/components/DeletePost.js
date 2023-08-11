import React from "react";
import axios from "axios";
function DeletePost({ postId }) {
  const handleDelete = () => {
    axios.delete("http://localhost:5000/start/" + postId);
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
