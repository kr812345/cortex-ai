"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Marketing() {
  return (
    <section className="py-32 px-6 bg-[var(--color-obsidian)] relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-silver)] rounded-full mix-blend-screen filter blur-[200px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              A Unified Interface for <br className="hidden md:block"/>
              <span className="liquid-gradient-text">Complex Data</span>
            </h2>
            <p className="text-xl text-[var(--color-silver)] mb-8 leading-relaxed">
              CortexAi translates complex enterprise architectures into conversational intelligence. Stop hunting for documentation and let the intelligence layer connect the dots.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "End-to-end SOC2 Type II compliance",
                "On-premise deployment available",
                "Native active directory integration",
                "Zero-data retention policies"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[var(--color-silver)]">
                  <CheckCircle2 className="text-[var(--color-bronze)]" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="metallic-button px-8 py-4 rounded-full text-white font-medium">
              Explore Architecture
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden metallic-surface p-2"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image 
                src="/dashboard.png" 
                alt="CortexAi Dashboard Interface" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative h-[600px] w-full rounded-3xl overflow-hidden metallic-surface p-2"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden group">
              <Image 
                src="/abstract.png" 
                alt="Abstract AI Visual" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-2xl font-bold text-white mb-2">Neural Synergy</p>
                <p className="text-white/70">Connecting unstructured data lakes into coherent logic models.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Scale Intelligence <br className="hidden md:block"/>
              <span className="text-[var(--color-titanium)] text-stroke" style={{ WebkitTextStroke: '1px var(--color-silver)' }}>Without Limits</span>
            </h2>
            <p className="text-xl text-[var(--color-silver)] leading-relaxed">
              Whether you're processing million-row spreadsheets or querying across distributed microservices, CortexAi scales horizontally to meet your enterprise demands.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
