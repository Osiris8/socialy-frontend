import React from "react";

function App() {
  const [userId, setUserId] = React.useState("");
  return (
    <div className="container mx-auto h-full w-full flex flex-col justify-center items-center">
      <input
        type="text"
        placeholder="Entrez votre nom"
        className="p-2 rounded-md border-2 border-black w-96 m-8"
        onChange={(e) => setUserId(e.target.value)}
      />
      <div className="p-2 rounded-md border-2 shadow-sm w-96 m-8">{userId}</div>
    </div>
  );
}

export default App;
