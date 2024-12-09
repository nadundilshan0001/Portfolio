"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaPython,
} from "react-icons/fa";

const Education = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation when in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    // Target the current element to observe
    const element = document.getElementById("education-section");
    if (element) observer.observe(element);

    // Cleanup the observer on component unmount
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="education-section" className="md:py-32 my-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-10 border-b-2 border-red-500 inline-block"
        >
          Education & Qualifications
        </motion.h2>

        <div className="space-y-6">
          {/* University Degree */}
          <motion.div
            className="flex items-center p-4 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : -100,
            }}
            transition={{ duration: 0.8 }}
          >
            <FaUniversity size={30} className="text-indigo-700 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">
                BSc (Hons) in Information Technology Specialising in Information
                Technology
              </h3>
              <p className="text-gray-600">
                Sri Lanka Institute of Information Technology
              </p>
              <p className="text-gray-500">2021 - Present</p>
            </div>
          </motion.div>

          {/* Certification */}
          <motion.div
            className="flex items-center p-4 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : -100,
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FaPython size={30} className="text-indigo-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">
                Python for Beginners E-Certificate
              </h3>
              <p className="text-gray-600">University of Moratuwa</p>
              <p className="text-gray-500">2023</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center p-4 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : -100,
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FaCertificate size={30} className="text-indigo-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">
                Introduction to Front-End Development
              </h3>
              <p className="text-gray-600">Meta</p>
              <p className="text-gray-500">2024</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
