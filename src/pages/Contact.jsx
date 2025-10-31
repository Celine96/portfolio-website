import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Sparkles, Send, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    task_description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://nonartistic-painedly-damien.ngrok-free.dev/webhook-test/f47e1ee6-42f9-4cce-8701-6cb568df27d6",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          task_description: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-[#0F0F0F]">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-orange)]/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-orange)] bg-[var(--accent-orange)]/10 mb-6">
              <Sparkles className="w-4 h-4 text-[var(--accent-orange)]" />
              <span className="text-sm font-medium text-[var(--accent-orange)]">AI-POWERED CONTACT</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Ready to <span className="text-[var(--accent-orange)]">Transform</span> Your Business?
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              This isn't just a contact form. Describe your most time-consuming, repetitive task. 
              My AI agent will provide an initial analysis, and I'll deliver a personalized strategy.
            </p>
          </motion.div>

          {/* Success Message */}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <Card className="bg-gradient-to-r from-green-500/10 to-transparent border-green-500/20 p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Challenge Received!</h3>
                <p className="text-gray-300 leading-relaxed">
                  My AI agent is now analyzing your task. Check your inbox for its initial insights, 
                  and I will follow up personally with a strategic plan within 24 hours.
                </p>
              </Card>
            </motion.div>
          )}

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-[var(--bg-card)] border-gray-800 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-semibold">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="bg-[#0F0F0F] border-gray-700 text-white placeholder:text-gray-500 focus:border-[var(--accent-orange)] h-12"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="bg-[#0F0F0F] border-gray-700 text-white placeholder:text-gray-500 focus:border-[var(--accent-orange)] h-12"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-lg font-semibold">
                    Company <span className="text-gray-500 font-normal">(Optional)</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="bg-[#0F0F0F] border-gray-700 text-white placeholder:text-gray-500 focus:border-[var(--accent-orange)] h-12"
                  />
                </div>

                {/* Task Description */}
                <div className="space-y-2">
                  <Label htmlFor="task_description" className="text-lg font-semibold">
                    Describe Your Repetitive Task *
                  </Label>
                  <Textarea
                    id="task_description"
                    name="task_description"
                    required
                    value={formData.task_description}
                    onChange={handleChange}
                    placeholder="Example: Every day, I manually copy data from customer emails into our CRM, categorize them by urgency, and send follow-up emails. This takes 2-3 hours daily..."
                    className="bg-[#0F0F0F] border-gray-700 text-white placeholder:text-gray-500 focus:border-[var(--accent-orange)] min-h-[200px] resize-none"
                  />
                  <p className="text-sm text-gray-400">
                    Be as detailed as possible. The more context you provide, the better my AI can analyze your needs.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/90 text-white font-bold py-6 text-lg hover:glow-effect transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending to AI Agent...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send My Automation Challenge
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  By submitting, you agree to receive automated analysis and personalized follow-up from me.
                </p>
              </form>
            </Card>
          </motion.div>

          {/* What Happens Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[var(--bg-card)] border-gray-800 p-6 text-center">
                <div className="w-12 h-12 bg-[var(--accent-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[var(--accent-orange)]">1</span>
                </div>
                <h4 className="font-bold mb-2">Instant AI Analysis</h4>
                <p className="text-sm text-gray-400">
                  My AI agent immediately analyzes your task and emails you initial insights
                </p>
              </Card>
              <Card className="bg-[var(--bg-card)] border-gray-800 p-6 text-center">
                <div className="w-12 h-12 bg-[var(--accent-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[var(--accent-orange)]">2</span>
                </div>
                <h4 className="font-bold mb-2">Personal Review</h4>
                <p className="text-sm text-gray-400">
                  I personally review your challenge and craft a custom automation strategy
                </p>
              </Card>
              <Card className="bg-[var(--bg-card)] border-gray-800 p-6 text-center">
                <div className="w-12 h-12 bg-[var(--accent-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[var(--accent-orange)]">3</span>
                </div>
                <h4 className="font-bold mb-2">Strategic Call</h4>
                <p className="text-sm text-gray-400">
                  Within 24 hours, I reach out to discuss your personalized automation roadmap
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}