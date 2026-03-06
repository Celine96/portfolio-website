import React from "react";
import { Button } from "@/components/ui/button";
import { format, addHours } from "date-fns";
import { ko } from "date-fns/locale";

export default function TimeSlotSelector({ selectedDate, onTimeSelect, selectedTime, bookedTimes }) {
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30"
  ];

  const isTimeBooked = (time) => {
    const [hours, minutes] = time.split(":");
    const slotTime = new Date(selectedDate);
    slotTime.setHours(parseInt(hours), parseInt(minutes), 0);
    
    return bookedTimes.some(bookedTime => {
      const booked = new Date(bookedTime);
      return booked.getHours() === slotTime.getHours() && 
             booked.getMinutes() === slotTime.getMinutes();
    });
  };

  if (!selectedDate) {
    return (
      <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-6 text-center text-[#A0A0A0]">
        날짜를 선택하세요
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#F5F5F5] mb-4">
          {format(selectedDate, "yyyy년 M월 d일", { locale: ko })}의 상담 시간 선택
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {timeSlots.map((time) => {
            const isBooked = isTimeBooked(time);
            const isSelected = selectedTime === time;

            return (
              <button
                 key={time}
                 onClick={() => !isBooked && onTimeSelect(time)}
                 disabled={isBooked}
                 className={`
                   py-3 px-2 sm:py-2 sm:px-3 rounded font-medium transition-colors text-xs sm:text-sm min-h-[44px] sm:min-h-auto
                   ${isBooked ? "bg-[#FF6B6B] text-white cursor-not-allowed opacity-50" : ""}
                   ${isSelected ? "bg-[#CCFF00] text-black" : ""}
                   ${!isBooked && !isSelected ? "bg-[#2A2A2A] text-[#F5F5F5] hover:bg-[#3A3A3A]" : ""}
                 `}
               >
                 {time}
               </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}