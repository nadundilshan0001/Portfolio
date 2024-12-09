"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      id="contact"
      className="bg-black text-white md:pb-5 md:pt-32 md:mt-20 py-10"
    >
      <div className="max-w-screen-xl mx-auto px-4 text-center md:flex-col justify-around ">
        {/* Title */}
        <div className=" md:mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={fadeInVariant}
            className="text-3xl font-bold mb-2"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInVariant}
            className="text-sm text-gray-400"
          >
            Feel free to reach out to me through any of the following platforms!
          </motion.p>
        </div>
        {/* Contact Links */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 md:mb-20 py-16">
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/nadun-dilshan-935124282/"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={fadeInVariant}
            className="flex items-center text-gray-400 hover:text-blue-500"
          >
            <FaLinkedin className="text-3xl mr-3" />
            <span className="text-lg">LinkedIn</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/nadundilshan0001"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInVariant}
            className="flex items-center text-gray-400 hover:text-gray-200"
          >
            <FaGithub className="text-3xl mr-3" />
            <span className="text-lg">GitHub</span>
          </motion.a>

          {/* Email */}
          <motion.p
            href="nadundilshanuni01@gmail.com"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeInVariant}
            className="flex items-center text-gray-400 hover:text-red-400"
          >
            <FaEnvelope className="text-3xl mr-3" />
            <span className="text-lg">nadundilshanuni01@gmail.com</span>
          </motion.p>

          {/* Phone */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={fadeInVariant}
            className="flex items-center text-gray-400"
          >
            <FaPhone className="text-3xl mr-3" />
            <span className="text-lg">+94 763474758</span>
          </motion.div>
        </div>

        {/* Footer Note */}
        <div className=" mb-10">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInVariant}
            className="mt-10 text-sm text-gray-500"
          >
            © {new Date().getFullYear()} Nadun Dilshan. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
