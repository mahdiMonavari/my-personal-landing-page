import { clsx } from "clsx";
import React, { useEffect, useState } from "react";

function Hero() {
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
    <div className="bg-primary relative">
      <div className="h-screen container flex bg-custom-orange items-center isolate">
        <div
          className="absolute bottom-0 -left-1/6 rounded-full w-[50%] h-[50%] bg-gradient-to-r
         from-purple-700 via-blue-500 to-purple-700 opacity-15 blur-3xl"
        ></div>
        <div className="border-b border-zinc-100/50 pb-5">
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
          <h3 className="text-2xl text-zinc-400 max-w-100 text-start mt-4">
            Building clean, modern ,and responsive web experience
          </h3>
          <h3 className="flex mt-4 animate-pulse">
            <a
              href="#ABOUT ME"
              className="text-3xl font-bold cursor-pointer bg-gradient-to-r from-pink-700 via-red-200 to-pink-700
                bg-clip-text text-white hover:text-transparent transition-all duration-300"
            >
              See more about me...
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
