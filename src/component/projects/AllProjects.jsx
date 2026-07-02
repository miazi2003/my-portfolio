import React, { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Background from "../background/Background";
import { useProjects } from "../../hooks/usePublicData";

const getTech = (project) => project.technologies || project.tech || [];

const AllProjects = () => {
  const { data: projectsData = [], isLoading, isError } = useProjects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Background></Background>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
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

        {isLoading && <p className="text-zinc-400">Loading projects...</p>}
        {isError && <p className="text-red-300">Failed to load projects.</p>}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project._id || project.id}
              variants={cardVariants}
              className="group flex flex-col bg-zinc-900/30 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              {/* Thumbnail Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 border-b border-white/5">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-600 font-mono text-xs uppercase tracking-wider">
                    No Image Available
                  </div>
                )}
                {/* Floating Category Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-zinc-300 bg-black/60 backdrop-blur-md border border-white/10 rounded-full z-10">
                  {project.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto mb-6">
                  <div className="flex flex-wrap gap-2">
                    {getTech(project).map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-500 text-sm">More projects coming soon...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjects;
