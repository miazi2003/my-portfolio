import React, { useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaLayerGroup,
  FaCode,
} from "react-icons/fa";
import { useProject } from "../../hooks/usePublicData";

const ProjectDetails = () => {
  const { id } = useParams();
  const { data: project, isLoading, isError } = useProject(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white selection:bg-white/20">
        <div className="max-w-5xl mx-auto px-6 py-20 animate-pulse space-y-12">
          <div className="h-6 bg-zinc-800/50 rounded w-32" />
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="h-6 bg-zinc-800/50 rounded-full w-24" />
              <div className="h-6 bg-zinc-800/50 rounded-full w-32" />
            </div>
            <div className="h-14 bg-zinc-800/50 rounded w-2/3" />
            <div className="h-6 bg-zinc-800/50 rounded w-1/2" />
          </div>

          <div className="flex gap-4">
            <div className="h-12 bg-zinc-800/50 rounded-lg w-32" />
            <div className="h-12 bg-zinc-800/50 rounded-lg w-32" />
          </div>

          <div className="aspect-video bg-zinc-800/50 rounded-2xl w-full" />

          <div className="grid md:grid-cols-3 gap-12 pt-6">
            <div className="md:col-span-2 space-y-8">
              <div className="space-y-3">
                <div className="h-6 bg-zinc-800/50 rounded w-48" />
                <div className="h-24 bg-zinc-800/50 rounded-2xl w-full" />
              </div>
              <div className="space-y-3">
                <div className="h-6 bg-zinc-800/50 rounded w-36" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="h-16 bg-zinc-800/50 rounded-xl" />
                  <div className="h-16 bg-zinc-800/50 rounded-xl" />
                </div>
              </div>
            </div>
            <div className="h-48 bg-zinc-800/50 rounded-2xl w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link
          to="/"
          className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition"
        >
          Go Home
        </Link>
      </div>
    );
  }

  const overviewText = project.overview || "Project overview will be added soon.";
  const featuresList = Array.isArray(project.features) ? project.features : [];
  const techList = project.technologies || project.tech || [];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs font-medium text-zinc-300">
              {project.category}
            </span>

            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-400">
              {techList.length || 0} Technologies
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent mb-6">
            {project.name}
          </h1>

          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-all"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10 transition-all"
            >
              <FaGithub /> View Code
            </a>
          </div>
        </motion.div>

        {project.thumbnail && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-12 rounded-2xl overflow-hidden border border-white/10 aspect-video bg-zinc-950 shadow-2xl"
          >
            <img
              src={project.thumbnail}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        <hr className="border-white/10 mb-12" />

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="md:col-span-2 space-y-10"
          >
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FaLayerGroup className="text-zinc-500" /> Project Overview
              </h2>

              <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
                <p className="text-zinc-300 leading-relaxed">{overviewText}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>

              {featuresList.length ? (
                <ul className="grid sm:grid-cols-2 gap-4">
                  {featuresList.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-zinc-300 bg-zinc-900/30 border border-white/5 p-4 rounded-xl"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
                  <p className="text-zinc-400">Features will be added soon.</p>
                </div>
              )}
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <FaCode /> Technologies
              </h3>

              <div className="flex flex-wrap gap-2">
                {techList.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-zinc-300 text-sm rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
