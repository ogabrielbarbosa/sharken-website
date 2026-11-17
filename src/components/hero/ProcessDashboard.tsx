"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { DeployStage, DesignStage, DevelopStage, DiscoveryStage } from "./stages";

const DURATION = 7000;

const icon = "h-3.5 w-3.5";
const TABS = [
  {
    id: "discovery",
    label: "Discovery",
    Stage: DiscoveryStage,
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
    ),
  },
  {
    id: "design",
    label: "Design",
    Stage: DesignStage,
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31" /><path d="M14 9.3V1.99" /><path d="M8.5 2h7" /><path d="M14 9.3a6.5 6.5 0 1 1-4 0" /><path d="M5.52 16h12.96" /></svg>
    ),
  },
  {
    id: "develop",
    label: "Develop",
    Stage: DevelopStage,
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg>
    ),
  },
  {
    id: "deploy",
    label: "Deploy",
    Stage: DeployStage,
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
    ),
  },
] as const;

const SIDEBAR = ["Visão geral", "Sprints", "Entregas", "Métricas", "Time"];

export function ProcessDashboard() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      setActive((a) => (a + 1) % TABS.length);
      setCycle((c) => c + 1);
    }, DURATION);
    return () => clearTimeout(id);
  }, [active, paused, cycle]);

  const select = (i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  };

  const { Stage } = TABS[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e] shadow-[0_40px_120px_-30px_rgba(0,0,0,.8)]">
        <div className="flex h-14 items-center justify-between border-b border-white/[0.06] px-5">
          <Logo className="h-[15px] w-auto text-fg" />
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-mute sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              projeto acompanhado em tempo real
            </span>
            <span className="h-7 w-7 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800" />
          </div>
        </div>
        <div className="grid grid-cols-[150px_1fr]">
          <aside className="hidden flex-col gap-1 border-r border-white/[0.06] p-3 sm:flex">
            {SIDEBAR.map((s, i) => (
              <span
                key={s}
                className={`rounded-md px-2.5 py-1.5 text-xs ${i === 0 ? "bg-white/[0.06] text-fg" : "text-dim"}`}
              >
                {s}
              </span>
            ))}
          </aside>
          <div className="col-span-2 h-[500px] p-5 pb-14 sm:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={TABS[active].id}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <Stage />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 left-1/2 z-10 -translate-x-1/2" role="tablist" aria-label="Etapas do método">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#141416]/90 p-1.5 shadow-2xl backdrop-blur-xl">
          {TABS.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={on}
                onClick={() => select(i)}
                className={`relative flex items-center gap-1.5 overflow-hidden rounded-full px-3.5 py-2 text-[13px] transition-colors ${on ? "text-fg" : "text-dim hover:text-mute"}`}
              >
                {on && (
                  <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-full bg-white/[0.08]" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
                )}
                {on && (
                  <motion.span
                    key={`${cycle}-${paused}`}
                    className="absolute bottom-0 left-3 right-3 h-px origin-left bg-brand-2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: paused ? 0 : 1 }}
                    transition={{ duration: paused ? 0 : DURATION / 1000, ease: "linear" }}
                  />
                )}
                <span className="relative">{t.icon}</span>
                <span className={`relative ${on ? "" : "hidden sm:inline"}`}>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
