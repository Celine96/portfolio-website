import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Sparkles, TrendingUp, AlertTriangle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function AIDemoSection() {
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeSentiment = (text) => {
    // Simple sentiment analysis logic
    const negativeWords = ["unhappy", "angry", "frustrated", "terrible", "awful", "bad", "hate", "worst", "urgent", "outage", "broken", "issue", "problem"];
    const positiveWords = ["happy", "great", "excellent", "amazing", "love", "best", "wonderful", "fantastic", "thank"];
    
    const lowerText = text.toLowerCase();
    const negCount = negativeWords.filter(word => lowerText.includes(word)).length;
    const posCount = positiveWords.filter(word => lowerText.includes(word)).length;
    
    let sentiment = "NEUTRAL";
    let emoji = "😐";
    
    if (negCount > posCount) {
      sentiment = "NEGATIVE";
      emoji = "😠";
    } else if (posCount > negCount) {
      sentiment = "POSITIVE";
      emoji = "😊";
    }
    
    // Detect topic
    let topic = "General Inquiry";
    if (lowerText.includes("service") || lowerText.includes("outage")) topic = "Service Outage";
    if (lowerText.includes("payment") || lowerText.includes("billing")) topic = "Billing";
    if (lowerText.includes("feature") || lowerText.includes("request")) topic = "Feature Request";
    if (lowerText.includes("help") || lowerText.includes("support")) topic = "Support";
    
    // Detect priority
    let priority = "MEDIUM";
    let priorityEmoji = "⚡";
    if (lowerText.includes("urgent") || lowerText.includes("asap") || lowerText.includes("immediately")) {
      priority = "HIGH";
      priorityEmoji = "🚨";
    } else if (lowerText.includes("whenever") || lowerText.includes("no rush")) {
      priority = "LOW";
      priorityEmoji = "📝";
    }
    
    return { sentiment, emoji, topic, priority, priorityEmoji };
  };

  const handleAnalyze = () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      const analysis = analyzeSentiment(inputText);
      setResult(analysis);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-[#0F0F0F] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-orange)] bg-[var(--accent-orange)]/10 mb-6">
            <Sparkles className="w-4 h-4 text-[var(--accent-orange)]" />
            <span className="text-sm font-medium text-[var(--accent-orange)]">INTERACTIVE DEMO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience My AI <span className="text-[var(--accent-orange)]">in Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Paste a sample message below to see an AI agent instantly analyze sentiment, topic, and priority. 
            This is the power of smart automation.
          </p>
        </motion.div>

        {/* Demo Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-[var(--bg-card)] border-gray-800 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-4">
                <label className="text-lg font-semibold flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[var(--accent-orange)]" />
                  Your Message
                </label>
                <Textarea
                  placeholder="Example: I am extremely unhappy with the recent service outage, this is urgent!"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[200px] bg-[#0F0F0F] border-gray-700 text-white placeholder:text-gray-500 focus:border-[var(--accent-orange)] resize-none"
                />
                <Button
                  onClick={handleAnalyze}
                  disabled={!inputText.trim() || isAnalyzing}
                  className="w-full bg-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/90 text-white font-semibold py-6 text-lg hover:glow-effect transition-all"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Analyze Message
                    </>
                  )}
                </Button>
              </div>

              {/* Output Section */}
              <div className="space-y-4">
                <label className="text-lg font-semibold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[var(--accent-orange)]" />
                  AI Analysis Results
                </label>
                
                {!result && !isAnalyzing && (
                  <div className="h-[200px] border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 text-center px-4">
                      Your analysis results will appear here...
                    </p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="h-[200px] bg-[#0F0F0F] border border-gray-700 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Loader2 className="w-12 h-12 text-[var(--accent-orange)] animate-spin mx-auto mb-4" />
                      <p className="text-gray-400">AI processing your message...</p>
                    </div>
                  </div>
                )}

                {result && !isAnalyzing && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 bg-[#0F0F0F] border border-gray-700 rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg border border-purple-500/20">
                      <span className="font-medium text-gray-300">Sentiment</span>
                      <span className="text-xl font-bold flex items-center gap-2">
                        {result.sentiment} {result.emoji}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg border border-blue-500/20">
                      <span className="font-medium text-gray-300">Topic</span>
                      <span className="text-xl font-bold text-blue-400">{result.topic}</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[var(--accent-orange)]/10 to-transparent rounded-lg border border-[var(--accent-orange)]/20">
                      <span className="font-medium text-gray-300">Priority</span>
                      <span className="text-xl font-bold flex items-center gap-2 text-[var(--accent-orange)]">
                        {result.priority} {result.priorityEmoji}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Concluding Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-[var(--accent-orange)]/10 to-transparent border-[var(--accent-orange)]/20 p-8">
            <AlertTriangle className="w-12 h-12 text-[var(--accent-orange)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Imagine the Possibilities</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              This interactive demo showcases fundamental AI capabilities. Imagine building custom agents 
              tailored to your specific business needs – from <span className="text-[var(--accent-orange)] font-semibold">lead qualification</span> to 
              <span className="text-[var(--accent-orange)] font-semibold"> automated content generation</span>. That's what I deliver.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}