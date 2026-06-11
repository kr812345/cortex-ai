"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(15, 16, 20, 0)", "rgba(15, 16, 20, 0.85)"]
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-silver)]">
          <a href="#platform" className="hover:text-white transition-colors hover:shadow-[0_0_10px_rgba(174,181,190,0.3)]">Platform</a>
          <a href="#solutions" className="hover:text-white transition-colors hover:shadow-[0_0_10px_rgba(174,181,190,0.3)]">Solutions</a>
          <a href="#security" className="hover:text-white transition-colors hover:shadow-[0_0_10px_rgba(174,181,190,0.3)]">Security</a>
          <a href="#resources" className="hover:text-white transition-colors hover:shadow-[0_0_10px_rgba(174,181,190,0.3)]">Resources</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="metallic-button px-5 py-2 rounded-full text-sm font-semibold text-white">
            Request Demo
          </button>
        </div>

        <button 
          className="md:hidden text-white/70"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 bg-[#0f1014] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#platform" className="text-lg text-[var(--color-silver)]">Platform</a>
          <a href="#solutions" className="text-lg text-[var(--color-silver)]">Solutions</a>
          <a href="#security" className="text-lg text-[var(--color-silver)]">Security</a>
          <button className="metallic-button mt-4 px-5 py-3 rounded-xl text-center font-semibold text-white">
            Request Demo
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
