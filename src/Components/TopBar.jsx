import React from "react";
import { clsx } from "clsx";

function TopBar() {
  const menuItem = ["HERO", "ABOUT ME", "MY PROJECT", "SERVICES", "CONTACT ME"];
  return (
    <div
      className="fixed top-5 px-4 bg-neutral-950/70 rounded-full max-w-135 w-[90%] h-10 left-1/2 -translate-x-1/2 flex
    items-center justify-center"
    >
      <ul className="flex items-center gap-x-4 text-zinc-400 *:cursor-pointer">
        {menuItem.map((item) => (
          <li className="text-white group relative" key={item}>
            {item}
            <span className="absolute top-full left-1/2 w-full -translate-x-1/2 scale-x-0 h-px bg-white transition group-hover:scale-100"></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopBar;

{
  /* <FaUserAlt />
 <MdDashboardCustomize />
 <IoIosContacts /> */
}
// import { FaUserAlt } from "react-icons/fa";
// import { MdDashboardCustomize } from "react-icons/md";
// import { IoIosContacts } from "react-icons/io";
