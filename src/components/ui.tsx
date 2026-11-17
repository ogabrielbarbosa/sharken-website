"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

/** Moldura de 1440px com as linhas verticais laterais que guiam a página toda. */
export function Shell({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-[1440px] border-x border-line ${className}`}>
      {children}
    </section>
  );
}

type Corner = "tl" | "tr" | "bl" | "br";

const CORNER: Record<Corner, string> = {
  tl: "-left-[6px] -top-[6px]",
  tr: "-right-[6px] -top-[6px]",
  bl: "-left-[6px] -bottom-[6px]",
  br: "-right-[6px] -bottom-[6px]",
};

/**
 * Cruz de 11px feita com duas linhas de 1px em pixel inteiro (sem meio pixel, então fica nítida).
 * Vai dentro de uma célula com `position: relative` e se centraliza sobre a linha de 1px
 * que fica logo fora do canto indicado (gap da grade ou borda da moldura).
 */
export function Cross({ at, className = "" }: { at: Corner | Corner[]; className?: string }) {
  const corners = Array.isArray(at) ? at : [at];
  return (
    <>
      {corners.map((c) => (
        <span key={c} aria-hidden className={`pointer-events-none absolute z-20 h-[11px] w-[11px] ${CORNER[c]} ${className}`}>
          <span className="absolute left-0 top-[5px] h-px w-[11px] bg-[#5a5a63]" />
          <span className="absolute left-[5px] top-0 h-[11px] w-px bg-[#5a5a63]" />
        </span>
      ))}
    </>
  );
}

/** Linha horizontal da moldura, com cruzes onde ela encontra as bordas laterais. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto h-px w-full max-w-[1440px] bg-line ${className}`}>
      <span aria-hidden className="pointer-events-none absolute -left-[5px] -top-[5px] z-20 h-[11px] w-[11px]">
        <span className="absolute left-0 top-[5px] h-px w-[11px] bg-[#5a5a63]" />
        <span className="absolute left-[5px] top-0 h-[11px] w-px bg-[#5a5a63]" />
      </span>
      <span aria-hidden className="pointer-events-none absolute -right-[5px] -top-[5px] z-20 h-[11px] w-[11px]">
        <span className="absolute left-0 top-[5px] h-px w-[11px] bg-[#5a5a63]" />
        <span className="absolute left-[5px] top-0 h-[11px] w-px bg-[#5a5a63]" />
      </span>
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="none" aria-hidden>
      <path d="M3.5 8.5l5-5M4.5 3.5h4v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Check({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" className={className} fill="none" aria-hidden>
      <path d="M3 7.5l2.5 2.5L11 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

