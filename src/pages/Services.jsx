import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  TrendingUp,
  Mail,
  Users,
  FileText,
  Bot,
  Zap,
} from "lucide-react";
import MyProcess from "../components/services/MyProcess";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: TrendingUp,
      title: "AI 에이전트 구축 및 배포",
      description: "맞춤형 AI 에이전트를 구축하고 배포하여 반복적인 작업을 자동화하고 비즈니스 효율성을 극대화합니다.",
    },
    {
      id: 2,
      icon: Bot,
      title: "고객지원 자동화",
      description: "티켓을 분류하고 긴급도를 감지하며 즉시 응답을 제공하고 복잡한 문제를 자동으로 에스컬레이션하는 지능형 지원 시스템을 구축합니다.",
    },
    {
      id: 3,
      icon: FileText,
      title: "컨텐츠 생성",
      description: "단일 컨텐츠를 다중 플랫폼 캠페인으로 변환합니다. 모든 채널에서 브랜드 톤을 유지하는 AI 워크플로우입니다.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#F5F5F5]">
              효율성으로 가는 <span className="text-[#CCFF00]">길</span>
            </h1>
            <p className="text-base sm:text-lg text-[#A0A0A0] max-w-3xl mx-auto">
              비즈니스 운영을 혁신하도록 설계된 전략적 AI 자동화 솔루션
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1A1A1A] border-[#333333] p-6 sm:p-8 h-full card-hover">
                  <div className="space-y-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded border border-[#333333]">
                      <service.icon className="w-6 h-6 text-[#CCFF00]" strokeWidth={1.5} />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#F5F5F5]">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-20 text-center"
          >
            <Card className="bg-[#1A1A1A] border-[#333333] p-8 sm:p-12">
               <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#F5F5F5]">맞춤형 솔루션이 필요하신가요?</h3>
               <p className="text-base sm:text-lg text-[#A0A0A0] mb-6 sm:mb-8 max-w-2xl mx-auto">
                 모든 비즈니스는 고유합니다. 귀사의 니즈에 맞춘 자동화 전략을 함께 구축해봅시다.
               </p>
               <Link to={createPageUrl("ConsultationBooking")}>
                 <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#CCFF00] text-black font-bold text-base sm:text-lg rounded button-hover">
                   무료 상담 예약
                 </button>
               </Link>
             </Card>
          </motion.div>
        </div>
      </section>

      <MyProcess />
    </div>
  );
}