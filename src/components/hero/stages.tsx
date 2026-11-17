"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Check } from "../ui";
import { Counter } from "./Counter";

/* Os números deste painel são ilustrativos: mostram como cada etapa do método
   aparece para o cliente no acompanhamento em tempo real. */

const ease = [0.22, 1, 0.36, 1] as const;

function Kpi({ label, children, delay = 0 }: { label: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease }}
      className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-dim">{label}</div>
      <div className="mt-1.5 font-display text-2xl font-medium text-fg">{children}</div>
    </motion.div>
  );
}

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <div className="font-display text-lg font-medium text-fg">{title}</div>
      <div className="mt-0.5 text-xs text-dim">{subtitle}</div>
    </motion.div>
  );
}

function Panel({ children, className = "", title, aside }: { children: React.ReactNode; className?: string; title?: string; aside?: React.ReactNode }) {
  return (
    <div className={`rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 ${className}`}>
      {title && (
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-dim">{title}</span>
          {aside}
        </div>
      )}
      {children}
    </div>
  );
}

/* ───────────────────────── Discovery ───────────────────────── */

const DOTS = [
  { x: 18, y: 22, mvp: true }, { x: 30, y: 14, mvp: true }, { x: 24, y: 36, mvp: true },
  { x: 40, y: 30, mvp: true }, { x: 36, y: 18, mvp: true },
  { x: 62, y: 26, mvp: false }, { x: 74, y: 44, mvp: false }, { x: 58, y: 62, mvp: false },
  { x: 82, y: 70, mvp: false }, { x: 22, y: 66, mvp: false }, { x: 46, y: 78, mvp: false },
];

const HYPOTHESES = [
  { label: "Agendar sem ligar", value: 92 },
  { label: "Pagar dentro do app", value: 78 },
  { label: "Painel do dono", value: 64 },
];

