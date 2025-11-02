import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Subtle Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, #1A1A1A 0%, #111111 70%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-[#F5F5F5] px-4"
          >
            Stop Repeating. <br />
            Start <span className="text-[#CCFF00]">Automating</span>.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#A0A0A0] mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            AI Automation Expert for high-growth businesses.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 sm:mb-20 px-4"
          >
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#CCFF00] text-black rounded font-bold text-base sm:text-lg button-hover"
            >
              Schedule Your Free Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>

          {/* Photo with Background Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-4xl mx-auto px-4"
          >
            {/* Large Background Text "AHMER" */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <h2 
                className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[24rem] font-black text-transparent select-none"
                style={{
                  WebkitTextStroke: '1px rgba(204, 255, 0, 0.1)',
                  letterSpacing: '-0.05em'
                }}
              >
                AHMER
              </h2>
            </div>

            {/* Photo */}
            <div className="relative z-10 flex justify-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6904e61633b19b2507b45d09/4799cf95f_referenceimage1.png"
                alt="Ahmer"
                className="w-64 h-auto sm:w-80 md:w-96 object-cover object-top"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}