import React, { useEffect, useRef } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import yeasinImg from "../../../assets/yeasin.png";
import Background from "../../../component/background/background";

const Banner = () => {
  const textRef = useRef(null);

  // Typing Effect
  useEffect(() => {
    const text =
      "MERN Stack Developer building fast, clean, and user-focused web experiences.";
    let index = 0;
    if (textRef.current) textRef.current.innerHTML = "";

    const typeWriter = () => {
      if (index < text.length && textRef.current) {
        textRef.current.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 30);
      }
    };

    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, []);

  // Floating animation for image system
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Orbiting badges (smaller + closer + ICONS + rounded)
  const orbitingBadges = [
    {  icon: <SiReact />, duration: 22, delay: 0 },
    {  icon: <SiNodedotjs />, duration: 28, delay: -8 },
    { icon: <SiMongodb />, duration: 26, delay: -14 },
    {  icon: <SiNextdotjs />, duration: 30, delay: -18 },
  ];

  // Small tech pills under typing (optional)
  const techPills = [
    { label: "Tailwind", icon: <SiTailwindcss /> },
    { label: "React", icon: <SiReact /> },
    { label: "Next.js", icon: <SiNextdotjs /> },
    { label: "Node", icon: <SiNodedotjs /> },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-black text-white"
    >
      {/* Background */}
    <Background></Background>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 mx-auto lg:mx-0">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-zinc-300 font-bold uppercase">
              Open to work
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Yeasin Miazi
            </span>
          </h1>

          <div className="h-16 flex justify-center lg:justify-start">
            <p className="text-lg text-zinc-400 max-w-md">
              <span ref={textRef}></span>
              <span className="inline-block w-0.5 h-5 bg-white ml-1 animate-pulse" />
            </p>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {techPills.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 hover:bg-white hover:text-black transition"
              >
                <span className="text-base">{t.icon}</span>
                <span className="font-medium">{t.label}</span>
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <motion.a
              href="/yeasin-miazi-cv-2026.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-white text-black rounded-full font-bold shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <FaDownload /> Download CV
            </motion.a>

            <div className="flex gap-4">
              {[
                { icon: <FaFacebook />, url: "https://facebook.com/amimiazi" },
                { icon: <FaGithub />, url: "https://github.com/miazi2003" },
                {
                  icon: <FaLinkedin />,
                  url: "https://www.linkedin.com/in/yeasin-miazi-64068033b/",
                },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="text-2xl text-zinc-500 hover:text-white transition"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT: IMAGE + ORBIT (slightly smaller so it fits) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative w-72 h-72 sm:w-[23rem] sm:h-[23rem] lg:w-[26rem] lg:h-[26rem] flex items-center justify-center"
          >
            {/* Image */}
            <div className="relative z-10 w-full h-full rounded-full bg-zinc-900/40 border border-white/10 p-4">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/5">
                <img
                  src={yeasinImg}
                  alt="Yeasin Miazi"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Rings (tighter) */}
            <div className="absolute inset-0 rounded-full border border-white/10 scale-[1.12] opacity-40" />
            <div className="absolute inset-0 rounded-full border border-white/5 scale-[1.28] opacity-25" />

            {/* Orbiting Badges (rounded + icons) */}
            {orbitingBadges.map((badge) => (
              <motion.div
                key={badge.label}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{
                  duration: badge.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: badge.delay,
                }}
              >
                <div className="relative w-[110%] h-[110%]">
               <motion.div
  className="
    absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
    w-12 h-12
    bg-black/70 border border-white/20
    rounded-full
    backdrop-blur-xl shadow-2xl
    flex items-center justify-center
    pointer-events-auto
  "
  animate={{ rotate: -360 }}
  transition={{
    duration: badge.duration,
    repeat: Infinity,
    ease: "linear",
    delay: badge.delay,
  }}
  whileHover={{
    scale: 1.15,
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "0 0 30px rgba(255,255,255,0.6)",
  }}
>
  <span className="text-xl">{badge.icon}</span>
</motion.div>
                </div>
              </motion.div>
            ))}

            {/* Glow (smaller inset so it doesn't overflow banner) */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-zinc-600 text-xs tracking-widest"
      >
        <span>SCROLL DOWN</span>
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Banner;
