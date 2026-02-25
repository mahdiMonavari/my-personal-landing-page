import React from "react";

function TopBar() {
  return (
    <div
      className="fixed top-5 bg-white/30 rounded-full max-w-135 w-[90%] h-10 left-1/2 -translate-x-1/2 flex
    items-center justify-center"
    >
      <ul>
        <li>
          <a href="/public/images/about-me.png"></a>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default TopBar;
