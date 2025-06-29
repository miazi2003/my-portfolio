import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      title,
      message,
    };

    emailjs
      .send(
        "service_554c8yu", // replace with your EmailJS Service ID
        "template_kjv6709", // replace with your EmailJS Template ID
        templateParams,
        "1uUSlU2cE5_AI2VLp" // replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setName("");
          setEmail("");
          setTitle("");
          setMessage("");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
      e.target.reset()
  };

  return (
    <section className="py-12 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#9f65b3]"
          style={{
            textShadow: `
              0 0 1px #9f65b3,
              0 0 3px #9f65b3,
              0 0 4px #9f65b3,
              0 0 5px #9f65b3
            `,
          }}
        >
          Contact
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-8 text-gray-300 md:text-2xl text-xl p-8 rounded-lg border-2 border-gray-600 ">
            <p><span className="text-[#9f65b3] font-semibold">Name:</span> Yeasin Miazi</p>
            <p><span className="text-[#9f65b3] font-semibold">Address:</span> Dhaka, Bangladesh</p>
            <p><span className="text-[#9f65b3] font-semibold">Phone:</span> +88001608072719</p>
            <p><span className="text-[#9f65b3] font-semibold">Email:</span> yeasinmiazi1997@gmail.com</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/miazi2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9f65b3] hover:text-white text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yeasin-miazi-64068033b/?trk=opento_sprofile_topcard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9f65b3] hover:text-white text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/amimiazi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9f65b3] hover:text-white text-2xl"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Email Form */}
          <div className="md:w-1/2  bg-[#1f1f1f] p-6 rounded-lg">
            <form onSubmit={sendEmail} className="space-y-6 ">
           <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
               <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300  font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-black text-gray-100 border border-[#9f65b3] focus:outline-none focus:ring-2 focus:ring-[#9f65b3]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300  font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-black text-gray-100 border border-[#9f65b3] focus:outline-none focus:ring-2 focus:ring-[#9f65b3]"
                />
              </div>
           </div>

              <div>
                <label
                  htmlFor="title"
                  className="block text-gray-300  font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-black text-gray-100 border border-[#9f65b3] focus:outline-none focus:ring-2 focus:ring-[#9f65b3]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300  font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={1}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-black text-gray-100 border border-[#9f65b3] focus:outline-none focus:ring-2 focus:ring-[#9f65b3]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#9f65b3] text-white px-6 py-2 rounded hover:bg-[#b07dc3] transition"
              >
                Send Email
              </button>
            </form>
            {success && (
              <p className="text-green-400 mt-4">
                Your message has been sent!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
