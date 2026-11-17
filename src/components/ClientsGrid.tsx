"use client";

import { motion } from "motion/react";
import { Cross } from "./ui";

export type ClientLogo = { name: string; src: string; height: number };

const COLS = 3;

export function ClientsGrid({ logos }: { logos: ClientLogo[] }) {
  // Completa a grade com células vazias para fechar as linhas (mínimo de 2 linhas).
  const total = Math.max(COLS * 2, Math.ceil(logos.length / COLS) * COLS);
  const cells: (ClientLogo | null)[] = Array.from({ length: total }, (_, i) => logos[i] ?? null);
  const lastRow = total / COLS - 1;

  return (
    <section id="setores" aria-label="Empresas parceiras" className="mx-auto w-full max-w-[1440px] border-x border-line">
      <div className="relative grid grid-cols-2 gap-px bg-line md:grid-cols-3">
        {cells.map((c, i) => {
          const row = Math.floor(i / COLS);
          const col = i % COLS;
          const corners = [
            ...(row > 0 || col > 0 ? (["tl"] as const) : []),
            ...(row > 0 && col === COLS - 1 ? (["tr"] as const) : []),
            ...(row > 0 && row === lastRow && col > 0 ? (["bl"] as const) : []),
          ];
          return (
            <motion.div
              key={c?.src ?? `empty-${i}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative flex h-24 items-center justify-center bg-bg px-6"
            >
              {c && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.src}
                  alt={c.name}
                  loading="lazy"
                  style={{ height: c.height }}
                  className="w-auto max-w-[70%] object-contain opacity-50 brightness-0 invert transition-opacity duration-300 group-hover:opacity-100"
                />
              )}
              {corners.length > 0 && (
                <span className="hidden md:block">
                  <Cross at={corners} />
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
