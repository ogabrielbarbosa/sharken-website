"use client";

import { motion } from "motion/react";
import { Reveal } from "./ui";

const TICKS = 61;
const r2d = (n: number) => Math.round(n * 100) / 100;

/* Arco de marcações que "acende" da esquerda para a direita, como um velocímetro. */
function Gauge() {
  const cx = 500;
  const cy = 520;
  return (
    <svg viewBox="0 0 1000 560" className="absolute inset-x-0 top-0 mx-auto h-full w-full max-w-[980px]" aria-hidden>
      {Array.from({ length: TICKS }).map((_, i) => {
        const a = Math.PI + (i / (TICKS - 1)) * Math.PI;
        const long = i % 5 === 0;
        const r1 = 430;
        const r2 = long ? 470 : 455;
        return (
          <motion.line
            key={i}
            x1={r2d(cx + Math.cos(a) * r1)}
            y1={r2d(cy + Math.sin(a) * r1)}
            x2={r2d(cx + Math.cos(a) * r2)}
            y2={r2d(cy + Math.sin(a) * r2)}
            stroke="#5cb8e8"
            strokeWidth={long ? 2.5 : 1.5}
            strokeLinecap="round"
            initial={{ opacity: 0.08 }}
            whileInView={{ opacity: i < TICKS * 0.82 ? (long ? 0.7 : 0.4) : 0.1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.02, duration: 0.3 }}
          />
        );
      })}
    </svg>
  );
}

export function Metric() {
  return (
    <section className="mx-auto w-full max-w-[1440px] border-x border-line px-6 pt-20">
      <Reveal className="text-center">
        <h2 className="font-display text-[30px] font-medium tracking-[-0.02em] sm:text-[40px]">
          Dias, não meses: do primeiro café ao primeiro usuário
        </h2>
        <p className="mt-4 text-[15px] text-mute">
          [X] semanas da ideia ao MVP publicado · até 40% mais econômico que o desenvolvimento tradicional
        </p>
      </Reveal>
      <div className="relative mx-auto mt-10 h-[340px] max-w-[980px] sm:h-[420px]">
        <Gauge />
        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center">
          <Reveal delay={0.3}>
            <span className="font-display text-lg text-mute">para a primeira entrega no ar</span>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-gradient-sky mt-4 font-display text-[72px] font-normal leading-none tracking-[-0.03em] sm:text-[112px]"
          >
            2 semanas
          </motion.div>
        </div>
      </div>
    </section>
  );
}
