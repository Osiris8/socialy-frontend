import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, createPost } from "../feature/post.slice";
function NewPost() {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      author: userId,
      message: message,
      //creation id provisoire avant le retour de la B
      _id: Date.now(),
    };

    axios.post("http://localhost:5000/start", data).then((res) => {
      dispatch(createPost(data));
      //On fait un getpost afin de chercher l'id par mongodb et l'afficher dans redux store
      dispatch(getPosts());
    });
    setMessage("");
  };
  return (
    <form onSubmit={(e) => handleForm(e)}>
      <textarea
        placeholder="Entrez votre message"
        rows="4"
        className="w-96 p-2 border-2 rounded border-indigo-500/100"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <button className="rounded bg-indigo-500/100 p-2 text-white fond-bold w-full">
        Envoyer
      </button>
    </form>
  );
}

export default NewPost;
