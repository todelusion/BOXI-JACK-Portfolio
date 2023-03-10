import React, { useState } from "react";
import { navLinks } from "../constants";
import { useMobile } from "../hooks";

function NavList(): JSX.Element {
  const [active, setActive] = useState("");
  return (
    <>
      {navLinks.map((nav) => (
        <li key={nav.id} className="mx-6">
          <a
            onClick={() => setActive(nav.id)}
            href={`#${nav.id}`}
            className={`cursor-pointer ${
              active === nav.id ? "text-primary" : ""
            }`}
          >
            {nav.title}
          </a>
        </li>
      ))}
    </>
  );
}

function Navbar(): JSX.Element {
  const isMobile = useMobile();

  return (
    <div className=" fixed top-0 h-20 w-full">
      <ul className=" mx-auto flex h-full items-center justify-end px-16 text-2xl">
        {!isMobile && <NavList />}
      </ul>
    </div>
  );
}

export default Navbar;
