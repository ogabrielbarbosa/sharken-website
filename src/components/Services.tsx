"use client";

import { motion } from "motion/react";
import { Arrow, Check, Cross, Divider, Reveal } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;
const stagger = (i: number, base = 0.2) => ({
  initial: { opacity: 0, x: -8 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { delay: base + i * 0.09, duration: 0.5, ease },
});

function CardTitle({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h3 className={`text-center font-display text-[17px] font-semibold tracking-tight ${dark ? "text-fg" : "text-[#0c2a3b]"}`}>
      {children}
    </h3>
  );
}

function Connector() {
  return (
    <span className="absolute -right-4 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-bg text-fg lg:flex">
      <Arrow className="h-3.5 w-3.5" />
    </span>
  );
}

function AppsCard() {
  const items = ["Apps iOS e Android", "Plataformas web e SaaS", "rápidos, bonitos", "publicados", "prontos para crescer"];
  return (
    <div className="glass-gradient relative flex flex-col gap-7 p-7">
      <CardTitle>Aplicativos e plataformas</CardTitle>
      <div className="flex flex-1 flex-col justify-center gap-0.5 bg-[#0b0b0d] px-5 py-4">
        {items.map((t, i) => (
          <motion.div key={t} {...stagger(i)} className="flex items-center gap-3 py-2 font-mono text-[12px] text-fg/90">
            <span className="text-dim">$</span>
            {t}
            {i === 0 && <motion.span className="ml-auto h-3 w-1.5 bg-brand-2" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />}
          </motion.div>
        ))}
      </div>
      <Connector />
    </div>
  );
}

function MvpCard() {
  const items = ["produto mínimo em código", "no ar em poucas semanas", "investimento enxuto", "foco no que importa"];
  return (
    <div className="glass-gradient relative flex flex-col gap-7 p-7">
      <Cross at={["tl", "bl"]} className="hidden lg:block" />
      <CardTitle>MVP para startups</CardTitle>
      <div className="flex flex-1 flex-col bg-[#0b0b0d]">
        <div className="flex items-baseline justify-between border-b border-white/[0.07] px-4 py-3">
          <span className="font-display text-2xl text-brand-2">2 semanas</span>
          <span className="text-[11px] font-medium text-brand-2">no ar</span>
        </div>
        {items.map((t, i) => (
          <div key={t} className="flex flex-1 items-center justify-between border-b border-white/[0.07] px-4 text-[12px] text-fg/90 last:border-0">
            {t}
            <motion.span
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.18, type: "spring", stiffness: 420, damping: 16 }}
              className="text-brand-2"
            >
              <Check className="h-3.5 w-3.5" />
            </motion.span>
          </div>
        ))}
      </div>
      <Connector />
    </div>
  );
}

function AiCard() {
  return (
    <div className="glass-gradient relative flex flex-col gap-7 p-7">
      <Cross at={["tl", "bl"]} className="hidden lg:block" />
      <CardTitle>IA aplicada e agentes</CardTitle>
      <div className="flex flex-1 flex-col bg-[#0b0b0d] p-2.5">
        <div className="grid flex-1 grid-cols-2 gap-2">
          <div className="flex flex-col border border-white/[0.07]">
            <div className="flex-1 p-2.5 font-mono text-[10px] text-mute">
              <div className="text-brand-2">✦ [seu app]</div>
              <div className="mt-2 flex items-center gap-1.5">
                <span>pedido</span>
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>→</motion.span>
                <span>agente</span>
              </div>
              <div className="mt-1 flex justify-between"><span>resposta</span><span className="text-fg">0:04</span></div>
            </div>
            <div className="border-t border-white/[0.07] py-1.5 text-center text-[10px] text-mute">agentes de IA</div>
          </div>
          <div className="flex flex-col border border-white/[0.07]">
            <div className="flex flex-1 items-center justify-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 400, damping: 15 }}
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white"
                >
                  <Check className="h-3 w-3" />
                </motion.span>
              ))}
            </div>
            <div className="border-t border-white/[0.07] py-1.5 text-center text-[10px] text-mute">assistentes no seu produto</div>
          </div>
          <div className="flex flex-col border border-white/[0.07]">
            <div className="flex flex-1 items-center justify-center font-mono text-lg text-fg/80">{"{ }"}</div>
            <div className="border-t border-white/[0.07] py-1.5 text-center text-[10px] text-mute">automações</div>
          </div>
          <div className="flex flex-col border border-white/[0.07]">
            <div className="flex flex-1 items-center justify-center">
              <motion.span
                animate={{ boxShadow: ["0 0 0 0 rgba(31,136,192,.6)", "0 0 0 8px rgba(31,136,192,0)"] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="flex h-7 w-7 items-center justify-center bg-brand/30 text-brand-2"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" /></svg>
              </motion.span>
            </div>
            <div className="border-t border-white/[0.07] py-1.5 text-center text-[10px] text-mute">integrações</div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between px-1 text-[10px] text-mute">
          com segurança <Check className="h-3 w-3 text-brand-2" />
        </div>
      </div>
      <Connector />
    </div>
  );
}

function SystemsCard() {
  const items = ["menos planilha", "menos retrabalho", "Integrações e APIs", "Painéis de dados", "sua operação", "integrados"];
  return (
    <div className="relative flex flex-col bg-bg">
      <Cross at={["tl", "bl"]} className="hidden lg:block" />
      <div className="flex h-[84px] items-center justify-center border-b border-line">
        <CardTitle dark>Sistemas sob medida</CardTitle>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-px bg-line">
        {items.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="flex items-center gap-3 bg-bg px-5 py-5"
          >
            <motion.span
              className="h-9 w-9 shrink-0 rounded-full bg-[conic-gradient(from_200deg,#d3dbe0,#1f88c0,#8fbad1,#3d4b55,#d3dbe0)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-[12px] text-fg/90">{t}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <>
      <section id="solucoes" className="scroll-mt-16 mx-auto w-full max-w-[1440px] border-x border-line px-6 pb-36 pt-36 text-center">
        <Reveal>
          <h2 className="font-display text-[36px] font-medium tracking-[-0.02em] sm:text-[40px]">Do app à IA, tudo em código.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-[640px] text-base leading-relaxed text-mute">
            → Ajudamos empreendedores a validar rápido quando a ideia aparece, destravar entregas e lançar produtos
            novos sem estourar o orçamento.
          </p>
        </Reveal>
      </section>
      <Divider />
      <section className="mx-auto w-full max-w-[1440px] border-x border-line">
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:h-[360px] lg:grid-cols-4">
          <AppsCard />
          <MvpCard />
          <AiCard />
          <SystemsCard />
        </div>
      </section>
      <Divider />
    </>
  );
}
