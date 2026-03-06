import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    task_description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "We were wasting hours on manual lead qualification. Ahmer's AI agent integrated directly with our CRM and now automatically scores 90% of our leads. Our MQL-to-SQL conversion rate is up 15%. The highest-ROI project we've done this year.",
      name: "Tony Dinh",
      title: "Founder",
      company: "Black Magic"
    },
    {
      quote: "As a small team, we were drowning in support tickets. Ahmer's agent now handles 60% of our common inquiries, letting us focus on growth. Our customer response time went from 24 hours to instant, and our CSAT scores have never been higher.",
      name: "Corey Moen",
      title: "Founder & Creative Director",
      company: "Calico"
    },
    {
      quote: "Our team was buried in manual data entry from client reports. Ahmer built a custom solution that saved us over 30 hours a week and reduced our data errors to zero. A total professional.",
      name: "Carlea O'Hagan",
      title: "Founder & CEO",
      company: "Jaded Beauty"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://nonartistic-painedly-damien.ngrok-free.dev/webhook/8edac9c6-26d1-4436-ae61-99e9296ed84b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            recipient_email: "yololife.sy@gmail.com"
          }),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-20 min-h-screen bg-[#111111]">
      {/* What Clients Say Section - Full Width */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#F5F5F5]">
              고객님들의 <span className="text-[#CCFF00]">후기</span>
            </h2>
            <p className="text-base sm:text-lg text-[#A0A0A0]">
              실제 비즈니스의 실제 결과
            </p>
          </motion.div>

          {/* Compact Testimonial Carousel */}
          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#CCFF00]/10 via-[#CCFF00]/5 to-transparent border border-[#CCFF00]/20 rounded-lg p-6 sm:p-8"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#CCFF00] mb-4" />
              
              <p className="text-base sm:text-lg text-[#F5F5F5] leading-relaxed mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm sm:text-base font-bold text-[#F5F5F5]">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-xs sm:text-sm text-[#A0A0A0]">
                    {testimonials[currentTestimonial].title}
                  </p>
                  <p className="text-xs sm:text-sm text-[#CCFF00]">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded border border-[#333333] hover:border-[#CCFF00] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#F5F5F5]" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded border border-[#333333] hover:border-[#CCFF00] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-[#F5F5F5]" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-[#CCFF00] w-8' : 'bg-[#333333]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#F5F5F5]">
              비즈니스를 <span className="text-[#CCFF00]">혁신</span>할 준비가 되셨나요?
            </h1>
            <p className="text-base sm:text-lg text-[#A0A0A0] max-w-3xl mx-auto">
              가장 시간이 많이 걸리는 업무를 설명해주세요. 분석 후 맞춤형 자동화 전략을 제시해드리겠습니다.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:items-center">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-[#1A1A1A] border-[#333333] p-6 sm:p-8 md:p-12">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base font-medium text-[#F5F5F5]">
                        이름 *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="이름을 입력하세요"
                        className="bg-[#111111] border-[#333333] text-[#F5F5F5] placeholder:text-[#A0A0A0] focus:border-[#CCFF00] h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm sm:text-base font-medium text-[#F5F5F5]">
                        이메일 주소 *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="이메일을 입력하세요"
                        className="bg-[#111111] border-[#333333] text-[#F5F5F5] placeholder:text-[#A0A0A0] focus:border-[#CCFF00] h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm sm:text-base font-medium text-[#F5F5F5]">
                        회사명 <span className="text-[#A0A0A0] font-normal">(선택)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="bg-[#111111] border-[#333333] text-[#F5F5F5] placeholder:text-[#A0A0A0] focus:border-[#CCFF00] h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="task_description" className="text-sm sm:text-base font-medium text-[#F5F5F5]">
                        반복되는 업무 설명 *
                      </Label>
                      <Textarea
                        id="task_description"
                        name="task_description"
                        required
                        value={formData.task_description}
                        onChange={handleChange}
                        placeholder="매일 고객 이메일에서 데이터를 수동으로 CRM에 입력합니다..."
                        className="bg-[#111111] border-[#333333] text-[#F5F5F5] placeholder:text-[#A0A0A0] focus:border-[#CCFF00] min-h-[150px] resize-none"
                      />
                      <p className="text-xs sm:text-sm text-[#A0A0A0]">
                        구체적으로 작성해주세요. 자세할수록 더 정확한 전략을 제시할 수 있습니다.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#CCFF00] hover:bg-[#CCFF00] text-black font-bold py-5 sm:py-6 text-base sm:text-lg button-hover disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          전송 중...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          상담 신청하기
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-[#CCFF00] mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-[#F5F5F5]">감사합니다!</h3>
                    <p className="text-lg text-[#A0A0A0]">
                      24시간 내에 연락드리겠습니다.
                    </p>
                  </div>
                )}
              </Card>
            </motion.div>

            {/* Right Column - What Happens Next (Vertically Centered) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center"
            >
              <div className="w-full">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#F5F5F5]">다음 단계</h3>
                <div className="space-y-6">
                  <Card className="bg-[#1A1A1A] border-[#333333] p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CCFF00]/10 rounded-full flex items-center justify-center flex-shrink-0 border border-[#CCFF00]/20">
                        <span className="text-lg sm:text-xl font-bold text-[#CCFF00]">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-[#F5F5F5] text-sm sm:text-base">AI 자동 분석</h4>
                        <p className="text-xs sm:text-sm text-[#A0A0A0]">
                          AI 에이전트가 업무를 분석하고 초기 인사이트를 메일로 발송해드립니다
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-[#1A1A1A] border-[#333333] p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CCFF00]/10 rounded-full flex items-center justify-center flex-shrink-0 border border-[#CCFF00]/20">
                        <span className="text-lg sm:text-xl font-bold text-[#CCFF00]">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-[#F5F5F5] text-sm sm:text-base">개인 맞춤 검토</h4>
                        <p className="text-xs sm:text-sm text-[#A0A0A0]">
                          직접 검토 후 귀사 상황에 맞춘 전략을 수립합니다
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-[#1A1A1A] border-[#333333] p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CCFF00]/10 rounded-full flex items-center justify-center flex-shrink-0 border border-[#CCFF00]/20">
                        <span className="text-lg sm:text-xl font-bold text-[#CCFF00]">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-[#F5F5F5] text-sm sm:text-base">전략 상담</h4>
                        <p className="text-xs sm:text-sm text-[#A0A0A0]">
                          24시간 내에 연락드려 자동화 로드맵을 함께 논의합니다
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}