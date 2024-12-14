import {FiFacebook, FiLinkedin, FiYoutube, FiInstagram} from "react-icons/fi"
import {FaHandsClapping} from "react-icons/fa6"
import Video from "../assets/bg.mp4"

const Landing = () => {
  return (
    <div>
        {/* Bg video */}
        <video src={Video} autoPlay loop muted></video>

        {/* Social Media */}
        <div>
            <a href="#">
                <FiFacebook/>
            </a>
            <a href="#">
                <FiLinkedin/>
            </a>
            <a href="#">
                <FiYoutube/>
            </a>
            <a href="#">
                <FiInstagram/>
            </a>
        </div>

        {/* Hero */}
        <div>
            <h1>
                <span>
                    Hello <FaHandsClapping/>
                </span>
            </h1>
        </div>
    </div>
  )
}

export default Landing