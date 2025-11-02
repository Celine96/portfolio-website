import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
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
            What Clients <span className="text-[#CCFF00]">Say</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0]">
            Real results from real businesses
          </p>
        </motion.div>

        <div className="relative">
          <Card className="bg-[#1A1A1A] border-[#333333] p-8 sm:p-12">
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#CCFF00] mb-6 sm:mb-8" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-[#F5F5F5] leading-relaxed mb-8 sm:mb-12">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-base sm:text-lg font-bold text-[#F5F5F5]">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm sm:text-base text-[#A0A0A0]">
                    {testimonials[currentIndex].title}
                  </p>
                  <p className="text-sm sm:text-base text-[#CCFF00]">
                    {testimonials[currentIndex].company}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 sm:p-3 rounded border border-[#333333] hover:border-[#CCFF00] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5F5F5]" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 sm:p-3 rounded border border-[#333333] hover:border-[#CCFF00] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5F5F5]" />
                  </button>
                </div>
              </div>
            </motion.div>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#CCFF00] w-8' : 'bg-[#333333]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}