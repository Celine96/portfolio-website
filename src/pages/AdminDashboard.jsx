import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar, Mail, Phone, Building2, Clock, MessageSquare, Check, X, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [notificationStatus, setNotificationStatus] = useState({});
  const queryClient = useQueryClient();

  // 현재 사용자 정보 조회
  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      try {
        return await base44.auth.me();
      } catch {
        return null;
      }
    }
  });

  // 상담 예약 목록 조회
  const { data: bookings = [], isLoading: bookingsLoading } = useQuery({
    queryKey: ["adminBookings"],
    queryFn: () => base44.entities.ConsultationBooking.list("-created_date", 100),
    initialData: [],
    enabled: user?.role === "admin"
  });

  // 상태 변경 뮤테이션
  const updateStatusMutation = useMutation({
    mutationFn: async ({ bookingId, newStatus, booking }) => {
      await base44.entities.ConsultationBooking.update(bookingId, { status: newStatus });
      
      // 상태 변경 알림 발송
      const actionType = newStatus === "확정" ? "confirmed" : "cancelled";
      await base44.functions.invoke('sendBookingNotification', {
        booking: { ...booking, status: newStatus },
        recipientEmail: booking.email,
        recipientType: 'customer',
        actionType
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminBookings"] });
    }
  });

  const handleStatusChange = (bookingId, newStatus, booking) => {
    updateStatusMutation.mutate({ bookingId, newStatus, booking });
    setNotificationStatus(prev => ({
      ...prev,
      [bookingId]: newStatus
    }));
    setTimeout(() => {
      setNotificationStatus(prev => {
        const updated = { ...prev };
        delete updated[bookingId];
        return updated;
      });
    }, 3000);
  };

  if (userLoading) {
    return (
      <div className="min-h-screen bg-[#111111] pt-20 flex items-center justify-center">
        <p className="text-[#A0A0A0]">로딩 중...</p>
      </div>
    );
  }

  // 관리자 권한 확인
  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen bg-[#111111] pt-20 pb-20 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <X size={48} className="mx-auto mb-4 text-red-500" />
          <h2 className="text-2xl font-bold text-[#F5F5F5] mb-2">접근 거부</h2>
          <p className="text-[#A0A0A0]">관리자만 이 페이지에 접근할 수 있습니다.</p>
        </div>
      </div>
    );
  }

  const filteredBookings = bookings.filter(booking => {
    if (filterStatus === "all") return true;
    return booking.status === filterStatus;
  });

  const stats = {
    total: bookings.length,
    confirmed: bookings.filter(b => b.status === "확정").length,
    pending: bookings.filter(b => b.status === "예약 대기").length,
    completed: bookings.filter(b => b.status === "완료").length,
    cancelled: bookings.filter(b => b.status === "취소").length
  };

  return (
    <div className="min-h-screen bg-[#111111] pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F5F5] mb-2">
            상담 예약 <span className="text-[#CCFF00]">관리</span>
          </h1>
          <p className="text-[#A0A0A0]">신청된 모든 상담 예약을 한 곳에서 관리하세요</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
        >
          {[
            { label: "전체", value: stats.total, color: "text-[#F5F5F5]" },
            { label: "대기", value: stats.pending, color: "text-yellow-400" },
            { label: "확정", value: stats.confirmed, color: "text-green-400" },
            { label: "완료", value: stats.completed, color: "text-blue-400" },
            { label: "취소", value: stats.cancelled, color: "text-red-400" }
          ].map((stat) => (
            <Card key={stat.label} className="bg-[#1A1A1A] border-[#333333] p-4 text-center">
              <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
              <p className="text-xs sm:text-sm text-[#A0A0A0]">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {[
            { value: "all", label: "모두" },
            { value: "예약 대기", label: "대기 중" },
            { value: "확정", label: "확정" },
            { value: "완료", label: "완료" },
            { value: "취소", label: "취소" }
          ].map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setFilterStatus(filter.value)}
              variant={filterStatus === filter.value ? "default" : "outline"}
              className={filterStatus === filter.value ? "bg-[#CCFF00] text-black" : ""}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Bookings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-[#1A1A1A] border-[#333333] overflow-hidden">
            {bookingsLoading ? (
              <div className="p-8 text-center text-[#A0A0A0]">로딩 중...</div>
            ) : filteredBookings.length === 0 ? (
              <div className="p-8 text-center text-[#A0A0A0]">상담 예약이 없습니다</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#333333] bg-[#111111]">
                      <th className="px-3 sm:px-6 py-4 text-left text-[#A0A0A0] font-semibold whitespace-nowrap">이름</th>
                      <th className="px-3 sm:px-6 py-4 text-left text-[#A0A0A0] font-semibold hidden sm:table-cell whitespace-nowrap">이메일</th>
                      <th className="px-3 sm:px-6 py-4 text-left text-[#A0A0A0] font-semibold hidden lg:table-cell whitespace-nowrap">휴대폰</th>
                      <th className="px-3 sm:px-6 py-4 text-left text-[#A0A0A0] font-semibold whitespace-nowrap">예약 시간</th>
                      <th className="px-3 sm:px-6 py-4 text-left text-[#A0A0A0] font-semibold whitespace-nowrap">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBookings.map((booking) => (
                      <tr
                        key={booking.id}
                        className="border-b border-[#333333] hover:bg-[#0F0F0F] transition-colors"
                      >
                        <td className="px-3 sm:px-6 py-5 whitespace-nowrap">
                          <p className="text-[#F5F5F5] font-medium truncate">{booking.name}</p>
                          <p className="text-xs text-[#A0A0A0] sm:hidden truncate">{booking.email}</p>
                        </td>
                        <td className="px-3 sm:px-6 py-5 text-[#A0A0A0] hidden sm:table-cell whitespace-nowrap">
                          <a href={`mailto:${booking.email}`} className="hover:text-[#CCFF00] transition-colors truncate block">
                            {booking.email}
                          </a>
                        </td>
                        <td className="px-3 sm:px-6 py-5 text-[#A0A0A0] hidden lg:table-cell whitespace-nowrap">
                          <a href={`tel:${booking.phone}`} className="hover:text-[#CCFF00] transition-colors">
                            {booking.phone}
                          </a>
                        </td>
                        <td className="px-3 sm:px-6 py-5 text-[#A0A0A0] whitespace-nowrap text-xs sm:text-sm">
                          {format(new Date(booking.bookingDate), "MMM d HH:mm", { locale: ko })}
                        </td>
                        <td className="px-3 sm:px-6 py-5 whitespace-nowrap">
                          <span
                            className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                              booking.status === "확정"
                                ? "bg-green-500/20 text-green-400"
                                : booking.status === "예약 대기"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : booking.status === "완료"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>

          {/* Detail View */}
          {filteredBookings.length > 0 && (
            <div className="mt-12 space-y-6">
              <h3 className="text-2xl font-bold text-[#F5F5F5]">상세 정보</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredBookings.slice(0, 4).map((booking) => (
                  <Card key={booking.id} className="bg-[#1A1A1A] border-[#333333] p-7">
                    <div className="space-y-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-lg font-bold text-[#F5F5F5]">{booking.name}</p>
                          {booking.company && (
                            <p className="text-sm text-[#A0A0A0] flex items-center gap-1 mt-1">
                              <Building2 size={14} /> {booking.company}
                            </p>
                          )}
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          booking.status === "확정"
                            ? "bg-green-500/20 text-green-400"
                            : booking.status === "예약 대기"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : booking.status === "완료"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-red-500/20 text-red-400"
                        }`}>
                          {booking.status}
                        </span>
                      </div>

                      <div className="space-y-3 pt-5 border-t border-[#333333]">
                        <div>
                          <p className="text-xs text-[#A0A0A0] mb-1 flex items-center gap-2">
                            <Mail size={16} /> 이메일
                          </p>
                          <p className="text-sm text-[#F5F5F5] ml-6">
                            <a href={`mailto:${booking.email}`} className="hover:text-[#CCFF00]">{booking.email}</a>
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#A0A0A0] mb-1 flex items-center gap-2">
                            <Phone size={16} /> 휴대폰
                          </p>
                          <p className="text-sm text-[#F5F5F5] ml-6">
                            <a href={`tel:${booking.phone}`} className="hover:text-[#CCFF00]">{booking.phone}</a>
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#A0A0A0] mb-1 flex items-center gap-2">
                            <Calendar size={16} /> 예약 시간
                          </p>
                          <p className="text-sm text-[#F5F5F5] ml-6">{format(new Date(booking.bookingDate), "PPP HH:mm", { locale: ko })}</p>
                        </div>
                        <div>
                          <p className="text-xs text-[#A0A0A0] mb-1 flex items-center gap-2">
                            <Clock size={16} /> 상담 시간
                          </p>
                          <p className="text-sm text-[#F5F5F5] ml-6">{booking.duration}</p>
                        </div>
                      </div>

                      {booking.topic && (
                        <div className="pt-5 border-t border-[#333333]">
                          <p className="text-xs text-[#A0A0A0] mb-2">상담 주제</p>
                          <p className="text-sm text-[#F5F5F5]">{booking.topic}</p>
                        </div>
                      )}

                      {booking.message && (
                        <div className="pt-5 border-t border-[#333333]">
                          <p className="text-xs text-[#A0A0A0] mb-2 flex items-center gap-2">
                            <MessageSquare size={16} /> 추가 메시지
                          </p>
                          <p className="text-sm text-[#A0A0A0]">{booking.message}</p>
                        </div>
                      )}

                      {booking.status === "예약 대기" && (
                        <div className="pt-5 border-t border-[#333333] flex gap-2">
                          <Button
                            onClick={() => handleStatusChange(booking.id, "확정", booking)}
                            disabled={updateStatusMutation.isPending}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs py-2 flex items-center justify-center gap-1"
                          >
                            <Check size={14} /> 확정
                          </Button>
                          <Button
                            onClick={() => handleStatusChange(booking.id, "취소", booking)}
                            disabled={updateStatusMutation.isPending}
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs py-2 flex items-center justify-center gap-1"
                          >
                            <X size={14} /> 취소
                          </Button>
                        </div>
                      )}

                      {notificationStatus[booking.id] && (
                        <div className="mt-4 p-2 bg-blue-500/20 border border-blue-400 rounded text-xs text-blue-400 flex items-center gap-2">
                          <Send size={14} />
                          알림 메일이 발송되었습니다
                        </div>
                      )}
                      </div>
                      </Card>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}