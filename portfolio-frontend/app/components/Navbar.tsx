"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "#features", label: "Features" },
  { href: "#why", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isAuth = pathname.startsWith("/login") || pathname.startsWith("/register");

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-600 text-white">P</span>
          <span className="text-lg">Portfolio</span>
        </Link>

        {!isAuth && (
          <div className="hidden items-center gap-6 md:flex">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-slate-300 transition hover:text-white">
                {l.label}
              </a>
            ))}
            <div className="h-5 w-px bg-white/10" />
            <Link href="/login" className="rounded-xl px-4 py-2 text-sm font-medium text-slate-200 transition hover:text-white">Log in</Link>
            <Link href="/register" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">Get Started</Link>
          </div>
        )}

        {isAuth && (
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/" className="rounded-xl px-4 py-2 text-sm font-medium text-slate-200 transition hover:text-white">Home</Link>
          </div>
        )}
      </nav>
    </header>
  );
}