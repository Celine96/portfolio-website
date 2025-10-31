import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Sparkles, TrendingUp, AlertTriangle, MessageSquare, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIDemoSection() {
  const [showDemo, setShowDemo] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    setResult(null);
    
    try {
      const response = await fetch(
        "https://nonartistic-painedly-damien.ngrok-free.dev/webhook-test/f47e1ee6-42f9-4cce-8701-6cb568df27d6",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: inputText
          }),
        }
      );

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error analyzing:", error);
      setResult({
        error: "Failed to analyze. Please try again."
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-black border-t border-gray-900">
      <div className="absolute inset-0 gradient-mesh" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10 mb-6 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-[var(--accent-yellow)]" />
            <span className="text-sm font-medium text-[var(--accent-yellow)]">INTERACTIVE DEMO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow">
            Experience My AI <span className="text-[var(--accent-yellow)]">in Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See an AI agent instantly analyze sentiment, topic, and priority. 
            This is the power of smart automation.
          </p>
        </motion.div>

        {/* Demo Trigger Button */}
        {!showDemo && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Button
              onClick={() => setShowDemo(true)}
              className="bg-[var(--accent-yellow)] hover:bg-[var(--accent-yellow)]/90 text-black font-bold py-8 px-12 text-xl rounded-xl glow-effect transition-all transform hover:scale-105 group"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Try the AI Demo
            </Button>
          </motion.div>
        )}

        {/* Demo Interface */}
        <AnimatePresence>
          {showDemo && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-[var(--bg-card)] border-gray-900 p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Input Section */}
                  <div className="space-y-4">
                    <label className="text-lg font-semibold flex items-center gap-2 text-[var(--accent-yellow)]">
                      <MessageSquare className="w-5 h-5" />
                      Your Message
                    </label>
                    <Textarea
                      placeholder="Example: I am extremely unhappy with the recent service outage, this is urgent!"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="min-h-[200px] bg-black border-gray-800 text-white placeholder:text-gray-600 focus:border-[var(--accent-yellow)] resize-none"
                    />
                    <Button
                      onClick={handleAnalyze}
                      disabled={!inputText.trim() || isAnalyzing}
                      className="w-full bg-[var(--accent-yellow)] hover:bg-[var(--accent-yellow)]/90 text-black font-semibold py-6 text-lg glow-effect transition-all"
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
                    <label className="text-lg font-semibold flex items-center gap-2 text-[var(--accent-yellow)]">
                      <TrendingUp className="w-5 h-5" />
                      AI Analysis Results
                    </label>
                    
                    {!result && !isAnalyzing && (
                      <div className="h-[200px] border-2 border-dashed border-gray-800 rounded-lg flex items-center justify-center">
                        <p className="text-gray-600 text-center px-4">
                          Your analysis results will appear here...
                        </p>
                      </div>
                    )}

                    {isAnalyzing && (
                      <div className="h-[200px] bg-black border border-gray-800 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Loader2 className="w-12 h-12 text-[var(--accent-yellow)] animate-spin mx-auto mb-4" />
                          <p className="text-gray-400">AI processing your message...</p>
                        </div>
                      </div>
                    )}

                    {result && !isAnalyzing && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-4 bg-black border border-gray-800 rounded-lg p-6"
                      >
                        {result.error ? (
                          <div className="text-red-400">{result.error}</div>
                        ) : (
                          <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                            {JSON.stringify(result, null, 2)}
                          </pre>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Concluding Text */}
        {showDemo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Card className="bg-gradient-to-r from-[var(--accent-yellow)]/10 to-transparent border-[var(--accent-yellow)]/20 p-8">
              <AlertTriangle className="w-12 h-12 text-[var(--accent-yellow)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-[var(--accent-yellow)] text-glow">Imagine the Possibilities</h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                This interactive demo showcases fundamental AI capabilities. Imagine building custom agents 
                tailored to your specific business needs – from <span className="text-[var(--accent-yellow)] font-semibold">lead qualification</span> to 
                <span className="text-[var(--accent-yellow)] font-semibold"> automated content generation</span>. That's what I deliver.
              </p>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}