"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { WHATSAPP_URL } from "@/lib/contact";
import { Logo } from "./Logo";
import { Arrow, Divider } from "./ui";

type Solution = { label: string; desc: string; href: string; match: (path: string) => boolean; icon: ReactNode };

/**
 * Serviços da Sharken. Cada página de serviço nova entra aqui e aparece
 * no menu "Soluções" (desktop e mobile) automaticamente.
 */
const SOLUTIONS: Solution[] = [
  {
    label: "Desenvolvimento de software",
    desc: "Apps, plataformas, MVPs e IA aplicada, do zero ao ar.",
    href: "/#solucoes",
    match: (p) => p === "/",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-[18px] w-[18px]" aria-hidden>
        <path d="M7 6L3 10l4 4M13 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Landing pages",
    desc: "Páginas que vendem o seu serviço, no ar em 3 a 7 dias.",
    href: "/landing-pages",
    match: (p) => p.startsWith("/landing-pages"),
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-[18px] w-[18px]" aria-hidden>
        <rect x="2.75" y="3.75" width="14.5" height="12.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.75 7.25h14.5M6 10.5h5M6 13h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

/** Links simples (sem submenu). Âncoras da home funcionam de qualquer página. */
const LINKS = [{ label: "Método", href: "/#metodo" }];

const ease = [0.22, 1, 0.36, 1] as const;
const HEADER_H = 65; // altura da nav (64px) + divider (1px)

/**
 * Âncora da home ("/#metodo"): se já estamos na home, rola suave deixando a seção centralizada
 * no espaço visível abaixo do header (ou alinhada logo abaixo dele, se for mais alta que a tela).
 * Em outra página, deixa o Next navegar normalmente (o scroll-margin das seções evita o header).
 */
export function scrollToAnchor(e: React.MouseEvent, href: string, pathname: string) {
  if (!href.startsWith("/#") || pathname !== "/") return;
  const el = document.getElementById(href.slice(2));
  if (!el) return;
  e.preventDefault();
  const rect = el.getBoundingClientRect();
  const free = window.innerHeight - HEADER_H;
  const offset = rect.height < free ? HEADER_H + (free - rect.height) / 2 : HEADER_H;
  window.scrollTo({ top: rect.top + window.scrollY - offset, behavior: "smooth" });
  history.replaceState(null, "", href.slice(1));
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12" fill="none" aria-hidden
      className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M3 4.5L6 7.5l3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SolutionItem({
  s, active, pathname, onSelect,
}: { s: Solution; active: boolean; pathname: string; onSelect: () => void }) {
  return (
    <Link
      href={s.href}
      onClick={(e) => {
        scrollToAnchor(e, s.href, pathname);
        onSelect();
      }}
      aria-current={active ? "page" : undefined}
      className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.04] focus-visible:bg-white/[0.04] focus-visible:outline-none"
    >
      <span
        className={`mt-px flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-colors ${
          active
            ? "border-brand/50 bg-brand/15 text-brand-2"
            : "border-line bg-card-2 text-mute group-hover:text-fg"
        }`}
      >
        {s.icon}
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1.5 text-sm font-medium text-fg">
          {s.label}
          <Arrow className="h-3.5 w-3.5 -translate-x-1 text-brand-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
        </span>
        <span className="mt-0.5 block text-[13px] leading-snug text-dim">{s.desc}</span>
      </span>
    </Link>
  );
}

function SolutionsMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        ref.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Abre no hover (com um respiro para fechar) e também no clique/teclado.
  const enter = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const leave = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <li
      ref={ref}
      className="relative flex items-center self-stretch"
      onPointerEnter={enter}
      onPointerLeave={leave}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={(e) => {
          // Com mouse o hover já abriu; o clique não pode fechar logo em seguida. Toque/teclado alternam.
          const hoverMouse = e.detail > 0 && window.matchMedia("(hover: hover)").matches;
          setOpen((o) => (hoverMouse ? true : !o));
        }}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors hover:text-fg ${
          open ? "bg-white/[0.05] text-fg" : "text-mute"
        }`}
      >
        Soluções
        <Chevron open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16, ease }}
            className="absolute -left-2 top-[calc(100%+1px)] w-[440px] rounded-b-xl border border-t-0 border-line bg-card p-1.5 shadow-[0_24px_48px_-16px_rgba(0,0,0,.8)]"
          >
            {SOLUTIONS.map((s) => (
              <SolutionItem
                key={s.href} s={s} active={s.match(pathname)} pathname={pathname} onSelect={() => setOpen(false)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden className="relative block h-3 w-4">
      <span
        className={`absolute left-0 h-[1.5px] w-4 rounded bg-current transition-all duration-200 ${
          open ? "top-[5px] rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 top-[5px] h-[1.5px] w-4 rounded bg-current transition-opacity duration-200 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 h-[1.5px] w-4 rounded bg-current transition-all duration-200 ${
          open ? "top-[5px] -rotate-45" : "top-[10px]"
        }`}
      />
    </span>
  );
}

function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  return (
    <motion.div
      id="mobile-menu"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25, ease }}
      className="overflow-hidden md:hidden"
    >
      <div className="mx-auto max-w-[1440px] border-x border-line px-4 pb-6 pt-2 sm:px-10">
        <div className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">Soluções</div>
        <div className="flex flex-col gap-0.5">
          {SOLUTIONS.map((s) => (
            <SolutionItem key={s.href} s={s} active={s.match(pathname)} pathname={pathname} onSelect={onClose} />
          ))}
        </div>
        <div className="mx-3 my-3 h-px bg-line" />
        {LINKS.map((l) => (
          <a
            key={l.href} href={l.href}
            onClick={(e) => {
              scrollToAnchor(e, l.href, pathname);
              onClose();
            }}
            className="block rounded-lg px-3 py-2.5 text-[15px] text-fg">
            {l.label}
          </a>
        ))}
        <a
          href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={onClose}
          className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2696d2]"
        >
          Fale com a gente
          <Arrow className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Os links do menu mobile já fecham no clique; aqui fecha ao passar para o layout desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-bg/80 backdrop-blur-xl">
        <nav
          aria-label="Principal"
          className="mx-auto flex h-16 max-w-[1440px] items-center justify-between border-x border-line px-6 sm:px-12 lg:px-16"
        >
          <div className="flex items-center gap-8 self-stretch">
            <Link href="/" aria-label="Sharken, início">
              <Logo className="h-[18px] w-auto text-fg" />
            </Link>
            <ul className="hidden items-center gap-1 self-stretch md:flex">
              <SolutionsMenu pathname={pathname} />
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => scrollToAnchor(e, l.href, pathname)}
                    className="rounded-full px-3 py-1.5 text-sm text-mute transition-colors hover:text-fg">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2696d2] sm:inline-flex"
            >
              Fale com a gente
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-fg transition-colors hover:bg-white/[0.05] md:hidden"
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {mobileOpen && <MobileMenu pathname={pathname} onClose={() => setMobileOpen(false)} />}
        </AnimatePresence>
        <Divider />
      </div>
    </header>
  );
}
