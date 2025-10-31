import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, Zap, Brain, TrendingUp, MessageSquare, Mail } from "lucide-react";

export default function AgentShowcase() {
  const agents = [
    {
      icon: TrendingUp,
      name: "LeadGenius Pro",
      role: "Qualifies sales leads instantly",
      skill: "NLP & Lead Scoring",
      description: "Automatically analyzes incoming leads, scores them based on custom criteria, and routes hot prospects to your sales team in real-time."
    },
    {
      icon: MessageSquare,
      name: "SupportBot Prime",
      role: "Automates customer support triage",
      skill: "Sentiment Analysis",
      description: "Intelligently categorizes support tickets, detects urgency, and provides instant responses to common queries while escalating complex issues."
    },
    {
      icon: Brain,
      name: "Content Architect",
      role: "Repurposes content at scale",
      skill: "Content Generation",
      description: "Transforms long-form content into multiple formats—social posts, email sequences, and summaries—maintaining brand voice across channels."
    },
    {
      icon: Mail,
      name: "EmailFlow Master",
      role: "Personalizes outreach campaigns",
      skill: "Data Extraction",
      description: "Crafts personalized email sequences based on prospect behavior, automatically follows up, and tracks engagement to optimize conversion."
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10 mb-6">
            <Bot className="w-4 h-4 text-[var(--accent-yellow)]" />
            <span className="text-sm font-medium text-[var(--accent-yellow)]">AI AGENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet My <span className="text-[var(--accent-yellow)]">AI Agents</span>
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
              <Card className="bg-[var(--bg-card)] border-gray-900 p-8 h-full hover:border-[var(--accent-yellow)] transition-all duration-300 group cursor-pointer">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-xl border border-gray-800 group-hover:border-[var(--accent-yellow)] p-4 transition-all">
                  <agent.icon className="w-full h-full text-[var(--accent-yellow)]" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{agent.name}</h3>
                    <p className="text-gray-400 mb-2">{agent.role}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-yellow)]/10 border border-[var(--accent-yellow)]/20">
                      <Brain className="w-3 h-3 text-[var(--accent-yellow)]" />
                      <span className="text-xs font-medium text-[var(--accent-yellow)]">{agent.skill}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {agent.description}
                  </p>

                  <Button 
                    variant="outline" 
                    className="w-full border-gray-800 hover:border-[var(--accent-yellow)] hover:bg-[var(--accent-yellow)]/10 group-hover:border-[var(--accent-yellow)]"
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