import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaRocket, FaBrain, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Background from "../background/Background";
import { useEducation, useExperience } from "../../hooks/usePublicData";

const AboutMe = () => {
  const { data: education = [], isLoading: educationLoading } = useEducation();
  const { data: experience = [], isLoading: experienceLoading } = useExperience();
  // Staggered Container Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // Item Slide-Up Animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    },
  };

  // Background Blob Animation
  const blobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      x: [0, 20, -20, 0],
      y: [0, -30, 20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const skills = [
    { icon: <FaCode />, label: "Frontend Development" },
    { icon: <FaLightbulb />, label: "Problem Solving" },
    { icon: <FaRocket />, label: "Quick Learner" },
    { icon: <FaBrain />, label: "Backend Deployment" },
  ];

  const focus = ["Node.js", "TypeScript", "Next.js", "GSAP"];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-black text-white scroll-mt-20" id="about">
      
      {/* --- Dynamic Animated Background --- */}
      <Background></Background>

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
              Profile
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-white/50 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent drop-shadow-lg">
              About Me
            </span>
          </h2>
        </motion.div>

        {/* --- Main Content Grid --- */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          
          {/* --- LEFT COLUMN --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6 text-lg md:text-xl font-light text-zinc-300 leading-relaxed">
              <p>
                I'm a passionate <span className="text-white font-semibold border-b border-white/20 pb-0.5">Frontend Developer</span>{" "}
                with <span className="text-white font-semibold">1+ year</span> of experience crafting modern,
                interactive user interfaces. I focus on clean UI, smooth motion, and real-world delivery.
              </p>

              <p>
                I work with <span className="text-white font-semibold">React / Next.js</span>, modern
                JavaScript, and responsive design. I adapt fast, communicate clearly, and use smart tools
                to build better products faster.
              </p>
            </motion.div>

            {/* Quote Box */}
            <motion.div 
              variants={itemVariants} 
              className="p-6 md:p-8 bg-zinc-900/60 backdrop-blur-md border-l-4 border-white/80 rounded-r-xl shadow-2xl"
            >
              <p className="text-lg md:text-xl text-zinc-200 italic font-serif">
                "My approach is simple: <span className="text-white not-italic font-bold">maintainable code</span>, 
                consistent design, and a strong focus on user experience."
              </p>
            </motion.div>

            {/* Experience Box (Added Here) */}
            <motion.div
                variants={itemVariants}
                className="relative group bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-white/20 transition-colors duration-500"
            >
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-start gap-5 relative z-10">
                   
                    <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <FaBriefcase className="text-lg" />
                        </div>
                    </div>
                    <div className="space-y-3">
                      
                        <div>
                            <h3 className="text-xl font-bold text-white leading-tight">
                                {experienceLoading ? "Loading..." : experience[0]?.role || "Experience"}
                            </h3>
                            <p className="text-zinc-500 text-sm mt-1 font-medium">
                                {experience[0]?.company || ""}
                            </p>
                        </div>
                        
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {experience[0]?.description || "Experience details will be added soon."}
                        </p>
                    </div>
                </div>
            </motion.div>
          </motion.div>


          {/* --- RIGHT COLUMN --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            
            {/* 1. Education Card (Highlights) */}
            <motion.div
               whileHover={{ scale: 1.02 }}
               className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group shadow-lg"
            >
               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               
               <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-white text-black rounded-lg">
                    <FaGraduationCap size={20} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white">Education</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Academic Background</p>
                 </div>
               </div>

               <div className="space-y-6">
                  {educationLoading && <p className="text-zinc-400">Loading education...</p>}
                  {education.map((item) => (
                    <div key={item._id} className="relative pl-6 border-l border-white/20">
                      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                      <h4 className="text-lg font-bold text-white leading-tight">
                        {item.institution}
                      </h4>
                      <p className="text-zinc-400 text-sm mt-1">
                        {[item.degree || item.board, item.year].filter(Boolean).join(" - ")}
                      </p>
                    </div>
                  ))}
               </div>
            </motion.div>

            {/* 2. Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center gap-3 text-center cursor-default transition-colors duration-300 group"
                >
                  <div className="text-2xl text-zinc-400 group-hover:text-white transition-colors">{skill.icon}</div>
                  <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">{skill.label}</span>
                </motion.div>
              ))}
            </div>

            {/* 3. Tech Stack Tags */}
           <div className="flex flex-col gap-2">
             <h2>Focused On:</h2>
            <div className="flex flex-wrap gap-2 pt-0">
              
               {focus.map((tech) => (
                  <motion.span 
                    key={tech} 
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
               ))}
            </div>
           </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
