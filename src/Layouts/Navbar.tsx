import React from "react";
import { navLinks } from "../constants";

function Navbar(): JSX.Element {
  return (
    <div className=" fixed top-0 h-20 w-full">
      <ul className=" flex h-full items-center justify-end px-16 text-2xl">
        {navLinks.map((nav) => (
          <li key={nav.id} className=" mx-6">
            {nav.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
