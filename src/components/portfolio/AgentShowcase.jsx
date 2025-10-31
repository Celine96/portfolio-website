import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, Zap, Brain, FileText, MessageSquare, TrendingUp, Search, Mail } from "lucide-react";

export default function AgentShowcase() {
  const agents = [
    {
      icon: TrendingUp,
      name: "LeadGenius Pro",
      role: "Qualifies sales leads instantly",
      skill: "NLP & Lead Scoring",
      color: "from-blue-500 to-cyan-500",
      description: "Automatically analyzes incoming leads, scores them based on custom criteria, and routes hot prospects to your sales team in real-time."
    },
    {
      icon: MessageSquare,
      name: "SupportBot Prime",
      role: "Automates customer support triage",
      skill: "Sentiment Analysis",
      color: "from-purple-500 to-pink-500",
      description: "Intelligently categorizes support tickets, detects urgency, and provides instant responses to common queries while escalating complex issues."
    },
    {
      icon: FileText,
      name: "Content Architect",
      role: "Repurposes content at scale",
      skill: "Content Generation",
      color: "from-orange-500 to-red-500",
      description: "Transforms long-form content into multiple formats—social posts, email sequences, and summaries—maintaining brand voice across channels."
    },
    {
      icon: Mail,
      name: "EmailFlow Master",
      role: "Personalizes outreach campaigns",
      skill: "Data Extraction",
      color: "from-green-500 to-emerald-500",
      description: "Crafts personalized email sequences based on prospect behavior, automatically follows up, and tracks engagement to optimize conversion."
    },
  ];

  return (
    <section className="py-20 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-orange)] bg-[var(--accent-orange)]/10 mb-6">
            <Bot className="w-4 h-4 text-[var(--accent-orange)]" />
            <span className="text-sm font-medium text-[var(--accent-orange)]">AI AGENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet My <span className="text-[var(--accent-orange)]">AI Agents</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized automation systems designed to handle complex business processes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[var(--bg-card)] border-gray-800 p-8 h-full hover:border-[var(--accent-orange)] transition-all duration-300 group cursor-pointer">
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${agent.color} p-4 group-hover:scale-110 transition-transform`}>
                  <agent.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{agent.name}</h3>
                    <p className="text-gray-400 mb-2">{agent.role}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/20">
                      <Brain className="w-3 h-3 text-[var(--accent-orange)]" />
                      <span className="text-xs font-medium text-[var(--accent-orange)]">{agent.skill}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {agent.description}
                  </p>

                  <Button 
                    variant="outline" 
                    className="w-full border-gray-700 hover:border-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/10 group-hover:border-[var(--accent-orange)]"
                  >
                    View Case Study
                    <Zap className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}