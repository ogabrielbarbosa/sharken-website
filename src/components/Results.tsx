"use client";

import { motion } from "motion/react";
import { Check, Cross, Divider, Reveal } from "./ui";
import { WHATSAPP_URL } from "@/lib/contact";

const ease = [0.22, 1, 0.36, 1] as const;
const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-60px" } } as const;

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-[12px] font-medium text-fg">{children}</div>;
}

/* Passagem de bastão: o contexto da venda chega inteiro no time de CS. */
function HandoffMini() {
  const items = ["dor do cliente", "o que foi prometido", "metas dos 30 dias"];
  return (
    <div className="relative flex flex-col bg-bg p-4">
      <Cross at="tl" className="hidden lg:block" />
      <Label>Passagem de bastão</Label>
      <div className="mt-0.5 text-[10px] text-dim">o contexto da venda vai junto</div>
      <div className="mt-auto flex items-center justify-between gap-2 pt-5">
        <span className="border border-line bg-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] text-mute">Comercial</span>
        <div className="relative h-px flex-1 bg-white/10">
          <motion.span
            initial={{ left: "0%", opacity: 0 }}
            whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease, delay: 0.3 }}
            className="absolute -top-[3px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-brand-2 shadow-[0_0_8px_#5cb8e8]"
          />
        </div>
        <span className="border border-brand/70 bg-brand/[0.08] px-2.5 py-1.5 font-mono text-[10px] text-brand-2">CS</span>
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        {items.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.12, ease }}
            className="flex items-center gap-2 text-[10px] text-mute"
          >
            <Check className="h-3 w-3 text-brand-2" />
            {t}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* Primeiros dias: marcos de acompanhamento até o cliente andar sozinho. */
