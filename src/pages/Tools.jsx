import React, { useEffect } from "react";
import ROICalculator from "../components/tools/ROICalculator";
import { motion } from "framer-motion";

export default function Tools() {
  useEffect(() => {
    return () => {
      // Reset calculator values on unmount
      window.dispatchEvent(new Event('resetROICalculator'));
    };
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-[#111111] relative">
      {/* Subtle Background Grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(204, 255, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(204, 255, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#F5F5F5]">
              Quantify Your <span className="text-[#CCFF00]">Savings</span>
            </h1>
            <p className="text-base sm:text-lg text-[#A0A0A0] max-w-3xl mx-auto">
              Automation isn't just about efficiency, it's about measurable returns. 
              Calculate how AI can transform your bottom line.
            </p>
          </motion.div>
        </div>
      </section>

      <ROICalculator />
    </div>
  );
}