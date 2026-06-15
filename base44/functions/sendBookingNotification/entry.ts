import { createClientFromRequest } from 'npm:@base44/sdk@0.8.20';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { booking, recipientEmail, recipientType, actionType } = await req.json();

    if (!booking || !recipientEmail || !recipientType || !actionType) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const bookingDate = new Date(booking.bookingDate);
    const formattedDate = bookingDate.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
    const formattedTime = bookingDate.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
    });

    let subject, body;

    if (recipientType === 'customer') {
      if (actionType === 'created') {
        subject = '무료 상담 예약이 완료되었습니다';
        body = `
안녕하세요 ${booking.name}님,

무료 상담 예약이 완료되었습니다.

예약 상세:
━━━━━━━━━━━━━━━━━━━━━━━━━━
일시: ${formattedDate} ${formattedTime}
상담 시간: ${booking.duration}
상담 주제: ${booking.topic || '미정'}
회사명: ${booking.company || '-'}
━━━━━━━━━━━━━━━━━━━━━━━━━━

이메일: ${booking.email}
전화: ${booking.phone}

상담 전에 추가 정보나 특별한 요청사항이 있으시면 언제든 연락주세요.

감사합니다.
이수연 AI 자동화 전문가
        `;
      } else if (actionType === 'confirmed') {
        subject = '상담 예약이 확정되었습니다';
        body = `
안녕하세요 ${booking.name}님,

귀하의 상담 예약이 확정되었습니다.

예약 상세:
━━━━━━━━━━━━━━━━━━━━━━━━━━
일시: ${formattedDate} ${formattedTime}
상담 시간: ${booking.duration}
상담 주제: ${booking.topic || '미정'}
회사명: ${booking.company || '-'}
━━━━━━━━━━━━━━━━━━━━━━━━━━

상담을 기대하고 있습니다.

이수연 AI 자동화 전문가
        `;
      } else if (actionType === 'cancelled') {
        subject = '상담 예약이 취소되었습니다';
        body = `
안녕하세요 ${booking.name}님,

죄송하지만 귀하의 상담 예약이 취소되었습니다.

예약 상세:
━━━━━━━━━━━━━━━━━━━━━━━━━━
일시: ${formattedDate} ${formattedTime}
상담 시간: ${booking.duration}
━━━━━━━━━━━━━━━━━━━━━━━━━━

다시 예약을 원하시면 언제든 연락주세요.

이수연 AI 자동화 전문가
        `;
      }
    } else if (recipientType === 'admin') {
      if (actionType === 'created') {
        subject = `[관리자] 새로운 상담 예약 - ${booking.name}`;
        body = `
새로운 상담 예약이 등록되었습니다.

고객 정보:
━━━━━━━━━━━━━━━━━━━━━━━━━━
이름: ${booking.name}
이메일: ${booking.email}
전화: ${booking.phone}
회사: ${booking.company || '-'}
━━━━━━━━━━━━━━━━━━━━━━━━━━

예약 상세:
━━━━━━━━━━━━━━━━━━━━━━━━━━
일시: ${formattedDate} ${formattedTime}
상담 시간: ${booking.duration}
상담 주제: ${booking.topic || '미정'}
메시지: ${booking.message || '-'}
상태: ${booking.status}
━━━━━━━━━━━━━━━━━━━━━━━━━━

관리자 대시보드에서 예약을 확인하고 관리하세요.
        `;
      } else if (actionType === 'confirmed') {
        subject = `[관리자] 상담 예약 확정 - ${booking.name}`;
        body = `
상담 예약이 확정되었습니다.

고객: ${booking.name} (${booking.email})
일시: ${formattedDate} ${formattedTime}
상담 시간: ${booking.duration}
상태: 확정
        `;
      } else if (actionType === 'cancelled') {
        subject = `[관리자] 상담 예약 취소 - ${booking.name}`;
        body = `
상담 예약이 취소되었습니다.

고객: ${booking.name} (${booking.email})
일시: ${formattedDate} ${formattedTime}
상담 시간: ${booking.duration}
상태: 취소
        `;
      }
    }

    await base44.integrations.Core.SendEmail({
      to: recipientEmail,
      subject,
      body,
      from_name: '이수연',
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});