import { useState } from "react";
import { FiAlignRight, FiXCircle } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const changeNav = () => setNav(!nav);

  const [navColor, setNavColor] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={
        "fixed w-full flex justify-between items-center px-5 z-50 py-3 transition-colors duration-500" +
        (navColor && "bg-orange-100/80 shadow-md")
      }
    >
      {/* Logo */}
      <a href="#home" className="font-bold italic text-gray-600 text-xl z-20" onClick={changeNav}>
        Nike Smith
      </a>

      {/* Navigation */}
      <div
        className={`cursor-pointer flex gap-x-7 text-xs font-medium text-gray-600 sm:top-0 sm:left-0 sm:h-screen sm:w-full sm:bg-orange-100/95 sm:flex-col sm:items-center sm:justify-center sm:text-3xl sm:gap-y-4 ${
          nav ? "sm:fixed" : "sm:hidden"
        }`}
      >
        <a href="#home" className="hover:underline" onClick={changeNav}>
          Home
        </a>
        <a href="#about" className="hover:underline" onClick={changeNav}>
          About
        </a>
        <a href="#skills" className="hover:underline" onClick={changeNav}>
          Skills
        </a>
        <a href="#projects" className="hover:underline" onClick={changeNav}>
          Projects
        </a>
        <a href="#contact" className="hover:underline" onClick={changeNav}>
          Contact
        </a>
      </div>

      {/* Hamburger */}
      <div
        className="hidden sm:block cursor-pointer text-gray-600 text-2xl z-20"
        onClick={changeNav}
      >
        {nav ? <FiXCircle /> : <FiAlignRight />}
      </div>
    </nav>
  );
};

export default Navbar;
