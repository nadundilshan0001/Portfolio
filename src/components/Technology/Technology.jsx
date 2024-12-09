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

const Technology = () => {
  const techStack = [
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiStripe />, name: "Stripe" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiC />, name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
  ];

  return (
    <section id="technology" className="py-10 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16">
        <h2 className="text-3xl font-bold border-b-2 border-red-500 mb-8 ">
          Technologies I Work With
        </h2>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2 min-w-[80px] md:min-w-[100px]"
              >
                <div className="text-4xl md:text-6xl text-gray-700">
                  {tech.icon}
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-600">
                  {tech.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
