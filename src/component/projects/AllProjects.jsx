import React, { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Background from "../background/background";

// --- PROJECT DATA ---
export const projectsData = [
  {
    id: "phedu-consult",
    name: "Phedu-consult",
    description: "PHEDU Consult is a full-stack appointment and booking web application with a modern UI and a secure, scalable backend.",
    liveLink: "https://phedu-consult.netlify.app/",
    githubLink: "https://github.com/miazi2003/Phedu-Consult",
    tech: ["React", "Firebase", "Tailwind", "Node JS", "Express JS", "Mongoose", "Netlify", "Vercel"],
    category: "Appointment & Booking Platform",
  },
  {
    id: "message-checker",
    name: "Message Checker",
    description: "A smart message checker that helps freelancers send professional, risk-free messages with confidence.",
    liveLink: "https://messagechecker.netlify.app/",
    githubLink: "https://github.com/miazi2003/message-checker",
    tech: ["React", "Tailwind", "JavaScript"],
    category: "Tools",
  },
  {
    id: "grapetask",
    name: "GrapeTask",
    description: "Modern task management app with drag-drop interface and team collaboration features.",
    liveLink: "https://jolly-kitsune-272b49.netlify.app/",
    githubLink: "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-miazi2003",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    category: "Full Stack",
  },
  {
    id: "educamp",
    name: "EduCamp",
    description: "E-learning platform with interactive courses, live sessions, and progress analytics.",
    liveLink: "https://teal-cendol-a8aa91.netlify.app/",
    githubLink: "https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-miazi2003",
    tech: ["Next.js", "TypeScript", "Express", "MongoDB"],
    category: "Education Tech",
  },
  {
    id: "phudu",
    name: "Phudu",
    description: "Blogging platform with rich text editor, user dashboard, and content analytics.",
    liveLink: "https://classy-praline-645446.netlify.app/",
    githubLink: "https://github.com/programming-hero-web-course1/b11a8-router-booking-miazi2003",
    tech: ["React", "Firebase", "Redux", "Tailwind"],
    category: "Content Platform",
  },
];

const AllProjects = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 relative overflow-hidden">
      
      {/* --- Background Noise & Glow --- */}
       <Background></Background>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent mb-4">
              All Projects
            </h1>
            <p className="text-zinc-400 max-w-2xl text-lg font-light">
              A comprehensive list of my development work, ranging from full-stack applications to experimental tools.
            </p>
          </motion.div>
        </div>

        {/* --- Projects Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group flex flex-col bg-zinc-900/30 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <div className="p-6 flex flex-col flex-grow">
                
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-auto mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Footer Note --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-500 text-sm">
            More projects coming soon...
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default AllProjects;