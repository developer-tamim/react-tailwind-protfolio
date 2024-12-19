// Import images directly
import Figma from "../assets/skills/figma.png";
import Photoshop from "../assets/skills/photoshop.png";
import AdobeIllustrator from "../assets/skills/adobeIllustrator.png";
import AdobeXD from "../assets/skills/adobeXd.png";
import Sketch from "../assets/skills/sketch.png";
import Tailwind from "../assets/skills/tailwind.png";
import JavaScript from "../assets/skills/javascript.png";
import ReactJS from "../assets/skills/react.png";

// Skills Component
const Skills = () => {
    // Directly define the skills data with imported image paths
    const skills = [
        { id: 1, name: "Figma", image: Figma },
        { id: 2, name: "Photoshop", image: Photoshop },
        { id: 3, name: "Adobe Illustrator", image: AdobeIllustrator },
        { id: 4, name: "Adobe XD", image: AdobeXD },
        { id: 5, name: "Sketch", image: Sketch },
        { id: 6, name: "Tailwind CSS", image: Tailwind },
        { id: 7, name: "JavaScript", image: JavaScript },
        { id: 8, name: "ReactJS", image: ReactJS },
    ];

    return (
        <div className="my-12 px-12">
            {/* Text for skills */}
            <div className="flex flex-col gap-y-2 mb-2 md:items-center">
                <h1 className="text-2xl font-semibold uppercase">Skills</h1>
                <p className="text-xl text-gray-600">What I know best</p>
            </div>
            {/* Skill-set */}
            <div className="flex flex-wrap justify-between gap-5 md:justify-center">
                {skills.map((tech) => (
                    <div key={tech.id} className="bg-slate-200 w-[180px] aspect-square flex flex-col justify-center items-center gap-y-3 rounded-md shadow-sm hover:shadow-md transition-shadow">
                        <img src={tech.image} alt={tech.name} width={60} className="" />
                        <h5 className="text-[14px] tracking-wider">{tech.name}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
