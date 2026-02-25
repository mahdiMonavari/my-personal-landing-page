import React, { useEffect, useState } from "react";
import TopBar from "./Components/TopBar";
import { clsx } from "clsx";

function App() {
  const ability = ["Front-end", "Back-end", "SEO"];
  const [state, setState] = useState(0);
  const [isRoutation, setIsRoutation] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsRoutation(true);
      setTimeout(() => {
        setIsRoutation(false);
        state < 2 ? setState(state + 1) : setState(0);
      }, 300);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [state]);

  return (
    <div className="bg-primary">
      <TopBar />
      <div className="h-screen container flex bg-custom-orange items-center">
        <div className="">
          <h2
            className="text-start text-4xl bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 font-bold
        bg-clip-text text-transparent"
          >
            Hi, Im Mahdi Monavari
          </h2>

          <h2 className="text-white text-start text-4xl overflow-hidden">
            <span
              className="bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 font-bold
        bg-clip-text text-transparent"
            >
              I can work in{" "}
            </span>
            <span
              className={clsx(
                `bg-gradient-to-r from-pink-700 via-red-200 to-pink-700 font-bold inline-block
                 origin-bottom-left rotate-0 bg-clip-text text-transparent transition-transform duration-300`,
                isRoutation && "rotate-100"
              )}
            >
              {ability[state]}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
