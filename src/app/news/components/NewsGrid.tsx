"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  alt: string;
};

const posts: Post[] = [
  {
    slug: "vietnam-korea-aerospace-supply-chain",
    title: "HDP HOLDINGS thuc day ket noi chuoi cung ung hang khong vu tru Viet Nam - Han Quoc",
    excerpt:
      "Ket noi doanh nghiep Viet Nam voi he sinh thai cong nghiep Han Quoc trong linh vuc chuoi cung ung hang khong vu tru cong nghe cao.",
    date: "08 May 2026",
    category: "Trade Promotion",
    image: "/news/1.png",
    alt: "Doan doanh nghiep Viet Nam - Han Quoc trong buoi lam viec ve chuoi cung ung hang khong vu tru",
  },
  {
    slug: "hdp-holdings-dien-dan-chinh-sach-khoa-hoc-cong-nghe",
    title:
      "Lanh dao HDP HOLDINGS tham gia dien dan trao doi chinh sach khoa hoc cong nghe cung Pho Thu tuong Nguyen Chi Dung",
    excerpt:
      "HDP HOLDINGS tham gia dien dan tai NIC cung Pho Thu tuong Nguyen Chi Dung va cong dong tri thuc Viet toan cau, thao luan dinh huong KH CN va DMSX.",
    date: "04 Oct 2025",
    category: "Policy Forum",
    image: "/news/21.png",
    alt: "Lanh dao HDP HOLDINGS tham gia dien dan chinh sach khoa hoc cong nghe tai NIC",
  },
  {
    slug: "ceo-hdp-holdings-gap-go-thu-tuong-pham-minh-chinh",
    title:
      "CEO HDP HOLDINGS tham du chuong trinh gap go Thu tuong Pham Minh Chinh cung cong dong doanh nghiep va tri thuc Viet Nam tai Han Quoc",
    excerpt:
      "CEO HDP HOLDINGS tham du voi tu cach dai dien doanh nghiep hoat dong trong linh vuc ket noi hop tac song phuong Viet - Han.",
    date: "Jul 2024",
    category: "Diplomatic Engagement",
    image: "/news/3.png",
    alt: "CEO HDP HOLDINGS tham du chuong trinh gap go Thu tuong Pham Minh Chinh tai Han Quoc",
  },
  {
    slug: "hdp-holdings-korea-vietnam-aerospace-investment-promotion",
    title: "HDP HOLDINGS xuc tien hop tac dau tu hang khong vu tru giua Han Quoc va Viet Nam",
    excerpt:
      "HDP HOLDINGS to chuc chuong trinh ket noi dau tu va khao sat moi truong san xuat tai Viet Nam cho doan lanh dao cap cao nganh hang khong vu tru Han Quoc.",
    date: "13 May 2026",
    category: "Aerospace Investment",
    image: "/news/41.png",
    alt: "Doan lanh dao nganh hang khong vu tru Han Quoc khao sat hop tac tai Viet Nam",
  },
];

export default function NewsGrid() {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Latest updates
        </h2>
        <p className="mt-4 text-lg leading-8 text-neutral-600">
          News from HDP Holdings covering diplomacy, policy, aerospace trade, and technology cooperation.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/news/${post.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-brand/10 bg-brand-muted">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs tracking-wide text-neutral-500">
                <span>{post.date}</span>
                <span className="h-px w-4 bg-neutral-200" />
                <span className="uppercase tracking-widest">{post.category}</span>
              </div>
              <h3 className="mt-3 text-base font-semibold leading-snug text-neutral-900 transition-colors duration-300 group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 transition-colors duration-300 group-hover:text-brand">
                Read more
              </span>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