function FirstDaysMini() {
  const marks = [
    { d: "D1", s: "acesso" },
    { d: "D7", s: "1º resultado" },
    { d: "D15", s: "rotina" },
    { d: "D30", s: "revisão" },
  ];
  return (
    <div className="relative flex flex-col bg-bg p-4">
      <Cross at={["tl", "bl"]} className="hidden lg:block" />
      <Label>Primeiros dias</Label>
      <div className="mt-0.5 text-[10px] text-dim">acompanhamento com marcos claros</div>
      <div className="relative mt-auto pt-6">
        <div className="absolute left-0 right-0 top-[29px] h-px bg-white/10" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
          className="absolute left-0 right-0 top-[29px] h-px origin-left bg-gradient-to-r from-brand to-brand-2"
        />
        <div className="relative flex justify-between">
          {marks.map((m, i) => (
            <motion.div
              key={m.d}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.25, ease }}
              className="flex flex-col items-center"
            >
              <span className={`h-[7px] w-[7px] rounded-full ${i === 3 ? "bg-brand-2 shadow-[0_0_8px_#5cb8e8]" : "bg-brand"}`} />
              <span className="mt-2 font-mono text-[10px] text-fg">{m.d}</span>
              <span className="text-[9px] text-dim">{m.s}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Churn: alto antes do processo, caindo depois que o onboarding entrou. */
function ExpansionMini() {
  const w = 100;
  const h = 50;
  const line = "M0 8 C 15 7, 28 9, 40 12 S 70 36, 100 42";
  return (
    <div className="relative flex flex-col bg-bg p-4">
      <Cross at={["tl", "bl"]} className="hidden lg:block" />
      <Label>Churn</Label>
      <div className="mt-0.5 text-[10px] text-dim">antes e depois do onboarding</div>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="mt-auto h-[96px] w-full overflow-visible">
        <defs>
          <linearGradient id="exp-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={`${line} L${w} ${h} L0 ${h} Z`}
          fill="url(#exp-area)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
        <motion.path
          d={line}
          fill="none"
          stroke="#5cb8e8"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease }}
        />
      </svg>
      <div className="mt-1 flex justify-between font-mono text-[10px] text-dim">
        <span>alto</span>
        <span className="text-brand-2">em queda</span>
      </div>
    </div>
  );
}

const JOURNEY = [
  { t: "Comercial fecha a venda", s: "metas e expectativas registradas" },
  { t: "Passa o bastão para o CS", s: "sem o cliente repetir a história" },
  { t: "Reunião de onboarding", s: "agendada no primeiro acesso" },
  { t: "Acompanhamento dos primeiros dias", s: "o cliente vê o próprio progresso", box: "Sucesso do cliente desde o dia 1" },
  { t: "Retenção e expansão", s: "renovação e mais receita por cliente", box: "Churn caiu, receita por cliente subiu" },
];

function JourneyCase() {
  return (
    <div className="relative flex flex-col bg-bg lg:row-span-2">
      <Cross at={["tl", "bl"]} className="hidden lg:block" />
      <div className="flex h-[76px] items-center justify-center border-b border-line">
        <h3 className="font-display text-[15px] font-semibold">Onboarding de ponta a ponta</h3>
      </div>
      <div className="flex flex-1 flex-col px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand to-[#0c3a55] font-display text-xs font-semibold">S</span>
          <div>
            <div className="text-[12px] font-medium">Startup SaaS B2B</div>
            <div className="text-[10px] text-dim">processo implementado pela Sharken</div>
          </div>
        </div>
        <div className="mt-5 divide-y divide-line border-y border-line text-[11px]">
          <div className="flex justify-between py-2.5"><span className="text-mute">Problema</span><span className="text-fg">churn alto</span></div>
          <div className="flex justify-between py-2.5"><span className="text-mute">Solução</span><span className="text-fg">onboarding estruturado</span></div>
          <div className="flex justify-between py-2.5"><span className="text-mute">Resultado</span><span className="text-brand-2">churn em queda</span></div>
        </div>
        <div className="relative mt-5 flex flex-col gap-4 pl-6">
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease }}
            className="absolute bottom-3 left-[7px] top-2 w-px origin-top bg-white/15"
          />
          {JOURNEY.map((x, i) => (
            <motion.div
              key={x.t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.2, ease }}
              className="relative"
            >
              <span className="absolute -left-6 top-0.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-white/20 bg-bg">
                <span className={`h-1.5 w-1.5 rounded-full ${x.box ? "bg-brand-2" : "bg-white/40"}`} />
              </span>
              <div className="text-[11px] text-fg">{x.t}</div>
              <div className="text-[10px] text-dim">{x.s}</div>
              {x.box && (
                <div className="mt-2 border border-brand/70 bg-brand/[0.08] px-3 py-2 text-[11px] text-brand-2">{x.box}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* O que o cliente enxerga no painel de acompanhamento. */
const CLIENT_VIEW = [
  { k: "Termos aceitos", v: "feito", w: 100 },
  { k: "Call de onboarding", v: "agendada", w: 100 },
  { k: "Acesso configurado", v: "feito", w: 100 },
  { k: "Primeira meta", v: "batida", w: 82 },
  { k: "Revisão de 30 dias", v: "próxima", w: 46 },
  { k: "Plano de expansão", v: "em breve", w: 22 },
];

function ClientPanel() {
  return (
    <div className="relative flex flex-col bg-bg lg:row-span-2">
      <Cross at={["tl", "bl"]} className="hidden lg:block" />
      <div className="flex h-[76px] items-center justify-center border-b border-line">
        <h3 className="font-display text-[15px] font-semibold">O que o cliente vê</h3>
      </div>
      <div className="relative h-[92px] overflow-hidden border-b border-line bg-white/[0.02] px-4 py-3">
        <div className="text-[10px] text-dim">progresso do onboarding</div>
        <div className="mt-3 h-2 w-full bg-white/[0.05]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "72%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease }}
            className="h-full bg-gradient-to-r from-brand to-brand-2"
          />
        </div>
        <div className="mt-2 flex justify-between text-[10px]">
          <span className="text-dim">entrada</span>
          <span className="text-brand-2">sucesso</span>
        </div>
      </div>
      <div className="flex justify-between px-4 pb-2 pt-5 text-[11px] font-medium">
        <span>Etapa</span>
        <span className="text-dim">Status</span>
      </div>
      <motion.div {...inView} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="flex flex-1 flex-col">
        {CLIENT_VIEW.map((r) => (
          <motion.div
            key={r.k}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="relative flex flex-1 items-center justify-between border-t border-line px-4 py-2.5"
          >
            <motion.span
              variants={{ hidden: { width: 0 }, show: { width: `${r.w}%`, transition: { duration: 1, ease } } }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand/25 to-brand/5"
            />
            <span className="relative flex items-center gap-2 text-[13px] text-brand-2">
              <span className="text-dim">›</span>
              {r.k}
            </span>
            <span className={`relative font-mono text-[12px] ${r.w === 100 ? "text-fg" : "text-dim"}`}>{r.v}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function Results() {
  return (
    <>
      <div id="cases" className="h-36 mx-auto max-w-[1440px] scroll-mt-16 border-x border-line" />
      <Divider />
      <section id="sobre" className="mx-auto w-full max-w-[1440px] border-x border-line">
        <div className="grid gap-px bg-line lg:grid-cols-4 lg:grid-rows-[auto_auto]">
          <div className="flex flex-col justify-center bg-bg px-6 py-14 sm:px-12 lg:col-span-2 lg:px-16">
            <Reveal>
              <blockquote className="font-display text-[30px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[36px]">
                “Software é meio. O que a gente entrega é o seu negócio rodando.”
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-mute">
                Uma startup perdia clientes logo depois da venda: o churn era alto. A gente desenhou e colocou no ar todo
                o processo de onboarding. O comercial vende e passa o bastão para o time de CS, que conduz a reunião de
                onboarding. O cliente acompanha o próprio sucesso nos primeiros dias e a operação cuida da retenção e da
                expansão. Resultado: o churn caiu e os clientes passaram a ficar e crescer.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2696d2]"
              >
                Conte sua ideia
              </a>
            </Reveal>
          </div>
          <JourneyCase />
          <ClientPanel />
          <div className="grid gap-px bg-line sm:grid-cols-3 lg:col-span-2 [&>*]:min-h-[232px]">
            <HandoffMini />
            <FirstDaysMini />
            <ExpansionMini />
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}
