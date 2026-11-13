"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, Moon, Sun } from "lucide-react";

const links = [
  { href: "/", label: "Home" }, { href: "/blog", label: "Blog" },
  { href: "/#categories", label: "Categories" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggleTheme = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  };
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="group flex items-baseline gap-2" aria-label="Gihan Chathuranga home">
          <span className="font-serif text-2xl italic tracking-tight">Gihan</span>
          <span className="font-serif text-2xl tracking-tight text-accent transition-colors group-hover:text-ink">Chathuranga</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="relative text-sm text-muted transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Link href="/search" aria-label="Search" className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:bg-line/60 hover:text-ink"><Search size={18} /></Link>
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:bg-line/60 hover:text-ink">
            <Moon size={18} className="dark:hidden" /><Sun size={18} className="hidden dark:block" />
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="grid h-10 w-10 place-items-center rounded-full md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line bg-bg px-5 pb-6 pt-2 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-line py-4 font-serif text-2xl">{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
