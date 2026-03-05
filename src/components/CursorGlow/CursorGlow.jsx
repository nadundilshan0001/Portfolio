"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const colors = [
  { primary: "rgba(147, 51, 234, 0.3)", secondary: "rgba(219, 39, 119, 0.2)" },
  { primary: "rgba(59, 130, 246, 0.3)", secondary: "rgba(14, 165, 233, 0.2)" },
  { primary: "rgba(236, 72, 153, 0.3)", secondary: "rgba(168, 85, 247, 0.2)" },
  { primary: "rgba(34, 197, 94, 0.3)", secondary: "rgba(59, 130, 246, 0.2)" },
  { primary: "rgba(251, 146, 60, 0.3)", secondary: "rgba(239, 68, 68, 0.2)" },
];

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    let timeout;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMoving(false);
      }, 150);

      const newColorIndex = Math.floor(
        (e.clientX / window.innerWidth) * colors.length,
      );
      setColorIndex(newColorIndex);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkDesktop);
      clearTimeout(timeout);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
          scale: isMoving ? 1.2 : 1,
          opacity: isMoving ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          opacity: { duration: 0.3 },
        }}
        style={{
          background: `radial-gradient(circle, ${colors[colorIndex].primary} 0%, transparent 70%)`,
        }}
      />

      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
          scale: isMoving ? 1.1 : 0.9,
          opacity: isMoving ? 0.4 : 0.2,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 100,
          opacity: { duration: 0.4 },
        }}
        style={{
          background: `radial-gradient(circle, ${colors[colorIndex].secondary} 0%, transparent 70%)`,
        }}
      />

      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-3xl"
        animate={{
          x: mousePosition.x - 350,
          y: mousePosition.y - 350,
          scale: isMoving ? 0.9 : 1.1,
          opacity: 0.15,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 80,
        }}
        style={{
          background: `radial-gradient(circle, ${colors[(colorIndex + 2) % colors.length].primary} 0%, transparent 70%)`,
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-2xl"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          opacity: isMoving ? 0.5 : 0,
        }}
        transition={{
          x: { duration: 0.8, ease: "easeOut" },
          y: { duration: 0.8, ease: "easeOut" },
          opacity: { duration: 0.3 },
        }}
        style={{
          background: `radial-gradient(circle, ${colors[(colorIndex + 3) % colors.length].secondary} 0%, transparent 60%)`,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      >
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: `${mousePosition.x * 0.05}px ${mousePosition.y * 0.05}px`,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 100,
          }}
        />
      </div>
    </div>
  );
};

export default CursorGlow;
