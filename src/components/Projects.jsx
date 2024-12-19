import projectsData from "../data/projects.json";
import Project1 from "../assets/projects/project-1.jpg";
import Project2 from "../assets/projects/project-2.jpg";
import Project3 from "../assets/projects/project-3.jpg";
import Project4 from "../assets/projects/project-4.jpg";
import Project5 from "../assets/projects/project-5.jpg";
import Project6 from "../assets/projects/project-6.jpg";
import Project7 from "../assets/projects/project-7.jpg";
import Project8 from "../assets/projects/project-8.jpg";

const projects = [
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Project7,
  Project8,
];

const Projects = () => {
  return (
    <div className="my-12 px-12">
      <h1 className="text-center text-3xl mb-14 font-semibold uppercase">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-14">
        {projectsData.map((project, i) => {
          return (
            <div
              key={project.id}
              className="flex justify-center rounded-md relative bg-black group"
            >
              <h2 className="text-sm absolute top-[-28px]">{project.name}</h2>
              <img src={projects[i]} alt={project.name} width={300} className="group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-2 flex gap-x-3 underline text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <a href={project.video} target="_blank">
                  Video
                </a>
                <a href={project.code} target="_blank">
                  Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
