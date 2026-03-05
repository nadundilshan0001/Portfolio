"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BsStripe } from "react-icons/bs";
import { SiExpress, SiMongodb, SiSanity, SiTypescript } from "react-icons/si";
import resq from "../../../public/Images/resq.png";

const Work = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      title: "Relaxo App",
      description:
        "Relaxo is an innovative travel solution designed to elevate the airport experience. With state-of-the-art sleeping pods, it provides a serene and comfortable space for travelers to rest, recharge, and refresh during long layovers or waits.",
      fullDescription:
        "From essential amenities in the Standard Pods to luxurious features in the VIP Pods, Relaxo ensures every journey is met with tranquility and convenience. Its 24/7 availability, effortless booking options, and dedicated customer service make Relaxo the perfect oasis for modern travelers.",
      technologies: [
        { icon: <RiNextjsFill />, name: "Next.js", color: "text-slate-200" },
        { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
        { icon: <SiSanity />, name: "Sanity.io", color: "text-red-400" },
        { icon: <BsStripe />, name: "Stripe", color: "text-blue-400" },
        {
          icon: <RiTailwindCssFill />,
          name: "TailwindCSS",
          color: "text-blue-300",
        },
      ],
      media: { type: "video", src: "/Video/Relaxo.mp4" },
      github: "https://github.com/nadundilshan0001/RelaxoBookings",
      demo: "https://relaxo-bookings.vercel.app/",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "ResQ",
      description:
        "ResQ is a full-stack web application developed during the second year, second semester, designed for a pet rescue and adoption center.",
      fullDescription:
        "It enables the center to manage its operations, rescue pets, and connect with potential adopters through a seamless web platform.",
      technologies: [
        { icon: <FaReact />, name: "React.js", color: "text-blue-400" },
        { icon: <FaNodeJs />, name: "Node.js", color: "text-green-400" },
        { icon: <SiExpress />, name: "Express.js", color: "text-red-400" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-blue-300" },
        {
          icon: <RiTailwindCssFill />,
          name: "TailwindCSS",
          color: "text-blue-400",
        },
      ],
      media: { type: "image", src: resq, alt: "ResQ" },
      github:
        "https://github.com/nadundilshan0001/Pet-Rescue-and-Adoption-Management-System",
      gradient: "from-blue-600 to-cyan-600",
    },
  ];

  return (
    <section id="works" className="py-20 px-6 md:px-20 relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariant}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <FaCode className="text-pink-400" />
            <span className="text-sm font-medium text-slate-300">
              Portfolio
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Here are some of my selected works I have done lately. Feel free to
            check them out.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              variants={fadeInVariant}
            >
              <div className="glass rounded-3xl overflow-hidden">
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 p-6 md:p-10`}
                >
                  <div className="flex-1 flex flex-col justify-center">
                    <motion.div
                      className={`inline-flex w-fit px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${project.gradient} text-white`}
                      whileHover={{ scale: 1.05 }}
                    >
                      Featured Project
                    </motion.div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      {project.fullDescription}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-4 text-slate-200">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-4">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            className="glass px-4 py-2 rounded-xl flex items-center gap-2"
                            whileHover={{ scale: 1.1, y: -3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className={tech.color}>{tech.icon}</span>
                            <span className="text-sm text-slate-300">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-medium`}
                      >
                        <FaGithub />
                        <span>View Code</span>
                      </motion.a>

                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-white/20 transition-all duration-300"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center relative">
                    <motion.div
                      className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 blur-xl`}
                      />

                      <div className="relative glass p-2 rounded-2xl h-full">
                        {project.media.type === "video" ? (
                          <video
                            className="w-full h-full object-cover rounded-xl"
                            loop
                            controls
                            muted
                            autoPlay
                            src={project.media.src}
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            src={project.media.src}
                            alt={project.media.alt}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              <motion.div
                className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
