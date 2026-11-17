import { Reveal } from "./ui";

/* Depoimentos provisórios: troque pelos reais (nome, cargo, empresa e foto). */
const ITEMS = Array.from({ length: 7 }, () => ({
  quote: "[Frase do depoimento]",
  name: "[Nome]",
  role: "[Cargo]",
  company: "[EMPRESA]",
}));

function Card({ t }: { t: (typeof ITEMS)[number] }) {
  return (
    <figure className="border border-white/[0.06] bg-card-2 p-6">
      <blockquote className="text-[17px] text-fg">→ {t.quote}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-white/[0.07] pt-5">
        <span className="h-8 w-8 shrink-0 rounded-full bg-zinc-700" />
        <div>
          <div className="text-[13px] text-fg">{t.name}</div>
          <div className="text-[12px] text-dim">{t.role}</div>
          <div className="mt-0.5 font-mono text-[10px] tracking-[0.2em] text-dim">{t.company}</div>
        </div>
      </figcaption>
    </figure>
  );
}

function Column({ offset, duration, className = "" }: { offset: number; duration: number; className?: string }) {
  const list = [...ITEMS.slice(offset), ...ITEMS.slice(0, offset)];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-y flex flex-col gap-6" style={{ ["--duration" as string]: `${duration}s` }}>
        {[...list, ...list].map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-[1440px] border-x border-line px-6 pb-8 pt-32">
      <Reveal className="text-center">
        <h2 className="font-display text-[36px] font-medium tracking-[-0.02em] sm:text-[40px]">O que nossos clientes dizem</h2>
      </Reveal>
      <div className="relative mx-auto mt-14 grid h-[620px] max-w-[1008px] gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] md:grid-cols-3">
        <Column offset={0} duration={46} />
        <Column offset={3} duration={38} className="hidden md:block" />
        <Column offset={5} duration={52} className="hidden md:block" />
      </div>
    </section>
  );
}
