import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import BookingCalendar from "../components/consultation/BookingCalendar";
import TimeSlotSelector from "../components/consultation/TimeSlotSelector";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function ConsultationBooking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    duration: "30분",
    topic: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const queryClient = useQueryClient();

  const { data: bookings = [] } = useQuery({
    queryKey: ["consultationBookings"],
    queryFn: () => base44.entities.ConsultationBooking.filter({ status: ["확정", "예약 대기"] }),
    initialData: []
  });

  const createBookingMutation = useMutation({
    mutationFn: (bookingData) => base44.entities.ConsultationBooking.create(bookingData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["consultationBookings"] });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        duration: "30분",
        topic: "",
        message: ""
      });
      setSelectedDate(null);
      setSelectedTime(null);
      setTimeout(() => setSubmitStatus(null), 5000);
    },
    onError: () => {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  });

  const bookedTimes = bookings.map(b => b.bookingDate);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 필수 필드 검증
    if (!selectedDate || !selectedTime) {
      setSubmitStatus("validation");
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.topic.trim()) {
      setSubmitStatus("validation");
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    // 중복 예약 확인
    const [hours, minutes] = selectedTime.split(":");
    const bookingDateTime = new Date(selectedDate);
    bookingDateTime.setHours(parseInt(hours), parseInt(minutes), 0);

    const isDuplicate = bookings.some(b => 
      new Date(b.bookingDate).getTime() === bookingDateTime.getTime() &&
      b.email === formData.email
    );

    if (isDuplicate) {
      setSubmitStatus("duplicate");
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    createBookingMutation.mutate({
      ...formData,
      bookingDate: bookingDateTime.toISOString()
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#111111] pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#F5F5F5]">
            무료 상담 <span className="text-[#CCFF00]">예약</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            귀사의 자동화 요구사항에 대해 전문가와 직접 상담해보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <BookingCalendar
              onDateSelect={setSelectedDate}
              selectedDate={selectedDate}
              bookedTimes={bookedTimes}
            />
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-[#1A1A1A] border-[#333333] p-6 sm:p-8">
              {submitStatus === "success" && (
                <div className="mb-6 flex items-center gap-3 bg-green-900/30 border border-green-600 rounded-lg p-4">
                  <CheckCircle size={20} className="text-green-500" />
                  <p className="text-green-400">예약이 성공적으로 등록되었습니다!</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 flex items-center gap-3 bg-red-900/30 border border-red-600 rounded-lg p-4">
                  <AlertCircle size={20} className="text-red-500" />
                  <p className="text-red-400">예약 등록 중 오류가 발생했습니다</p>
                </div>
              )}

              {submitStatus === "validation" && (
                <div className="mb-6 flex items-center gap-3 bg-yellow-900/30 border border-yellow-600 rounded-lg p-4">
                  <AlertCircle size={20} className="text-yellow-500" />
                  <p className="text-yellow-400">모든 필수 항목을 입력해주세요</p>
                </div>
              )}

              {submitStatus === "duplicate" && (
                <div className="mb-6 flex items-center gap-3 bg-orange-900/30 border border-orange-600 rounded-lg p-4">
                  <AlertCircle size={20} className="text-orange-500" />
                  <p className="text-orange-400">이미 예약된 시간입니다. 다른 시간을 선택해주세요</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Time Selection */}
                <TimeSlotSelector
                  selectedDate={selectedDate}
                  onTimeSelect={setSelectedTime}
                  selectedTime={selectedTime}
                  bookedTimes={bookedTimes}
                />

                {/* Selected Date/Time Display */}
                {selectedDate && selectedTime && (
                  <div className="bg-[#111111] border border-[#CCFF00] rounded-lg p-4">
                    <p className="text-[#F5F5F5] font-semibold">
                      선택한 상담 시간: <span className="text-[#CCFF00]">
                        {format(selectedDate, "yyyy년 M월 d일", { locale: ko })} {selectedTime}
                      </span>
                    </p>
                  </div>
                )}

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <Label className="text-[#F5F5F5] mb-2 block">이름 *</Label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="이름을 입력하세요"
                      className="bg-[#111111] border-[#333333] text-[#F5F5F5]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-[#F5F5F5] mb-2 block">이메일 *</Label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="이메일"
                        className="bg-[#111111] border-[#333333] text-[#F5F5F5]"
                        required
                      />
                    </div>
                    <div>
                      <Label className="text-[#F5F5F5] mb-2 block">휴대폰 *</Label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="휴대폰 번호"
                        className="bg-[#111111] border-[#333333] text-[#F5F5F5]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-[#F5F5F5] mb-2 block">회사명</Label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="회사명"
                      className="bg-[#111111] border-[#333333] text-[#F5F5F5]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-[#F5F5F5] mb-2 block">상담 시간</Label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full bg-[#111111] border border-[#333333] rounded-md px-3 py-2 text-[#F5F5F5]"
                      >
                        <option>30분</option>
                        <option>60분</option>
                      </select>
                    </div>
                    <div>
                      <Label className="text-[#F5F5F5] mb-2 block">상담 주제 *</Label>
                      <Input
                        type="text"
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        placeholder="예: 리드 생성 자동화"
                        className="bg-[#111111] border-[#333333] text-[#F5F5F5]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-[#F5F5F5] mb-2 block">추가 메시지</Label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="문의 내용을 자유롭게 작성해주세요"
                      className="bg-[#111111] border-[#333333] text-[#F5F5F5] min-h-[120px]"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone}
                  className="w-full bg-[#CCFF00] hover:bg-[#CCFF00] text-black font-bold py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  상담 예약하기
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}