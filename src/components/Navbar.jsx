import { FiAlignRight } from "react-icons/fi"

const Navbar = () => {
  return (
    <nav className="fixed w-full flex justify-between items-center px-5 z-50">
        {/* Logo */}
        <a href="#" className="font-bold italic text-gray-600 text-xl z-20">Nike Smith</a>
        {/* Navigation */}
        <div className="cursor-pointer flex gap-x-7 trxt-xs font-medium text-gray-600">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Skills</a>
            <a href="#" className="hover:underline">Projects</a>
            <a href="#" className="hover:underline">Contact</a>
        </div>
        {/* Hamburger */}
        <div className="hidden cursor-pointer text-gray-600 text-2xl">
            <FiAlignRight/>
        </div>
    </nav>
  )
}

export default Navbar