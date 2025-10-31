import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Clock, DollarSign, Users, X, CheckCircle, ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: "Automated Sales Lead Qualification for B2B Agency",
      challenge: "Manual lead processing was taking 2-3 hours daily, causing missed opportunities and slow response times.",
      solution: "Built an AI agent that instantly qualifies leads using GPT-4, scores them based on custom criteria, and auto-responds with personalized messages.",
      detailedSolution: "Implemented a comprehensive n8n workflow that: 1) Captures leads from multiple sources (website forms, LinkedIn, email), 2) Uses GPT-4 to analyze lead quality based on company size, industry, budget indicators, and pain points, 3) Assigns a score from 1-100 using custom algorithms, 4) Routes high-value leads (80+) directly to sales team via Slack with full context, 5) Sends personalized follow-up emails within 60 seconds based on lead's specific interests, 6) Updates HubSpot CRM with all data and creates tasks automatically.",
      results: [
        { metric: "Demo Bookings", value: "+30%", icon: TrendingUp },
        { metric: "Response Time", value: "-95%", icon: Clock },
        { metric: "Hours Saved", value: "15/week", icon: Clock },
      ],
      tools: ["n8n", "OpenAI GPT-4", "HubSpot API", "Webhooks", "Google Sheets"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      beforeAfter: {
        before: "Manual lead review taking 2-3 hours daily with inconsistent qualification",
        after: "Automated qualification in under 5 seconds with 95% accuracy"
      }
    },
    {
      id: 2,
      title: "Customer Support Automation for SaaS Platform",
      challenge: "Support team overwhelmed with 200+ daily tickets, many being simple, repetitive queries.",
      solution: "Deployed AI-powered triage system that categorizes tickets, detects urgency, and provides instant AI responses for common issues.",
      detailedSolution: "Created an intelligent support system that: 1) Intercepts all incoming tickets via Zendesk API, 2) Uses sentiment analysis to detect frustrated customers, 3) Categorizes tickets into 12 predefined categories with 92% accuracy, 4) Generates instant AI responses for common queries (password resets, billing questions, feature explanations), 5) Escalates complex or urgent issues to human agents with priority flagging, 6) Learns from agent responses to improve over time, 7) Sends follow-up satisfaction surveys automatically.",
      results: [
        { metric: "Ticket Volume", value: "-60%", icon: TrendingUp },
        { metric: "Response Time", value: "Instant", icon: Clock },
        { metric: "Cost Savings", value: "$4K/mo", icon: DollarSign },
      ],
      tools: ["n8n", "OpenAI", "Zendesk API", "Sentiment Analysis", "Auto-routing"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      beforeAfter: {
        before: "4-6 hour average response time, support team working overtime",
        after: "Instant automated responses for 60% of tickets, happy customers"
      }
    },
    {
      id: 3,
      title: "Content Repurposing Engine for Marketing Agency",
      challenge: "Creating content for multiple platforms was time-consuming and expensive, limiting content output.",
      solution: "Built an AI system that automatically transforms long-form content into social posts, email sequences, and summaries while maintaining brand voice.",
      detailedSolution: "Developed a comprehensive content pipeline that: 1) Accepts blog posts, podcasts, or videos as input, 2) Uses GPT-4 to extract key insights and quotes, 3) Generates 15+ content variations: Twitter threads, LinkedIn posts, Instagram captions, email newsletters, and short-form summaries, 4) Maintains brand voice through custom-trained AI prompts, 5) Optimizes for each platform's best practices (hashtags, length, tone), 6) Schedules content across Buffer and Hootsuite automatically, 7) Tracks performance and learns which formats perform best.",
      results: [
        { metric: "Content Output", value: "+400%", icon: TrendingUp },
        { metric: "Time Saved", value: "20h/week", icon: Clock },
        { metric: "Engagement", value: "+85%", icon: Users },
      ],
      tools: ["n8n", "OpenAI", "Buffer API", "Airtable", "Custom Prompts"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=400&fit=crop",
      beforeAfter: {
        before: "1 blog post = 1 piece of content, manual adaptation taking hours",
        after: "1 blog post = 15+ pieces across all platforms in minutes"
      }
    },
  ];

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="absolute inset-0 gradient-mesh" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10 mb-6 animate-pulse-glow">
            <CheckCircle className="w-4 h-4 text-[var(--accent-yellow)]" />
            <span className="text-sm font-medium text-[var(--accent-yellow)]">PROVEN RESULTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Deep Dives: The <span className="text-[var(--accent-yellow)]">Impact of Automation</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real projects, real results, real transformation
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="bg-black border-gray-900 overflow-hidden h-full hover:border-[var(--accent-yellow)] transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedStudy(study)}
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[var(--accent-yellow)]/5 to-black">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold line-clamp-2 group-hover:text-[var(--accent-yellow)] transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {study.challenge}
                  </p>

                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                      {study.results[0].value}
                    </Badge>
                    <span className="text-xs text-gray-500">{study.results[0].metric}</span>
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full bg-[var(--accent-yellow)]/5 hover:bg-[var(--accent-yellow)]/10 text-[var(--accent-yellow)] border border-[var(--accent-yellow)]/20"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detailed Case Study Modal */}
        <AnimatePresence>
          {selectedStudy && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
              onClick={() => setSelectedStudy(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[var(--bg-card)] border border-[var(--accent-yellow)]/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Image */}
                <div className="relative h-64 bg-gradient-to-br from-[var(--accent-yellow)]/10 to-black">
                  <img 
                    src={selectedStudy.image} 
                    alt={selectedStudy.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white border border-[var(--accent-yellow)]/20"
                    onClick={() => setSelectedStudy(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-[var(--accent-yellow)] text-glow">{selectedStudy.title}</h2>
                  </div>

                  {/* Before/After */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-red-500/5 border-red-500/20 p-6">
                      <h4 className="font-semibold text-red-400 mb-2">❌ Before</h4>
                      <p className="text-gray-300 text-sm">{selectedStudy.beforeAfter.before}</p>
                    </Card>
                    <Card className="bg-green-500/5 border-green-500/20 p-6">
                      <h4 className="font-semibold text-green-400 mb-2">✅ After</h4>
                      <p className="text-gray-300 text-sm">{selectedStudy.beforeAfter.after}</p>
                    </Card>
                  </div>

                  {/* The Problem */}
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-[var(--accent-yellow)]">The Problem</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedStudy.challenge}</p>
                  </div>

                  {/* My Solution */}
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-[var(--accent-yellow)]">My Solution</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{selectedStudy.solution}</p>
                    <div className="bg-black/50 border border-gray-900 rounded-lg p-6">
                      <h4 className="font-semibold text-[var(--accent-yellow)] mb-3">Implementation Details:</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{selectedStudy.detailedSolution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[var(--accent-yellow)]">The Results</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {selectedStudy.results.map((result, idx) => (
                        <Card key={idx} className="bg-black border-gray-900 p-6 text-center">
                          <result.icon className="w-8 h-8 text-[var(--accent-yellow)] mx-auto mb-3" />
                          <p className="text-3xl font-bold mb-1 text-[var(--accent-yellow)]">{result.value}</p>
                          <p className="text-sm text-gray-400">{result.metric}</p>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[var(--accent-yellow)]">Tools Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedStudy.tools.map((tool, idx) => (
                        <Badge key={idx} className="bg-[var(--accent-yellow)]/10 text-[var(--accent-yellow)] border-[var(--accent-yellow)]/20">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}