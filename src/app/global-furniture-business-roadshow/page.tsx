"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const translations = {
  ENG: {
    badge: "KOFURN 2026 Seoul",
    heroTitle: "Connect Korean Furniture Orders",
    heroSubtitle: "Join Vietnam's exclusive supplier selection program for KOFURN 2026 in Seoul.",
    heroDescription:
      "This project connects Vietnamese furniture manufacturers with verified Korean buyers through exhibition and B2B matchmaking.",
    cta: "Register for Program Information",
    eventDate: "August 27–30, 2026",
    eventLocation: "KINTEX, Korea International Exhibition Center",
    benefitsTitle: "Program Benefits",
    benefitsHeading: "Exclusive advantages for selected enterprises",
    processLabel: "Participation Process",
    processHeading: "How the program works",
    faqLabel: "Frequently Asked Questions",
    faqHeading: "Answers for exporters and manufacturers",
    ctaHeading: "Ready to connect with Korean buyers?",
    ctaSubheading:
      "Submit your registration and secure your place in the KOFURN supplier selection program.",
    ctaButton: "Start Registration",
    benefitItems: [
      { title: "Direct Buyer Access", description: "Meet Korean buyers actively sourcing OEM/ODM and contract manufacturing partners." },
      { title: "1-on-1 Matching", description: "Receive curated partner introductions based on your capabilities and product profile." },
      { title: "Global Exhibition Exposure", description: "Present your offering at KOFURN 2026 with visibility to international decision-makers." },
    ],
    processItems: [
      { label: "1", title: "Submit Company Info", description: "Register your business profile and product capabilities." },
      { label: "2", title: "Receive Partner Requirements", description: "Get sourcing briefs from Korean buyers and partners." },
      { label: "3", title: "Evaluation & Matching", description: "We assess fit and connect you with the right partners." },
      { label: "4", title: "Confirm Participation", description: "Finalize your participation and prepare for Seoul meetings." },
    ],
    faqItems: [
      { question: "Can companies without export experience join?", answer: "Yes, if your manufacturing capabilities and growth orientation are strong." },
      { question: "Will participation guarantee orders?", answer: "The program enables real partner connections, while actual agreements depend on mutual fit." },
      { question: "What support is provided?", answer: "Support includes partner introductions, translation, and negotiation guidance." },
    ],
  },
  VIE: {
    badge: "KOFURN 2026 Seoul",
    heroTitle: "Kết Nối Đơn Hàng Nội Thất Từ Hàn Quốc",
    heroSubtitle: "Tham gia chương trình tuyển chọn doanh nghiệp Việt Nam tại KOFURN 2026.",
    heroDescription:
      "Chương trình kết nối nhà sản xuất nội thất Việt Nam với các nhà mua Hàn Quốc thông qua triển lãm và kết nối kinh doanh B2B.",
    cta: "Đăng ký nhận thông tin chương trình",
    eventDate: "27 – 30 tháng 08 năm 2026",
    eventLocation: "KINTEX, Trung tâm Triển lãm Quốc tế Hàn Quốc",
    benefitsTitle: "Quyền Lợi Chương Trình",
    benefitsHeading: "Quyền lợi độc quyền dành cho doanh nghiệp được chọn",
    processLabel: "Quy Trình Tham Gia",
    processHeading: "Cách thức hoạt động của chương trình",
    faqLabel: "Câu Hỏi Thường Gặp",
    faqHeading: "Câu trả lời dành cho nhà xuất khẩu và nhà sản xuất",
    ctaHeading: "Sẵn sàng kết nối với các nhà mua Hàn Quốc?",
    ctaSubheading: "Gửi đăng ký và giành vị trí trong chương trình lựa chọn nhà cung cấp KOFURN.",
    ctaButton: "Bắt đầu đăng ký",
    benefitItems: [
      { title: "Tiếp cận trực tiếp nhà mua", description: "Gặp các nhà mua Hàn Quốc đang tìm kiếm đối tác OEM/ODM và gia công." },
      { title: "Matching 1-1", description: "Nhận giới thiệu đối tác được tuyển chọn phù hợp với năng lực và sản phẩm của bạn." },
      { title: "Tiếp cận toàn cầu", description: "Trưng bày sản phẩm tại KOFURN 2026 trước các nhà quyết định quốc tế." },
    ],
    processItems: [
      { label: "1", title: "Gửi thông tin công ty", description: "Đăng ký hồ sơ doanh nghiệp và năng lực sản xuất." },
      { label: "2", title: "Nhận yêu cầu từ đối tác", description: "Nhận thông tin yêu cầu sourcing từ các nhà mua Hàn Quốc." },
      { label: "3", title: "Đánh giá và Matching", description: "Chúng tôi đánh giá sự phù hợp và kết nối bạn với đối tác phù hợp." },
      { label: "4", title: "Xác nhận tham gia", description: "Hoàn tất tham gia và chuẩn bị cho các cuộc họp tại Seoul." },
    ],
    faqItems: [
      { question: "Doanh nghiệp chưa có kinh nghiệm xuất khẩu có tham gia được không?", answer: "Có thể, nếu năng lực sản xuất và định hướng tăng trưởng của bạn mạnh mẽ." },
      { question: "Tham gia có đảm bảo đơn hàng không?", answer: "Chương trình tạo kết nối đối tác thực tế, còn thỏa thuận cụ thể phụ thuộc vào sự phù hợp." },
      { question: "Nhận được hỗ trợ gì?", answer: "Hỗ trợ bao gồm giới thiệu đối tác, phiên dịch và hướng dẫn đàm phán." },
    ],
  },
  KR: {
    badge: "KOFURN 2026 Seoul",
    heroTitle: "한국 가구 주문 연결",
    heroSubtitle: "KOFURN 2026에서 베트남 기업 선별 프로그램에 참여하세요.",
    heroDescription: "KOFURN 전시회와 B2B 매칭을 통해 베트남 가구 제조 기업과 한국 바이어를 연결합니다.",
    cta: "프로그램 정보 등록",
    eventDate: "2026년 8월 27-30일",
    eventLocation: "KINTEX, 한국국제전시센터",
    benefitsTitle: "프로그램 혜택",
    benefitsHeading: "선정 기업을 위한 독점 혜택",
    processLabel: "참여 프로세스",
    processHeading: "프로그램 작동 방식",
    faqLabel: "자주 묻는 질문",
    faqHeading: "수출업체 및 제조업체를 위한 답변",
    ctaHeading: "한국 바이어와 연결할 준비가 되셨나요?",
    ctaSubheading: "등록을 제출하고 KOFURN 공급업체 선별 프로그램에서 자리를 확보하세요.",
    ctaButton: "등록 시작",
    benefitItems: [
      { title: "바이어 직접 접근", description: "OEM/ODM 및 위탁 제조 파트너를 적극적으로 찾는 한국 바이어를 만나세요." },
      { title: "1:1 매칭", description: "역량과 제품 프로필에 맞는 맞춤형 파트너 소개를 받으세요." },
      { title: "글로벌 전시 노출", description: "국제 의사결정자에게 KOFURN 2026에서 제품을 선보이세요." },
    ],
    processItems: [
      { label: "1", title: "회사 정보 제출", description: "비즈니스 프로필과 생산 역량을 등록하세요." },
      { label: "2", title: "파트너 요구사항 수신", description: "한국 바이어 및 파트너의 소싱 요약 정보를 받으세요." },
      { label: "3", title: "평가 및 매칭", description: "적합성을 평가하고 적절한 파트너와 연결해 드립니다." },
      { label: "4", title: "참여 확인", description: "참여를 확정하고 서울 미팅을 준비하세요." },
    ],
    faqItems: [
      { question: "수출 경험이 없는 기업도 참여할 수 있나요?", answer: "제조 역량과 성장 의지가 강하면 가능합니다." },
      { question: "참여가 주문을 보장하나요?", answer: "실제 파트너 연결을 지원하지만 구체적인 계약은 상호 적합성에 따라 달라집니다." },
      { question: "어떤 지원이 제공되나요?", answer: "파트너 소개, 번역, 협상 가이드 지원이 포함됩니다." },
    ],
  },
} as const;

