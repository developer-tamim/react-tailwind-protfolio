import { useState } from "react";
import { FiAlignRight, FiXCircle } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const changeNav = () => setNav(!nav);

  return (
    <nav className="fixed w-full flex justify-between items-center px-5 z-50">
      {/* Logo */}
      <a href="#" className="font-bold italic text-gray-600 text-xl z-20">
        Nike Smith
      </a>

      {/* Navigation */}
      <div
        className={`cursor-pointer flex flex-col gap-y-7 text-xs font-medium text-gray-600 sm:top-0 sm:left-0 sm:h-screen sm:w-full sm:bg-orange-100/95 sm:flex-col sm:items-center sm:justify-center sm:text-3xl sm:gap-y-4 z-10 ${
          nav ? "sm:fixed" : "sm:hidden"
        }`}
      >
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Skills
        </a>
        <a href="#" className="hover:underline">
          Projects
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>

      {/* Hamburger */}
      <div
        className="sm:block cursor-pointer text-gray-600 text-2xl z-20"
        onClick={changeNav}
      >
        {nav ? <FiXCircle /> : <FiAlignRight />}
      </div>
    </nav>
  );
};

export default Navbar;
