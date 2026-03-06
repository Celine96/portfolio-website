import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Zap, Brain, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function UserJourney() {
  const stages = [
    {
      number: 1,
      icon: Brain,
      title: "진단",
      description: "귀사의 반복되는 업무를 AI가 분석합니다",
      cta: "AI 분석 시작",
      page: "Home"
    },
    {
      number: 2,
      icon: Zap,
      title: "전략",
      description: "최적의 자동화 솔루션을 설계합니다",
      cta: "전략 상담",
      page: "ConsultationBooking"
    },
    {
      number: 3,
      icon: Rocket,
      title: "구현",
      description: "맞춤형 AI 에이전트를 구축합니다",
      cta: "무료 상담 예약",
      page: "ConsultationBooking"
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#F5F5F5]">
            귀사의 자동화 <span className="text-[#CCFF00]">여정</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0]">
            3단계로 비즈니스 효율성을 극대화하세요
          </p>
        </motion.div>

        {/* Journey Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector Line */}
              {index < stages.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[50%] w-[calc(100%+2rem)] h-1 bg-gradient-to-r from-[#CCFF00] to-transparent -z-10" />
              )}

              <Card className="bg-[#1A1A1A] border-2 border-[#CCFF00]/30 hover:border-[#CCFF00] p-6 sm:p-8 h-full transition-all duration-300 card-hover">
                {/* Number */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 bg-gradient-to-br from-[#CCFF00]/20 to-[#CCFF00]/5 rounded-full border-2 border-[#CCFF00] flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-black text-[#CCFF00]">
                    {stage.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <stage.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#CCFF00]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                    {stage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                    {stage.description}
                  </p>

                  {/* CTA */}
                  <Link 
                    to={createPageUrl(stage.page)}
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-block mt-4"
                  >
                    <button className="px-6 py-2.5 bg-[#CCFF00]/10 border border-[#CCFF00] text-[#CCFF00] rounded font-semibold hover:bg-[#CCFF00] hover:text-black transition-all duration-200 text-sm sm:text-base">
                      {stage.cta}
                    </button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}