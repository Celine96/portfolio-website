import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      number: "01",
      icon: TrendingUp,
      title: "Lead Qualification & Scoring",
      description: "Automate your sales pipeline with AI agents that instantly qualify leads, score prospects, and route hot opportunities to your team in real-time.",
      features: [
        "Intelligent lead scoring",
        "Automated follow-ups",
        "CRM integration",
        "Real-time notifications"
      ],
      impact: "35% increase in conversions",
    },
    {
      id: 2,
      number: "02",
      icon: Bot,
      title: "Customer Support Automation",
      description: "Build intelligent support systems that triage tickets, detect urgency, provide instant responses, and escalate complex issues automatically.",
      features: [
        "24/7 instant responses",
        "Sentiment analysis",
        "Smart ticket routing",
        "Multi-language support"
      ],
      impact: "60% reduction in support costs",
    },
    {
      id: 3,
      number: "03",
      icon: FileText,
      title: "Content Generation & Repurposing",
      description: "Transform single pieces of content into multi-platform campaigns. AI-powered workflows that maintain your brand voice across all channels.",
      features: [
        "Multi-format content",
        "Brand voice consistency",
        "SEO optimization",
        "Automated publishing"
      ],
      impact: "400% more content output",
    },
    {
      id: 4,
      number: "04",
      icon: Mail,
      title: "Email Campaign Personalization",
      description: "Create hyper-personalized email sequences that adapt based on behavior, demographics, and engagement patterns to maximize conversions.",
      features: [
        "Behavioral triggers",
        "Dynamic personalization",
        "A/B testing automation",
        "Performance analytics"
      ],
      impact: "50% boost in open rates",
    },
    {
      id: 5,
      number: "05",
      icon: Users,
      title: "Client Onboarding Automation",
      description: "Streamline your entire onboarding process from contract signing to welcome sequences with intelligent automation that never drops the ball.",
      features: [
        "Document automation",
        "Progress tracking",
        "Custom workflows",
        "Client portal integration"
      ],
      impact: "80% faster onboarding",
    },
    {
      id: 6,
      number: "06",
      icon: Zap,
      title: "Custom AI Agent Development",
      description: "Build bespoke AI agents tailored to your unique business needs. From data extraction to decision-making, create your digital workforce.",
      features: [
        "Custom logic design",
        "API integrations",
        "Scalable architecture",
        "Ongoing optimization"
      ],
      impact: "Solutions built for you",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-yellow)]/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10 mb-6">
              <Sparkles className="w-4 h-4 text-[var(--accent-yellow)]" />
              <span className="text-sm font-medium text-[var(--accent-yellow)]">AUTOMATION SERVICES</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Your Path to <span className="text-[var(--accent-yellow)]">Efficiency</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strategic AI automation solutions designed to transform your business operations
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0A0A0A] border-gray-900 p-8 h-full hover:border-[var(--accent-yellow)] transition-all duration-300 group relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-yellow)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 space-y-6">
                    {/* Number and Icon */}
                    <div className="flex items-start justify-between">
                      <span className="text-6xl font-black text-[var(--accent-yellow)]/20 group-hover:text-[var(--accent-yellow)]/30 transition-colors">
                        {service.number}
                      </span>
                      <div className="p-3 rounded-xl border border-gray-800 group-hover:border-[var(--accent-yellow)] transition-all">
                        <service.icon className="w-6 h-6 text-[var(--accent-yellow)]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold group-hover:text-[var(--accent-yellow)] transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-[var(--accent-yellow)] rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Impact Badge */}
                      <div className="pt-4 border-t border-gray-900">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-yellow)]/10 border border-[var(--accent-yellow)]/20">
                          <Zap className="w-3 h-3 text-[var(--accent-yellow)]" />
                          <span className="text-xs font-semibold text-[var(--accent-yellow)]">{service.impact}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link to={createPageUrl("Contact")}>
                      <Button 
                        variant="ghost" 
                        className="w-full border border-gray-900 hover:border-[var(--accent-yellow)] hover:bg-[var(--accent-yellow)]/10 group-hover:border-[var(--accent-yellow)] transition-all"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
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
            className="mt-20 text-center"
          >
            <Card className="bg-gradient-to-r from-[var(--accent-yellow)]/10 to-transparent border-[var(--accent-yellow)]/20 p-12">
              <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Every business is unique. Let's build an automation strategy tailored specifically to your needs.
              </p>
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-[var(--accent-yellow)] hover:bg-[var(--accent-yellow)]/90 text-black font-bold py-6 px-12 text-lg hover:glow-effect transition-all">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}