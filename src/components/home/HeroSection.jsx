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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#000000' }}>
      {/* Subtle Animated Background Gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 255, 0, 0.08), transparent 50%)`
        }}
      />
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" /%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Top Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10 mb-8 float-animation"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent-yellow)]" />
            <span className="text-sm font-medium text-[var(--accent-yellow)]">
              YOUR FUTURE, AUTOMATED
            </span>
          </motion.div>

          {/* Main Headline with glow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-glow"
          >
            <span className="block">LET'S AUTOMATE</span>
            <span className="block">YOUR BUSINESS</span>
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-yellow)] text-black rounded-full font-bold text-lg hover:glow-effect transition-all duration-300 transform hover:scale-105 group"
            >
              CONNECT WITH ME
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Personal Photo Section with layered effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Layer 2: Large Name Background - Behind photo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
              <h2 
                className="text-[15rem] md:text-[22rem] lg:text-[30rem] font-black"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px rgba(212, 255, 0, 0.15)',
                  letterSpacing: '-0.05em',
                  opacity: 0.4
                }}
              >
                AHMER
              </h2>
            </div>

            {/* Layer 3: Photo and Info Container */}
            <div className="relative z-10 flex flex-col md:flex-row items-end justify-center gap-12 md:gap-20" style={{ zIndex: 2 }}>
              {/* Left Tagline */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-left mb-8 md:mb-0"
              >
                <p className="text-sm font-medium text-gray-500 mb-1">EXPERTISE IN</p>
                <p className="text-xl font-bold text-[var(--accent-yellow)] text-glow">N8N EXPERT</p>
              </motion.div>

              {/* Photo merged with black background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative"
              >
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6904e61633b19b2507b45d09/ef36fbf28_WhatsAppImage2025-10-31at183109_db3f5a8f.jpg"
                  alt="Ahmer - AI Automation Expert"
                  className="w-72 h-auto md:w-96 object-cover object-top"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                  }}
                />
                {/* Portfolio Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#0A0A0A] border border-[var(--accent-yellow)]/30 px-6 py-2 rounded-full whitespace-nowrap">
                  <p className="text-sm font-semibold">Portfo<span className="text-[var(--accent-yellow)]">lio.</span></p>
                </div>
              </motion.div>

              {/* Right Tagline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-right mb-8 md:mb-0"
              >
                <p className="text-sm font-medium text-gray-500 mb-1">SPECIALIZED IN</p>
                <p className="text-xl font-bold text-[var(--accent-yellow)] text-glow">AI AGENT BUILDER</p>
              </motion.div>
            </div>

            {/* Bottom Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
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