import type { ReactNode } from "react";
import { WHATSAPP_URL } from "@/lib/contact";

/** Imagem da pasta /public/landing-pages/... (projeto entregue ou print de depoimento). */
export type Shot = { src: string; alt: string; name?: string; tag?: string };

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.82 14.13c-.25.69-1.45 1.32-2 1.4-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.69-.62-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.01 2.1 1.33 2.4 1.48.3.15.47.12.65-.07.17-.2.74-.87.94-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.12.08.72-.17 1.42Z" />
    </svg>
  );
}

/** Botão principal da página: abre o WhatsApp para pedir orçamento. */
export function QuoteButton({ children = "Solicitar orçamento", className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <a
      href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2696d2] ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

/** Moldura de navegador com três bolinhas e a "url". */
export function BrowserFrame({ url, children, className = "" }: { url?: string; children: ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col overflow-hidden border border-white/10 bg-[#0b0b0d] ${className}`}>
      <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-white/[0.07] px-3">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        {url && <span className="ml-3 truncate font-mono text-[10px] text-dim">{url}</span>}
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

/**
 * Esqueleto de landing page. Aparece no lugar das imagens enquanto
 * os arquivos não estão em /public/landing-pages. A semente varia o layout para
 * os blocos não ficarem todos iguais.
 */
export function PageSkeleton({ seed = 0, tall = false }: { seed?: number; tall?: boolean }) {
  const heroRight = seed % 2 === 0;
  const tint = ["from-brand/30", "from-[#5cb8e8]/25", "from-[#7fb0cb]/25"][seed % 3];
  const blocks = tall ? 5 : 2;
  return (
    <div aria-hidden className="flex h-full flex-col gap-5 bg-[#0e0e10] p-4">
      <div className="flex items-center justify-between">
        <span className="h-2 w-12 bg-white/25" />
        <span className="flex gap-2">
          <span className="h-1.5 w-6 bg-white/10" />
          <span className="h-1.5 w-6 bg-white/10" />
          <span className="h-3 w-12 rounded-full bg-brand/70" />
        </span>
      </div>
      <div className={`flex gap-3 ${heroRight ? "" : "flex-row-reverse"}`}>
        <div className="flex flex-1 flex-col gap-1.5 pt-2">
          <span className="h-2.5 w-[90%] bg-white/50" />
          <span className="h-2.5 w-[70%] bg-white/50" />
          <span className="mt-1 h-1.5 w-[85%] bg-white/15" />
          <span className="h-1.5 w-[60%] bg-white/15" />
          <span className="mt-2 h-4 w-20 rounded-full bg-brand" />
        </div>
        <div className={`aspect-[4/5] w-[38%] bg-gradient-to-b ${tint} to-white/[0.03]`} />
      </div>
      {Array.from({ length: blocks }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2 border-t border-white/[0.06] pt-4">
          <span className="mx-auto h-2 w-[55%] bg-white/30" />
          <div className="mt-1 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((k) => (
              <span key={k} className={`h-10 ${(i + k + seed) % 3 === 0 ? "bg-brand/20" : "bg-white/[0.05]"}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Mostra a imagem quando ela existe; senão, o esqueleto. */
export function ShotOrSkeleton({ shot, seed, tall, className = "" }: { shot?: Shot; seed: number; tall?: boolean; className?: string }) {
  if (!shot) return <PageSkeleton seed={seed} tall={tall} />;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={shot.src} alt={shot.alt} loading="lazy" className={`block w-full ${className}`} />
  );
}
