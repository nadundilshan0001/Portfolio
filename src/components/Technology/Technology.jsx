"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
  SiStripe,
  SiC,
  SiCplusplus,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { MdOutlineCode } from "react-icons/md";

const Technology = () => {
  const techStack = [
    { icon: <SiNextdotjs />, name: "Next.js", color: "hover:text-slate-200" },
    { icon: <FaReact />, name: "React.js", color: "hover:text-blue-400" },
    { icon: <FaNodeJs />, name: "Node.js", color: "hover:text-green-500" },
    { icon: <SiMongodb />, name: "MongoDB", color: "hover:text-green-600" },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      color: "hover:text-yellow-400",
    },
    { icon: <SiStripe />, name: "Stripe", color: "hover:text-purple-500" },
    { icon: <FaGitAlt />, name: "Git", color: "hover:text-orange-500" },
    { icon: <FaJava />, name: "Java", color: "hover:text-red-500" },
    { icon: <SiC />, name: "C", color: "hover:text-blue-600" },
    { icon: <SiCplusplus />, name: "C++", color: "hover:text-blue-500" },
    { icon: <FaPython />, name: "Python", color: "hover:text-yellow-300" },
    { icon: <SiMysql />, name: "MySQL", color: "hover:text-blue-600" },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
      color: "hover:text-cyan-400",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
      color: "hover:text-purple-600",
    },
  ];

  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <section
      id="technology"
      className="py-20 px-6 md:px-20 relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <MdOutlineCode className="text-cyan-400" />
            <span className="text-sm font-medium text-slate-300">
              Tech Stack
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </motion.div>

        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

          <div className="overflow-hidden py-8">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -50 * techStack.length],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTechStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.2, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center space-y-3 min-w-[120px] min-h-[120px] group cursor-pointer">
                    <div
                      className={`text-5xl text-slate-400 transition-all duration-300 ${tech.color}`}
                    >
                      {tech.icon}
                    </div>
                    <p className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                      {tech.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass p-4 rounded-2xl flex flex-col items-center justify-center space-y-2 aspect-square group cursor-pointer"
            >
              <div
                className={`text-3xl md:text-4xl text-slate-400 transition-all duration-300 ${tech.color}`}
              >
                {tech.icon}
              </div>
              <p className="text-[10px] md:text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors text-center">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              title: "Frontend",
              skills: ["React.js", "Next.js", "TailwindCSS", "JavaScript"],
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              title: "Backend",
              skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
              gradient: "from-purple-500 to-pink-500",
            },
            {
              title: "Other",
              skills: ["Git", "Stripe", "Python", "Java"],
              gradient: "from-orange-500 to-red-500",
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl"
            >
              <div
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${category.gradient} text-white`}
              >
                {category.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
