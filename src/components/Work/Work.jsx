"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BsStripe } from "react-icons/bs";
import { SiExpress, SiMongodb, SiSanity, SiTypescript } from "react-icons/si";
import resq from "../../../public/Images/resq.png";

const Work = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="work" className="my-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariant}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-center mb-8 border-b-2 border-red-500 inline-block">
            My Works
          </h2>
          <p className="text-xl text-gray-600">
            Here are some of my selected works I have done lately. Feel free to
            check them out.
          </p>
        </motion.div>

        <div className="space-y-10">
          {/* Project 1 */}
          <motion.div
            className="flex-row md:flex bg-gray-800 rounded-lg shadow-lg py-10 px-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={fadeInVariant}
          >
            <div className="text-white flex-1 md:mx-5">
              <h3 className="text-3xl font-semibold mb-5">Relaxo App</h3>
              <p className="md:my-10 text-slate-200">
                Relaxo is an innovative travel solution designed to elevate the
                airport experience. With state-of-the-art sleeping pods, it
                provides a serene and comfortable space for travelers to rest,
                recharge, and refresh during long layovers or waits. From
                essential amenities in the Standard Pods to luxurious features
                in the VIP Pods, Relaxo ensures every journey is met with
                tranquility and convenience. Its 24/7 availability, effortless
                booking options, and dedicated customer service make Relaxo the
                perfect oasis for modern travelers. Relax, recharge, and take
                off with Relaxo.
              </p>
              <div className="mb-4">
                <h4 className="text-xl font-medium md:mb-5 my-5">
                  Technologies Used:
                </h4>
                <ul className="list-disc ml-6">
                  <li className="flex items-center">
                    <RiNextjsFill className="mr-2 text-slate-200" /> Next.js
                  </li>
                  <li className="flex items-center">
                    <SiTypescript className="mr-2 text-blue-400" />
                    TypeScript
                  </li>
                  <li className="flex items-center">
                    <SiSanity className="mr-2 text-red-400" />
                    Sanity.io
                  </li>
                  <li className="flex items-center">
                    <BsStripe className="mr-2 text-blue-400" /> Stripe
                  </li>
                  <li className="flex items-center">
                    <RiTailwindCssFill className="mr-2 text-blue-300" />
                    TailwindCSS
                  </li>
                </ul>
              </div>
              <div className="flex space-x-4 mt-5">
                <a
                  href="https://github.com/nadundilshan0001/RelaxoBookings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
                <a
                  href="https://relaxo-bookings.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 hover:text-green-800"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
            <div className="my-5 md:mt-4 flex-1">
              <div className=" flex h-full">
                <video
                  className="w-full h-auto rounded-lg"
                  loop
                  controls
                  muted
                  src="/Video/Relaxo.mp4"
                  alt="Relaxo Demo"
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="flex-row md:flex bg-gray-800 rounded-lg shadow-lg py-10 px-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInVariant}
          >
            <div className="text-white flex-1 md:mx-5">
              <h3 className="text-3xl font-semibold mb-5">ResQ</h3>
              <p className="md:my-10 text-slate-200">
                ResQ is a full-stack web application developed during the second
                year, second semester, designed for a pet rescue and adoption
                center. It enables the center to manage its operations, rescue
                pets, and connect with potential adopters through a seamless web
                platform.
              </p>
              <div className="mb-4">
                <h4 className="text-xl font-medium md:mb-5 my-5">
                  Technologies Used:
                </h4>
                <ul className="list-disc ml-6">
                  <li className="flex items-center">
                    <FaReact className="mr-2 text-blue-400" /> React.js
                  </li>
                  <li className="flex items-center">
                    <FaNodeJs className="mr-2 text-green-400" />
                    Node.js
                  </li>
                  <li className="flex items-center">
                    <SiExpress className="mr-2 text-red-400" />
                    Express.js
                  </li>
                  <li className="flex items-center">
                    <SiMongodb className="mr-2 text-blue-300" />
                    MongoDB
                  </li>
                  <li className="flex items-center">
                    <RiTailwindCssFill className="mr-2 text-blue-400" />
                    TailwindCSS
                  </li>
                </ul>
              </div>
              <div className="flex space-x-4 mt-5">
                <a
                  href="https://github.com/nadundilshan0001/Pet-Rescue-and-Adoption-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
            <div className="my-5 md:mt-4 flex-1">
              <Image
                src={resq}
                alt="ResQ"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
