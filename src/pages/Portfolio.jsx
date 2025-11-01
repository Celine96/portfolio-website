import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const agents = [
    {
      id: 1,
      name: "LeadGenius Pro",
      problem: "Manual lead qualification and slow follow-up meant high-value sales opportunities were frequently missed or delayed.",
      solution: "Built an AI agent to instantly analyze inbound web leads, extract key intent/company data, qualify leads (Hot/Warm/Cold), and automatically push 'Hot' leads to CRM with a personalized first email.",
      impact: "Reduced lead response time from hours to seconds, boosting sales team efficiency by 25% and increasing MQL-to-SQL conversion by 15%."
    },
    {
      id: 2,
      name: "SupportBot Prime",
      problem: "Customer support team was overwhelmed with repetitive queries, leading to slow response times and high operational costs.",
      solution: "Deployed an AI-powered triage system that automatically categorizes tickets by urgency and topic, provides instant responses to common questions, and escalates complex issues to human agents.",
      impact: "Cut average response time by 80%, resolved 60% of tickets automatically, and reduced support costs by $4,000/month while improving customer satisfaction scores."
    },
    {
      id: 3,
      name: "Content Architect",
      problem: "Marketing team spent hours manually adapting content for different platforms, limiting output and campaign velocity.",
      solution: "Created an AI workflow that takes long-form content and automatically generates platform-optimized versions (social posts, email sequences, summaries) while maintaining brand voice and key messaging.",
      impact: "Increased content output by 400%, reduced production time from 3 hours to 15 minutes per piece, and improved cross-platform engagement by 85%."
    },
    {
      id: 4,
      name: "Data Scout",
      problem: "Sales team wasted hours manually researching prospects and updating CRM records with outdated or incomplete information.",
      solution: "Built an intelligent data enrichment agent that automatically finds, verifies, and updates prospect information from multiple sources, maintaining clean and actionable CRM data.",
      impact: "Saved 12 hours per week in manual data entry, improved data accuracy by 90%, and enabled sales team to focus on high-value selling activities."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#F5F5F5]">
              Meet My <span className="text-[#CCFF00]">AI Agents</span>
            </h1>
            <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
              Specialized automation systems designed to handle complex business processes
            </p>
          </motion.div>

          {/* Agent Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1A1A1A] border-[#333333] p-8 h-full card-hover cursor-pointer">
                  <h3 className="text-2xl font-semibold mb-4 text-[#F5F5F5]">
                    {agent.name}
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed mb-6">
                    {agent.problem}
                  </p>
                  <button
                    onClick={() => setSelectedAgent(agent)}
                    className="text-[#CCFF00] font-medium flex items-center gap-2 hover:gap-3 transition-all"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedAgent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1A1A1A] border border-[#333333] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-[#1A1A1A] border-b border-[#333333] p-6 flex justify-between items-center">
                <h2 className="text-3xl font-bold text-[#F5F5F5]">
                  {selectedAgent.name}
                </h2>
                <button
                  onClick={() => setSelectedAgent(null)}
                  className="p-2 hover:bg-[#111111] rounded transition-colors"
                >
                  <X className="w-6 h-6 text-[#A0A0A0]" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#F5F5F5]">The Problem</h3>
                  <p className="text-[#A0A0A0] leading-relaxed">
                    {selectedAgent.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#F5F5F5]">The Solution</h3>
                  <p className="text-[#A0A0A0] leading-relaxed">
                    {selectedAgent.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#F5F5F5]">The Impact</h3>
                  <p className="text-[#A0A0A0] leading-relaxed">
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