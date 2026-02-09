import React from "react";
import { motion } from "framer-motion";
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
  SiTypescript,
  SiGit,
  SiGithub,
  SiFirebase,
  SiExpress,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

const SkillSection = () => {
  // Organized Data Structure
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode />,
      description: "Building responsive, interactive, and performant user interfaces.",
      skills: [
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26", level: 99 },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6", level: 95 },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 85 },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", level: 55 },
        { name: "React", icon: <SiReact />, color: "#61DAFB", level: 85 },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff", level: 50 },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8", level: 95 },
        { name: "DaisyUI", icon: <SiDaisyui />, color: "#9f65b3", level: 99 },
        { name: "Framer Motion", icon: <TbBrandFramerMotion />, color: "#0055FF", level: 75 },
      ],
    },
    {
      title: "Backend Infrastructure",
      icon: <FaServer />,
      description: "Server-side logic, database management, and API integrations.",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#3C873A", level: 70 },
        { name: "Express.js", icon: <SiExpress />, color: "#ffffff", level: 65 },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 85 },
        // Added Mongoose Here 👇
        { name: "Mongoose", icon: <SiMongodb />, color: "#880000", level: 80 }, 
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", level: 70 },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <FaTools />,
      description: "Version control, deployment, and development optimization.",
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032", level: 80 },
        { name: "GitHub", icon: <SiGithub />, color: "#ffffff", level: 80 },
      ],
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  // Background Blob Animation
  const blobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      x: [0, 30, -30, 0],
      y: [0, -40, 40, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative py-24 px-4 scroll-mt-20 overflow-hidden bg-black text-white" id="skills">
      
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={blobVariants}
          animate="animate"
          className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-zinc-800/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          variants={blobVariants}
          animate="animate"
          transition={{ duration: 15, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-white/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/50" />
            <span className="text-sm font-bold text-zinc-400 tracking-[0.2em] uppercase">
              Expertise
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-white/50 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Skills & Tech
            </span>
          </h2>
          
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            My technical arsenal for building scalable, high-performance web applications.
          </p>
        </motion.div>

        {/* --- Skill Categories Loop --- */}
        <div className="space-y-20">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title}>
              
              {/* Category Title */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="flex items-center gap-4 mb-8"
              >
                 <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
                    {category.icon}
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-sm text-zinc-500">{category.description}</p>
                 </div>
              </motion.div>

              {/* Grid for this Category */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group relative bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-xl p-5 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  >
                    
                    {/* Top Section: Icon & Name */}
                    <div className="flex flex-col items-center gap-4 mb-3">
                      {/* Icon Container - Grayscale to Color on Hover */}
                      <div 
                        className="text-4xl text-zinc-500 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                        style={{ color: "inherit" }}
                      >
                         <span style={{ color: skill.color }} className="hidden group-hover:inline">
                             {skill.icon}
                         </span>
                         <span className="inline group-hover:hidden">
                             {skill.icon}
                         </span>
                      </div>
                      
                      <h4 className="font-medium text-zinc-300 group-hover:text-white transition-colors text-sm">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Minimal Progress Bar */}
                    <div className="w-full bg-zinc-800 rounded-full h-1 mt-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-white/80 group-hover:bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-colors"
                      />
                    </div>
                    <div className="flex justify-end mt-1">
                        <span className="text-[10px] text-zinc-600 font-mono">{skill.level}%</span>
                    </div>

                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillSection;