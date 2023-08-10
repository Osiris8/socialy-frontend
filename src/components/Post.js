import React from "react";
function Post({ post, userId }) {
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
      <p className="p-2">{post.message}</p>
      <p>
        <span className="p-2">0</span>
        <span>
          <i class="fa fa-heart text-indigo-500/100" aria-hidden="true"></i>
        </span>
      </p>
    </div>
  );
}

export default Post;
