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
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaMailBulk
} from "react-icons/fa";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

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
          
          // Reset success message after 5 seconds
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
      color: "text-purple-400"
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      label: "Address",
      value: "Dhaka, Bangladesh",
      color: "text-blue-400"
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      label: "Phone",
      value: "+8801608072719",
      color: "text-green-400"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      label: "Email",
      value: "yeasinmiazi1997@gmail.com",
      color: "text-pink-400"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/miazi2003",
      color: "hover:bg-gray-800"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/yeasin-miazi-64068033b",
      color: "hover:bg-blue-900/30"
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      label: "Facebook",
      url: "https://facebook.com/amimiazi",
      color: "hover:bg-blue-800/30"
    }
  ];

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const successVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    },
    exit: { scale: 0, opacity: 0 }
  };

  return (
    <section 
      className="relative py-20 px-4 scroll-mt-20 overflow-hidden"
      id="contact"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <FaMailBulk className="w-7 h-7 text-purple-400" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gray-800/50 ${info.color}`}>
                      {info.icon}
                    </div>
                    <span className="text-sm text-gray-400">{info.label}</span>
                  </div>
                  <p className="text-white font-medium">{info.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              custom={4}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Connect with me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800/30 border border-gray-700 text-gray-300 hover:text-white transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                    <span className="text-xs mt-2">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              custom={5}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">Available for work</span>
              </div>
              <p className="text-gray-300">
                I'm currently open to new opportunities and collaborations. 
                Feel free to reach out for any project discussions or just to say hello!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send me a message
            </h3>

            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-gray-400">
                    <FiUser className="w-4 h-4" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-gray-400">
                    <FiMail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-400">
                  <FiMail className="w-4 h-4" />
                  Subject
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-400">
                  <FiMessageSquare className="w-4 h-4" />
                  Your Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                    <FaPaperPlane className="w-4 h-4 ml-auto" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Success Message */}
            <AnimatePresence>
              {success && (
                <motion.div
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mt-6 p-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-green-400 font-medium">Message sent successfully!</p>
                      <p className="text-green-300/70 text-sm">I'll get back to you soon.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Note */}
            <p className="text-gray-500 text-sm mt-6 text-center">
              I typically respond within 24 hours. Looking forward to hearing from you!
            </p>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-8 h-px bg-gray-700" />
            <span>© 2024 Yeasin Miazi. All rights reserved.</span>
            <div className="w-8 h-px bg-gray-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;