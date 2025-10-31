import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  TrendingUp,
  Mail,
  Users,
  FileText,
  Database,
  Bot,
  Zap,
  ArrowRight,
  Filter,
} from "lucide-react";

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("all");

  const blueprints = [
    {
      id: 1,
      icon: Users,
      title: "Automated Client Onboarding Funnel",
      category: "sales",
      description: "Streamline new client setup, contract signing, and welcome sequences with intelligent automation.",
      flow: ["New Client", "AI Onboarder", "CRM", "Contract", "Welcome Email"],
      value: "Reduces onboarding time by 80%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Lead Scoring & Qualification System",
      category: "sales",
      description: "Automatically score and qualify inbound leads, route them to the right team, and trigger personalized follow-ups.",
      flow: ["Lead Form", "AI Scorer", "Qualification", "Auto-Route", "CRM"],
      value: "Increases conversion by 35%",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      icon: Mail,
      title: "Email Campaign Personalization Engine",
      category: "marketing",
      description: "Create hyper-personalized email sequences based on behavior, demographics, and engagement patterns.",
      flow: ["User Data", "AI Writer", "Personalization", "Email Tool", "Analytics"],
      value: "Boosts open rates by 50%",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      icon: FileText,
      title: "Content Repurposing Workflow",
      category: "marketing",
      description: "Transform long-form content into social posts, email sequences, and summaries automatically.",
      flow: ["Blog Post", "AI Processor", "Multi-Format", "Social APIs", "Publish"],
      value: "400% more content output",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      icon: Bot,
      title: "Customer Support Triage System",
      category: "support",
      description: "Intelligently categorize, prioritize, and auto-respond to support tickets using AI.",
      flow: ["Ticket", "AI Triage", "Priority", "Auto-Reply", "Escalation"],
      value: "60% reduction in ticket volume",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      icon: Database,
      title: "Data Extraction & Sync Automation",
      category: "admin",
      description: "Extract data from various sources, clean it, and sync across your business tools automatically.",
      flow: ["Data Source", "Extraction", "Cleaning", "Transform", "Sync"],
      value: "Saves 15 hours per week",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const filters = [
    { id: "all", label: "All Solutions" },
    { id: "sales", label: "Sales Automation" },
    { id: "marketing", label: "Marketing Automation" },
    { id: "support", label: "Customer Support" },
    { id: "admin", label: "Data & Admin" },
  ];

  const filteredBlueprints = activeFilter === "all" 
    ? blueprints 
    : blueprints.filter(b => b.category === activeFilter);

  return (
    <div className="pt-20 min-h-screen bg-[#0F0F0F]">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-orange)]/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Your Path to <span className="text-[var(--accent-orange)]">Efficiency</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover strategic AI automation solutions tailored to common business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blueprints Section */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <Filter className="w-5 h-5 text-gray-400" />
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={
                  activeFilter === filter.id
                    ? "bg-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/90"
                    : "border-gray-700 hover:border-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/10"
                }
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>

          {/* Blueprint Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlueprints.map((blueprint, index) => (
              <motion.div
                key={blueprint.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[var(--bg-card)] border-gray-800 p-6 h-full hover:border-[var(--accent-orange)] transition-all duration-300 group">
                  {/* Icon */}
                  <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${blueprint.color} p-3 group-hover:scale-110 transition-transform`}>
                    <blueprint.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-[var(--accent-orange)] transition-colors">
                      {blueprint.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {blueprint.description}
                    </p>

                    {/* Flow Diagram */}
                    <div className="bg-[#0F0F0F] rounded-lg p-4 border border-gray-800">
                      <p className="text-xs font-semibold text-gray-500 mb-2">HIGH-LEVEL FLOW</p>
                      <div className="flex items-center gap-1 overflow-x-auto">
                        {blueprint.flow.map((step, idx) => (
                          <React.Fragment key={idx}>
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded whitespace-nowrap">
                              {step}
                            </span>
                            {idx < blueprint.flow.length - 1 && (
                              <ArrowRight className="w-3 h-3 text-[var(--accent-orange)] flex-shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Value Proposition */}
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                      <Zap className="w-3 h-3 mr-1" />
                      {blueprint.value}
                    </Badge>

                    {/* CTA */}
                    <Link to={createPageUrl("Contact")}>
                      <Button 
                        variant="outline" 
                        className="w-full border-gray-700 hover:border-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/10 group-hover:border-[var(--accent-orange)]"
                      >
                        Request Custom Blueprint
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}