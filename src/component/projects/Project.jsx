import React from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
  FaInfoCircle,
} from "react-icons/fa";
import { Link } from "react-router";

/* ---------------- PROJECT DATA ---------------- */
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


/* ---------------- COMPONENT ---------------- */
const Projects = () => {
  /* Animations */
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
        {/* ---------- Header ---------- */}
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

        {/* ---------- Grid ---------- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* -------- Dynamic Project Cards -------- */}
          {projectsData.slice(0, 5).map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
            >
              <div className="p-8 flex flex-col flex-grow">
                {/* Top */}
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-zinc-300">
                    {project.category}
                  </span>
                  <span className="text-zinc-700 font-mono text-lg">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-zinc-500"
                    >
                      #{tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-mono text-zinc-500">
                      ...
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="space-y-3 pt-5 border-t border-white/5">
                  <Link
                    to={`/projects/${project.id}`}
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
          ))}

          {/* -------- Static View All Projects Card -------- */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col h-full bg-zinc-900/40 backdrop-blur-xl border border-dashed border-white/20 rounded-2xl overflow-hidden hover:border-white transition-all"
          >
            <div className="p-8 flex flex-col flex-grow text-center">
              <span className="text-xs text-zinc-400 uppercase tracking-widest mb-4">
                More Work
              </span>

              <h3 className="text-3xl font-bold mb-4">
                View All Projects
              </h3>

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
