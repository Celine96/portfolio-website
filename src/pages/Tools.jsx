import React, { useEffect } from "react";
import ROICalculator from "../components/tools/ROICalculator";
import { motion } from "framer-motion";

export default function Tools() {
  useEffect(() => {
    return () => {
      window.dispatchEvent(new Event('resetROICalculator'));
    };
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-[#111111] relative">
      {/* Subtle Background Grid - Data Blueprint Style */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(204, 255, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204, 255, 0, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(204, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          backgroundPosition: '-1px -1px, -1px -1px, -1px -1px, -1px -1px'
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
              절감 효과를 <span className="text-[#CCFF00]">계산</span>하세요
            </h1>
            <p className="text-base sm:text-lg text-[#A0A0A0] max-w-3xl mx-auto">
              자동화는 단순히 효율성에 관한 것이 아니라 측정 가능한 수익성에 관한 것입니다. 
              AI가 귀사의 실적을 어떻게 변환할 수 있는지 계산해보세요.
            </p>
          </motion.div>
        </div>
      </section>

      <ROICalculator />
    </div>
  );
}