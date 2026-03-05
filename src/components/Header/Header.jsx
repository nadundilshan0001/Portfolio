"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const navItems = [
    { name: "About", to: "about" },
    { name: "Education", to: "education-section" },
    { name: "Works", to: "works" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-dark shadow-2xl shadow-purple-500/10"
          : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between py-5">
          <motion.div
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">ND</span>
            <span className="text-slate-400 text-sm ml-1">.</span>
          </motion.div>

          <div className="md:hidden z-50">
            <motion.button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 flex items-center justify-center glass rounded-lg"
            >
              <motion.div
                animate={menuOpen ? "open" : "closed"}
                className="flex flex-col items-center justify-center"
              >
                {menuOpen ? (
                  <FaTimes className="text-2xl text-purple-400" />
                ) : (
                  <FaBars className="text-2xl text-purple-400" />
                )}
              </motion.div>
            </motion.button>
          </div>

          <motion.ul
            initial="hidden"
            animate={menuOpen || isDesktop ? "visible" : "hidden"}
            className={`${
              menuOpen || isDesktop ? "flex" : "hidden"
            } absolute top-20 left-5 right-5 glass-dark rounded-2xl text-center flex-col gap-2 p-6 md:static md:bg-transparent md:backdrop-blur-none md:border-0 md:flex-row md:gap-8 md:p-0`}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.to}
                custom={index}
                variants={listItemVariants}
                className="relative group"
              >
                <Link
                  activeClass="active"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer block py-2 px-4 rounded-lg transition-all duration-300 hover:text-purple-400 relative"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <div className="hidden md:block">
            <motion.a
              href="https://drive.google.com/file/d/1640sf8fqYW0H0D1xooD0l0jkXqm6Yxbg/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2.5 rounded-full font-semibold text-sm overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient" />
              <span className="relative z-10 text-white">Download CV</span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
