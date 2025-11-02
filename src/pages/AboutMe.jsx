
import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Code2, Users, Zap } from "lucide-react";

export default function AboutMe() {
  const values = [
    {
      icon: Target,
      title: "Impact-Driven",
      description: "Every solution delivers measurable ROI. I focus on outcomes that transform your bottom line.",
    },
    {
      icon: Code2,
      title: "Precision Engineering",
      description: "Crafting robust, error-free workflows with attention to every detail. Quality is non-negotiable.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Solutions built around your unique business challenges. Your success is my success.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Staying ahead of AI trends to deliver cutting-edge automation that gives you competitive advantage.",
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
              The Expert Behind the <span className="text-[#CCFF00]">Automation</span>
            </h1>
            <p className="text-base sm:text-lg text-[#A0A0A0] max-w-3xl mx-auto">
              Transforming complex challenges into elegant automated solutions
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
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6904e61633b19b2507b45d09/95478b140_referenceimage22.png"
                alt="Ahmer"
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
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5]">My Journey into Automation</h2>
              <div className="space-y-4 text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                <p>
                  My fascination with efficiency began early. I've always been driven by a simple question: 
                  <span className="text-[#CCFF00] font-semibold"> How can we do this better?</span>
                </p>
                <p>
                  When I discovered n8n and the power of AI agents, everything clicked. I realized I could combine 
                  strategic thinking with technical precision to build systems that don't just automate tasks, they 
                  transform entire workflows and unlock exponential productivity.
                </p>
                <p>
                  Today, I specialize in crafting custom AI automation solutions that solve real business problems. 
                  From lead qualification systems that never sleep to content generation workflows that scale effortlessly, 
                  I build the invisible workforce that powers modern businesses.
                </p>
              </div>
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
              Core <span className="text-[#CCFF00]">Values</span>
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
