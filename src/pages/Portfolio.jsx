import React, { useState } from "react";
import AgentShowcase from "../components/portfolio/AgentShowcase";
import CaseStudies from "../components/portfolio/CaseStudies";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="pt-20 min-h-screen bg-[#0F0F0F]">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-orange)]/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              My Digital <span className="text-[var(--accent-orange)]">Workforce</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore how I build intelligent automation to solve real business problems
            </p>
          </motion.div>
        </div>
      </section>

      <AgentShowcase />
      <CaseStudies />
    </div>
  );
}