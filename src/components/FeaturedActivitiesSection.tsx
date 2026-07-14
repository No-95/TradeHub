"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

type Activity = {
  image: string;
  href: string;
  title: { VIE: string; ENG: string; KR: string };
  summary: { VIE: string; ENG: string; KR: string };
};

const ACTIVITIES: Activity[] = [
  {
    image: "/featured/seafood-expo.png",
    href: "/seafood-expo",
    title: {
      VIE: "Chương trình Xúc tiến Xuất khẩu Hải sản",
      ENG: "Seafood Export Promotion Program",
      KR: "부산 수출 홍보 프로그램",
    },
    summary: {
      VIE: "Chương trình xúc tiến xuất khẩu trọng điểm, tập trung vào cơ hội thương mại hải sản và mở rộng thị trường quốc tế.",
      ENG: "A flagship export promotion program focused on seafood trade opportunities and international market expansion.",
      KR: "해산물 무역 기회와 국제 시장 확장에 초점을 맞춘 플래그십 수출 홍보 프로그램.",
    },
  },
  {
    image: "/featured/kofurn.png",
    href: "/global-furniture-business-roadshow",
    title: {
      VIE: "Xúc tiến Thương mại & Đầu tư Ngành Nội thất & Gỗ",
      ENG: "Furniture & Wood Industry Trade and Investment Promotion",
      KR: "가구 및 목재 산업 무역 투자 홍보",
    },
    summary: {
      VIE: "Chương trình kết nối ngành nội thất và gỗ Việt Nam với nhà nhập khẩu và đối tác đầu tư Hàn Quốc.",
      ENG: "A promotion program connecting Vietnam's furniture and wood industries with Korean buyers and investment partners.",
      KR: "베트남 가구 및 목재 산업을 한국 구매자 및 투자 파트너와 연결하는 홍보 프로그램.",
    },
  },
  {
    image: "/featured/aerospace.png",
    href: "/coming-soon",
    title: {
      VIE: "Chương trình Tích hợp Chuỗi Cung ứng Hàng không",
      ENG: "Aerospace Supply Chain Integration Program",
      KR: "항공우주 공급망 통합 프로그램",
    },
    summary: {
      VIE: "Sáng kiến chiến lược kết nối nhà sản xuất Việt Nam với cơ hội chuỗi cung ứng hàng không.",
      ENG: "A strategic initiative to connect Vietnamese manufacturers with aerospace supply chain opportunities.",
      KR: "베트남 제조업체와 항공우주 공급망 기회를 연결하는 전략적 이니셔티브.",
    },
  },
  {
    image: "/featured/tech.png",
    href: "/coming-soon",
    title: {
      VIE: "Tích hợp Chuỗi Cung ứng Máy móc & Cơ khí",
      ENG: "Machinery & Mechanical Supply Chain Integration",
      KR: "기계 및 기계 공급망 통합",
    },
    summary: {
      VIE: "Nền tảng cho tương tác ngành, hợp tác công nghệ và tích hợp chuỗi cung ứng trong lĩnh vực máy móc.",
      ENG: "A platform for industry engagement, technology collaboration, and supply chain integration across machinery sectors.",
      KR: "산업 참여, 기술 협력 및 기계 분야 공급망 통합을 위한 플랫폼.",
    },
  },
  {
    image: "/featured/seafoodexpo2.png",
    href: "/coming-soon",
    title: {
      VIE: "Chương trình Xúc tiến Xuất khẩu Hải sản Busan",
      ENG: "Busan Seafood Export Promotion Program",
      KR: "부산 해산물 수출 홍보 프로그램",
    },
    summary: {
      VIE: "Chương trình xúc tiến kinh doanh tập trung vào cơ hội xuất khẩu hải sản và kết nối B2B tại Hàn Quốc.",
      ENG: "A business promotion program centered on seafood export opportunities and B2B networking in Korea.",
      KR: "한국의 해산물 수출 기회와 B2B 네트워킹을 중심으로 한 비즈니스 홍보 프로그램.",
    },
  },
  {
    image: "/featured/tech-innovation.png",
    href: "/coming-soon",
    title: {
      VIE: "Chương trình Đổi mới Công nghệ",
      ENG: "Technology Innovation Program",
      KR: "기술 혁신 프로그램",
    },
    summary: {
      VIE: "Các sáng kiến và chương trình sắp tới sẽ được thông báo tại đây.",
      ENG: "Upcoming initiatives and future programs will be announced here.",
      KR: "향후 이니셔티브 및 프로그램은 이곳에서 공지됩니다.",
    },
  },
];

const LABELS = {
  heading: {
    VIE: "Hoạt Động Nổi Bật",
    ENG: "Featured Activities",
    KR: "주요 활동",
  },
  description: {
    VIE: "Khám phá các chương trình xúc tiến thương mại, sáng kiến kết nối người mua và roadshow chuyên ngành của HDP HOLDINGS.",
    ENG: "Explore HDP HOLDINGS' trade promotion programs, buyer matching initiatives, and sector-specific roadshows.",
    KR: "HDP HOLDINGS의 무역 홍보 프로그램, 바이어 매칭 이니셔티브 및 업종별 로드쇼를 확인하세요.",
  },
  learnMore: {
    VIE: "Tìm hiểu thêm",
    ENG: "Learn More",
    KR: "자세히 보기",
  },
  viewAll: {
    VIE: "Xem tất cả",
    ENG: "View All",
    KR: "모두 보기",
  },
} as const;

export default function FeaturedActivitiesSection() {
  const { lang } = useLanguage();
  const safeLang = lang === "KR" ? "KR" : lang === "VIE" ? "VIE" : "ENG";

  return (
    <section className="bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="mt-2 text-2xl font-semibold text-neutral-900">{LABELS.heading[safeLang]}</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-500">
              {LABELS.description[safeLang]}
            </p>
          </div>
          <Link href="/news" className="hidden items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark sm:flex">
            {LABELS.viewAll[safeLang]} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((activity) => (
            <Link
              key={activity.href}
              href={activity.href}
              className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-44 overflow-hidden bg-gray-50">
                <img
                  src={activity.image}
                  alt={activity.title[safeLang]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900">{activity.title[safeLang]}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-neutral-500">{activity.summary[safeLang]}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand">
                  {LABELS.learnMore[safeLang]} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
