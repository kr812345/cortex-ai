"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Database, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "Secure Knowledge Base",
    description: "Connect your enterprise data sources securely. CortexAi understands your internal policies, HR rules, and technical documentation with role-based access control.",
    icon: Shield,
    color: "#cd7f32",
    query: "@cortex what is the rule in sexual harassment of our company?"
  },
  {
    title: "Workflow Automation",
    description: "Turn natural language into complex actions. Native integrations with Jira, GitHub, Slack, and Salesforce allow your team to operate at the speed of thought.",
    icon: Zap,
    color: "#aeb5be",
    query: "@cortex create a jira task with title: intern_work..."
  },
  {
    title: "Multi-Agent Orchestration",
    description: "Deploy specialized agents for engineering, sales, and HR. Our orchestrator seamlessly routes complex tasks to the most capable models.",
    icon: Database,
    color: "#ffffff",
    query: "@cortex analyze Q3 sales data and update the CRM."
  }
];

export default function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-[var(--color-obsidian)]" style={{ minHeight: "300vh" }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
        
        {/* Title Section */}
        <div className="text-center w-full z-0 mb-10 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 liquid-gradient-text">Intelligent Capabilities</h2>
          <p className="text-[var(--color-silver)] text-lg">Designed for the modern enterprise.</p>
        </div>

        {/* Cards Container */}
        <div className="relative w-full max-w-5xl mx-auto px-6 flex-1 max-h-[600px] z-10">
          {features.map((feature, index) => {
            const total = features.length;
            const targetScale = 1 - ((total - index) * 0.05);
            
            // For 3 cards: index 0 (0-0), index 1 (0-0.5), index 2 (0.5-1)
            const rangeStart = Math.max(0, (index - 1) / (total - 1));
            const rangeEnd = index / (total - 1);
            
            // Slide up from bottom of the screen
            const y = useTransform(
              scrollYProgress,
              [rangeStart, rangeEnd],
              [index === 0 ? "0%" : "150%", "0%"]
            );

            // Scale shrinks as subsequent cards come in
            const shrinkStart = index / (total - 1);
            const scale = useTransform(
              scrollYProgress,
              [shrinkStart, 1],
              [1, targetScale]
            );

            // Dim the cards behind slightly
            const opacity = useTransform(
              scrollYProgress,
              [shrinkStart, 1],
              [1, 0.4]
            );

            // Stacking offset so they look like a deck of cards
            const top = `${index * 30}px`;

            return (
              <motion.div
                key={index}
                style={{ y, scale, opacity, top }}
                className="absolute w-full metallic-surface rounded-3xl p-8 md:p-12 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border border-white/10 origin-top"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 shadow-inner">
                      <feature.icon size={32} color={feature.color} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                    <p className="text-lg text-[var(--color-silver)] leading-relaxed mb-8">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="flex-1 w-full bg-[#0a0a0c] rounded-2xl p-6 border border-white/5 relative overflow-hidden group shadow-inner">
                    {/* Glow effect inside code block */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-bronze)] rounded-full mix-blend-screen filter blur-[80px] opacity-10"></div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <p className="font-mono text-sm text-white/80 mb-4 leading-loose">
                      <span className="text-[var(--color-bronze)] font-bold">~</span> {feature.query}
                    </p>
                    <div className="h-24 w-full bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
