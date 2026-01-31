import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";

const Project = () => {
  const projects = [
     {
      name: "Phedu-consult",
      description: "PHEDU Consult is a full-stack appointment and booking web application with a modern UI and a secure, scalable backend.",
      liveLink: "https://phedu-consult.netlify.app/",
      githubLink: "https://github.com/miazi2003/Phedu-Consult",
      tech: ["React", "Firebase", "Tailwind" ,  "Node JS" , "Express JS" , "Mongoose" , "Netlify" , "Vercel"],
      category: "Appointment and Booking Platform",
      accentColor: "from-red-500 to-pink-500",
    },
     {
      name: "Message Checker (for freelancers)",
      description: "A smart message checker that helps freelancers send professional, risk-free messages with confidence.",
      liveLink: "https://messagechecker.netlify.app/",
      githubLink: "https://github.com/miazi2003/message-checker",
      tech: ["React", "Tailwind" , "Javascript"],
      category: "Tools",
      accentColor: "from-red-400 to-blue-500",
    },
    {
      name: "GrapeTask",
      description: "Modern task management app with drag-drop interface and team collaboration features.",
      liveLink: "https://jolly-kitsune-272b49.netlify.app/",
      githubLink: "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-miazi2003",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
      category: "Full Stack",
      accentColor: "from-purple-500 to-pink-500",
    },
    {
      name: "EduCamp",
      description: "E-learning platform with interactive courses, live sessions, and progress analytics.",
      liveLink: "https://teal-cendol-a8aa91.netlify.app/",
      githubLink: "https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-miazi2003",
      tech: ["Next.js", "TypeScript", "Express", "MongoDB"],
      category: "Education Tech",
      accentColor: "from-blue-500 to-cyan-500",
    },
    {
      name: "Phudu",
      description: "Blogging platform with rich text editor, user dashboard, and content analytics.",
      liveLink: "https://classy-praline-645446.netlify.app/",
      githubLink: "https://github.com/programming-hero-web-course1/b11a8-router-booking-miazi2003",
      tech: ["React", "Firebase", "Redux", "Tailwind"],
      category: "Content Platform",
      accentColor: "from-green-500 to-emerald-500",
    },
   
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotateX: -10
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -6,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Handle link clicks
  const handleLinkClick = (e, url) => {
    e.stopPropagation(); // Prevent event bubbling
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="relative py-20 px-4 scroll-mt-20 overflow-hidden"
      id="projects"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
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
          <div className="inline-block mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing my work with modern web technologies and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Card - Added cursor-default to prevent pointer on whole card */}
              <div className="relative h-full bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden cursor-default">
                {/* Card Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.accentColor}`} />
                
                <div className="p-6 flex flex-col justify-between h-full">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full">
                      {project.category}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center"
                    >
                      <span className="text-sm">#{index + 1}</span>
                    </motion.div>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm text-gray-500 mb-3">Built with</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-800/50 text-gray-300 text-xs rounded-lg backdrop-blur-sm border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - FIXED: Added proper button elements */}
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => handleLinkClick(e, project.liveLink)}
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white py-2.5 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 group/btn cursor-pointer"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      <span className="text-sm">Live</span>
                      <FaArrowRight className="w-3 h-3 ml-auto opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                    </button>
                    
                    <button
                      onClick={(e) => handleLinkClick(e, project.githubLink)}
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-700 text-gray-300 py-2.5 px-4 rounded-lg hover:border-purple-500/50 hover:text-white transition-all duration-300 group/btn cursor-pointer"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span className="text-sm">Code</span>
                      <FaArrowRight className="w-3 h-3 ml-auto opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                    </button>
                  </div>
                </div>

                {/* Card Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
              Let's build something amazing together!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group cursor-pointer"
            >
              <span>Let's Connect</span>
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;