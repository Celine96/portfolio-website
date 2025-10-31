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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Animated Background Gradient */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 255, 0, 0.1), transparent 50%)`
        }}
      />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 255, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 255, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Top Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10 mb-8 animate-pulse-glow"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent-yellow)]" />
            <span className="text-sm font-medium text-[var(--accent-yellow)]">
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
            <span className="block text-glow">LET'S AUTOMATE</span>
            <span className="block text-glow">YOUR BUSINESS</span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-yellow)] text-black rounded-xl font-bold text-lg glow-effect transition-all duration-300 transform hover:scale-105 group"
            >
              CONNECT WITH ME
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* 3-Layer Photo Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative max-w-5xl mx-auto"
            style={{ minHeight: "500px" }}
          >
            {/* Layer 1: Pure Black Background - Already set by section */}
            
            {/* Layer 2: Large Semi-transparent Name */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-[15rem] md:text-[20rem] lg:text-[30rem] font-black text-white"
                style={{
                  letterSpacing: '-0.05em',
                  lineHeight: 1
                }}
              >
                AHMER
              </motion.h2>
            </div>

            {/* Layer 3: Portrait merged with background */}
            <div className="relative z-10 flex flex-col md:flex-row items-end justify-center gap-12 md:gap-20 pt-20">
              {/* Left Tagline */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-left mb-8 md:mb-0 animate-float"
              >
                <p className="text-sm font-medium text-gray-500 mb-1">EXPERTISE IN</p>
                <p className="text-xl font-bold text-[var(--accent-yellow)] text-glow">N8N EXPERT</p>
              </motion.div>

              {/* Photo - Pure black background merging seamlessly */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="relative"
              >
                <img
                  src="https://i.postimg.cc/28yrHQTZ/Gemini-Generated-Image-dlr41adlr41adlr4.png"
                  alt="Ahmer - AI Automation Expert"
                  className="w-72 h-auto md:w-96 object-cover object-top"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1)',
                    mixBlendMode: 'lighten'
                  }}
                />
                {/* Portfolio Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black border border-[var(--accent-yellow)] px-6 py-2 rounded-full whitespace-nowrap glow-effect">
                  <p className="text-sm font-semibold">Portfo<span className="text-[var(--accent-yellow)]">lio.</span></p>
                </div>
              </motion.div>

              {/* Right Tagline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-right mb-8 md:mb-0 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <p className="text-sm font-medium text-gray-500 mb-1">SPECIALIZED IN</p>
                <p className="text-xl font-bold text-[var(--accent-yellow)] text-glow">AI AGENT BUILDER</p>
              </motion.div>
            </div>

            {/* Bottom Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-24 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Creative AI Automation Expert, crafting high-performance, intelligent workflows 
              that <span className="text-[var(--accent-yellow)] font-semibold text-glow">redefine productivity</span>.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}