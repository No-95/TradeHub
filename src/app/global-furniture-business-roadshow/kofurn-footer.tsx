'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerTranslations = {
  ENG: {
    about: 'About KOFURN 2026',
    aboutDesc: 'KOFURN 2026 connects Vietnamese furniture manufacturers with Korean buyers seeking sustainable sourcing partnerships and OEM/ODM opportunities.',
    quickLinks: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Program Info', href: '/global-furniture-business-roadshow' },
      { label: 'Register', href: '/global-furniture-business-roadshow/register' },
      { label: 'Contact Us', href: '/contact' },
    ],
    contact: 'Contact Information',
    contactEmail: 'business@hdpholdings.com',
    contactPhone: '+84 (0) 28 3833 5566',
    contactLocation: 'Ho Chi Minh City, Vietnam',
    followUs: 'Follow Us',
    copyright: '© 2026 HDP Holdings. All rights reserved.',
    poweredBy: 'Powered by HDP Holdings in partnership with Korea Furniture Industry Association',
  },
  VIE: {
    about: 'Về KOFURN 2026',
    aboutDesc: 'KOFURN 2026 kết nối các nhà sản xuất nội thất Việt Nam với các nhà mua hàng Hàn Quốc tìm kiếm các cơ hội hợp tác sourcing bền vững và OEM/ODM.',
    quickLinks: 'Liên Kết Nhanh',
    links: [
      { label: 'Trang Chủ', href: '/' },
      { label: 'Thông Tin Chương Trình', href: '/global-furniture-business-roadshow' },
      { label: 'Đăng Ký', href: '/global-furniture-business-roadshow/register' },
      { label: 'Liên Hệ', href: '/contact' },
    ],
    contact: 'Thông Tin Liên Hệ',
    contactEmail: 'business@hdpholdings.com',
    contactPhone: '+84 (0) 28 3833 5566',
    contactLocation: 'Thành phố Hồ Chí Minh, Việt Nam',
    followUs: 'Theo Dõi Chúng Tôi',
    copyright: '© 2026 HDP Holdings. All rights reserved.',
    poweredBy: 'Powered by HDP Holdings in partnership with Korea Furniture Industry Association',
  },
  KR: {
    about: 'KOFURN 2026 소개',
    aboutDesc: 'KOFURN 2026은 베트남 가구 제조업체와 지속 가능한 소싱 파트너십 및 OEM/ODM 기회를 찾는 한국 바이어를 연결합니다.',
    quickLinks: '빠른 링크',
    links: [
      { label: '홈', href: '/' },
      { label: '프로그램 정보', href: '/global-furniture-business-roadshow' },
      { label: '등록', href: '/global-furniture-business-roadshow/register' },
      { label: '연락처', href: '/contact' },
    ],
    contact: '연락처 정보',
    contactEmail: 'business@hdpholdings.com',
    contactPhone: '+84 (0) 28 3833 5566',
    contactLocation: '호찌민시, 베트남',
    followUs: '팔로우하기',
    copyright: '© 2026 HDP Holdings. All rights reserved.',
    poweredBy: 'Powered by HDP Holdings in partnership with Korea Furniture Industry Association',
  },
}

export default function KofurnFooter() {
  const { lang } = useLanguage()
  const t = footerTranslations[lang]

  return (
    <footer className="bg-gradient-to-b from-amber-950 to-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-200">{t.about}</h3>
            <p className="text-sm text-amber-100 leading-relaxed">{t.aboutDesc}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-200">{t.quickLinks}</h3>
            <nav className="space-y-2">
              {t.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="block text-sm text-amber-100 hover:text-amber-200 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-200">{t.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-300 flex-shrink-0 mt-1" />
                <a href={`mailto:${t.contactEmail}`} className="text-sm text-amber-100 hover:text-amber-200 transition-colors">
                  {t.contactEmail}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-300 flex-shrink-0 mt-1" />
                <a href={`tel:${t.contactPhone}`} className="text-sm text-amber-100 hover:text-amber-200 transition-colors">
                  {t.contactPhone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0 mt-1" />
                <span className="text-sm text-amber-100">{t.contactLocation}</span>
              </div>
            </div>
          </div>

          {/* Social & Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-200">{t.followUs}</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/hdpholdings" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-amber-100 hover:text-white transition-colors">
                <span className="text-sm font-semibold">Facebook</span>
              </a>
              <a href="https://www.linkedin.com/in/hdp-holdings-co-ltd-77a630190/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-amber-100 hover:text-white transition-colors">
                <span className="text-sm font-semibold">LinkedIn</span>
              </a>
              <a href="https://www.youtube.com/@HDPHOLDINGS" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-amber-100 hover:text-white transition-colors">
                <span className="text-sm font-semibold">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-amber-700/50 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-amber-200">{t.copyright}</p>
          <p className="text-xs text-amber-200 text-center md:text-right">{t.poweredBy}</p>
        </div>
      </div>
    </footer>
  )
}
