import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F]">
      {/* Animated Background Gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 77, 28, 0.15), transparent 50%)`
        }}
      />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 77, 28, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 77, 28, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Top Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-orange)] bg-[var(--accent-orange)]/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent-orange)]" />
            <span className="text-sm font-medium text-[var(--accent-orange)]">
              YOUR FUTURE, AUTOMATED
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="block">LET'S WORK</span>
            <span className="block">TOGETHER</span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-orange)] text-white rounded-lg font-bold text-lg hover:glow-effect transition-all duration-300 transform hover:scale-105 group"
            >
              CONNECT WITH ME
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Personal Photo Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Large Name Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <h2 
                className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-black text-transparent opacity-5"
                style={{
                  WebkitTextStroke: '2px rgba(255, 77, 28, 0.3)',
                  letterSpacing: '-0.05em'
                }}
              >
                AHMER
              </h2>
            </div>

            {/* Photo Container */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
              {/* Left Tagline */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-left"
              >
                <p className="text-sm font-medium text-gray-400 mb-1">EXPERTISE IN</p>
                <p className="text-xl font-bold text-[var(--accent-orange)]">N8N EXPERT</p>
              </motion.div>

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--accent-orange)] glow-effect">
                  <img
                    src="https://i.postimg.cc/28yrHQTZ/Gemini-Generated-Image-dlr41adlr41adlr4.png"
                    alt="Ahmer - AI Automation Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Portfolio Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[var(--bg-card)] border border-gray-800 px-6 py-2 rounded-full whitespace-nowrap">
                  <p className="text-sm font-semibold">Portfo<span className="text-[var(--accent-orange)]">lio.</span></p>
                </div>
              </motion.div>

              {/* Right Tagline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-right"
              >
                <p className="text-sm font-medium text-gray-400 mb-1">SPECIALIZED IN</p>
                <p className="text-xl font-bold text-[var(--accent-orange)]">AI AGENT BUILDER</p>
              </motion.div>
            </div>

            {/* Bottom Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Creative AI Automation Expert, crafting high-performance, intelligent workflows 
              that <span className="text-[var(--accent-orange)] font-semibold">redefine productivity</span>.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs font-medium">SCROLL TO EXPLORE</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}