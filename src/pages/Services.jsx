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
      title: "Lead Qualification & Scoring",
      description: "Automate your sales pipeline with AI agents that instantly qualify leads, score prospects, and route hot opportunities to your team in real-time.",
    },
    {
      id: 2,
      icon: Bot,
      title: "Customer Support Automation",
      description: "Build intelligent support systems that triage tickets, detect urgency, provide instant responses, and escalate complex issues automatically.",
    },
    {
      id: 3,
      icon: FileText,
      title: "Content Generation",
      description: "Transform single pieces of content into multi-platform campaigns. AI-powered workflows that maintain your brand voice across all channels.",
    },
    {
      id: 4,
      icon: Mail,
      title: "Email Personalization",
      description: "Create hyper-personalized email sequences that adapt based on behavior, demographics, and engagement patterns to maximize conversions.",
    },
    {
      id: 5,
      icon: Users,
      title: "Client Onboarding",
      description: "Streamline your entire onboarding process from contract signing to welcome sequences with intelligent automation.",
    },
    {
      id: 6,
      icon: Zap,
      title: "Custom AI Development",
      description: "Build bespoke AI agents tailored to your unique business needs. From data extraction to decision-making, create your digital workforce.",
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
              Your Path to <span className="text-[#CCFF00]">Efficiency</span>
            </h1>
            <p className="text-base sm:text-lg text-[#A0A0A0] max-w-3xl mx-auto">
              Strategic AI automation solutions designed to transform your business operations
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#F5F5F5]">Need a Custom Solution?</h3>
              <p className="text-base sm:text-lg text-[#A0A0A0] mb-6 sm:mb-8 max-w-2xl mx-auto">
                Every business is unique. Let's build an automation strategy tailored specifically to your needs.
              </p>
              <Link to={createPageUrl("Contact")}>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#CCFF00] text-black font-bold text-base sm:text-lg rounded button-hover">
                  Schedule a Consultation
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