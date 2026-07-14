"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Users, Globe, LayoutGrid, ChevronDown, ArrowRight, Building2, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const C = {
  background: "#0b1622",
  foreground: "#ede8dc",
  card: "#121f30",
  primary: "#c9a453",
  primaryForeground: "#0b1622",
  secondary: "#1a2b3e",
  muted: "#162030",
  mutedForeground: "#8a9fb8",
  border: "rgba(201,164,83,0.18)",
} as const;

const translations = {
  VIE: {
    eyebrow: "Triển lãm Kinh doanh Nội thất Toàn cầu",
    heroTitle1: "KOFURN",
    heroTitle2: "2026",
    heroDescription:
      "KOFURN là hội chợ nội thất và nội thất lớn nhất Hàn Quốc — kết nối nhà triển lãm, nhà thiết kế và người mua toàn cầu từ năm 1981.",
    ctaPrimary: "Đăng ký ngay",
    ctaSecondary: "Tìm hiểu thêm",
    scrollLabel: "Cuộn",
    stat1Label: "Công ty tham gia",
    stat2Label: "Quốc gia tham dự",
    stat3Label: "Gian hàng",
    stat4Label: "Khách tham quan & Người mua",
    aboutEyebrow: "Được thành lập năm 1981",
    aboutTitle1: "Nền tảng Nội thất\nHàng đầu Hàn Quốc",
    aboutBody1:
      "KOFURN — Hội chợ Nội thất & Nội thất Quốc tế Hàn Quốc — do KFFIC tổ chức, là nền tảng kết nối nhà sản xuất, nhà thiết kế và người mua trên châu Á - Thái Bình Dương và thị trường toàn cầu.",
    aboutBody2:
      "Là thành viên của CAFA với 20 quốc gia thành viên, KFFIC đóng vai trò chủ động trong việc xây dựng tiêu chuẩn ngành và thúc đẩy thương mại xuyên biên giới.",
    aboutMember: "Thành viên CAFA · 20 Quốc gia",
    organizedBy: "Đơn vị tổ chức",
    organizedName: "KFFIC",
    edition: "Phiên bản thứ",
    editionNumber: "43",
    eventDatesLabel: "Thời gian",
    eventDatesTitle: "27 – 30/08/2026",
    eventDatesSub: "Thứ Năm đến Chủ Nhật",
    eventScaleLabel: "Quy mô",
    eventScaleTitle: "Quốc tế",
    eventScaleSub: "15 quốc gia · 350 gian hàng",
    programsEyebrow: "Triển lãm đặc biệt",
    programsTitle1: "Chương trình\nSự kiện",
    exhibitorsEyebrow: "Kỳ vọng",
    exhibitorsTitle1: "Danh mục\nNhà triển lãm",
    exhibitorsBody:
      "Từ nội thất gia đình đến giải pháp công nghiệp, KOFURN phủ trọn phổ nội thất và nội thất hiện đại.",
    supportersEyebrow: "Tổ chức hỗ trợ",
    ctaEyebrow: "KOFURN 2026",
    ctaTitle1: "Tham gia sân khấu\nNội thất Toàn cầu",
    ctaBody:
      "Dù bạn là nhà triển lãm, người mua hay nhà thiết kế — KOFURN 2026 là nơi ngành nội thất châu Á hội tụ. Hãy đặt chỗ tại hội chợ thương mại có ảnh hưởng nhất Hàn Quốc.",
    ctaPrimary2: "Đăng ký làm nhà triển lãm",
    ctaSecondary2: "Tham quan với tư cách người mua",
    category1: "Nội thất Gia đình",
    category2: "Nội thất Văn phòng",
    category3: "Nội thất Công nghiệp",
    category4: "Nội thất Nghệ thuật",
    category5: "Nội thất & Trang trí Nhà",
    category6: "Nhà bếp & Đồ dùng ăn uống",
    category7: "Đồ gia dụng",
    category8: "Máy móc & Vật liệu Mộc",
    category9: "Phụ kiện Nội thất",
    program1Title: "Triển lãm Máy móc Mộc",
    program1Desc: "Triển lãm chuyên biệt về máy móc mộc, vật liệu và công nghệ sản xuất mới nhất.",
    program2Title: "Cuộc thi Thiết kế GaGu",
    program2Desc: "Giải thưởng thiết kế nội thất uy tín tôn vinh đổi mới và sự tinh xảo trong nội thất Hàn.",
    program3Title: "Khu vực Nội thất Toàn cầu",
    program3Desc: "Khu vực nhà triển lãm quốc tế chào đón các thương hiệu từ châu Á - Thái Bình Dương và hơn thế nữa.",
    program4Title: "Giải thưởng Thiết kế Nội thất Trẻ",
    program4Desc: "Tôn vinh tài năng trẻ trong thiết kế nội thất, được tài trợ bởi KFFIC và các học viện thiết kế.",
    program5Title: "Hội thảo Hàn lâm Nội thất",
    program5Desc: "Các diễn giả hàng đầu thảo luận về xu hướng thị trường, khoa học vật liệu và tương lai thiết kế.",
    program6Title: "Kết nối B2B",
    program6Desc: "Cuộc gặp gỡ kinh doanh 1:1 giữa người mua quốc tế và nhà sản xuất Hàn Quốc, kèm tham quan nhà máy.",
    supporter1: "Bộ Doanh nghiệp Siêu nhỏ và Khởi nghiệp (Hàn Quốc)",
    supporter2: "Cơ quan Mua sắm Công",
    supporter3: "KBIZ – Liên đoàn Doanh nghiệp Siêu nhỏ Hàn Quốc",
    supporter4: "KOTRA – Cơ quan Xúc tiến Thương mại & Đầu tư Hàn Quốc",
    supporter5: "KITA – Hiệp hội Thương mại Quốc tế Hàn Quốc",
    supporter6: "CAFA – Hội đồng Hiệp hội Nội thất Châu Á - Thái Bình Dương",
  },
  ENG: {
    eyebrow: "Global Furniture Business Roadshow",
    heroTitle1: "KOFURN",
    heroTitle2: "2026",
    heroDescription:
      "Korea's largest international furniture and interior fair — connecting global exhibitors, designers, and buyers since 1981.",
    ctaPrimary: "Register Now",
    ctaSecondary: "Learn More",
    scrollLabel: "Scroll",
    stat1Label: "Participating Companies",
    stat2Label: "Countries Represented",
    stat3Label: "Exhibition Booths",
    stat4Label: "Visitors & Buyers",
    aboutEyebrow: "Est. 1981",
    aboutTitle1: "Korea's Premier\nFurniture Platform",
    aboutBody1:
      "KOFURN — Korea International Furniture & Interior Fair — is organized by KFFIC and serves as the definitive platform connecting manufacturers, designers, and buyers across Asia-Pacific and the global market.",
    aboutBody2:
      "As a proud member of CAFA spanning 20 member countries, KFFIC plays an active role in establishing international furniture industry standards and driving cross-border trade.",
    aboutMember: "Member of CAFA · 20 Countries",
    organizedBy: "Organized by",
    organizedName: "KFFIC",
    edition: "Edition",
    editionNumber: "43rd",
    eventDatesLabel: "Dates",
    eventDatesTitle: "Aug 27 – 30, 2026",
    eventDatesSub: "Thursday to Sunday",
    eventScaleLabel: "Scale",
    eventScaleTitle: "International",
    eventScaleSub: "15 countries · 350 exhibitors",
    programsEyebrow: "Special Shows",
    programsTitle1: "Event\nPrograms",
    exhibitorsEyebrow: "What to Expect",
    exhibitorsTitle1: "Exhibitor\nCategories",
    exhibitorsBody:
      "From home living to industrial solutions, KOFURN covers the full spectrum of the modern furniture and interior industry.",
    supportersEyebrow: "Supporting Organizations",
    ctaEyebrow: "KOFURN 2026",
    ctaTitle1: "Join the Global\nFurniture Stage",
    ctaBody:
      "Whether you're an exhibitor, buyer, or designer — KOFURN 2026 is where Asia's furniture industry converges. Secure your place at Korea's most influential trade fair.",
    ctaPrimary2: "Register as Exhibitor",
    ctaSecondary2: "Visit as Buyer",
    category1: "Home Living Furniture",
    category2: "Office Furniture",
    category3: "Furniture for Industrial Use",
    category4: "Art Furniture",
    category5: "Interior & Home Deco",
    category6: "Kitchen & Tableware",
    category7: "Home Appliances",
    category8: "Woodworking Machinery & Materials",
    category9: "Furniture Accessories",
    program1Title: "Woodworking Machinery Fair",
    program1Desc: "A dedicated showcase for the latest woodworking machinery, materials, and production technologies.",
    program2Title: "GaGu Living Design Competition",
    program2Desc: "A prestigious furniture design award recognizing innovation and craftsmanship in Korean furniture.",
    program3Title: "Global Furniture Zone",
    program3Desc: "International exhibitor spotlight welcoming brands from across Asia-Pacific and beyond.",
    program4Title: "Young Furniture Design Award",
    program4Desc: "Celebrating emerging talent in furniture design, sponsored by the KFFIC and design academies.",
    program5Title: "Furniture Academic Conference",
    program5Desc: "Industry-leading speakers discuss global market trends, materials science, and design futures.",
    program6Title: "B2B Matchmaking",
    program6Desc: "Structured 1:1 business meetings between overseas buyers and Korean manufacturers, with factory tours.",
    supporter1: "Ministry of SMEs and Startups (Korea)",
    supporter2: "Public Procurement Service",
    supporter3: "KBIZ – Korea Federation of SMEs",
    supporter4: "KOTRA – Korea Trade-Investment Promotion Agency",
    supporter5: "KITA – Korea International Trade Association",
    supporter6: "CAFA – Council of Asia-Pacific Furniture Associations",
  },
  KR: {
    eyebrow: "글로벌 가구 비즈니스 로드쇼",
    heroTitle1: "KOFURN",
    heroTitle2: "2026",
    heroDescription:
      "한국 최대의 국제 가구·인테리어 박람회로, 1981년부터 글로벌 전시업체, 디자이너, 바이어를 연결합니다.",
    ctaPrimary: "지금 등록",
    ctaSecondary: "더 알아보기",
    scrollLabel: "스크롤",
    stat1Label: "참가 기업",
    stat2Label: "참가 국가",
    stat3Label: "부스 수",
    stat4Label: "방문객 & 바이어",
    aboutEyebrow: "1981년 설립",
    aboutTitle1: "한국 최고의\n가구 플랫폼",
    aboutBody1:
      "KOFURN은 KFFIC이 주관하는 국제 가구·인테리어 박람회로, 아시아-태평양과 글로벌 시장의 제조업체, 디자이너, 바이어를 연결하는 핵심 플랫폼입니다.",
    aboutBody2:
      "20개 회원국으로 구성된 CAFA의 자랑스러운 회원으로서, KFFIC은 국제 가구 산업 표준 정립과 국경 간 무역 촉진에 적극 기여합니다.",
    aboutMember: "CAFA 회원 · 20개국",
    organizedBy: "주최",
    organizedName: "KFFIC",
    edition: "회차",
    editionNumber: "43회",
    eventDatesLabel: "일정",
    eventDatesTitle: "2026년 8월 27 – 30일",
    eventDatesSub: "목요일 ~ 일요일",
    eventScaleLabel: "규모",
    eventScaleTitle: "국제",
    eventScaleSub: "15개국 · 350개 부스",
    programsEyebrow: "특별 전시",
    programsTitle1: "이벤트\n프로그램",
    exhibitorsEyebrow: "기대하세요",
    exhibitorsTitle1: "전시업체\n카테고리",
    exhibitorsBody:
      "가정용부터 산업용 솔루션까지, KOFURN은 현대 가구 및 인테리어 산업의 전체 스펙트럼을 다룹니다.",
    supportersEyebrow: "지원 기관",
    ctaEyebrow: "KOFURN 2026",
    ctaTitle1: "글로벌 가구\n무대에 오르세요",
    ctaBody:
      "전시업체, 바이어, 디자이너라면 — KOFURN 2026은 아시아 가구 산업이 만나는 곳입니다. 한국에서 가장 영향력 있는 무역 박람회에서 자리를 확보하세요.",
    ctaPrimary2: "전시업체로 등록",
    ctaSecondary2: "바이어로 방문",
    category1: "홈 리빙 가구",
    category2: "사무실 가구",
    category3: "산업용 가구",
    category4: "아트 가구",
    category5: "인테리어 & 홈 데코",
    category6: "주방 & 테이블웨어",
    category7: "가전제품",
    category8: "목공 기계 & 자재",
    category9: "가구 액세서리",
    program1Title: "목공 기계 박람회",
    program1Desc: "최신 목공 기계, 자재 및 생산 기술을 위한 전문 전시 공간입니다.",
    program2Title: "가구·리빙 디자인 공모전",
    program2Desc: "한국 가구의 혁신과 장인정신을 인정하는 권위 있는 가구 디자인 어워드입니다.",
    program3Title: "글로벌 가구 존",
    program3Desc: "아시아-태평양 및 그 이상의 브랜드를 환영하는 국제 전시업체 스포트라이트입니다.",
    program4Title: "영 가구 디자인 어워드",
    program4Desc: "KFFIC과 디자인 학원이 후원하는 신인 가구 디자인 인재를 기립니다.",
    program5Title: "가구 학술 콘퍼런스",
    program5Desc: "글로벌 시장 트렌드, 소재 과학 및 디자인 미래를 논의하는 업계 최고 연사들.",
    program6Title: "B2B 매치메이킹",
    program6Desc: "해외 바이어와 한국 제조업체 간의 1:1 비즈니스 미팅과 공장 투어를 제공합니다.",
    supporter1: "중소벤처기업부 (한국)",
    supporter2: "조달청",
    supporter3: "KBIZ – 대한상공회의소",
    supporter4: "KOTRA – 대한무역투자진흥공사",
    supporter5: "KITA – 한국무역협회",
    supporter6: "CAFA – 아시아·태평양 가구협회 협의회",
  },
};

