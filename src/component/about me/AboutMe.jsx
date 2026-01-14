import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaRocket, FaBrain } from "react-icons/fa";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const skills = [
    { icon: <FaCode />, label: "Frontend Development", color: "text-purple-500" },
    { icon: <FaLightbulb />, label: "Problem Solving", color: "text-yellow-500" },
    { icon: <FaRocket />, label: "Quick Learner", color: "text-blue-500" },
    { icon: <FaBrain />, label: "AI Integration", color: "text-green-500" },
  ];

  return (
    <section 
      className="relative py-20 px-4 scroll-mt-20 overflow-hidden"
      id="about"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-sm font-medium text-purple-400 tracking-wider">
              INTRODUCTION
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-purple-400 font-medium">Frontend Developer</span> with 
              over a year of experience in crafting beautiful, interactive user interfaces. 
              My journey in web development has been driven by a deep curiosity for modern 
              technologies and a commitment to creating exceptional digital experiences.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
              I specialize in <span className="text-blue-400 font-medium">React.js</span>, 
              modern JavaScript, and responsive design principles. What sets me apart is my 
              ability to quickly adapt to new tools and frameworks, combined with a 
              strategic approach to <span className="text-green-400 font-medium">AI-powered development</span> 
              that enhances both productivity and creativity.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
              My development philosophy revolves around writing 
              <span className="text-pink-400 font-medium"> clean, maintainable code</span> 
              that not only meets functional requirements but also delivers exceptional 
              user experiences. I believe in the power of technology to solve real-world 
              problems and am constantly exploring innovative ways to bridge creativity 
              with functionality.
            </motion.p>
          </motion.div>

          {/* Right Column - Skills & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5 text-center hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
                    <motion.div
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className={`text-3xl mb-3 ${skill.color}`}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="font-medium text-white">{skill.label}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-16 translate-x-16 blur-2xl" />
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold">1+</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Years of Experience</h3>
                  <p className="text-gray-400">
                    Dedicated to mastering modern web technologies and delivering 
                    high-quality solutions through continuous learning and practice.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tech Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-5"
            >
              <h4 className="font-medium text-white mb-3">Current Focus</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm hover:bg-gray-800 hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-3xl text-gray-600 mb-4">"</div>
            <p className="text-xl text-gray-300 italic">
              I believe in building <span className="text-purple-400">digital experiences</span> that 
              are not just functional, but also delightful and memorable for users.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-gray-700" />
              <span className="text-sm text-gray-500">Yeasin Miazi</span>
              <div className="w-8 h-px bg-gray-700" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;