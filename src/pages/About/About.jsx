"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MyImage from "../../../public/Images/Profile.webp";

const About = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div
      className="flex-col-reverse flex justify-center px-10 gap-10 bg-black text-white  md:flex-row md:px-40"
      initial="hidden"
      animate="visible"
      id="about"
    >
      <motion.div
        className="flex flex-col justify-center pt-10 flex-1  md:text-left md:pr-10"
        variants={textVariants}
      >
        <div className="text-start flex flex-col">
          <h1 className="text-7xl font-bold py-5  md:text-7xl text-red-500">
            Hi, Iʼm Nadun Dilshan.
          </h1>
          <p className="text-lg mt-5 md:text-lg">
            I am a passionate Full-Stack Developer with experience in building
            web applications using the MERN stack, Next.js, and other modern
            technologies. Proficient in multiple programming languages and
            skilled in version control, I thrive on learning new technologies
            and solving real-world challenges through innovative solutions.
          </p>
          <div className="flex justify-between w-64 gap-2 md:mt-32 my-10">
            <h1 className=" text-slate-700  relative text-sm flex-1 after:ml-2 after:absolute after:top-1/2 after:bg-red-500 after:w-24 after:h-0.5">
              SCROLL FOR MORE
            </h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        className=" h-screen flex flex-col justify-center flex-1 items-center md:pt-10"
        variants={imageVariants}
      >
        <Image
          src={MyImage}
          alt="Profile"
          className="rounded-full shadow-lg object-cover h-60 w-60 flex-nowrap md:h-96 md:w-96"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
