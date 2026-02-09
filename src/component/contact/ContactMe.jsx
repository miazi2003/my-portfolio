import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUser,
  FaPaperPlane
} from "react-icons/fa";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      title,
      message,
    };

    emailjs
      .send(
        "service_554c8yu",
        "template_kjv6709",
        templateParams,
        "1uUSlU2cE5_AI2VLp"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setName("");
          setEmail("");
          setTitle("");
          setMessage("");
          setLoading(false);
          
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (err) => {
          console.log("FAILED...", err);
          setLoading(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaUser className="w-5 h-5" />,
      label: "Name",
      value: "Yeasin Miazi",
      color: "text-zinc-100"
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      label: "Address",
      value: "Dhaka, Bangladesh",
      color: "text-zinc-300"
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      label: "Phone",
      value: "+8801608072719",
      color: "text-zinc-300"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      label: "Email",
      value: "yeasinmiazi1997@gmail.com",
      color: "text-zinc-100"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/miazi2003",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/yeasin-miazi-64068033b",
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      label: "Facebook",
      url: "https://facebook.com/amimiazi",
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    },
  };

  const blobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      x: [0, 30, -30, 0],
      y: [0, -40, 40, 0],
      transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative py-24 px-4 scroll-mt-20 overflow-hidden bg-black text-white" id="contact">
      
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={blobVariants}
          animate="animate"
          className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-zinc-800/20 rounded-full blur-[120px] -translate-x-1/2"
        />
        <motion.div
          variants={blobVariants}
          animate="animate"
          transition={{ duration: 12, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-white/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/50" />
            <span className="text-sm font-bold text-zinc-400 tracking-[0.2em] uppercase">
              Contact
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-white/50 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            Have a project in mind? Let's collaborate to create something exceptional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* --- LEFT: Contact Info --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-xl p-5 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-white/5 text-white`}>
                      {info.icon}
                    </div>
                    <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold">{info.label}</span>
                  </div>
                  <p className="text-zinc-200 font-medium break-words">{info.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                  >
                    <div className="text-xl mb-2 group-hover:scale-110 transition-transform">{social.icon}</div>
                    <span className="text-xs font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-900/20 border border-white/5 rounded-xl p-6 flex items-start gap-4"
            >
               <span className="relative flex h-3 w-3 mt-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
               </span>
               <div>
                  <h4 className="text-white font-bold mb-1">Available for new projects</h4>
                  <p className="text-zinc-500 text-sm">
                    I'm currently open to new opportunities and collaborations. 
                    Let's discuss how I can help your team.
                  </p>
               </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: Contact Form --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-16 translate-x-16" />

            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

            <form onSubmit={sendEmail} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                    <FiUser /> Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/10 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                    <FiMail /> Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/10 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                  <FiMail /> Subject
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/10 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                  <FiMessageSquare /> Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/10 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-zinc-400 border-t-black rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Success Message Overlay */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute inset-0 bg-zinc-900/95 backdrop-blur-sm flex flex-col items-center justify-center z-20"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <FaCheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-zinc-400">I'll get back to you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>

        {/* Footer Note */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-2 text-zinc-600 text-xs uppercase tracking-widest">
            <span>© 2026 Yeasin Miazi</span>
            <span className="w-1 h-1 bg-zinc-600 rounded-full" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ContactMe;