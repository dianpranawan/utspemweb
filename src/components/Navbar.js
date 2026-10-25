"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setLogoOk(false);
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/admin")) return null;   

  const aktif = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const ukuran = scrolled ? "h-12 w-12" : "h-16 w-16";

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur border-b transition-shadow ${
        scrolled ? "border-ink-200 shadow-sm" : "border-transparent"
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between px-5 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-4">
          {logoOk ? (
            <img
              ref={imgRef}
              src="/logo.jpg"
              alt="Logo SMA Negeri 3 Salatiga"
              onError={() => setLogoOk(false)}
              className={`${ukuran} object-contain transition-all duration-300`}
            />
          ) : (
            <span
              className={`${ukuran} rounded-full bg-pine-800 text-brass-300 font-bold flex items-center justify-center transition-all duration-300`}
            >
              SMA
            </span>
          )}
          <span className="leading-tight">
            <span className="font-head block text-xl md:text-2xl font-semibold text-pine-900">
              SMA Negeri 3 Salatiga
            </span>
            <span className="block text-sm text-ink-500">Kota Salatiga, Jawa Tengah</span>
          </span>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
          className="md:hidden text-2xl w-11 h-11 rounded text-pine-900 hover:bg-pine-50"
        >
          {open ? "✕" : "☰"}
        </button>

        <ul
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 bg-white border-t border-ink-200 md:border-0 shadow-lg md:shadow-none p-4 md:p-0 md:gap-2`}
        >
          {menu.map((m) => (
            <li key={m.href}>
              <Link
                href={m.href}
                onClick={() => setOpen(false)}
                className={`group relative block px-4 py-2.5 font-medium ${
                  aktif(m.href) ? "text-pine-900" : "text-ink-600 hover:text-pine-800"
                }`}
              >
                {m.label}
                <span
                  className={`absolute left-4 right-4 bottom-1 h-0.5 bg-brass-500 origin-left transition-transform duration-300 ${
                    aktif(m.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}