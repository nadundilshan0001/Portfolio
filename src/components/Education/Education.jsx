"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaCertificate,
  FaPython,
  FaGraduationCap,
} from "react-icons/fa";

const Education = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("education-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const educationData = [
    {
      icon: <FaUniversity size={40} />,
      title: "BSc (Hons) in Information Technology",
      subtitle: "Specialising in Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      period: "2021 - Present",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: <FaPython size={40} />,
      title: "Python for Beginners E-Certificate",
      institution: "University of Moratuwa",
      period: "2023",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <FaCertificate size={40} />,
      title: "Introduction to Front-End Development",
      institution: "Meta",
      period: "2024",
      color: "from-pink-500 to-red-500",
      bgColor: "bg-pink-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education-section" className="py-20 px-6 md:px-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <FaGraduationCap className="text-purple-400" />
            <span className="text-sm font-medium text-slate-300">
              Education & Certifications
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Learning Journey</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Continuous learning and growth through formal education and
            professional certifications
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="glass p-6 rounded-2xl h-full relative overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <motion.div
                  className={`relative w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className={`bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}
                  >
                    {item.icon}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <p className="text-sm text-slate-400 mb-3">{item.subtitle}</p>
                )}

                <p className="text-slate-300 font-medium mb-2">
                  {item.institution}
                </p>

                <div className="flex items-center gap-2">
                  <div
                    className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${item.color}`}
                  />
                  <p className="text-sm text-slate-500">{item.period}</p>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-bl-full`}
                  />
                </div>
              </div>

              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-300`}
              />
            </motion.div>
          ))}{" "}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "3+", label: "Years of Study" },
            { number: "10+", label: "Technologies" },
            { number: "15+", label: "Projects" },
            { number: "3", label: "Certifications" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-2xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                {stat.number}
              </motion.h4>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
