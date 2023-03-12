import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { navLinks } from "../constants";
import { useMobile, useScrollUp } from "../hooks";

function NavList(): JSX.Element {
  const [active, setActive] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-10 flex h-20 w-full items-center justify-between bg-white/70 px-16 backdrop-blur-sm"
    >
      <a href="#about" className="block">
        <img
          src="https://i.imgur.com/f3GBe7V.png"
          alt="logo"
          width="40"
          className=" rounded-full"
        />
      </a>
      <ul className="text-2xl">
        {navLinks.map((nav) => (
          <li key={nav.id} className="mx-6 inline-block">
            <a
              onClick={() => setActive(nav.id)}
              href={`#${nav.id}`}
              className="cursor-pointer text-black"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
function NavButtom(): JSX.Element {
  const [active, setActive] = useState("");

  return (
    <div className="fixed bottom-0 z-10 w-full bg-white/70 backdrop-blur-sm">
      <ul className="mx-auto flex h-full items-center justify-around px-2 pt-3 pb-10 ">
        {navLinks.map((nav) => (
          <li key={nav.id} className="mx-2 h-10 w-16">
            <a
              onClick={() => setActive(nav.id)}
              href={`#${nav.id}`}
              className={`flex-col-center cursor-pointer  ${
                active === nav.id ? "opacity-100" : "opacity-70"
              }`}
            >
              <img
                src={nav.icon}
                alt={nav.title}
                className="mx-auto mb-1 h-8 w-8"
              />
              <span className="mx-auto text-xs">{nav.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Navbar(): JSX.Element {
  const isMobile = useMobile();
  const isScrollUp = useScrollUp();

  return (
    <>
      <AnimatePresence>
        {!isMobile && isScrollUp && <NavList key="Navlist" />}
      </AnimatePresence>

      {isMobile && <NavButtom />}
    </>
  );
}

export default Navbar;
