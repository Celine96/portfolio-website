import React from "react";
import { motion } from "framer-motion";
import { Search, Pencil, Rocket, TrendingUp } from "lucide-react";

export default function MyProcess() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "분석 & 감시",
      description: "먼저 현재 워크플로우를 분석하여 가장 큰 자동화 기회를 찾습니다."
    },
    {
      number: "02",
      icon: Pencil,
      title: "전략 & 설계",
      description: "다음으로 최고 ROI 작업부터 시작하는 맞춤형 자동화 로드맵을 설계합니다."
    },
    {
      number: "03",
      icon: Rocket,
      title: "구축 & 배포",
      description: "새로운 AI 에이전트를 구축, 테스트하고 기존 소프트웨어와 통합합니다."
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "최적화 & 확장",
      description: "성능을 모니터링하고 에이전트를 개선한 후 다음 자동화 대상을 식별합니다."
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#F5F5F5]">
            제 <span className="text-[#CCFF00]">프로세스</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            고영향 자동화 솔루션을 제공하기 위한 입증된 방법론
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-6 sm:p-8 h-full card-hover">
                {/* Step Number */}
                <div className="text-6xl sm:text-7xl font-black text-[#CCFF00] opacity-20 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded border border-[#333333] mb-6">
                  <step.icon className="w-6 h-6 text-[#CCFF00]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#F5F5F5]">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#333333]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}