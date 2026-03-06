import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export default function Portfolio() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const agents = [
    {
      id: 1,
      name: "LeadGenius Pro",
      problem: "수동 리드 검증과 느린 팔로우업으로 인해 높은 가치의 영업 기회를 놓치거나 지연되는 일이 빈번했습니다.",
      solution: "유입되는 웹 리드를 즉시 분석하고 핵심 의도/회사 정보를 추출하며 리드를 검증(우수/보통/일반)한 후 '우수' 리드를 맞춤형 이메일과 함께 CRM에 자동 전송하는 AI 에이전트를 구축했습니다.",
      impact: "리드 응답 시간을 시간 단위에서 초 단위로 단축하여 영업팀 효율성을 25% 향상시키고 MQL-to-SQL 전환율을 15% 증가시켰습니다.",
      metrics: [
        { icon: TrendingUp, label: "영업팀 효율성", value: "+25%" },
        { icon: Clock, label: "응답 시간", value: "< 5분" },
        { icon: Users, label: "MQL-SQL 전환", value: "+15%" }
      ]
    },
    {
      id: 2,
      name: "SupportBot Prime",
      problem: "고객지원팀이 반복적인 문의로 압박받으면서 느린 응답 시간과 높은 운영 비용이 발생했습니다.",
      solution: "티켓을 우선순위와 주제별로 자동 분류하고 일반적인 질문에 즉시 응답하며 복잡한 문제를 담당자에게 에스컬레이션하는 AI 기반 분류 시스템을 배포했습니다.",
      impact: "평균 응답 시간을 70% 단축하고 60%의 티켓을 자동 해결하며 월 $4,000의 비용을 절감하면서 고객 만족도도 향상시켰습니다.",
      metrics: [
        { icon: Clock, label: "응답 시간", value: "-70%" },
        { icon: TrendingUp, label: "자동화 티켓", value: "60%" },
        { icon: DollarSign, label: "월 절감액", value: "$4K" }
      ]
    },
    {
      id: 3,
      name: "Content Architect",
      problem: "마케팅팀이 컨텐츠를 다양한 플랫폼에 맞춰 수동으로 조정하는 데 시간을 소비하면서 산출량과 캠페인 속도가 제한되었습니다.",
      solution: "장문 컨텐츠를 플랫폼별 최적화 버전(소셜 포스트, 이메일 시퀀스, 요약)으로 자동 생성하면서 브랜드 톤과 핵심 메시지를 유지하는 AI 워크플로우를 구축했습니다.",
      impact: "컨텐츠 산출량을 150% 증가시키고 제작 시간을 3시간에서 15분으로 단축했으며 크로스플랫폼 참여도를 35% 향상시켰습니다.",
      metrics: [
        { icon: TrendingUp, label: "컨텐츠 산출", value: "+150%" },
        { icon: Clock, label: "시간 절감", value: "2.75h/개" },
        { icon: Users, label: "참여도", value: "+35%" }
      ]
    },
    {
      id: 4,
      name: "Data Scout",
      problem: "영업팀이 잠재고객을 수동으로 조사하고 CRM 기록을 구식이거나 불완전한 정보로 업데이트하느라 시간을 낭비했습니다.",
      solution: "다양한 소스에서 잠재고객 정보를 자동으로 찾아 검증하고 업데이트하여 깨끗하고 실행 가능한 CRM 데이터를 유지하는 지능형 데이터 강화 에이전트를 구축했습니다.",
      impact: "주간 수동 데이터 입력에서 12시간을 절감하고 데이터 정확도를 90% 향상시키며 영업팀이 고가치 판매 활동에 집중하도록 했습니다.",
      metrics: [
        { icon: Clock, label: "주간 시간 절감", value: "12h" },
        { icon: TrendingUp, label: "데이터 정확도", value: "+90%" },
        { icon: Users, label: "영업 집중도", value: "100%" }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#111111]">
      {/* Hero Section with 3D Background */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#F5F5F5]">
              제 <span className="text-[#CCFF00]">AI 에이전트</span>들을 만나보세요
            </h1>
            <p className="text-base sm:text-lg text-[#A0A0A0] max-w-2xl mx-auto">
              복잡한 비즈니스 프로세스를 처리하도록 설계된 전문화된 자동화 시스템
            </p>
          </motion.div>

          {/* Agent Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1A1A1A] border-[#333333] p-6 sm:p-8 h-full card-hover cursor-pointer">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#F5F5F5]">
                    {agent.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-6">
                    {agent.problem}
                  </p>
                  <button
                    onClick={() => setSelectedAgent(agent)}
                    className="text-[#CCFF00] font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm sm:text-base"
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedAgent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 overflow-y-auto"
            onClick={() => setSelectedAgent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1A1A1A] border border-[#333333] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-[#1A1A1A] border-b border-[#333333] p-4 sm:p-6 flex justify-between items-center z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5]">
                  {selectedAgent.name} - 사례 연구
                </h2>
                <button
                  onClick={() => setSelectedAgent(null)}
                  className="p-2 hover:bg-[#111111] rounded transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#A0A0A0]" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-8 space-y-8">
                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedAgent.metrics.map((metric, idx) => (
                    <Card key={idx} className="bg-[#111111] border-[#333333] p-4 sm:p-6 text-center">
                      <metric.icon className="w-8 h-8 text-[#CCFF00] mx-auto mb-3" />
                      <p className="text-3xl sm:text-4xl font-bold mb-2 text-[#CCFF00]">{metric.value}</p>
                      <p className="text-xs sm:text-sm text-[#A0A0A0]">{metric.label}</p>
                    </Card>
                  ))}
                </div>

                <div>
                   <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#F5F5F5]">문제점</h3>
                  <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                    {selectedAgent.problem}
                  </p>
                </div>

                <div>
                   <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#F5F5F5]">해결책</h3>
                  <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                    {selectedAgent.solution}
                  </p>
                </div>

                <div>
                   <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#F5F5F5]">결과</h3>
                  <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                    {selectedAgent.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}