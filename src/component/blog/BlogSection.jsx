import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaTag } from "react-icons/fa";
import { blogsData } from "../../data/blogsData";
import Background from "../background/background";

const BlogSection = () => {
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
    <section className="relative py-24 px-4 bg-black text-white overflow-hidden" id="blog">
      
      {/* --- Dynamic Background --- */}
   <Background></Background>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/50" />
            <span className="text-sm font-bold text-zinc-400 tracking-[0.2em] uppercase">
              Blog
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-white/50 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Insights & Articles
            </span>
          </h2>
          
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            Behind the scenes of my projects, technical deep dives, and lessons learned along the journey.
          </p>
        </motion.div>

        {/* --- Blog Cards Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogsData.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="p-8 relative z-10 flex flex-col h-full">
                
                {/* Meta Tags */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-zinc-300 rounded-full">
                    <FaTag className="text-[10px] opacity-70" />
                    {blog.tag}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                    <FaCalendarAlt className="opacity-70" />
                    {blog.date}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-zinc-200 transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                    {blog.summary}
                  </p>
                </div>

                {/* Footer / Action */}
                <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
                  {/* Optional: Display cover text if available */}
                  {blog.coverText && (
                    <p className="text-xs text-zinc-600 font-mono uppercase tracking-wider">
                      {blog.coverText}
                    </p>
                  )}

                  <Link
                    to={`/blogs/${blog.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-black py-3.5 rounded-xl font-bold hover:bg-zinc-200 transition-all duration-300 group/btn"
                  >
                    <span>Read Article</span>
                    <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;