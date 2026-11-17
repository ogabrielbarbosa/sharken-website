"use client";

import { motion } from "motion/react";
import { Playfair_Display } from "next/font/google";
import { BrowserFrame } from "./shared";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

const ease = [0.22, 1, 0.36, 1] as const;
const TERRA = "#9f411c";

function Pin() {
  return (
    <svg viewBox="0 0 12 12" className="h-[1.3cqw] w-[1.3cqw]" fill="none" aria-hidden>
      <path d="M6 11s3.5-3.4 3.5-6.1A3.5 3.5 0 0 0 2.5 4.9C2.5 7.6 6 11 6 11Z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="6" cy="4.9" r="1.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/** Etiqueta que aponta o que faz a página vender. */
function Note({ children, className, delay }: { children: string; className: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -6 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.5, ease }}
      className={`absolute z-20 hidden items-center gap-1.5 whitespace-nowrap border border-white/10 bg-[#0b0b0d]/90 px-2 py-1 font-mono text-[10px] text-fg backdrop-blur sm:flex ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-2 shadow-[0_0_6px_#5cb8e8]" />
      {children}
    </motion.span>
  );
}

/**
 * Landing page da Dra. Beatriz Silva (harmonização facial) refeita em HTML a partir
 * do print do projeto. Só a foto vem do print; texto, cores e botões são HTML,
 * então ficam nítidos em qualquer tamanho. Tudo escala com a largura (cqw).
 */
export function ExamplePage() {
  return (
    <BrowserFrame url="Dra. Beatriz Silva · harmonização facial" className="w-full">
      <div className="@container relative aspect-[16/10] w-full overflow-hidden" style={{ background: "linear-gradient(120deg,#fffaf7 0%,#fbefe9 55%,#f6e3dc 100%)" }}>
        {/* marca d'água atrás da foto */}
        <span
          aria-hidden
          className={`${serif.className} pointer-events-none absolute -right-[2cqw] top-[18cqw] select-none text-[22cqw] font-bold leading-[0.8] text-[#f1dbd2]/70`}
        >
          Bea
          <br />
          Silva
        </span>

        {/* foto */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="absolute bottom-[3.2cqw] right-[2cqw] h-[56cqw] w-[47cqw] [mask-image:linear-gradient(to_right,transparent,black_18%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_14%)] [mask-composite:intersect]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/landing-pages/exemplo/dra-beatriz-foto.webp" alt="Dra. Beatriz Silva" className="h-full w-full object-contain object-bottom" />
        </motion.div>

        {/* conteúdo */}
        <div className="relative z-10 flex h-full w-[58%] flex-col pl-[6cqw] pt-[4.5cqw]">
          <div className={`${serif.className} leading-[0.95]`} style={{ color: TERRA }}>
            <span className="block text-[1.7cqw]">Dra.</span>
            <span className="block text-[2.6cqw] font-semibold">Beatriz</span>
            <span className="block pl-[1cqw] text-[2.6cqw] font-semibold">Silva</span>
          </div>

          <span className="mt-[3.2cqw] flex items-center gap-[0.8cqw] text-[1.45cqw] text-[#3b2a24]">
            <Pin />
            São Carlos - São Paulo
          </span>

          <h3 className={`${serif.className} relative mt-[1.6cqw] text-[4.3cqw] font-bold leading-[1.12] text-[#1a1210]`}>
            Reconquiste sua aparência mais <span style={{ color: TERRA }}>jovem, natural e bela!</span>
            <Note className="-top-[3.4cqw] right-[8cqw]" delay={0.6}>
              promessa clara
            </Note>
          </h3>

          <p className="mt-[2cqw] max-w-[44cqw] text-[1.5cqw] leading-[1.45] text-[#3b2a24]">
            <strong className="font-semibold text-[#1a1210]">Procedimento totalmente seguro e livre de dor.</strong> A beleza
            que você estava procurando está na harmonização facial que você ainda não fez.
          </p>

          <span className="relative mt-[3cqw] w-fit">
            <motion.span
              animate={{ boxShadow: ["0 0 0 0 rgba(159,65,28,.45)", "0 0 0 1.2cqw rgba(159,65,28,0)"] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.6 }}
              className="block px-[2.6cqw] py-[1.3cqw] text-[1.6cqw] font-medium text-white"
              style={{ background: TERRA }}
            >
              Reconquistar minha beleza
            </motion.span>
            <Note className="-right-[2cqw] top-1/2 -translate-y-1/2 translate-x-full" delay={0.9}>
              CTA direto
            </Note>
          </span>

          <span className="relative mt-[2.2cqw] flex w-fit items-center gap-[1.4cqw] text-[1.45cqw] text-[#3b2a24]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/landing-pages/exemplo/dra-beatriz-pacientes.webp" alt="" className="h-[3.4cqw] w-auto" />
            +330 pacientes
            <Note className="-right-[2cqw] top-1/2 -translate-y-1/2 translate-x-full" delay={1.2}>
              prova social
            </Note>
          </span>
        </div>

        {/* faixa de rodapé com a setinha */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-[3.2cqw]" style={{ background: TERRA }}>
          <span className="absolute left-1/2 top-0 h-[2.4cqw] w-[2.4cqw] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#fbefe9]" />
        </div>
      </div>
    </BrowserFrame>
  );
}
