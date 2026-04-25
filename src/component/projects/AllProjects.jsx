import React, { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Background from "../background/background";

// --- PROJECT DATA ---
export const projectsData = [
  {
    id: "scanivo",
    name: "Scanivo",
    description:
      "SaaS platform for analyzing e-commerce store websites, monitoring product pages, cart setup, checkout flow, and subscription-based performance tracking.",
    overview:
      "A full-stack SaaS platform that helps store owners analyze their e-commerce websites, including product pages, cart setup, and checkout flow. It provides automated monitoring and subscription-based access for advanced features.",
    features: [
      "E-commerce website analysis for product pages, cart, and checkout flow",
      "Automated hourly monitoring system using cron jobs",
      "Secure authentication with JWT and Firebase",
      "Subscription system with integrated payment methods",
      "Dashboard for tracking store performance and issues"
    ],
    liveLink: "https://scanivo.vercel.app/",
    githubLink: "https://github.com/miazi2003/Scanivo_Sass",
    tech: ["React",  "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    category: "Full Stack",
    accentColor: "from-green-500 to-emerald-600"
  },

  {
  id: "pizza",
  name: "Pizza (Coming Soon)",
  description:
    "E-commerce platform for ordering delicious pizzas online with a modern shopping experience and smooth checkout flow.",
  overview:
    "A full-stack e-commerce platform built for online pizza ordering with product browsing, cart management, secure checkout, and order tracking features.",
  features: [
    "Product listing and category-based browsing",
    "Cart management and smooth checkout flow",
    "Secure payment integration",
    "Order tracking and customer dashboard",
    "Responsive modern UI for all devices"
  ],
  liveLink: "Coming Soon",
  githubLink: "https://github.com/miazi2003/pizza.us",
  tech: ["React",  "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  category: "E-commerce Platform",
  accentColor: "from-orange-500 to-red-500"
},

{
  id: "aircarry",
  name: "AirCarry (Coming Soon)",
  description:
    "SaaS platform for international parcel delivery management with smart shipment tracking and global logistics support.",
  overview:
    "A full-stack SaaS platform designed for worldwide parcel delivery services, helping businesses manage shipments, delivery tracking, logistics operations, and customer communication efficiently.",
  features: [
    "International parcel delivery management system",
    "Real-time shipment tracking and status updates",
    "Customer and delivery dashboard",
    "Secure payment and subscription support",
    "Admin panel for logistics and delivery control"
  ],
  liveLink: "Coming Soon",
  githubLink: "https://github.com/obaidullah-miazi-dev/AirCarry-Web",
  tech: ["React",  "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  category: "SaaS Platform",
  accentColor: "from-sky-500 to-blue-600"
}
,
  {
    id: "phedu-consult",
    name: "Phedu-consult",
    description:
      "PHEDU Consult is a full-stack appointment and booking web application with a modern UI and a secure, scalable backend.",
    overview:
      "A full-stack appointment and booking platform designed for smooth scheduling, secure user management, and efficient service handling with a modern UI.",
    features: [
      "Appointment booking and scheduling system",
      "Secure authentication and user management",
      "Responsive modern UI with dashboard support",
      "Backend API integration with scalable architecture",
      "Admin control for managing appointments and users"
    ],
    liveLink: "https://phedu-consult.netlify.app/",
    githubLink: "https://github.com/miazi2003/Phedu-Consult",
    tech: [
      "React",
      "Firebase",
      "Tailwind",
      "Node JS",
      "Express JS",
      "Mongoose",
      "Netlify",
      "Vercel"
    ],
    category: "Appointment & Booking Platform",
    accentColor: "from-red-500 to-pink-500"
  },

  {
    id: "message-checker",
    name: "Message Checker (for freelancers)",
    description:
      "A smart message checker that helps freelancers send professional, risk-free messages with confidence.",
    overview:
      "A helpful tool for freelancers to review and improve client messages, ensuring professionalism, clarity, and reduced communication risks.",
    features: [
      "Professional message checking system",
      "Freelancer-focused communication support",
      "Improves clarity and confidence in messaging",
      "Simple and fast UI for quick checking",
      "Responsive and lightweight tool experience"
    ],
    liveLink: "https://messagechecker.netlify.app/",
    githubLink: "https://github.com/miazi2003/message-checker",
    tech: ["React", "Tailwind", "JavaScript"],
    category: "Tools",
    accentColor: "from-red-400 to-blue-500"
  },

  {
    id: "grapetask",
    name: "GrapeTask",
    description:
      "Modern task management app with drag-drop interface and team collaboration features.",
    overview:
      "A collaborative task management platform designed for teams with drag-and-drop functionality, productivity tools, and smooth workflow management.",
    features: [
      "Drag-and-drop task management",
      "Team collaboration features",
      "Task status and workflow organization",
      "Clean and responsive dashboard UI",
      "Real-time productivity-focused experience"
    ],
    liveLink: "https://jolly-kitsune-272b49.netlify.app/",
    githubLink:
      "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-miazi2003",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    category: "Full Stack",
    accentColor: "from-purple-500 to-pink-500"
  },

  {
    id: "educamp",
    name: "EduCamp",
    description:
      "E-learning platform with interactive courses, live sessions, and progress analytics.",
    overview:
      "An education platform that helps learners access interactive courses, attend live sessions, and track learning progress effectively.",
    features: [
      "Interactive online course system",
      "Live session support",
      "Student progress tracking and analytics",
      "Responsive learning dashboard",
      "User-friendly educational experience"
    ],
    liveLink: "https://teal-cendol-a8aa91.netlify.app/",
    githubLink:
      "https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-miazi2003",
    tech: [ "TypeScript", "Express", "MongoDB"],
    category: "Education Tech",
    accentColor: "from-blue-500 to-cyan-500"
  },

  {
    id: "phudu",
    name: "Phudu",
    description:
      "Blogging platform with rich text editor, user dashboard, and content analytics.",
    overview:
      "A content publishing platform where users can create, manage, and analyze blogs using a rich editor and personalized dashboard.",
    features: [
      "Rich text blog editor",
      "User dashboard for content management",
      "Content analytics and performance tracking",
      "Authentication and user access control",
      "Responsive blogging platform UI"
    ],
    liveLink: "https://classy-praline-645446.netlify.app/",
    githubLink:
      "https://github.com/programming-hero-web-course1/b11a8-router-booking-miazi2003",
    tech: ["React", "Firebase", "Redux", "Tailwind"],
    category: "Content Platform",
    accentColor: "from-green-500 to-emerald-500"
  }
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