import myPic from "../assets/myPic.jpg";
import CV from "../assets/nick-cv.pdf";
import { FiFileText } from "react-icons/fi";

const About = () => {
  return (
    <>
      <div className="flex justify-around gap-x-5 py-20 md:flex-col md:items-center md:gap-y-10">
        {/* Designer image*/}
        <img src={myPic} alt="Designer" className="w-[300px] rounded-md sm:w-[270px]" />

        {/* About me text */}
        <div className="w-1/2 flex flex-col justify-between sm:gap-y-8">
          <div>
            <h2 className="text-2xl font-bold uppercase mb-3">
              I a UI/UX Designer
            </h2>
            <p className="text-xs leading-5 first-letter:ml-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate deserunt, aspernatur reiciendis, assumenda voluptatibus fuga qui nihil doloremque eligendi consequuntur incidunt pariatur facere eum voluptates temporibus rem impedit sequi ducimus facilis quisquam asperiores culpa aliquid, alias dolorem. Natus aut officia unde iste, molestias corporis! Optio fugiat sit possimus perferendis nisi.
            </p>
          </div>

          {/* Download CV */}
          <a
            href={CV}
            download=""
            className="w-[160px] h-[30px] bg-slate-300 flex justify-around items-center rounded-sm text-sm"
          >
            <span>Download CV</span>
            <FiFileText />
          </a>

          {/* info */}
          <div className="flex justify-between text-sm sm:flex-col sm:gap-y-3">
            <ul className="font-semibold uppercase">
              <li>Name:</li>
              <li>Age:</li>
            </ul>
            <ul>
              <li>Tawsif Tamim</li>
              <li>26</li>
            </ul>
            <ul className="font-semibold uppercase">
              <li>Email:</li>
              <li>Address:</li>
            </ul>
            <ul>
              <li>tawsiftamim24@gmail.com</li>
              <li>Chittagong, Bangladesh</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
