import React from "react";
import NewPost from "./components/NewPost";
import Threads from "./components/Threads";
function App() {
  const [userId, setUserId] = React.useState("");
  return (
    <div className="container mx-auto h-full w-full flex flex-col justify-center items-center">
      <input
        type="text"
        placeholder="Entrez votre nom"
        className="p-2 border-2 rounded border-indigo-500/100 w-96 m-2"
        onChange={(e) => setUserId(e.target.value)}
      />
      <div className="w-96 m-2">
        <NewPost userId={userId} />
        <Threads userId={userId} />
      </div>
    </div>
  );
}

export default App;