const STATS = [
  { value: "350+", labelKey: "stat1Label", icon: Building2 },
  { value: "15", labelKey: "stat2Label", icon: Globe },
  { value: "1,300", labelKey: "stat3Label", icon: LayoutGrid },
  { value: "65,000", labelKey: "stat4Label", icon: Users },
] as const;

const PROGRAMS = [
  { titleKey: "program1Title", descKey: "program1Desc" },
  { titleKey: "program2Title", descKey: "program2Desc" },
  { titleKey: "program3Title", descKey: "program3Desc" },
  { titleKey: "program4Title", descKey: "program4Desc" },
  { titleKey: "program5Title", descKey: "program5Desc" },
  { titleKey: "program6Title", descKey: "program6Desc" },
] as const;

const CATEGORY_KEYS = [
  "category1",
  "category2",
  "category3",
  "category4",
  "category5",
  "category6",
  "category7",
  "category8",
  "category9",
] as const;

const SUPPORTER_KEYS = [
  "supporter1",
  "supporter2",
  "supporter3",
  "supporter4",
  "supporter5",
  "supporter6",
] as const;

export default function Kofurn() {
  const { lang } = useLanguage();
  const safeLang = lang === "VIE" || lang === "KR" ? lang : "ENG";
  const t = translations[safeLang];

  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredSupporter, setHoveredSupporter] = useState<number | null>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const lineTitle = (text: string) =>
    text.includes("\n") ? (
      <>
        {text.split("\n")[0]}
        <br />
        <span style={{ fontStyle: "italic", color: C.primary }}>{text.split("\n")[1]}</span>
      </>
    ) : (
      <span style={{ fontStyle: "italic", color: C.primary }}>{text}</span>
    );

  return (
    <div style={{ backgroundColor: C.background, color: C.foreground, minHeight: "100vh", fontFamily: "'Barlow', sans-serif" }}>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "6rem",
          overflow: "hidden",
          background: "linear-gradient(135deg, #061020 0%, #0b1622 50%, #0d1e30 100%)",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&fit=crop&auto=format"
            alt="Modern furniture showroom"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0b1622 30%, transparent 70%)" }} />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        <div style={{ position: "relative", zIndex: 10, maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "3rem", height: "1px", backgroundColor: C.primary }} />
            <span style={{ color: C.primary, fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>
              {t.eyebrow}
            </span>
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', serif", color: C.foreground, fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900, lineHeight: 0.95, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            {t.heroTitle1}
            <br />
            <span style={{ fontStyle: "italic", color: C.primary }}>{t.heroTitle2}</span>
          </h1>

          <p style={{ fontSize: "1.125rem", color: C.mutedForeground, fontWeight: 300, maxWidth: "36rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            {t.heroDescription}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Calendar size={16} style={{ color: C.primary, flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>August 27 – 30, 2026</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <MapPin size={16} style={{ color: C.primary, flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>KINTEX Halls 7–8, South Korea</span>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/global-furniture-business-roadshow/register"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: C.primary, color: C.primaryForeground, padding: "0.875rem 1.75rem", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}
            >
              {t.ctaPrimary} <ArrowRight size={14} />
            </Link>
            <Link
              href="/global-furniture-business-roadshow/register"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: `1px solid ${C.border}`, color: C.foreground, padding: "0.875rem 1.75rem", fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </div>

        <Link
          href="/global-furniture-business-roadshow/register"
          style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", color: C.mutedForeground, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", textDecoration: "none" }}
          className="animate-bounce"
        >
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>{t.scrollLabel}</span>
          <ChevronDown size={16} />
        </Link>
      </section>

      {/* STATS BAR */}
      <section id="stats" style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, backgroundColor: C.card }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }} className="lg:grid-cols-4">
            {STATS.map(({ value, labelKey, icon: Icon }) => (
              <div key={labelKey} style={{ padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Icon size={20} style={{ color: C.primary }} />
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: C.primary, lineHeight: 1 }}>
                  {value}
                </div>
                <div style={{ fontSize: "0.75rem", color: C.mutedForeground, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, lineHeight: 1.4 }}>
                  {t[labelKey]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "7rem 0", backgroundColor: C.background }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gap: "4rem", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
                <span style={{ color: C.primary, fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>{t.aboutEyebrow}</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "2rem" }}>
                {lineTitle(t.aboutTitle1)}
              </h2>
              <p style={{ fontSize: "1rem", color: C.mutedForeground, lineHeight: 1.75, marginBottom: "1.5rem" }}>
                {t.aboutBody1}
              </p>
              <p style={{ fontSize: "1rem", color: C.mutedForeground, lineHeight: 1.75, marginBottom: "2.5rem" }}>
                {t.aboutBody2}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "3rem", height: "1px", backgroundColor: C.border }} />
                <span style={{ fontSize: "0.75rem", color: C.mutedForeground, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>
                  {t.aboutMember}
                </span>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop&auto=format"
                  alt="Modern interior furniture exhibition"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <div style={{ position: "absolute", bottom: "-1.25rem", left: "-1.25rem", backgroundColor: C.primary, color: C.primaryForeground, padding: "1rem 1.25rem" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 900 }}>{t.editionNumber}</div>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>{t.edition}</div>
              </div>
              <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", border: `1px solid ${C.primary}4D`, backgroundColor: `${C.background}CC`, backdropFilter: "blur(8px)", padding: "0.75rem 1rem" }}>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.mutedForeground, marginBottom: "0.25rem", fontFamily: "'DM Mono', monospace" }}>{t.organizedBy}</div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>{t.organizedName}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT INFO BAND */}
      <section id="event" style={{ backgroundColor: C.primary }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid" }} className="md:grid-cols-3">
            {[
              { icon: Calendar, label: t.eventDatesLabel, title: t.eventDatesTitle, sub: t.eventDatesSub },
              { icon: Globe, label: t.eventScaleLabel, title: t.eventScaleTitle, sub: t.eventScaleSub },
            ].map(({ icon: Icon, label, title, sub }) => (
              <div
                key={label}
                style={{
                  padding: "2.5rem 2rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                }}
              >
                <Icon size={22} style={{ color: `${C.primaryForeground}B3`, flexShrink: 0, marginTop: "0.125rem" }} />
                <div>
                  <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, color: `${C.primaryForeground}99`, marginBottom: "0.25rem", fontFamily: "'DM Mono', monospace" }}>{label}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem", fontWeight: 700, color: C.primaryForeground }}>{title}</div>
                  <div style={{ fontSize: "0.875rem", color: `${C.primaryForeground}B3`, marginTop: "0.25rem" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" style={{ padding: "7rem 0", backgroundColor: C.card }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
              <span style={{ color: C.primary, fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>{t.programsEyebrow}</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}>
              {lineTitle(t.programsTitle1)}
            </h2>
          </div>

          <div style={{ display: "grid", gap: "1px", backgroundColor: C.border }} className="md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map(({ titleKey, descKey }, i) => (
              <div
                key={titleKey}
                onMouseEnter={() => setHoveredProgram(i)}
                onMouseLeave={() => setHoveredProgram(null)}
                style={{ backgroundColor: hoveredProgram === i ? C.secondary : C.card, padding: "2rem", transition: "background-color 0.2s", cursor: "default" }}
              >
                <div style={{ fontSize: "0.75rem", color: `${C.primary}80`, marginBottom: "1rem", fontWeight: 500, fontFamily: "'DM Mono', monospace" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem", fontWeight: 700, marginBottom: "1rem", color: hoveredProgram === i ? C.primary : C.foreground, transition: "color 0.2s", lineHeight: 1.3 }}>
                  {t[titleKey]}
                </h3>
                <p style={{ fontSize: "0.875rem", color: C.mutedForeground, lineHeight: 1.7 }}>{t[descKey]}</p>
                <div style={{ marginTop: "1.5rem", height: "1px", backgroundColor: hoveredProgram === i ? C.primary : C.border, width: hoveredProgram === i ? "3rem" : "2rem", transition: "all 0.3s" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXHIBITOR CATEGORIES */}
      <section id="exhibitors" style={{ padding: "7rem 0", backgroundColor: C.background }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gap: "3rem", alignItems: "start" }} className="lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
                <span style={{ color: C.primary, fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>{t.exhibitorsEyebrow}</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.5rem" }}>
                {lineTitle(t.exhibitorsTitle1)}
              </h2>
              <p style={{ color: C.mutedForeground, fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                {t.exhibitorsBody}
              </p>
              <div style={{ aspectRatio: "1/1", overflow: "hidden", maxWidth: "18rem" }}>
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&auto=format"
                  alt="Contemporary furniture design"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              {CATEGORY_KEYS.map((catKey, i) => (
                <div
                  key={catKey}
                  onMouseEnter={() => setHoveredCategory(i)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: `1px solid ${hoveredCategory === i ? `${C.primary}80` : C.border}`,
                    padding: "1.25rem 0",
                    cursor: "default",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                    <span style={{ fontSize: "0.75rem", color: `${C.primary}80`, fontWeight: 500, width: "1.5rem", fontFamily: "'DM Mono', monospace" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: "1rem", fontWeight: 500, color: hoveredCategory === i ? C.primary : C.foreground, letterSpacing: "0.025em", transition: "color 0.2s" }}>
                      {t[catKey]}
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    style={{ color: hoveredCategory === i ? C.primary : C.mutedForeground, transform: hoveredCategory === i ? "translateX(4px)" : "none", transition: "all 0.2s" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORTING ORGANIZATIONS */}
      <section id="partners" style={{ padding: "5rem 0", backgroundColor: C.card, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem", justifyContent: "center" }}>
            <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
            <span style={{ color: C.primary, fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>{t.supportersEyebrow}</span>
            <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
          </div>
          <div style={{ display: "grid", gap: "1px", backgroundColor: C.border }} className="grid-cols-2 md:grid-cols-3">
            {SUPPORTER_KEYS.map((key, i) => (
              <div
                key={key}
                onMouseEnter={() => setHoveredSupporter(i)}
                onMouseLeave={() => setHoveredSupporter(null)}
                style={{ backgroundColor: hoveredSupporter === i ? C.secondary : C.card, padding: "1.5rem 1.75rem", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", transition: "background-color 0.2s" }}
              >
                <span style={{ fontSize: "0.75rem", color: hoveredSupporter === i ? C.foreground : C.mutedForeground, letterSpacing: "0.05em", lineHeight: 1.5, fontWeight: 500, textTransform: "uppercase", transition: "color 0.2s" }}>
                  {t[key]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER CTA */}
      <section style={{ padding: "7rem 0", backgroundColor: C.background, position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", justifyContent: "center" }}>
            <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
            <span style={{ color: C.primary, fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>{t.ctaEyebrow}</span>
            <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem" }}>
            {lineTitle(t.ctaTitle1)}
          </h2>
          <p style={{ color: C.mutedForeground, fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "36rem", margin: "0 auto 2.5rem" }}>
            {t.ctaBody}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link
              href="/global-furniture-business-roadshow/register"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: C.primary, color: C.primaryForeground, padding: "1rem 2rem", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}
            >
              Register as Exhibitor <ArrowRight size={14} />
            </Link>
            <Link
              href="/global-furniture-business-roadshow/register"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: `1px solid ${C.border}`, color: C.foreground, padding: "1rem 2rem", fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}
            >
              Visit as Buyer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
