"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Plus, Lightbulb, Mic, Send, ChevronDown, Feather } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Text Pattern mimicking the reference */}
      <div className="absolute inset-0 z-0 opacity-[0.03] select-none pointer-events-none flex flex-wrap overflow-hidden font-mono text-xs text-white break-all leading-tight">
        {Array(200).fill("μ+δ πΙ+@ Q GMOTσ ZR V% X,R + S LKHDQV. *@X& R . θ . v P+K . Tμ σC O N+Z C+ N UTL M πσ WCT +UNδ . ΗΩ Ω Z Wλ R SO * δ Yβ BΩλμ μφ**- MUME *v J.KT S+ A R * + D ~S &β 0UF .UVS S LKHDQV . *@X & R, M + G E K X&H X AQ  U ΩP H X N KΩ -U & α B R v LO - L Z  U Z I U P+F &E O ZAIQLO * X  Y  G E").join(" ")}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6"
        >
          The Enterprise <br />
          <span className="liquid-gradient-text">Intelligence Layer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[var(--color-silver)] max-w-2xl mb-16"
        >
          Unify your company's knowledge. Automate workflows. Build agents that understand your business logic natively.
        </motion.p>

        {/* DeepSeek-like Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full max-w-3xl relative mt-10 group"
        >
          {/* Glowing Aura behind the input */}
          <div className="glow-aura"></div>
          
          {/* The main input container with glow-border */}
          <div className="glow-border rounded-3xl metallic-surface p-1 relative flex flex-col justify-between min-h-[140px]">
            
            {/* Top input area */}
            <div className="flex-1 w-full px-4 pt-4">
              <textarea 
                placeholder="Ask anything..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-white/40 outline-none resize-none font-sans text-lg min-h-[60px]"
                autoFocus
              />
            </div>
            
            {/* Bottom action bar */}
            <div className="flex items-center justify-between w-full p-2 mt-auto">
              {/* Left actions */}
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                  <Plus size={18} />
                </button>
                <button className="h-10 px-4 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium">
                  <Feather size={16} />
                  Normal
                  <ChevronDown size={14} className="opacity-50" />
                </button>
                <button className="h-10 px-4 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium">
                  <Lightbulb size={16} />
                  DeepThink
                  <ChevronDown size={14} className="opacity-50" />
                </button>
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-2">
                <button className="h-10 px-4 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium">
                  <Mic size={16} />
                  Voice
                </button>
                <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${query.length > 0 ? 'bg-gradient-to-r from-[#e46e3c] to-[#466eff] text-white shadow-[0_0_15px_rgba(228,110,60,0.5)]' : 'bg-white/10 text-white/50 pointer-events-none'}`}>
                  <Send size={18} className={query.length > 0 ? "ml-1" : ""} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small example prompts below the search */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-[var(--color-silver)]"
        >
          <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">@cortex what is our HR policy?</span>
          <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">Create a Jira task for frontend update</span>
          <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">Summarize Q3 financial report</span>
        </motion.div>

      </div>
    </section>
  );
}
