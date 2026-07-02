import React from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
  FaInfoCircle,
} from "react-icons/fa";
import { Link } from "react-router";
import { useProjects } from "../../hooks/usePublicData";

const getProjectPath = (project) => `/projects/${project.slug || project.id || project._id}`;
const getTech = (project) => project.technologies || project.tech || [];

const Projects = () => {
  const { data: projectsData = [], isLoading, isError } = useProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 18 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-4 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-zinc-400 uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-5">
            Selected Works
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            A selection of projects showcasing my skills and experience.
          </p>
        </div>

        {isLoading && <p className="text-center text-zinc-400">Loading projects...</p>}
        {isError && <p className="text-center text-red-300">Failed to load projects.</p>}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.slice(0, 5).map((project, index) => {
            const tech = getTech(project);

            return (
              <motion.div
                key={project._id || project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col h-full bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
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
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-zinc-300 z-10">
                    {project.category}
                  </span>
                  {/* Floating Index */}
                  <span className="absolute top-4 right-4 text-zinc-500 font-mono text-lg select-none z-10">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-zinc-200 transition-colors">{project.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto mb-6">
                    {tech.slice(0, 3).map((item) => (
                      <span key={item} className="text-xs font-mono text-zinc-500">
                        #{item}
                      </span>
                    ))}
                    {tech.length > 3 && (
                      <span className="text-xs font-mono text-zinc-500">...</span>
                    )}
                  </div>

                  <div className="space-y-3 pt-5 border-t border-white/5">
                    <Link
                      to={getProjectPath(project)}
                      className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-lg font-bold hover:bg-zinc-200 transition"
                    >
                      <FaInfoCircle />
                      Project Details
                      <FaArrowRight className="text-sm" />
                    </Link>

                    <div className="flex gap-3">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-zinc-800/60 py-2 rounded-lg text-sm hover:bg-zinc-800"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-zinc-800/60 py-2 rounded-lg text-sm hover:bg-zinc-800"
                      >
                        <FaGithub className="text-xs" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col h-full bg-zinc-900/40 backdrop-blur-xl border border-dashed border-white/20 rounded-2xl overflow-hidden hover:border-white transition-all"
          >
            <div className="p-8 flex flex-col flex-grow text-center">
              <span className="text-xs text-zinc-400 uppercase tracking-widest mb-4">
                More Work
              </span>

              <h3 className="text-3xl font-bold mb-4">View All Projects</h3>

              <p className="text-zinc-400 text-sm mb-10">
                Explore all my projects, experiments, and case studies in one
                place.
              </p>

              <div className="mt-auto">
                <Link
                  to="/all-projects"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-zinc-200 transition"
                >
                  View All
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
