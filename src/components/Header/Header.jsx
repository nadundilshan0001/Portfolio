"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768); // Tailwind's `md` breakpoint
    };

    checkScreenSize(); // Check initial screen size
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.header
      className="flex items-center justify-between w-full py-5 px-5 bg-black text-white "
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <div className="text-lg font-bold" />

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <motion.ul
        initial="hidden"
        animate={menuOpen || isDesktop ? "visible" : "hidden"}
        className={`${
          menuOpen || isDesktop ? "flex" : "hidden"
        } absolute top-16 left-0 w-full bg-black text-center flex-col gap-4 py-6 text-sm md:static md:w-auto md:flex-row md:justify-center md:gap-10 md:py-0`}
      >
        <motion.li
          variants={listItemVariants}
          className="hover:text-gray-300 cursor-pointer"
        >
          About
        </motion.li>
        <motion.li
          variants={listItemVariants}
          className="hover:text-gray-300 cursor-pointer"
        >
          Education
        </motion.li>
        <motion.li
          variants={listItemVariants}
          className="hover:text-gray-300 cursor-pointer"
        >
          Works
        </motion.li>
        <motion.li
          variants={listItemVariants}
          className="hover:text-gray-300 cursor-pointer"
        >
          Contact me
        </motion.li>
      </motion.ul>

      {/* Download Button */}
      <div className="hidden md:block">
        <motion.button
          variants={listItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black font-semibold rounded-lg px-4 py-2 text-sm"
        >
          Download CV
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
