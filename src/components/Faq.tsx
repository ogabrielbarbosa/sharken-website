"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "./ui";

export type QaItem = { q: string; a: string };

const QA: QaItem[] = [
  {
    q: "Quanto custa tirar meu projeto do papel?",
    a: "Depende do escopo, das plataformas e das integrações. Como trabalhamos com engenharia acelerada por IA, o tempo de desenvolvimento cai, e isso aparece no investimento. Depois de uma conversa, você recebe uma proposta com escopo, prazo e valor fechados.",
  },
  {
    q: "Em quanto tempo meu MVP fica no ar?",
    a: "As primeiras entregas testáveis chegam em poucas semanas. O prazo total depende do escopo e é definido no planejamento, antes de qualquer linha de código.",
  },
  {
    q: "O código fica no nome da minha empresa?",
    a: "Sim. Repositórios, contas nas lojas, domínios e servidores ficam no nome da sua empresa desde o início. O produto é seu.",
  },
  {
    q: "Como vocês usam IA no desenvolvimento?",
    a: "Nossos engenheiros usam agentes de IA para acelerar testes, documentação, telas e integrações. As decisões de arquitetura e a revisão final são sempre de uma pessoa sênior.",
  },
  {
    q: "Vocês assinam acordo de confidencialidade?",
    a: "Sim. Se preferir, assinamos um NDA antes de você contar os detalhes da sua ideia.",
  },
  {
    q: "E depois do lançamento?",
    a: "O produto continua evoluindo. Seguimos com melhorias, novas funcionalidades e suporte, com prioridades definidas junto com você.",
  },
];

export function Faq({
  items = QA,
  title = "Dúvidas",
  subtitle = "Agende uma conversa gratuita, sem tecniquês.",
}: { items?: QaItem[]; title?: string; subtitle?: string }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="mx-auto grid w-full max-w-[1440px] gap-12 border-x border-line px-6 py-32 sm:px-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:px-16">
      <Reveal>
        <h2 className="font-display text-[36px] font-medium tracking-[-0.02em] sm:text-[40px]">{title}</h2>
        <p className="mt-4 text-[15px] text-mute">{subtitle}</p>
      </Reveal>
      <div className="divide-y divide-line border-y border-line">
        {items.map((item, i) => {
          const on = open === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(on ? -1 : i)}
                aria-expanded={on}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className={`text-[15px] font-medium transition-colors ${on ? "text-fg" : "text-fg/80 hover:text-fg"}`}>{item.q}</span>
                <motion.svg
                  viewBox="0 0 12 12"
                  className={`h-3 w-3 shrink-0 ${on ? "text-brand-2" : "text-mute"}`}
                  animate={{ rotate: on ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  fill="none"
                >
                  <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>
              <AnimatePresence initial={false}>
                {on && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[780px] pb-6 text-[15px] leading-relaxed text-mute">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