type Lang = "ENG" | "VIE" | "KR";

export default function Page() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-4 py-2 text-sm font-semibold text-amber-300">
              <Building2 className="h-4 w-4" /> {t.badge}
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-200">{t.heroSubtitle}</p>
            <p className="mt-6 max-w-2xl text-base text-slate-300">{t.heroDescription}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/global-furniture-business-roadshow/register" className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition">
                {t.cta}
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <div className="rounded-full bg-white/10 px-5 py-3 text-sm text-slate-200">
                {t.eventDate} · {t.eventLocation}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-amber-600">{t.benefitsTitle}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.benefitsHeading}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.benefitItems.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 px-6 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-amber-300">{t.processLabel}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.processHeading}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {t.processItems.map((step) => (
              <div key={step.label} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-slate-950 font-semibold">
                  {step.label}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-amber-600">{t.faqLabel}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.faqHeading}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.faqItems.map((item) => (
              <div key={item.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
                <p className="mt-3 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-600 to-orange-500 py-16 px-6 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.ctaHeading}</h2>
          <p className="mt-4 text-lg text-amber-100">{t.ctaSubheading}</p>
          <div className="mt-10 flex justify-center">
            <Link href="/global-furniture-business-roadshow/register" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-black/10 hover:bg-slate-100 transition">
              {t.ctaButton}
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}