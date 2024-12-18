import myPic from "../assets/myPic.jpg"
import CV from "../assets/nick-cv.pdf"
import { FiFileText } from "react-icons/fi"

const About = () => {
  return (
    <>
      {/* Designer image*/}
      <img src={myPic} alt="Designer" />

      {/* About me text */}
      <div>
        <div>
          <h2>I a UI/UX Designer</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe similique aperiam illo vel deleniti cum minima, adipisci consequatur laboriosam nobis. Explicabo incidunt dolore ut hic sequi quo aliquam soluta sapiente.
          </p>
        </div>

        {/* Download CV */}
        <a href="#">
          <span>Download CV</span>
          <FiFileText/>
        </a>
      </div>
    </>
  )
}

export default About