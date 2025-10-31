import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Target, Users, Zap, Brain, Workflow, Database, Cloud, Terminal, Boxes } from "lucide-react";

export default function AboutMe() {
  const skills = [
    { name: "n8n", icon: Workflow },
    { name: "OpenAI API", icon: Brain },
    { name: "Python", icon: Terminal },
    { name: "Webhooks", icon: Zap },
    { name: "CRM APIs", icon: Database },
    { name: "Cloud Services", icon: Cloud },
    { name: "API Integration", icon: Boxes },
    { name: "Automation", icon: Code2 },
  ];

  const values = [
    {
      icon: Target,
      title: "Impact-Driven",
      description: "Every solution must deliver measurable ROI. I focus on outcomes that transform your bottom line.",
    },
    {
      icon: Code2,
      title: "Precision Engineering",
      description: "Crafting robust, error-free workflows with attention to every detail. Quality is non-negotiable.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Solutions are built around your unique business challenges. Your success is my success.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Staying ahead of AI trends to deliver cutting-edge automation that gives you competitive advantage.",
    },
  ];

  return (
    <div className="pt-28 min-h-screen bg-black">
      {/* Hero Section with layered effect */}
      <section className="py-20 lg:py-32 relative overflow-hidden" style={{ background: '#000000' }}>
        <div className="absolute inset-0 gradient-bg opacity-30" />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              The Expert Behind <span className="text-[var(--accent-yellow)] text-glow">the Automation</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transforming complex challenges into elegant automated solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo with layered effect */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center relative"
            >
              {/* Large name background behind photo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
                <h2 
                  className="text-[12rem] md:text-[16rem] font-black"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '2px rgba(212, 255, 0, 0.1)',
                    letterSpacing: '-0.05em',
                    opacity: 0.3
                  }}
                >
                  AHMER
                </h2>
              </div>
              
              <div className="relative z-10">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6904e61633b19b2507b45d09/ef36fbf28_WhatsAppImage2025-10-31at183109_db3f5a8f.jpg"
                  alt="Ahmer"
                  className="w-full max-w-md"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    clipPath: 'inset(0 0 15% 0)'
                  }}
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[var(--accent-yellow)] text-glow">My Journey into Automation</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My fascination with efficiency began early. I've always been driven by a simple question: 
                  <span className="text-[var(--accent-yellow)] font-semibold"> "How can we do this better?"</span> 
                  This curiosity led me deep into the world of automation and artificial intelligence.
                </p>
                <p>
                  When I discovered n8n and the power of AI agents, everything clicked. I realized I could combine 
                  strategic thinking with technical precision to build systems that don't just automate tasks—they 
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
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Core <span className="text-[var(--accent-yellow)] text-glow">Values & Approach</span>
            </h2>
            <p className="text-xl text-gray-400">The principles that guide every project I undertake</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-900 p-8 h-full hover:border-[var(--accent-yellow)] transition-all duration-300 group">
                  <value.icon className="w-12 h-12 text-[var(--accent-yellow)] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-3 text-[var(--accent-yellow)]">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technologies I <span className="text-[var(--accent-yellow)] text-glow">Master</span>
            </h2>
            <p className="text-xl text-gray-400">My technical arsenal for building world-class automation</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0A0A0A] border-gray-900 p-8 text-center hover:border-[var(--accent-yellow)] transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--accent-yellow)] opacity-0 group-hover:opacity-5 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-2xl border border-gray-800 group-hover:border-[var(--accent-yellow)] transition-all group-hover:scale-110">
                      <skill.icon className="w-full h-full text-[var(--accent-yellow)]" />
                    </div>
                    <h3 className="font-bold text-lg text-[var(--accent-yellow)]">{skill.name}</h3>
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