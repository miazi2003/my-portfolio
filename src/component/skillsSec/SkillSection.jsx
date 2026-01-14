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

const SkillSection = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 />, color: "#E34F26", level: 99 },
    { name: "CSS", icon: <SiCss3 />, color: "#1572B6", level: 95 },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 85 },
    { name: "React", icon: <SiReact />, color: "#61DAFB", level: 85 },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", level: 55 },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff", level: 50 },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#3C873A", level: 70 },
    { name: "Express", icon: <SiExpress />, color: "#ffffff", level: 65 },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8", level: 95 },
    { name: "Framer Motion", icon: <TbBrandFramerMotion />, color: "#0055FF", level: 75 },
    { name: "DaisyUI", icon: <SiDaisyui />, color: "#9f65b3", level: 99 },
    { name: "Git", icon: <SiGit />, color: "#F05032", level: 80 },
    { name: "GitHub", icon: <SiGithub />, color: "#ffffff", level: 80 },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", level: 70 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: (level) => `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      className="relative py-20 px-4 scroll-mt-20 overflow-hidden"
      id="skills"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-sm font-medium text-purple-400 tracking-wider">
              TECHNICAL EXPERTISE
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, scalable web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10">
                {/* Skill Icon */}
                <div className="flex justify-center mb-4">
                  <div 
                    className="text-4xl p-3 rounded-xl bg-gray-800/50 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                </div>
                
                {/* Skill Name */}
                <h3 className="text-center font-medium text-white mb-2">
                  {skill.name}
                </h3>
                
         {/* Skill Level */}

<div className="mt-3">
  <div className="flex justify-between text-xs text-gray-500 mb-1">
    <span>Proficiency</span>
    <span>{skill.level}%</span>
  </div>

  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${skill.level}%` }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        h-full rounded-full 
        flex items-center justify-end pr-1
        bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
      "
    >
      {/* Skill Label */}
      <span className="text-[10px] text-white font-semibold whitespace-nowrap">
        {skill.label}
      </span>
    </motion.div>
  </div>
</div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Frontend</h4>
              <p className="text-gray-400 text-sm">
                Building responsive, interactive user interfaces with modern frameworks
              </p>
            </div>

            {/* Backend */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Backend</h4>
              <p className="text-gray-400 text-sm">
                Server-side development with Node.js and database management
              </p>
            </div>

            {/* Tools */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Tools</h4>
              <p className="text-gray-400 text-sm">
                Version control, deployment, and development workflow optimization
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;