"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/videos";

export default function CategoryPills() {
  const pathname = usePathname();

  function isActive(slug: string) {
    if (slug === "all") return pathname === "/";
    return pathname === `/category/${slug}`;
  }

  return (
    <div className="scrollbar-none flex gap-2 overflow-x-auto pb-2">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={cat.slug === "all" ? "/" : `/category/${cat.slug}`}
          className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
            isActive(cat.slug)
              ? "bg-white text-black shadow-lg"
              : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
          }`}
        >
          <span>{cat.icon}</span>
          <span>{cat.name}</span>
        </Link>
      ))}
    </div>
  );
}
