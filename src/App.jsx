import React, { useState } from "react";
import TopBar from "./Components/TopBar";

function App() {
  const [ability, setAbiliti] = useState(["Front-end", "Back-end"]);
  return (
    <div className="bg-primary">
      <TopBar />
      <div className="h-screen container flex bg-custom-orange items-center">
        <div className="">
          <h2
            className="text-4xl bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 font-bold
        bg-clip-text text-transparent"
          >
            Hi, Im Mahdi Monavari
          </h2>

          <h2 className="text-white text-start text-4xl">
            <span
              className="bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 font-bold
        bg-clip-text text-transparent"
            >
              Im{" "}
            </span>
            <span
              className="bg-gradient-to-r from-pink-700 via-red-200 to-pink-700 font-bold 
              inline-block origin-bottom-left rotate-45 bg-clip-text text-transparent"
            >
              {ability[0]}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
