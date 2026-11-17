"use client";

import { motion } from "motion/react";
import { Check, Cross, Divider, Reveal } from "./ui";
import { WHATSAPP_URL } from "@/lib/contact";

const ease = [0.22, 1, 0.36, 1] as const;

const PILLARS = [
  {
    t: "01 · Um método só, do início ao fim",
    d: "Discovery, design, desenvolvimento e deploy no mesmo processo. Você acompanha cada etapa em tempo real, sem surpresa no meio do caminho.",
  },
  {
    t: "02 · Mais rápido onde todo mundo trava",
    d: "Agentes de IA cuidam de testes, documentação e telas repetitivas. O que levava semanas sai em dias, e o investimento cai junto.",
  },
  {
    t: "03 · IA sem gambiarra",
    d: "Toda entrega passa por revisão humana e testes automatizados. Código e dados tratados com confidencialidade e dentro da LGPD.",
  },
];

const TASKS = [
  { who: "Agente IA", what: "Escreveu os testes do fluxo de pagamento" },
  { who: "Agente IA", what: "Gerou a documentação da API" },
  { who: "Eng. sênior", what: "Revisou a arquitetura e aprovou" },
];

function Mockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e] shadow-[0_40px_100px_-30px_rgba(0,0,0,.7)]">
      <div className="flex h-10 items-center gap-1.5 border-b border-white/[0.06] px-4">
        {[0, 1, 2].map((i) => <span key={i} className="h-2.5 w-2.5 rounded-full bg-white/15" />)}
        <span className="ml-3 font-mono text-[10px] text-dim">pull-request #128 · checkout</span>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[120px_minmax(0,1fr)]">
        <div className="hidden flex-col gap-2 border-r border-white/[0.06] p-3 sm:flex">
          <span className="h-6 rounded-md bg-brand/30" />
          {[0, 1, 2].map((i) => <span key={i} className="h-6 rounded-md bg-white/[0.05]" />)}
        </div>
        <div className="flex flex-col gap-3 p-5">
          {TASKS.map((t, i) => (
            <motion.div
              key={t.what}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.35, ease }}
              className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.35, type: "spring", stiffness: 420, damping: 16 }}
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${i === 2 ? "bg-emerald-400/20 text-emerald-300" : "bg-brand/25 text-brand-2"}`}
              >
                <Check className="h-3 w-3" />
              </motion.span>
              <div className="min-w-0">
                <div className="font-mono text-[10px] text-dim">{t.who}</div>
                <div className="truncate text-[12px] text-fg/90">{t.what}</div>
              </div>
            </motion.div>
          ))}
          <div className="mt-1 rounded-lg border border-white/[0.06] p-3">
            <div className="flex justify-between text-[10px] text-dim">
              <span>testes automatizados</span>
              <span className="text-brand-2">passando</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 2, ease }}
                className="h-full rounded-full bg-gradient-to-r from-brand to-brand-2"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8 }}
            className="self-start rounded-full bg-brand/20 px-3 py-1.5 text-[11px] font-medium text-brand-2"
          >
            Pronto para produção
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function AiEngineering() {
  return (
    <>
      <div className="mx-auto h-36 max-w-[1440px] border-x border-line" />
      <Divider />
      <section id="metodo" className="scroll-mt-16 mx-auto w-full max-w-[1440px] border-x border-line">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-px bg-line lg:grid-cols-2">
          <div className="glass-gradient flex items-center p-6 sm:p-12">
            <div className="w-full">
              <Mockup />
            </div>
          </div>
          <div className="relative flex flex-col bg-bg">
            <Cross at={["tl", "bl"]} className="hidden lg:block" />
            <div className="flex flex-1 flex-col justify-center px-6 py-14 sm:px-12 lg:px-16">
              <Reveal>
                <h2 className="font-display text-[32px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[36px]">
                  Construímos software com IA no centro. E gente sênior revisando cada entrega.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-brand-2">Engenharia aumentada por IA</div>
              </Reveal>
              <Reveal delay={0.2}>
                <a
                  href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-7 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2696d2]"
                >
                  Fale com a gente
                </a>
              </Reveal>
            </div>
            <div className="grid gap-px border-t border-line bg-line sm:grid-cols-3">
              {PILLARS.map((p, i) => (
                <Reveal key={p.t} delay={i * 0.1} className="relative bg-bg p-5">
                  {i > 0 && <Cross at={["tl", "bl"]} className="hidden sm:block" />}
                  <div className="text-[12px] font-medium text-fg">{p.t}</div>
                  <p className="mt-2 text-[12px] leading-relaxed text-mute">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}
