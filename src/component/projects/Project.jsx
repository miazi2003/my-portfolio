import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import a10 from "../../assets/a10.png"
import a11 from "../../assets/a11.png"
import a8 from "../../assets/a8.png"
const projects = [
  {
    name: "GrapeTask",
    image:a10,
    description:
      "A sleek personal portfolio showcasing my web development skills, projects, and contact details.",
    features: [
      "Responsive design",
      "Dark mode toggle",
      "Animated sections",
    ],
    liveLink: "https://jolly-kitsune-272b49.netlify.app/",
    githubLink: "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-miazi2003",
  },
  {
    name: "EduCamp",
    image: a11,
    description:
      "A full-stack e-commerce web application with user authentication and shopping cart features.",
    features: [
      "Product filtering & search",
      "Secure checkout",
      "Good For Educations",
    ],
    liveLink: "https://teal-cendol-a8aa91.netlify.app/",
    githubLink: "https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-miazi2003",
  },
  {
    name: "Phudu",
    image: a8,
    description:
      "A blogging platform where users can create, edit, and share articles with rich text formatting.",
    features: [
      "Rich text editor",
      "Great Search Function",
      "Clean Designs",
    ],
    liveLink: "https://classy-praline-645446.netlify.app/",
    githubLink: "https://github.com/programming-hero-web-course1/b11a8-router-booking-miazi2003",
  },
];

const Project = () => {
  return (
    <section className=" py-12 px-4 scroll-mt-20" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#9f65b3]"
         style={{
            textShadow: `
              0 0 1px #9f65b3,
              0 0 3px #9f65b3,
              0 0 4px #9f65b3,
              0 0 5px #9f65b3
            `,
          }}
        >
          Projects
        </h2>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-[#1f1f1f] rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] hover:shadow-purple-700/50 transition duration-300"
            >
              {/* Project Image */}
              <div className="md:w-1/2 p-12 rounded">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Project Details */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-semibold text-[#9f65b3] mb-4 font">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-4 font-sec">{project.description}</p>

                  <ul className="text-gray-400 list-disc list-inside space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#9f65b3] text-white px-5 py-3 rounded hover:bg-[#b07dc3] transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-[#9f65b3] text-[#9f65b3] px-5 py-3 rounded hover:bg-[#9f65b3] hover:text-white transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
