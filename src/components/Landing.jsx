import { FiFacebook, FiLinkedin, FiYoutube, FiInstagram } from "react-icons/fi";
import { FaHandsClapping } from "react-icons/fa6";
import Video from "../assets/bg.mp4";

const Landing = () => {
  return (
    <div id="home" className="h-screen w-full flex justify-center items-center">
      {/* Bg video */}
      <video
        src={Video}
        autoPlay
        loop
        muted
        className="absolute h-full w-full top-0 object-cover z-[-1]"
      ></video>

      {/* Social Media */}
      <div className="absolute left-3 flex flex-col gap-y-4 text-md text-gray-700">
        <a href="#">
          <FiFacebook />
        </a>
        <a href="#">
          <FiLinkedin />
        </a>
        <a href="#">
          <FiYoutube />
        </a>
        <a href="#">
          <FiInstagram />
        </a>
      </div>

      {/* Hero */}
      <div>
        <h1 className="flex flex-col items-center gap-y-4 text-gray-700">
          <span className="text-2xl flex items-center gap-x-3 font-normal">
            Hello <FaHandsClapping />
          </span>
          <span className="text-5xl font-medium uppercase sm:text-3xl">I am a UI/UX Designer</span>
          <button className="block w-24 bg-white mt-5 text-gray font-normal px-2 py-1 border border-gray-600 rounded-2xl hover:bg-gray-100 transition-colors">Hire Me</button>
        </h1>
      </div>
    </div>
  );
};

export default Landing;
