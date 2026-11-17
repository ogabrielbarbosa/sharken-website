import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

/** Moldura das páginas de texto legal (privacidade, termos): mesma nav/footer do site, coluna de leitura estreita. */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-[1440px] border-x border-line px-6 py-24 sm:px-12 lg:px-16">
        <article className="mx-auto max-w-[720px]">
          <h1 className="font-display text-[36px] font-medium tracking-[-0.02em] sm:text-[44px]">{title}</h1>
          <p className="mt-3 text-[13px] text-dim">Última atualização: {updated}</p>
          <div className="mt-12 space-y-5 text-[15px] leading-relaxed text-mute [&_a]:text-brand-2 [&_a:hover]:text-fg [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-[20px] [&_h2]:font-medium [&_h2]:text-fg [&_li]:mt-2 [&_strong]:font-medium [&_strong]:text-fg [&_ul]:list-disc [&_ul]:pl-5">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
