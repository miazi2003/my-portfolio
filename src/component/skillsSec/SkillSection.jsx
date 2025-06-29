import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiDaisyui,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#3C873A" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "DaisyUI", icon: <SiDaisyui color="#9f65b3" /> },
];

const SkillSection = () => {
  return (
    <section className=" py-12 px-4 scroll-mt-20" id="skills">
      <div className="max-w-7xl mx-auto text-center">
        {/* Neon Header */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 text-[#9f65b3]"
          style={{
            textShadow: `
              0 0 1px #9f65b3,
              0 0 3px #9f65b3,
              0 0 4px #9f65b3,
              0 0 5px #9f65b3
            `,
          }}
        >
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-[#1f1f1f] transition"
            >
              <div className="text-4xl mb-1">{skill.icon}</div>
              <p className="text-gray-300 text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
