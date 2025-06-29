import React from "react";

const AboutMe = () => {
  return (
    <section className=" py-12 px-4 scroll-mt-20" id="about">
      <div className="max-w-7xl mx-auto text-center">
        {/* Neon Header */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 text-[#9f65b3]"
          style={{
            textShadow: `
              0 0 1px #9f65b3,
              0 0 3px #9f65b3,
              0 0 4px #9f65b3,
              0 0 5px #9f65b3
            `,
          }}
        >
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg text-justify ">
          I’m a web developer with a strong focus on building beautiful and
          interactive user interfaces. I’ve practiced frontend development for
          about a year, constantly improving my skills in modern web
          technologies. I’m a quick learner and always ready to explore new
          tools and trends in the tech world. As an AI-powered developer, I
          leverage AI tools to enhance my productivity and creativity. I’m
          useful, adaptable, and love solving real-world problems through code.
          My mission is to craft clean, functional, and impactful digital
          experiences. Over the past year, I have gained hands-on experience
          working with HTML, CSS, JavaScript, React, and several modern
          frameworks. I take pride in writing maintainable and scalable code
          that adheres to best practices and accessibility standards. User
          experience is at the heart of everything I build, ensuring every
          interaction feels smooth and intuitive. I enjoy collaborating with
          designers and backend developers to create cohesive products that meet
          client goals. Beyond coding, I am passionate about staying updated
          with the latest trends in web development, such as progressive web
          apps, server-side rendering, and component-driven architecture. My
          enthusiasm for AI and automation allows me to integrate intelligent
          solutions that optimize workflows and improve application performance.
          Whether it’s debugging complex issues or brainstorming innovative
          features, I approach every challenge with a positive mindset and
          determination. I’m continuously expanding my knowledge by
          participating in coding communities, online courses, and real-world
          projects. Building responsive and mobile-friendly websites is one of
          my specialties, ensuring seamless access across devices. With a strong
          foundation in both design principles and technical skills, I aim to
          bridge the gap between creativity and functionality. I believe that
          technology has the power to transform lives, and I’m excited to
          contribute to meaningful projects that make a difference. 
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
