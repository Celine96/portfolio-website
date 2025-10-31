import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { Calculator, DollarSign, TrendingUp, Mail, Download } from "lucide-react";

export default function ROICalculator() {
  const [dailyReps, setDailyReps] = useState(20);
  const [minutesPerTask, setMinutesPerTask] = useState(15);
  const [hourlyCost, setHourlyCost] = useState(30);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");

  const calculateSavings = () => {
    const dailyMinutes = dailyReps * minutesPerTask;
    const dailyHours = dailyMinutes / 60;
    const dailyCost = dailyHours * hourlyCost;
    const annualCost = dailyCost * 250; // 250 working days
    const annualHours = dailyHours * 250;
    
    return {
      dailyCost: dailyCost.toFixed(2),
      annualCost: annualCost.toFixed(0),
      annualHours: annualHours.toFixed(0),
      dailyHours: dailyHours.toFixed(1),
    };
  };

  const savings = calculateSavings();

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <section className="py-20 bg-black">
      <div className="absolute inset-0 gradient-mesh" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10 mb-6 animate-pulse-glow">
            <Calculator className="w-4 h-4 text-[var(--accent-yellow)]" />
            <span className="text-sm font-medium text-[var(--accent-yellow)]">ROI CALCULATOR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Calculate Your <span className="text-[var(--accent-yellow)]">Hidden Costs</span>
          </h2>
          <p className="text-xl text-gray-400">
            Input your business's numbers to reveal the true cost of manual tasks
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-[var(--bg-card)] border-gray-900 p-8 md:p-12">
            <div className="space-y-8">
              {/* Input 1 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-lg font-semibold text-white">Daily Repetitions of a Task</Label>
                  <span className="text-2xl font-bold text-[var(--accent-yellow)]">{dailyReps}</span>
                </div>
                <Slider
                  value={[dailyReps]}
                  onValueChange={(value) => setDailyReps(value[0])}
                  min={1}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-gray-400">How many times is this task performed daily?</p>
              </div>

              {/* Input 2 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-lg font-semibold text-white">Minutes per Manual Task</Label>
                  <span className="text-2xl font-bold text-[var(--accent-yellow)]">{minutesPerTask}</span>
                </div>
                <Slider
                  value={[minutesPerTask]}
                  onValueChange={(value) => setMinutesPerTask(value[0])}
                  min={1}
                  max={120}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-gray-400">Average time to complete one task manually</p>
              </div>

              {/* Input 3 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-lg font-semibold text-white">Average Hourly Employee Cost ($)</Label>
                  <span className="text-2xl font-bold text-[var(--accent-yellow)]">${hourlyCost}</span>
                </div>
                <Slider
                  value={[hourlyCost]}
                  onValueChange={(value) => setHourlyCost(value[0])}
                  min={10}
                  max={150}
                  step={5}
                  className="w-full"
                />
                <p className="text-sm text-gray-400">Including salary, benefits, and overhead</p>
              </div>

              {/* Calculate Button */}
              <Button
                onClick={handleCalculate}
                className="w-full bg-[var(--accent-yellow)] hover:bg-[var(--accent-yellow)]/90 text-black font-bold py-6 text-lg glow-effect transition-all"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Show My Annual Savings
              </Button>

              {/* Results */}
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 pt-6 border-t border-gray-900"
                >
                  <div className="text-center">
                    <p className="text-gray-400 mb-2">Your Annual Savings Potential</p>
                    <p className="text-6xl md:text-7xl font-black text-[var(--accent-yellow)] mb-4 text-glow">
                      ${parseInt(savings.annualCost).toLocaleString()}
                    </p>
                    <p className="text-xl text-gray-300">
                      That's <span className="font-bold text-[var(--accent-yellow)]">{savings.annualHours}</span> hours 
                      saved per year!
                    </p>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-black border-gray-900 p-6 text-center">
                      <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold mb-1 text-white">${savings.dailyCost}</p>
                      <p className="text-sm text-gray-400">Daily Cost</p>
                    </Card>
                    <Card className="bg-black border-gray-900 p-6 text-center">
                      <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold mb-1 text-white">{savings.dailyHours}h</p>
                      <p className="text-sm text-gray-400">Daily Hours</p>
                    </Card>
                    <Card className="bg-black border-gray-900 p-6 text-center">
                      <Calculator className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold mb-1 text-white">{dailyReps}x</p>
                      <p className="text-sm text-gray-400">Daily Tasks</p>
                    </Card>
                  </div>

                  {/* Email Lead Gen */}
                  <Card className="bg-gradient-to-r from-[var(--accent-yellow)]/10 to-transparent border-[var(--accent-yellow)]/20 p-6">
                    <h4 className="text-xl font-bold mb-4 text-center text-white">Get Your Custom PDF Report</h4>
                    <div className="flex gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-black border-gray-800 text-white"
                      />
                      <Button className="bg-[var(--accent-yellow)] hover:bg-[var(--accent-yellow)]/90 text-black whitespace-nowrap">
                        <Download className="w-4 h-4 mr-2" />
                        Send Report
                      </Button>
                    </div>
                    <p className="text-xs text-gray-400 mt-3 text-center">
                      Includes detailed breakdown, automation recommendations, and case studies
                    </p>
                  </Card>
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}