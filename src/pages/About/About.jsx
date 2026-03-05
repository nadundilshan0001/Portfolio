"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import MyImage from "../../../public/Images/Profile.webp";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 1.2 + i * 0.1,
      },
    }),
  };

  return (
    <motion.div
      style={{ opacity, scale }}
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 gap-10 pt-32 pb-20"
      initial="hidden"
      animate="visible"
      id="about"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div className="flex-1 z-10 max-w-2xl" variants={textVariants}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 mb-6 glass rounded-full text-sm"
        >
          <span className="text-purple-400">👋</span> Welcome to my portfolio
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          variants={textVariants}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text animate-gradient">Nadun Dilshan</span>
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl font-semibold mb-6 text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-purple-400"
          >
            Full-Stack Developer
          </motion.span>
        </motion.div>

        <motion.p
          className="text-lg text-slate-400 leading-relaxed mb-8"
          variants={textVariants}
        >
          I am a passionate Full-Stack Developer specializing in building
          exceptional digital experiences with the MERN stack, Next.js, and
          modern web technologies. I love turning complex problems into elegant
          solutions.
        </motion.p>

        <motion.div
          className="flex gap-4 mb-10"
          initial="hidden"
          animate="visible"
        >
          <motion.a
            custom={0}
            variants={socialVariants}
            href="https://github.com/nadundilshan0001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="glass p-4 rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            <FaGithub className="text-2xl" />
          </motion.a>
          <motion.a
            custom={1}
            variants={socialVariants}
            href="https://www.linkedin.com/in/nadun-dilshan-935124282/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="glass p-4 rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="h-0.5 w-16 bg-gradient-to-r from-purple-500 to-transparent" />
          <span className="text-sm uppercase tracking-wider">
            Scroll for more
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown className="text-purple-400" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center items-center z-10 relative"
        variants={imageVariants}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 blur-xl opacity-60"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="relative p-2 glass rounded-full">
            <Image
              src={MyImage}
              alt="Profile"
              className="rounded-full object-cover w-64 h-64 md:w-96 md:h-96 relative z-10"
              priority
            />
          </div>

          <motion.div
            className="absolute -top-5 -right-5 glass p-4 rounded-2xl backdrop-blur-xl"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-3xl">💻</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
