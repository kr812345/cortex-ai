"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          filter: [
            "drop-shadow(0 0 4px rgba(174, 181, 190, 0.5))",
            "drop-shadow(0 0 12px rgba(174, 181, 190, 0.8))",
            "drop-shadow(0 0 4px rgba(174, 181, 190, 0.5))",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M50 10 C30 10 15 25 15 45 C15 55 18 63 25 70 C28 73 30 78 30 82 C30 86 33 90 38 90 L62 90 C67 90 70 86 70 82 C70 78 72 73 75 70 C82 63 85 55 85 45 C85 25 70 10 50 10 Z"
          stroke="url(#liquid-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M50 10 V90 M30 35 H70 M25 55 H75"
          stroke="url(#liquid-gradient)"
          strokeWidth="2"
          strokeDasharray="100"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <circle cx="50" cy="50" r="8" fill="#cd7f32" />
        <defs>
          <linearGradient id="liquid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#aeb5be" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#23252a" />
          </linearGradient>
        </defs>
      </motion.svg>
      <span className="text-xl font-bold tracking-tight liquid-gradient-text hidden sm:block">
        CortexAi
      </span>
    </div>
  );
}
