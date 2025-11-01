import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AIDemoSection() {
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    setResult(null);
    
    try {
      const response = await fetch(
        "https://nonartistic-painedly-damien.ngrok-free.dev/webhook-test/8edac9c6-26d1-4436-ae61-99e9296ed84b",
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

  const renderResult = (data) => {
    if (data.error) {
      return <p className="text-red-400">{data.error}</p>;
    }

    return (
      <div className="space-y-3">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center p-3 bg-[#111111] rounded border border-[#333333]">
            <span className="font-medium text-[#F5F5F5] capitalize">
              {key.replace(/_/g, ' ')}
            </span>
            <span className="text-[#CCFF00] font-semibold">
              {typeof value === 'object' ? JSON.stringify(value) : value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-32 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F5F5F5]">
            Experience My AI <span className="text-[#CCFF00]">in Action</span>
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-3xl mx-auto">
            See an AI agent instantly analyze sentiment, topic, and priority. 
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
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Column */}
            <Card className="bg-[#1A1A1A] border-[#333333] p-8">
              <div className="space-y-4">
                <label className="text-lg font-semibold text-[#F5F5F5] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#CCFF00]" />
                  Input
                </label>
                <Textarea
                  placeholder="Example: I am extremely unhappy with the recent service outage, this is urgent!"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[200px] bg-[#111111] border-[#333333] text-[#F5F5F5] placeholder:text-[#A0A0A0] focus:border-[#CCFF00] resize-none"
                />
                <Button
                  onClick={handleAnalyze}
                  disabled={!inputText.trim() || isAnalyzing}
                  className="w-full bg-[#CCFF00] hover:bg-[#CCFF00] text-black font-semibold py-6 text-lg button-hover disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Try the AI Demo"
                  )}
                </Button>
              </div>
            </Card>

            {/* Output Column */}
            <Card className="bg-[#1A1A1A] border-[#333333] p-8">
              <div className="space-y-4">
                <label className="text-lg font-semibold text-[#F5F5F5]">
                  Output
                </label>
                
                <div className="min-h-[280px] flex items-center justify-center">
                  {!result && !isAnalyzing && (
                    <p className="text-[#A0A0A0] text-center">
                      Your analysis results will appear here...
                    </p>
                  )}

                  {isAnalyzing && (
                    <div className="text-center">
                      <Loader2 className="w-12 h-12 text-[#CCFF00] animate-spin mx-auto mb-4" />
                      <p className="text-[#A0A0A0]">Processing...</p>
                    </div>
                  )}

                  {result && !isAnalyzing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full"
                    >
                      {renderResult(result)}
                    </motion.div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}