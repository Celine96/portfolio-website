import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Workflow, Brain, Code2, Zap } from "lucide-react";

export default function TechStack() {
  const technologies = [
    {
      icon: Workflow,
      name: "n8n",
      description: "The Swiss Army knife of automation. n8n is an open-source workflow automation tool that connects hundreds of services without code. Its visual interface and powerful logic make it perfect for building complex, production-ready automations.",
      why: "Flexible, scalable, and cost-effective for enterprise-level automation",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      name: "OpenAI",
      description: "Industry-leading AI models including GPT-4 and GPT-3.5. These models power intelligent decision-making, content generation, sentiment analysis, and natural language understanding in automation workflows.",
      why: "Most advanced language models with reliable API for production use",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code2,
      name: "API Integrations",
      description: "Connecting your entire tech stack—CRMs, email platforms, databases, payment processors, and more. I build seamless data flows between all your business tools using REST APIs, webhooks, and custom integrations.",
      why: "Eliminates data silos and creates a unified, automated ecosystem",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      name: "Webhooks & Events",
      description: "Real-time automation triggers that respond instantly to business events. Whether it's a new lead, customer action, or system update, webhooks ensure your automations run at the perfect moment.",
      why: "Enables instant, event-driven automation without delays or polling",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-orange)] bg-[var(--accent-orange)]/10 mb-6">
            <Zap className="w-4 h-4 text-[var(--accent-orange)]" />
            <span className="text-sm font-medium text-[var(--accent-orange)]">TECH STACK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Platforms I <span className="text-[var(--accent-orange)]">Leverage</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The cutting-edge technologies behind world-class automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[var(--bg-card)] border-gray-800 p-8 h-full hover:border-[var(--accent-orange)] transition-all duration-300 group">
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${tech.color} p-4 group-hover:scale-110 transition-transform`}>
                  <tech.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent-orange)] transition-colors">
                  {tech.name}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {tech.description}
                </p>

                <div className="pt-4 border-t border-gray-800">
                  <p className="text-sm font-semibold text-[var(--accent-orange)] mb-1">Why I Use It:</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{tech.why}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}