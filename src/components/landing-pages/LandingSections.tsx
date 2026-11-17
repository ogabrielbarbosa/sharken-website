"use client";

import { motion } from "motion/react";
import { Check, Cross, Reveal } from "../ui";
import { ExamplePage } from "./ExamplePage";
import { BrowserFrame, PageSkeleton, QuoteButton, type Shot } from "./shared";

const ease = [0.22, 1, 0.36, 1] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-2">{children}</p>;
}

/* ───────────────────────── Hero ───────────────────────── */

export function LpHero() {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] overflow-hidden border-x border-line px-6 pb-24 pt-24 text-center sm:px-12 sm:pb-32 sm:pt-32">
      {/* brilho azul e grade de pontos, bem discretos */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] h-[520px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(31,136,192,.28),rgba(31,136,192,.06)_60%,transparent)]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <div className="relative mx-auto flex max-w-[920px] flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease }}
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-2"
        >
          Landing pages que vendem
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-7 font-display text-[40px] font-medium leading-[1.06] tracking-[-0.03em] sm:text-[64px] lg:text-[72px]"
        >
          Encante os olhos dos seus clientes com{" "}
          <span className="text-gradient-sky">a apresentação da sua empresa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-8 max-w-[640px] text-lg leading-relaxed text-mute"
        >
          Atraia os clientes que estão prontos para pagar pelo seu serviço, com uma página profissional que{" "}
          <span className="text-fg">realmente vende para você.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <QuoteButton className="px-8 py-3.5" />
          <a
            href="#saiba-mais"
            className="rounded-full border border-white/10 bg-black px-8 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/30"
          >
            Saiba mais
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 flex items-center gap-2 text-[13px] text-dim"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" />
          Resposta rápida pelo WhatsApp · entrega em 3 a 7 dias
        </motion.p>
      </div>
    </section>
  );
}

/* ───────────────────────── Dor ───────────────────────── */

