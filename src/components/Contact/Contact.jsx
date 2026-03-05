"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaRocket,
} from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";

const Contact = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const contactLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      value: "nadun-dilshan",
      href: "https://www.linkedin.com/in/nadun-dilshan-935124282/",
      color: "from-blue-600 to-blue-400",
      hoverColor: "group-hover:text-blue-400",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      value: "@nadundilshan0001",
      href: "https://github.com/nadundilshan0001",
      color: "from-slate-600 to-slate-400",
      hoverColor: "group-hover:text-slate-300",
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      value: "nadundilshanuni01@gmail.com",
      href: "mailto:nadundilshanuni01@gmail.com",
      color: "from-red-600 to-pink-400",
      hoverColor: "group-hover:text-pink-400",
    },
    {
      icon: <FaPhone />,
      name: "Phone",
      value: "+94 763474758",
      href: "tel:+94763474758",
      color: "from-green-600 to-emerald-400",
      hoverColor: "group-hover:text-green-400",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative py-20 px-6 md:px-20 mt-20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
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
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            <BiMessageDetail className="text-purple-400" />
            <span className="text-sm font-medium text-slate-300">
              Let&apos;s Connect
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              variants={fadeInVariant}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative flex items-center gap-4">
                <div
                  className={`text-4xl text-slate-400 transition-colors duration-300 ${link.hoverColor}`}
                >
                  {link.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-200 mb-1">
                    {link.name}
                  </h3>
                  <p className="text-slate-400 text-sm break-all">
                    {link.value}
                  </p>
                </div>
                <motion.div
                  className="text-slate-600 group-hover:text-purple-400 transition-colors"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaRocket className="text-xl" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariant}
          className="glass p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          />

          <div className="relative z-10">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to Start a Project?
            </motion.h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Let&apos;s work together to bring your ideas to life with modern
              web solutions
            </p>
            <motion.a
              href="mailto:nadundilshanuni01@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/30"
            >
              <FaEnvelope />
              <span>Send Me a Message</span>
            </motion.a>
          </div>
        </motion.div>

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariant}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <motion.a
              href="https://github.com/nadundilshan0001"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="glass p-3 rounded-xl text-xl hover:text-purple-400 transition-colors"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nadun-dilshan-935124282/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="glass p-3 rounded-xl text-xl hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:nadundilshanuni01@gmail.com"
              whileHover={{ scale: 1.2, y: -3 }}
              className="glass p-3 rounded-xl text-xl hover:text-pink-400 transition-colors"
            >
              <FaEnvelope />
            </motion.a>
          </div>

          <motion.p
            className="text-sm text-slate-500 flex items-center justify-center gap-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Made with <FaHeart className="text-red-500" /> by Nadun Dilshan
          </motion.p>

          <p className="text-xs text-slate-600 mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
