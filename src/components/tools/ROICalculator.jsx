import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

export default function ROICalculator() {
  const [dailyReps, setDailyReps] = useState(20);
  const [minutesPerTask, setMinutesPerTask] = useState(15);
  const [hourlyCost, setHourlyCost] = useState(30);
  const [showResults, setShowResults] = useState(false);

  const calculateSavings = () => {
    const dailyMinutes = dailyReps * minutesPerTask;
    const dailyHours = dailyMinutes / 60;
    const dailyCost = dailyHours * hourlyCost;
    const annualCost = dailyCost * 250;
    const annualHours = dailyHours * 250;
    
    return {
      dailyCost: dailyCost.toFixed(2),
      annualCost: annualCost.toFixed(0),
      annualHours: annualHours.toFixed(0),
      dailyHours: dailyHours.toFixed(1),
    };
  };

  const savings = calculateSavings();

  return (
    <section className="py-32 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#F5F5F5]">
            Quantify Your <span className="text-[#CCFF00]">Savings</span>
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Calculate the true cost of manual tasks and discover your automation ROI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-[#1A1A1A] border-[#333333] p-8 md:p-12">
            <div className="space-y-10">
              {/* Input 1 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-medium text-[#F5F5F5]">Daily Task Repetitions</Label>
                  <span className="text-2xl font-bold text-[#CCFF00]">{dailyReps}</span>
                </div>
                <Slider
                  value={[dailyReps]}
                  onValueChange={(value) => setDailyReps(value[0])}
                  min={1}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-[#A0A0A0]">How many times is this task performed daily?</p>
              </div>

              {/* Input 2 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-medium text-[#F5F5F5]">Minutes per Task</Label>
                  <span className="text-2xl font-bold text-[#CCFF00]">{minutesPerTask}</span>
                </div>
                <Slider
                  value={[minutesPerTask]}
                  onValueChange={(value) => setMinutesPerTask(value[0])}
                  min={1}
                  max={120}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-[#A0A0A0]">Average time to complete one task manually</p>
              </div>

              {/* Input 3 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-medium text-[#F5F5F5]">Hourly Cost ($)</Label>
                  <span className="text-2xl font-bold text-[#CCFF00]">${hourlyCost}</span>
                </div>
                <Slider
                  value={[hourlyCost]}
                  onValueChange={(value) => setHourlyCost(value[0])}
                  min={10}
                  max={150}
                  step={5}
                  className="w-full"
                />
                <p className="text-sm text-[#A0A0A0]">Including salary, benefits, and overhead</p>
              </div>

              {/* Calculate Button */}
              <Button
                onClick={() => setShowResults(true)}
                className="w-full bg-[#CCFF00] hover:bg-[#CCFF00] text-black font-bold py-6 text-lg button-hover"
              >
                Show My Annual Savings
              </Button>

              {/* Results */}
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8 pt-8 border-t border-[#333333]"
                >
                  <div className="text-center">
                    <p className="text-[#A0A0A0] mb-3">Your Annual Savings Potential</p>
                    <p className="text-6xl md:text-7xl font-black text-[#CCFF00] mb-4">
                      ${parseInt(savings.annualCost).toLocaleString()}
                    </p>
                    <p className="text-xl text-[#F5F5F5]">
                      That's <span className="font-bold text-[#CCFF00]">{savings.annualHours}</span> hours saved per year
                    </p>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-[#111111] border-[#333333] p-6 text-center">
                      <p className="text-3xl font-bold mb-2 text-[#F5F5F5]">${savings.dailyCost}</p>
                      <p className="text-sm text-[#A0A0A0]">Daily Cost</p>
                    </Card>
                    <Card className="bg-[#111111] border-[#333333] p-6 text-center">
                      <p className="text-3xl font-bold mb-2 text-[#F5F5F5]">{savings.dailyHours}h</p>
                      <p className="text-sm text-[#A0A0A0]">Daily Hours</p>
                    </Card>
                    <Card className="bg-[#111111] border-[#333333] p-6 text-center">
                      <p className="text-3xl font-bold mb-2 text-[#F5F5F5]">{dailyReps}x</p>
                      <p className="text-sm text-[#A0A0A0]">Daily Tasks</p>
                    </Card>
                  </div>
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}