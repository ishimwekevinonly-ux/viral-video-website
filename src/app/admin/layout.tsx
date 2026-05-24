"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/videos/new", label: "Upload Video", icon: "📤" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      <aside className="fixed left-0 top-0 z-40 flex h-full w-60 flex-col border-r border-white/10 bg-[#111]">
        <Link
          href="/admin"
          className="flex items-center gap-2 border-b border-white/10 px-5 py-5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-pink-600">
            <svg
              className="h-5 w-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div>
            <span className="text-lg font-bold text-white">
              Viral<span className="text-red-500">Hub</span>
            </span>
            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>
        </Link>

        <nav className="flex-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-red-500/10 text-red-400"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-3 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <span className="text-lg">🌐</span>
            View Site
          </Link>
        </div>
      </aside>

      <div className="ml-60 flex-1">
        <header className="sticky top-0 z-30 flex h-16 items-center border-b border-white/10 bg-[#0a0a0a]/95 px-8 backdrop-blur-md">
          <h1 className="text-lg font-semibold text-white">Admin Panel</h1>
        </header>
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
