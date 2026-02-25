import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";

function TopBar() {
  return (
    <div
      className="fixed top-5 px-4 bg-white/30 rounded-full max-w-200 w-[90%] h-10 left-1/2 -translate-x-1/2 flex
    items-center justify-center"
    >
      <ul className="flex items-center gap-x-4 text-zinc-400">
        <li className="text-white">HERO</li>
        <li>ABOUT ME</li>
        <li>MY PROJECT</li>
        <li>SERVICES</li>
        <li>CONTACT ME</li>
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
