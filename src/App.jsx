import React from "react";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <div className="bg-primary">
      <TopBar />
      <div className="h-screen container">
        <div className="bg-custom-orange h-full"></div>
      </div>
    </div>
  );
}

export default App;
