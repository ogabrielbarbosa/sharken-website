"use client";

import { motion } from "motion/react";
import { ProcessDashboard } from "./hero/ProcessDashboard";
import { Arrow } from "./ui";
import { WHATSAPP_URL } from "@/lib/contact";
import { scrollToAnchor } from "./Nav";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative mx-auto grid w-full max-w-[1440px] border-x border-line lg:grid-cols-2">
      <div className="flex flex-col justify-between">
        <div className="px-6 pb-14 pt-16 sm:px-12 lg:px-16 lg:pt-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="font-display text-[15px] text-fg/90"
          >
            2 semanas para a primeira entrega no ar
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-6 max-w-[600px] font-display text-[40px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[56px]"
          >
            A software house de quem tem pressa de ver o produto no ar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-7 max-w-[600px] text-lg leading-relaxed text-mute"
          >
            Você quer seu produto rodando, não gerenciar desenvolvedor. A Sharken monta o time, cuida da
            tecnologia e entrega em semanas, sem tecniquês.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="grid grid-cols-1 border-t border-line sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
        >
          <a
            href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="group flex h-16 items-center justify-between bg-brand pl-6 pr-6 sm:pl-12 lg:pl-16 text-[15px] font-medium text-white transition-colors hover:bg-[#2696d2]"
          >
            Tirar minha ideia do papel
            <span className="flex h-8 w-8 items-center justify-center border border-white/40 transition-transform group-hover:translate-x-1">
              <Arrow className="h-3.5 w-3.5" />
            </span>
          </a>
          <a
            href="#metodo"
            onClick={(e) => scrollToAnchor(e, "/#metodo", "/")}
            className="group flex h-16 items-center justify-between border-l border-line bg-white/[0.04] px-6 text-[15px] text-fg transition-colors hover:bg-white/[0.07]"
          >
            Como trabalhamos
            <span className="flex h-8 w-8 items-center justify-center border border-white/20 text-mute transition-colors group-hover:text-fg">
              <Arrow className="h-3.5 w-3.5 rotate-90" />
            </span>
          </a>
        </motion.div>
      </div>

      <div className="glass-gradient relative overflow-hidden border-t border-line px-5 pb-16 pt-6 sm:px-6 lg:border-l lg:border-t-0">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-1/4 -top-1/4 h-[150%] w-[60%] rotate-12 bg-white/20 blur-3xl"
          animate={{ x: ["0%", "160%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative"
        >
          <ProcessDashboard />
        </motion.div>
      </div>
    </section>
  );
}
