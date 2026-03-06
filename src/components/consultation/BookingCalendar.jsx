import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isBefore, isToday, startOfToday, addHours } from "date-fns";
import { ko } from "date-fns/locale";

export default function BookingCalendar({ onDateSelect, selectedDate, bookedTimes }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = startOfToday();

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const isDateBooked = (date) => {
    return bookedTimes.some(time => {
      const bookedDate = new Date(time);
      return bookedDate.toDateString() === date.toDateString();
    });
  };

  const isDateAvailable = (date) => {
    return isSameMonth(date, currentDate) && !isBefore(date, today);
  };

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="space-y-4">
      <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-[#2A2A2A] rounded transition-colors"
          >
            <ChevronLeft size={20} className="text-[#CCFF00]" />
          </button>
          <h3 className="text-lg font-bold text-[#F5F5F5]">
            {format(currentDate, "MMMM yyyy", { locale: ko })}
          </h3>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-[#2A2A2A] rounded transition-colors"
          >
            <ChevronRight size={20} className="text-[#CCFF00]" />
          </button>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {weekDays.map((day) => (
            <div key={day} className="text-center text-[#A0A0A0] text-sm font-medium py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day) => {
            const isAvailable = isDateAvailable(day);
            const isBooked = isDateBooked(day);
            const isSelected = selectedDate && day.toDateString() === selectedDate.toDateString();
            const isTodayDate = isToday(day);

            return (
              <button
                key={day.toString()}
                onClick={() => isAvailable && !isBooked && onDateSelect(day)}
                disabled={!isAvailable || isBooked}
                className={`
                  aspect-square rounded p-2 text-sm font-medium transition-colors
                  ${!isAvailable ? "text-[#555555] cursor-not-allowed" : ""}
                  ${isBooked ? "bg-[#FF6B6B] text-white cursor-not-allowed" : ""}
                  ${isSelected ? "bg-[#CCFF00] text-black" : ""}
                  ${isAvailable && !isBooked && !isSelected ? "hover:bg-[#2A2A2A] text-[#F5F5F5]" : ""}
                  ${isTodayDate && !isSelected ? "border-2 border-[#CCFF00]" : ""}
                `}
              >
                {format(day, "d")}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}