export function DiscoveryStage() {
  return (
    <div className="flex h-full flex-col gap-4">
      <Header title="Discovery · mapa do negócio" subtitle="Entender antes de construir" />
      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Entrevistas" delay={0.05}><Counter to={12} /></Kpi>
        <Kpi label="Dores mapeadas" delay={0.1}><Counter to={8} delay={0.15} /></Kpi>
        <Kpi label="Escopo do MVP" delay={0.15}><Counter to={5} delay={0.3} suffix=" features" /></Kpi>
      </div>
      <div className="grid flex-1 grid-cols-5 gap-3">
        <Panel title="Impacto × esforço" className="col-span-3" aside={<span className="text-[10px] text-brand-2">● MVP</span>}>
          <div className="relative h-[168px] overflow-hidden rounded-lg border border-white/[0.05]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6, ease }}
              className="absolute left-[8%] top-[6%] h-[46%] w-[42%] rounded-lg border border-dashed border-brand/60 bg-brand/10"
            />
            {DOTS.map((d, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 + i * 0.07, type: "spring", stiffness: 380, damping: 18 }}
                className={`absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${d.mvp ? "bg-brand-2 shadow-[0_0_12px_rgba(92,184,232,.8)]" : "bg-white/25"}`}
                style={{ left: `${d.x}%`, top: `${d.y}%` }}
              />
            ))}
            <span className="absolute bottom-1.5 right-2 font-mono text-[9px] text-dim">esforço →</span>
            <span className="absolute left-2 top-1.5 font-mono text-[9px] text-dim">↑ impacto</span>
          </div>
        </Panel>
        <Panel title="Hipóteses" className="col-span-2">
          <div className="flex flex-col gap-3.5">
            {HYPOTHESES.map((h, i) => (
              <div key={h.label}>
                <div className="flex items-baseline justify-between gap-2 text-[11px]">
                  <span className="truncate text-mute">{h.label}</span>
                  <Counter to={h.value} suffix="%" delay={0.4 + i * 0.15} className="text-fg" />
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${h.value}%` }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 1.1, ease }}
                    className="h-full rounded-full bg-gradient-to-r from-brand to-brand-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

/* ───────────────────────── Design ───────────────────────── */

const WIRE = [
  "h-5 w-full", "h-16 w-full", "h-3 w-3/4", "h-3 w-1/2", "h-8 w-full", "h-8 w-full",
];
const SWATCHES = ["#1f88c0", "#5cb8e8", "#fafafa", "#27272a", "#09090b"];

export function DesignStage() {
  return (
    <div className="flex h-full flex-col gap-4">
      <Header title="Design · protótipo navegável" subtitle="UX research e UI testados antes do código" />
      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Telas" delay={0.05}><Counter to={24} /></Kpi>
        <Kpi label="Fluxos testados" delay={0.1}><Counter to={6} delay={0.15} /></Kpi>
        <Kpi label="Usabilidade" delay={0.15}><Counter to={94} delay={0.3} suffix="/100" /></Kpi>
      </div>
      <div className="grid flex-1 grid-cols-5 gap-3">
        <Panel title="Montando a tela" className="col-span-2">
          <div className="mx-auto flex w-[148px] flex-col gap-2 rounded-[18px] border border-white/10 bg-black/40 p-2.5">
            {WIRE.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.16, duration: 0.45, ease }}
                className={`${c} rounded-md ${i === 1 ? "bg-gradient-to-br from-brand/70 to-brand-2/40" : i >= 4 ? "border border-white/10 bg-white/[0.04]" : "bg-white/10"}`}
              />
            ))}
          </div>
        </Panel>
        <Panel title="Sistema visual" className="col-span-3">
          <div className="flex gap-2">
            {SWATCHES.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, ease }}
                className="h-9 flex-1 rounded-md border border-white/10"
                style={{ background: c }}
              />
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            {[["Aa", "Título · 32"], ["Aa", "Subtítulo · 20"], ["Aa", "Texto · 15"]].map(([a, b], i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.12 }}
                className="flex items-center justify-between border-b border-white/[0.05] pb-1.5 last:border-0"
              >
                <span className="font-display text-fg" style={{ fontSize: 22 - i * 4 }}>{a}</span>
                <span className="font-mono text-[10px] text-dim">{b}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-[11px]">
              <span className="text-mute">Protótipo validado com usuários</span>
              <Counter to={100} delay={0.6} duration={2.2} suffix="%" className="text-brand-2" />
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.6, duration: 2.2, ease }} className="h-full rounded-full bg-gradient-to-r from-brand to-brand-2" />
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}

/* ───────────────────────── Develop ───────────────────────── */

const BARS = [34, 48, 30, 62, 55, 72, 44, 88, 76, 96];
const LOG = [
  { who: "agente IA", what: "gerou os testes do checkout", ok: true },
  { who: "revisão sênior", what: "aprovou o PR #128", ok: true },
  { who: "agente IA", what: "documentou a API de pedidos", ok: true },
  { who: "CI", what: "482 testes passando", ok: true },
  { who: "revisão sênior", what: "pediu ajuste no cache", ok: false },
  { who: "agente IA", what: "aplicou o ajuste em 4 min", ok: true },
];

export function DevelopStage() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1300);
    return () => clearInterval(id);
  }, []);
  const visible = [0, 1].map((k) => LOG[(tick + k) % LOG.length]);

  return (
    <div className="flex h-full flex-col gap-4">
      <Header title="Develop · sprint 3 de 6" subtitle="Código acelerado por IA, revisado por gente sênior" />
      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Entregas" delay={0.05}><Counter to={14} /></Kpi>
        <Kpi label="Testes passando" delay={0.1}><Counter to={482} delay={0.15} /></Kpi>
        <Kpi label="Cobertura" delay={0.15}><Counter to={87} delay={0.3} suffix="%" /></Kpi>
      </div>
      <Panel
        title="Entregas por dia"
        aside={
          <span className="flex items-center gap-3 text-[10px] text-dim">
            <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-white/20" />tradicional</span>
            <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-brand" />com IA</span>
          </span>
        }
      >
        <div className="flex h-[72px] items-end gap-2.5">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.8, ease }}
              className={`flex-1 rounded-t ${i >= 7 ? "bg-gradient-to-t from-brand to-brand-2" : "bg-white/[0.14]"}`}
            />
          ))}
        </div>
      </Panel>
      <Panel title="Ao vivo" aside={<span className="flex items-center gap-1.5 text-[10px] text-brand-2"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-2" />online</span>} className="flex-1">
        <div className="flex flex-col gap-1.5 overflow-hidden">
          {visible.map((l, i) => (
            <motion.div
              key={`${tick}-${i}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1 - i * 0.25, y: 0 }}
              transition={{ duration: 0.35, ease }}
              className="flex items-center gap-2 text-[11px]"
            >
              <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${l.ok ? "bg-brand/20 text-brand-2" : "bg-amber-400/15 text-amber-300"}`}>
                {l.ok ? <Check className="h-2.5 w-2.5" /> : <span className="text-[9px]">!</span>}
              </span>
              <span className="font-mono text-dim">{l.who}</span>
              <span className="truncate text-mute">{l.what}</span>
            </motion.div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

/* ───────────────────────── Deploy ───────────────────────── */

const STEPS = ["Build", "Testes", "Revisão", "Produção"];

function useLiveSeries(len: number) {
  const [series, setSeries] = useState(() => Array.from({ length: len }, (_, i) => 40 + Math.sin(i / 2) * 10 + i * 1.5));
  useEffect(() => {
    const id = setInterval(() => {
      setSeries((s) => {
        const last = s[s.length - 1];
        const next = Math.max(25, Math.min(92, last + (Math.random() - 0.4) * 9));
        return [...s.slice(1), next];
      });
    }, 900);
    return () => clearInterval(id);
  }, []);
  return series;
}

export function DeployStage() {
  const series = useLiveSeries(24);
  const [users, setUsers] = useState(1240);
  useEffect(() => {
    const id = setInterval(() => setUsers((u) => u + Math.ceil(Math.random() * 4)), 900);
    return () => clearInterval(id);
  }, []);

  const w = 100;
  const h = 40;
  const pts = series.map((v, i) => [(i / (series.length - 1)) * w, h - (v / 100) * h]);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join(" ");
  const area = `${line} L${w} ${h} L0 ${h} Z`;
  const lastPoint = pts[pts.length - 1];

  return (
    <div className="flex h-full flex-col gap-4">
      <Header title="Deploy · produto no ar" subtitle="Publicado, monitorado e evoluindo" />
      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Uptime" delay={0.05}><Counter to={99.9} decimals={1} suffix="%" /></Kpi>
        <Kpi label="Usuários ativos" delay={0.1}><span className="tabular-nums">{users.toLocaleString("pt-BR")}</span></Kpi>
        <Kpi label="Latência p95" delay={0.15}><Counter to={182} from={640} delay={0.2} suffix=" ms" /></Kpi>
      </div>
      <Panel title="Acessos em tempo real" aside={<span className="flex items-center gap-1.5 text-[10px] text-brand-2"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-2" />ao vivo</span>}>
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="h-[96px] w-full overflow-visible">
          <defs>
            <linearGradient id="deploy-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1f88c0" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#1f88c0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#deploy-area)" style={{ transition: "d .8s ease" }} />
          <path d={line} fill="none" stroke="#5cb8e8" strokeWidth="1.2" vectorEffect="non-scaling-stroke" style={{ transition: "d .8s ease" }} />
          <circle cx={lastPoint[0]} cy={lastPoint[1]} r="1.4" fill="#5cb8e8" style={{ transition: "cy .8s ease" }} />
        </svg>
      </Panel>
      <Panel title="Pipeline" className="flex-1">
        <div className="flex items-center">
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-1 items-center last:flex-none">
              <motion.div
                initial={{ backgroundColor: "rgba(255,255,255,0.06)", color: "#71717a" }}
                animate={{ backgroundColor: "rgba(31,136,192,0.22)", color: "#5cb8e8" }}
                transition={{ delay: 0.3 + i * 0.45, duration: 0.3 }}
                className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px]"
              >
                <Check className="h-3 w-3" />
                {s}
              </motion.div>
              {i < STEPS.length - 1 && (
                <div className="mx-1.5 h-px flex-1 overflow-hidden bg-white/10">
                  <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.45 + i * 0.45, duration: 0.4 }} className="h-full bg-brand-2" />
                </div>
              )}
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, ease }}
          className="mt-3 flex items-center gap-2 text-[11px] text-mute"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          v1.4.0 publicada · sem parar a produção
        </motion.div>
      </Panel>
    </div>
  );
}
