"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Divider, Reveal } from "./ui";
import { WHATSAPP_URL } from "@/lib/contact";

export function Cta() {
  return (
    <>
      <Divider />
      <section id="contato" className="relative mx-auto w-full max-w-[1440px] overflow-hidden border-x border-line px-6 py-40 text-center">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(31,136,192,.55),rgba(31,136,192,.12)_55%,transparent)]"
          animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative">
          <Reveal>
            <h2 className="mx-auto max-w-[820px] font-display text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[72px]">
              Comece seu projeto em → 2 semanas
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-fg/85">Agende uma conversa gratuita, sem tecniquês.</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-9 flex items-center justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2696d2]">
              Fale com a gente
            </a>
            <Link href="/landing-pages" className="rounded-full border border-white/10 bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:border-white/30">
              Ver landing pages
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
