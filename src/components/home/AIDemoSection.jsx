import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AIDemoSection() {
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [timeoutError, setTimeoutError] = useState(false);

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    setResult(null);
    setHasSubmitted(true);
    setTimeoutError(false);
    
    const timeoutId = setTimeout(() => {
      setTimeoutError(true);
      setIsAnalyzing(false);
    }, 15000);
    
    try {
      const response = await fetch(
        "https://nonartistic-painedly-damien.ngrok-free.dev/webhook/8edac9c6-26d1-4436-ae61-99e9296ed84b",
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

      clearTimeout(timeoutId);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("Error analyzing:", error);
      setTimeoutError(true);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const renderResult = (data) => {
    if (timeoutError) {
      return (
        <div className="text-[#A0A0A0] leading-relaxed">
          Looks like my agent is taking an unscheduled coffee break! The connection timed out. Please give that another try.
        </div>
      );
    }

    if (!data) return null;

    return (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#F5F5F5] mb-2">Here's the Simple Version:</h4>
          <p className="text-[#A0A0A0] leading-relaxed">
            {data.simple_explanation || data.simplified || "No simplified version available"}
          </p>
        </div>
        
        <hr className="border-[#333333]" />
        
        <div>
          <h4 className="font-bold text-[#F5F5F5] mb-2">Jargon Clarified:</h4>
          <div className="flex flex-wrap gap-2">
            {data.key_terms && data.key_terms.length > 0 ? (
              data.key_terms.map((term, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#CCFF00]/10 text-[#CCFF00] text-sm rounded-full border border-[#CCFF00]/20"
                >
                  {term}
                </span>
              ))
            ) : (
              <span className="text-[#A0A0A0]">No key terms identified</span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#F5F5F5]">
            Put My AI to the <span className="text-[#CCFF00]">Test</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Give me your most confusing jargon, a complex paragraph, or just random text. 
            I'll instantly translate it into simple English. Go on, test my capabilities.
          </p>
        </motion.div>

        {/* Demo Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Input Column */}
            <Card className="bg-[#1A1A1A] border-[#333333] p-6 sm:p-8">
              <div className="space-y-4">
                <label className="text-base sm:text-lg font-semibold text-[#F5F5F5]">
                  Input
                </label>
                <Textarea
                  placeholder="Paste complex jargon or technical text here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[200px] sm:min-h-[250px] bg-[#111111] border-[#333333] text-[#F5F5F5] placeholder:text-[#A0A0A0] focus:border-[#CCFF00] resize-none text-sm sm:text-base"
                />
                <Button
                  onClick={handleAnalyze}
                  disabled={!inputText.trim() || isAnalyzing}
                  className="w-full bg-[#CCFF00] hover:bg-[#CCFF00] text-black font-semibold py-5 sm:py-6 text-base sm:text-lg button-hover disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Experience My AI"
                  )}
                </Button>
              </div>
            </Card>

            {/* Output Column - Chat Interface */}
            <Card className="bg-[#1A1A1A] border-[#333333] p-6 sm:p-8">
              <div className="space-y-4">
                <label className="text-base sm:text-lg font-semibold text-[#F5F5F5]">
                  Output
                </label>
                
                <div className="min-h-[200px] sm:min-h-[250px] space-y-4">
                  {!hasSubmitted && (
                    <div className="h-full flex items-center justify-center">
                      <p className="text-[#A0A0A0] text-center text-sm sm:text-base">
                        Your simplified results will appear here...
                      </p>
                    </div>
                  )}

                  {hasSubmitted && (
                    <>
                      {/* User Message */}
                      <div className="flex justify-end">
                        <div className="max-w-[85%] bg-[#333333] rounded-lg p-3 sm:p-4">
                          <p className="text-[#F5F5F5] text-sm sm:text-base break-words">
                            {inputText}
                          </p>
                        </div>
                      </div>

                      {/* AI Response */}
                      <div className="flex justify-start">
                        <div className="max-w-[85%] bg-[#111111] border border-[#333333] rounded-lg p-3 sm:p-4">
                          {isAnalyzing ? (
                            <div className="space-y-2">
                              <div className="h-3 bg-[#333333] rounded animate-pulse w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CCFF00]/10 to-transparent animate-shimmer" />
                              </div>
                              <div className="h-3 bg-[#333333] rounded animate-pulse w-4/5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CCFF00]/10 to-transparent animate-shimmer" style={{ animationDelay: '0.2s' }} />
                              </div>
                              <div className="h-3 bg-[#333333] rounded animate-pulse w-3/4 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CCFF00]/10 to-transparent animate-shimmer" style={{ animationDelay: '0.4s' }} />
                              </div>
                            </div>
                          ) : (
                            <div className="text-sm sm:text-base">
                              {renderResult(result)}
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}