export function LpPain() {
  return (
    <section id="saiba-mais" className="mx-auto grid w-full max-w-[1440px] scroll-mt-16 border-x border-line lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16 lg:py-28">
        <Reveal>
          <Eyebrow>Primeira impressão</Eyebrow>
          <h2 className="mt-5 max-w-[560px] font-display text-[32px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[42px]">
            Já ouviu essa expressão: “As pessoas julgam pela sua aparência”?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[540px] text-[16px] leading-relaxed text-mute">
            A sua presença online vale muito mais do que a sua especialização, existem inúmeros profissionais que fazem o
            mesmo serviço que você.
          </p>
          <p className="mt-4 max-w-[540px] text-[16px] leading-relaxed text-fg/90">
            Para se destacar e mostrar que o seu serviço é de extrema qualidade, você precisa de uma página que atraia
            clientes para o seu negócio.
          </p>
        </Reveal>
      </div>
      <div className="relative flex items-center border-t border-line bg-card p-6 sm:p-12 lg:border-l lg:border-t-0">
        <Reveal className="w-full">
          <ExamplePage />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── Depoimentos ───────────────────────── */

export function LpTestimonials({ shots }: { shots: Shot[] }) {
  // Sem prints ainda: 7 cartões de exemplo com alturas variadas, como no layout original.
  const slots: (Shot | null)[] = shots.length ? shots : Array.from({ length: 7 }, () => null);
  const heights = [300, 240, 340, 260, 200, 280, 320];
  return (
    <section className="mx-auto w-full max-w-[1440px] border-x border-line px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <Reveal className="max-w-[760px]">
        <Eyebrow>Depoimentos</Eyebrow>
        <h2 className="mt-5 font-display text-[30px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[40px]">
          O que nossos clientes estão falando dos resultados que tiveram com nossos serviços
        </h2>
      </Reveal>
      <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {slots.map((s, i) => (
          <motion.figure
            key={s?.src ?? `slot-${i}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease }}
            className="break-inside-avoid overflow-hidden border border-line bg-card"
          >
            {s ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={s.src} alt={s.alt} loading="lazy" className="block w-full" />
            ) : (
              <ChatPlaceholder height={heights[i % heights.length]} seed={i} />
            )}
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

/** Esqueleto de print de conversa, até os prints reais irem para /public/landing-pages/depoimentos. */
function ChatPlaceholder({ height, seed }: { height: number; seed: number }) {
  const bubbles = Math.max(3, Math.floor(height / 60));
  return (
    <div aria-hidden className="flex flex-col gap-2.5 p-4" style={{ height }}>
      <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
        <span className="h-7 w-7 rounded-full bg-white/10" />
        <span className="h-2 w-20 bg-white/20" />
      </div>
      {Array.from({ length: bubbles }).map((_, k) => {
        const mine = (k + seed) % 3 === 2;
        return (
          <span
            key={k}
            className={`h-7 ${mine ? "ml-auto bg-brand/25" : "bg-white/[0.06]"}`}
            style={{ width: `${45 + ((k * 17 + seed * 11) % 35)}%` }}
          />
        );
      })}
    </div>
  );
}

/* ───────────────────────── O que você prefere? ───────────────────────── */

const PAINS = [
  "Muito tempo respondendo as mesmas dúvidas no WhatsApp, sem sobrar tempo para atender bem quem realmente quer comprar.",
  "Equipe sobrecarregada, esquecendo de responder e confirmar, perdendo clientes no meio do caminho.",
  "Não é encontrado facilmente pelos clientes, e quando encontrado, não sabem o que esperar do seu atendimento.",
];

const GAINS = [
  "Mais liberdade de tempo, se preocupando apenas em vender para clientes que pagam bem e estão interessados no seu serviço.",
  "Clientes que valorizam seu trabalho, pela confiança e qualidade que você passa através da sua apresentação.",
  "Equipe com o tempo mais produtivo, fechando com os clientes certos.",
];

function XMark({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" className={className} fill="none" aria-hidden>
      <path d="M4 4l6 6M10 4l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function LpCompare() {
  return (
    <section className="mx-auto w-full max-w-[1440px] border-x border-line">
      <div className="px-6 pb-14 pt-24 text-center sm:px-12 lg:pt-32">
        <Reveal>
          <h2 className="font-display text-[36px] font-medium tracking-[-0.02em] sm:text-[48px]">O que você prefere?</h2>
        </Reveal>
      </div>
      <div className="grid gap-px border-t border-line bg-line md:grid-cols-2">
        <div className="relative bg-bg px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
          <h3 className="font-display text-[24px] font-medium leading-tight text-mute sm:text-[28px]">
            Continuar sofrendo com o seu negócio
          </h3>
          <ul className="mt-10 flex flex-col gap-7">
            {PAINS.map((t, i) => (
              <Reveal key={t} delay={i * 0.08}>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-dim">
                    <XMark />
                  </span>
                  <span className="text-[15px] leading-relaxed text-mute">{t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden bg-bg px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
          <Cross at={["tl", "bl"]} className="hidden md:block" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(31,136,192,.35),transparent)]"
          />
          <h3 className="relative font-display text-[24px] font-medium leading-tight sm:text-[28px]">
            Ou vender <span className="text-gradient-sky">muito mais?</span>
          </h3>
          <ul className="relative mt-10 flex flex-col gap-7">
            {GAINS.map((t, i) => (
              <Reveal key={t} delay={0.1 + i * 0.08}>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check />
                  </span>
                  <span className="text-[15px] leading-relaxed text-fg/90">{t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Estatística ───────────────────────── */

export function LpStat() {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] overflow-hidden border-x border-line px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="text-gradient-sky font-display text-[120px] font-normal leading-[0.85] tracking-[-0.05em] sm:text-[200px]"
        >
          12%
        </motion.div>
        <Reveal delay={0.15}>
          <h2 className="font-display text-[26px] font-medium leading-[1.2] tracking-[-0.02em] sm:text-[34px]">
            De todas as empresas que possuem site no Brasil, apenas 12% vendem de maneira estruturada.
          </h2>
          <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-mute">
            Na era digital que estamos, é mais que necessário que você tenha o seu serviço de maneira apresentável.
          </p>
          {/* TODO: confirmar a fonte exata do dado antes de publicar */}
          <p className="mt-4 font-mono text-[11px] text-dim">Fonte: McKinsey, 2024</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── Projetos ───────────────────────── */

export function LpProjects({ shots }: { shots: Shot[] }) {
  const slots: (Shot | null)[] = shots.length ? shots.slice(0, 6) : Array.from({ length: 6 }, () => null);
  return (
    <section id="projetos" className="mx-auto w-full max-w-[1440px] scroll-mt-16 border-x border-line">
      <div className="px-6 pb-14 pt-24 sm:px-12 lg:px-16 lg:pt-32">
        <Reveal className="max-w-[760px]">
          <Eyebrow>Portfólio</Eyebrow>
          <h2 className="mt-5 font-display text-[30px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[40px]">
            Alguns projetos que continuam gerando milhares de reais para nossos clientes
          </h2>
          <p className="mt-4 text-[15px] text-mute">Passe o mouse para ver a página inteira.</p>
        </Reveal>
      </div>
      <div className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {slots.map((s, i) => (
          <motion.div
            key={s?.src ?? `proj-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
            className="group relative bg-bg p-5 sm:p-6"
          >
            {i > 0 && <Cross at="tl" className="hidden lg:block" />}
            <BrowserFrame className="h-[380px]">
              <div className="absolute inset-0 overflow-hidden">
                {s ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-[object-position] duration-[9s] ease-linear group-hover:object-bottom"
                  />
                ) : (
                  <PageSkeleton seed={i} tall />
                )}
              </div>
            </BrowserFrame>
            {s?.name && (
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <span className="text-[14px] font-medium text-fg">{s.name}</span>
                {s.tag && <span className="font-mono text-[11px] text-dim">{s.tag}</span>}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── Mais clientes, atendendo menos ───────────────────────── */

export function LpShowcase() {
  return (
    <section className="mx-auto grid w-full max-w-[1440px] border-x border-line lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16 lg:py-28">
        <Reveal>
          <h2 className="max-w-[580px] font-display text-[32px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[44px]">
            O que você acha de ter mais clientes atendendo menos?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[540px] text-[16px] leading-relaxed text-mute">
            Uma página explicativa sobre o seu serviço, que esclarece todas as dúvidas dos seus clientes, aumentando sua
            produtividade para atender melhor os clientes que pagam bem.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <QuoteButton className="mt-9" />
        </Reveal>
      </div>
      <div className="relative h-[560px] overflow-hidden border-t border-line bg-[#060607] lg:h-[640px] lg:border-l lg:border-t-0">
        {/* grade de pontos bem apagada, só no centro */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(closest-side,black,transparent)]"
        />
        {/* brilho quente atrás do celular, puxando a cor da página da cliente */}
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-[58%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(159,65,28,.42),rgba(159,65,28,.14)_45%,rgba(31,136,192,.08)_70%,transparent)]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* anéis concêntricos que se expandem devagar */}
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute bottom-[18%] left-1/2 h-[260px] w-[260px] -translate-x-1/2 translate-y-1/2 rounded-full border border-white/[0.08]"
            animate={{ scale: [1, 3.2], opacity: [0.7, 0] }}
            transition={{ duration: 9, repeat: Infinity, delay: i * 3, ease: "linear" }}
          />
        ))}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
          className="absolute inset-0 flex items-end justify-center"
        >
          <motion.div
            whileHover={{ y: -12 }}
            transition={{ duration: 0.5, ease }}
            className="h-[500px] lg:h-[580px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/landing-pages/exemplo/celular-links.webp"
              alt="Página de links da Dra. Beatriz Silva no celular, com botões para agendar consulta e acessar o site"
              className="h-full w-auto drop-shadow-[0_30px_50px_rgba(0,0,0,.55)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
