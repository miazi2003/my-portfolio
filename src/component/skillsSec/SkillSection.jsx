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
import Background from "../background/Background";
import { useSkills } from "../../hooks/usePublicData";

const iconMap = {
  html: <SiHtml5 />,
  html5: <SiHtml5 />,
  css: <SiCss3 />,
  css3: <SiCss3 />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  react: <SiReact />,
  node: <SiNodedotjs />,
  "node.js": <SiNodedotjs />,
  next: <SiNextdotjs />,
  "next.js": <SiNextdotjs />,
  mongodb: <SiMongodb />,
  mongoose: <SiMongodb />,
  tailwind: <SiTailwindcss />,
  daisyui: <SiDaisyui />,
  git: <SiGit />,
  github: <SiGithub />,
  firebase: <SiFirebase />,
  express: <SiExpress />,
  "express.js": <SiExpress />,
  framer: <TbBrandFramerMotion />,
  "framer motion": <TbBrandFramerMotion />,
};

const categoryIconMap = {
  frontend: <FaLaptopCode />,
  backend: <FaServer />,
  tools: <FaTools />,
};

const getIcon = (skill) => {
  const iconOrName = skill?.icon || skill?.name || "";
  const key = typeof iconOrName === "string" ? iconOrName.toLowerCase() : String(iconOrName).toLowerCase();
  return iconMap[key] || <FaTools />;
};

const getCategoryIcon = (title) => {
  const titleStr = typeof title === "string" ? title : String(title || "");
  const key = Object.keys(categoryIconMap).find((item) => titleStr.toLowerCase().includes(item));
  return categoryIconMap[key] || <FaTools />;
};

const SkillSection = () => {
  const { data: skills = [], isLoading, isError } = useSkills();

  const groupedSkills = skills.reduce((groups, skill) => {
    const title = skill.category || "Tools & Workflow";

    if (!groups[title]) {
      groups[title] = {
        title,
        icon: getCategoryIcon(title),
        description: skill.description || "Technologies I use to build production-ready web applications.",
        skills: [],
      };
    }

    groups[title].skills.push({
      ...skill,
      icon: getIcon(skill),
      color: skill.color || "#ffffff",
      level: Number(skill.level) || 80,
    });

    return groups;
  }, {});

  const skillCategories = Object.values(groupedSkills);

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

  return (
    <section className="relative py-24 px-4 scroll-mt-20 overflow-hidden bg-black text-white" id="skills">
      <Background></Background>

      <div className="max-w-7xl mx-auto relative z-10">
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

        {isLoading && (
          <div className="space-y-20 animate-pulse">
            {[1, 2].map((cat) => (
              <div key={cat} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800/50" />
                  <div className="space-y-2">
                    <div className="h-6 bg-zinc-800/50 rounded w-48" />
                    <div className="h-4 bg-zinc-800/50 rounded w-96 max-w-full" />
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-zinc-800/50" />
                        <div className="h-4 bg-zinc-800/50 rounded w-16" />
                      </div>
                      <div className="w-full bg-zinc-800/50 rounded-full h-1" />
                      <div className="flex justify-end">
                        <div className="h-3 bg-zinc-800/50 rounded w-6" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {isError && <p className="text-center text-red-300">Failed to load skills.</p>}

        {!isLoading && !isError && (
          <div className="space-y-20">
            {skillCategories.map((category, catIndex) => (
              <div key={category.title}>
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
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                      {category.description}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill._id}
                      variants={itemVariants}
                      whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
                      className="group bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,255,255,0.02)]"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-all duration-300">
                          <span className="inline group-hover:hidden">{getIcon(skill)}</span>
                          <span className="hidden group-hover:inline">{getIcon(skill)}</span>
                        </div>

                        <h4 className="font-medium text-zinc-300 group-hover:text-white transition-colors text-sm">
                          {skill.name}
                        </h4>
                      </div>

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
        )}
      </div>
    </section>
  );
};

export default SkillSection;
