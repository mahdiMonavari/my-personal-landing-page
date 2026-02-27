import React, { useEffect, useState } from "react";
import { clsx } from "clsx";

function TopBar() {
  const [sectionActive, setSectionActive] = useState("HERO");
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  const menuItem = ["HERO", "ABOUT ME", "MY PROJECT", "SERVICES", "CONTACT ME"];
  return (
    <div
      className="fixed top-5 px-4 bg-neutral-950/70 rounded-full max-w-135 w-[90%] h-10 left-1/2 -translate-x-1/2 flex
    items-center justify-center z-50"
    >
      <ul className="flex items-center gap-x-4 text-zinc-400 *:cursor-pointer">
        {menuItem.map((item) => (
          <li key={item} onClick={(e) => {}}>
            <a
              href={`#${item}`}
              className={clsx(
                "group relative",
                sectionActive === item ? "text-white" : "text-zinc-500"
              )}
            >
              {item}
              <span
                className={clsx(
                  "absolute top-full left-1/2 w-full -translate-x-1/2 scale-x-0 h-px transition group-hover:scale-100",
                  sectionActive === item ? "bg-white" : "bg-zinc-500"
                )}
              ></span>
            </a>
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
