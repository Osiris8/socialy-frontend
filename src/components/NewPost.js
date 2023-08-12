import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
function NewPost() {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const handleForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/start", {
      author: userId,
      message: message,
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
