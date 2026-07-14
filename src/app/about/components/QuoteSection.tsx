"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

interface Testimonial {
  name: string;
  role: string;
  quote: {
    en: string;
    vi: string;
    ko: string;
  };
}

const testimonials: Testimonial[] = [
  {
    name: "Dương Thu Hương (Hanny)",
    role: "CEO HDPHoldings",
    quote: {
      en: "HDP HOLDINGS was founded with the aspiration of becoming a strategic bridge between Vietnam and the international market, where technology, industry, trade, and high-quality human resources converge.",
      vi: "HDP HOLDINGS được thành lập với khát vọng trở thành cầu nối chiến lược giữa Việt Nam và thị trường quốc tế, nơi hội tụ công nghệ, công nghiệp, thương mại và nguồn nhân lực chất lượng cao.",
      ko: "HDP HOLDINGS는 기술, 산업, 무역, 그리고 우수한 인적자원이 수렴하는 베트남과 국제시장 사이의 전략적 다리가 되려는 염원으로 설립되었습니다.",
    },
  },
  {
    name: "Dương Thu Hương (Hanny)",
    role: "CEO HDPHoldings",
    quote: {
      en: "We believe that sustainable value is not built through short-term relationships, but through genuine partnership, credibility in every commitment, and the capability to execute with consistency and dedication.",
      vi: "Chúng tôi tin rằng giá trị bền vững không được xây dựng từ các mối quan hệ ngắn hạn, mà từ hợp tác thực sự, tính tin cậy trong mỗi cam kết, và khả năng thực hiện nhất quán và tận tâm.",
      ko: "우리는 지속 가능한 가치가 단기적 관계에서 비롯되는 것이 아니라, 진정한 파트너십, 모든 약속에서의 신뢰성, 그리고 일관성 있고 헌신적인 실행 능력에서 비롤된다고 믿습니다.",
    },
  },
  {
    name: "Dương Thu Hương (Hanny)",
    role: "CEO HDPHoldings",
    quote: {
      en: "HDP HOLDINGS aims to collaborate with domestic and international partners to build a long-term cooperation ecosystem, where businesses can grow together, expand into new markets, and create meaningful value for communities and regional economies.",
      vi: "HDP HOLDINGS hướng tới hợp tác với các đối tác trong nước và quốc tế để xây dựng hệ sinh thái hợp tác dài hạn, nơi các doanh nghiệp có thể phát triển cùng nhau, mở rộng thị trường và tạo ra giá trị ý nghĩa cho cộng đồng và nền kinh tế khu vực.",
      ko: "HDP HOLDINGS는 국내 및 국제 파트너와 협력하여 장기 협력 생태계를 구축하고자 하며, 여기서 기업들이 함께 성장하고, 새로운 시장으로 확장하며, 지역사회 및 지역 경제에 의미 있는 가치를 창출합니다.",
    },
  },
  {
    name: "Dương Thu Hương (Hanny)",
    role: "CEO HDPHoldings",
    quote: {
      en: "We deeply appreciate every opportunity for collaboration and are always ready to accompany partners who share a bold vision, a strong spirit of action, and the ambition to reach global markets.",
      vi: "Chúng tôi trân trọng mỗi cơ hội hợp tác và luôn sẵn sàng đồng hành cùng những đối tác có tầm nhìn táo bạo, tinh thần hành động mạnh mẽ, và tham vọng chinh phục thị trường toàn cầu.",
      ko: "우리는 모든 협력 기회를 소중히 여기며, 대담한 비전, 강한 실행 정신, 그리고 글로벌 시장을 향한 야망을 공유하는 파트너들과 항상 함께할 준비가 되어 있습니다.",
    },
  },
];

export default function QuoteSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    if (isTestimonialPaused) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isTestimonialPaused]);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const langKey = lang === "KR" ? "ko" : lang === "VIE" ? "vi" : "en";

  return (
    <section
      id="testimonials"
      data-nav-theme-to="dark"
      className="relative overflow-hidden bg-[#0f0f0f] py-4 md:py-6"
      onMouseEnter={() => setIsTestimonialPaused(true)}
      onMouseLeave={() => setIsTestimonialPaused(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,128,24,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_28%)]" />
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid gap-3 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-stretch">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] md:p-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-[#1a1a1a]">
              <Image
                src="/hanny.png"
                alt="Dương Thu Hương (Hanny)"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 360px"
                priority
              />
            </div>
            <div className="mt-3 flex items-end justify-between gap-4">
              <div>
                <p className="text-base font-semibold tracking-tight text-white md:text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="mt-1 text-sm tracking-[0.12em] text-white/60 uppercase">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
              <div className="text-right text-xs tracking-[0.2em] text-white/45">
                {String(currentTestimonial + 1).padStart(2, "0")}/{String(testimonials.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)] md:p-4 lg:p-5 flex flex-col justify-between">
            <div className="relative min-h-[96px] md:min-h-[120px]">
              {testimonials.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={idx === currentTestimonial ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute inset-0 flex flex-col justify-between gap-8 ${
                    idx === currentTestimonial ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                >
                  <div>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f28018]/15 text-lg text-[#f6a153]">"</span>
                    <blockquote className="mt-3 max-w-4xl font-sans font-medium text-[1.9rem] leading-[1.45] tracking-[-0.02em] text-white/90 sm:text-[1.7rem] md:text-[1.95rem]">
                      {item.quote[langKey as keyof typeof item.quote]}
                    </blockquote>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={prevTestimonial}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/20 hover:bg-white/10"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/20 hover:bg-white/10"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial ? "bg-[#f28018] w-12" : "bg-white/20 w-5"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
