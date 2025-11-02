import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, Quote } from "lucide-react";
import TestimonialsSection from "../components/testimonials/TestimonialsSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    task_description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
          body: JSON.stringify(formData),
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

  return (
    <div className="pt-20 min-h-screen bg-[#111111]">
      <TestimonialsSection />

      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#F5F5F5]">
              Ready to <span className="text-[#CCFF00]">Transform</span> Your Business?
            </h1>
            <p className="text-base sm:text-lg text-[#A0A0A0] max-w-3xl mx-auto">
              Describe your most time-consuming task. I'll analyze it and deliver a personalized automation strategy.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-[#1A1A1A] border-[#333333] p-6 sm:p-8 md:p-12 h-full">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base font-medium text-[#F5F5F5]">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ahmer"
                        className="bg-[#111111] border-[#333333] text-[#F5F5F5] placeholder:text-[#A0A0A0] focus:border-[#CCFF00] h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm sm:text-base font-medium text-[#F5F5F5]">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ehmar07@gmail.com"
                        className="bg-[#111111] border-[#333333] text-[#F5F5F5] placeholder:text-[#A0A0A0] focus:border-[#CCFF00] h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm sm:text-base font-medium text-[#F5F5F5]">
                        Company <span className="text-[#A0A0A0] font-normal">(Optional)</span>
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
                        Describe Your Repetitive Task *
                      </Label>
                      <Textarea
                        id="task_description"
                        name="task_description"
                        required
                        value={formData.task_description}
                        onChange={handleChange}
                        placeholder="Every day, I manually copy data from customer emails into our CRM..."
                        className="bg-[#111111] border-[#333333] text-[#F5F5F5] placeholder:text-[#A0A0A0] focus:border-[#CCFF00] min-h-[150px] resize-none"
                      />
                      <p className="text-xs sm:text-sm text-[#A0A0A0]">
                        Be specific. The more detail you provide, the better I can help.
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Request My AI Strategy
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-[#CCFF00] mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-[#F5F5F5]">Thank you!</h3>
                    <p className="text-lg text-[#A0A0A0]">
                      I'll be in touch within 24 hours.
                    </p>
                  </div>
                )}
              </Card>
            </motion.div>

            {/* Right Column - What Happens Next & Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* What Happens Next */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#F5F5F5]">What Happens Next?</h3>
                <div className="space-y-6">
                  <Card className="bg-[#1A1A1A] border-[#333333] p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CCFF00]/10 rounded-full flex items-center justify-center flex-shrink-0 border border-[#CCFF00]/20">
                        <span className="text-lg sm:text-xl font-bold text-[#CCFF00]">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-[#F5F5F5] text-sm sm:text-base">Instant AI Analysis</h4>
                        <p className="text-xs sm:text-sm text-[#A0A0A0]">
                          My AI agent analyzes your task and sends initial insights to your inbox
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
                        <h4 className="font-semibold mb-2 text-[#F5F5F5] text-sm sm:text-base">Personal Review</h4>
                        <p className="text-xs sm:text-sm text-[#A0A0A0]">
                          I personally review your challenge and craft a custom strategy
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
                        <h4 className="font-semibold mb-2 text-[#F5F5F5] text-sm sm:text-base">Strategic Call</h4>
                        <p className="text-xs sm:text-sm text-[#A0A0A0]">
                          Within 24 hours, I reach out to discuss your automation roadmap
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Featured Testimonial */}
              <Card className="bg-gradient-to-br from-[#CCFF00]/5 to-transparent border-[#CCFF00]/20 p-6 sm:p-8">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#CCFF00] mb-4" />
                <p className="text-sm sm:text-base text-[#F5F5F5] mb-6 leading-relaxed">
                  "We were wasting hours on manual lead qualification. Ahmer's AI agent integrated directly with our CRM and now automatically scores 90% of our leads."
                </p>
                <div>
                  <p className="font-bold text-[#F5F5F5] text-sm sm:text-base">Tony Dinh</p>
                  <p className="text-xs sm:text-sm text-[#A0A0A0]">Founder, Black Magic</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}