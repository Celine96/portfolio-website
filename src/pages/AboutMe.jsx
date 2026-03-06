import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Code2, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import ImageWithFallback from "../components/consultation/ImageWithFallback";

export default function AboutMe() {
  const values = [
    {
      icon: Target,
      title: "결과 중심",
      description: "모든 솔루션은 측정 가능한 ROI를 제공합니다. 귀사의 실적 개선에 집중합니다.",
    },
    {
      icon: Code2,
      title: "정밀 엔지니어링",
      description: "세부사항 하나하나에 신경 써서 견고하고 오류 없는 워크플로우를 구축합니다. 품질은 타협 대상이 아닙니다.",
    },
    {
      icon: Users,
      title: "고객 중심",
      description: "귀사의 고유한 비즈니스 과제를 중심으로 구축된 솔루션입니다. 귀사의 성공이 제 성공입니다.",
    },
    {
      icon: Zap,
      title: "혁신 우선",
      description: "AI 트렌드를 선도하며 경쟁 우위를 제공하는 최첨단 자동화를 제시합니다.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#F5F5F5]">
              자동화 전문가 <span className="text-[#CCFF00]">이수연</span>
            </h1>
            <p className="text-base sm:text-lg text-[#A0A0A0] max-w-3xl mx-auto">
              복잡한 비즈니스 과제를 우아한 자동화 솔루션으로 변환합니다
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <ImageWithFallback
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aaed02157675c99ba2b0bb/620b3e650_image.png"
                alt="이수연"
                className="w-full max-w-md rounded-lg"
              />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5]">자동화로의 여정</h2>
              <div className="space-y-4 text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                <p>
                  효율성에 대한 관심은 일찍부터 시작되었습니다. 저는 항상 한 가지 질문으로 주도되어 왔습니다: 
                  <span className="text-[#CCFF00] font-semibold"> 이걸 더 잘할 수는 없을까?</span>
                </p>
                <p>
                  AI 시스템 자동화의 힘을 발견했을 때, 모든 것이 명확해졌습니다. 전략적 사고와 기술적 정밀함을 결합하여 
                  단순히 작업을 자동화하는 것이 아니라 전체 워크플로우를 변환하고 기하급수적인 생산성을 끌어낼 수 있는 
                  시스템을 구축할 수 있다는 것을 깨달았습니다.
                </p>
                <p>
                  현재 저는 실제 비즈니스 과제를 해결하는 맞춤형 AI 자동화 솔루션 개발을 전문으로 합니다. 
                  24/7 작동하는 리드 검증 시스템부터 무한으로 확장 가능한 컨텐츠 생성 워크플로우까지, 
                  현대 비즈니스를 강력하게 만드는 보이지 않는 인력을 구축합니다.
                </p>
              </div>
              <Link to={createPageUrl("ConsultationBooking")} onClick={() => window.scrollTo(0, 0)}>
                <button className="px-6 py-3 bg-[#CCFF00] text-black font-bold rounded hover:bg-[#CCFF00]/90 transition-all">
                  상담 예약하기
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-[#F5F5F5]">
              핵심 <span className="text-[#CCFF00]">가치</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#1A1A1A] border-[#333333] p-6 sm:p-8 h-full card-hover">
                    <div className="w-12 h-12 flex items-center justify-center rounded border border-[#333333] mb-6">
                      <value.icon className="w-6 h-6 text-[#CCFF00]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#F5F5F5]">{value.title}</h3>
                    <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}