import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleReset = () => {
      setDailyReps(20);
      setMinutesPerTask(15);
      setHourlyCost(30);
      setShowResults(false);
    };

    window.addEventListener('resetROICalculator', handleReset);
    return () => window.removeEventListener('resetROICalculator', handleReset);
  }, []);

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
    <section className="py-16 sm:py-24 md:py-32 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#F5F5F5]">
            숨겨진 비용을 <span className="text-[#CCFF00]">계산</span>하세요
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            귀사의 수치를 입력하여 수동 작업의 실제 비용을 공개합니다
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-[#1A1A1A] border-[#333333] p-6 sm:p-8 md:p-12">
            <div className="space-y-8 sm:space-y-10">
              {/* Input 1 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                   <Label className="text-sm sm:text-base font-medium text-[#F5F5F5]">일일 작업 반복 횟수</Label>
                   <span className="text-xl sm:text-2xl font-bold text-[#CCFF00]">{dailyReps}</span>
                 </div>
                 <Slider
                   value={[dailyReps]}
                   onValueChange={(value) => setDailyReps(value[0])}
                   min={1}
                   max={100}
                   step={1}
                   className="w-full"
                 />
                 <p className="text-xs sm:text-sm text-[#A0A0A0]">이 작업이 매일 몇 번 수행되나요?</p>
              </div>

              {/* Input 2 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                   <Label className="text-sm sm:text-base font-medium text-[#F5F5F5]">작업당 소요 시간 (분)</Label>
                   <span className="text-xl sm:text-2xl font-bold text-[#CCFF00]">{minutesPerTask}</span>
                 </div>
                 <Slider
                   value={[minutesPerTask]}
                   onValueChange={(value) => setMinutesPerTask(value[0])}
                   min={1}
                   max={120}
                   step={1}
                   className="w-full"
                 />
                 <p className="text-xs sm:text-sm text-[#A0A0A0]">한 작업을 수동으로 완료하는 평균 시간</p>
              </div>

              {/* Input 3 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                   <Label className="text-sm sm:text-base font-medium text-[#F5F5F5]">시급 (USD)</Label>
                   <span className="text-xl sm:text-2xl font-bold text-[#CCFF00]">${hourlyCost.toLocaleString()}</span>
                 </div>
                 <Slider
                   value={[hourlyCost]}
                   onValueChange={(value) => setHourlyCost(Math.max(10, Math.min(500, value[0])))}
                   min={10}
                   max={500}
                   step={5}
                   className="w-full"
                 />
                 <p className="text-xs sm:text-sm text-[#A0A0A0]">급여, 복리후생, 간접비 포함</p>
              </div>

              {/* Calculate Button */}
              <Button
                onClick={() => setShowResults(true)}
                className="w-full bg-[#CCFF00] hover:bg-[#CCFF00] text-black font-bold py-5 sm:py-6 text-base sm:text-lg button-hover"
              >
                숨겨진 비용 보기
              </Button>

              {/* Results */}
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 sm:space-y-8 pt-6 sm:pt-8 border-t border-[#333333]"
                >
                  <div className="text-center">
                     <p className="text-[#A0A0A0] mb-3 text-sm sm:text-base">연간 절감 가능액</p>
                     <p className="text-5xl sm:text-6xl md:text-7xl font-black text-[#CCFF00] mb-4">
                       ${parseInt(savings.annualCost).toLocaleString()}
                     </p>
                     <p className="text-lg sm:text-xl text-[#F5F5F5]">
                       즉, 연간 <span className="font-bold text-[#CCFF00]">{savings.annualHours}</span>시간을 절감합니다
                     </p>
                   </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card className="bg-[#111111] border-[#333333] p-4 sm:p-6 text-center">
                        <p className="text-2xl sm:text-3xl font-bold mb-2 text-[#F5F5F5]">${parseFloat(savings.dailyCost).toLocaleString()}</p>
                        <p className="text-xs sm:text-sm text-[#A0A0A0]">일일 비용</p>
                      </Card>
                      <Card className="bg-[#111111] border-[#333333] p-4 sm:p-6 text-center">
                        <p className="text-2xl sm:text-3xl font-bold mb-2 text-[#F5F5F5]">{savings.dailyHours}h</p>
                        <p className="text-xs sm:text-sm text-[#A0A0A0]">일일 시간</p>
                      </Card>
                      <Card className="bg-[#111111] border-[#333333] p-4 sm:p-6 text-center">
                        <p className="text-2xl sm:text-3xl font-bold mb-2 text-[#F5F5F5]">{dailyReps}x</p>
                        <p className="text-xs sm:text-sm text-[#A0A0A0]">일일 작업</p>
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