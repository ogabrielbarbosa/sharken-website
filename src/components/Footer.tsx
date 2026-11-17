import Link from "next/link";
import { CITY, EMAIL, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/contact";
import { Logo } from "./Logo";
import { Divider } from "./ui";

type FooterLink = { label: string; href: string; external?: boolean };

const COLS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Serviços",
    links: [
      { label: "Desenvolvimento de software", href: "/#solucoes" },
      { label: "Landing pages", href: "/landing-pages" },
    ],
  },
  {
    title: "Links",
    links: [
      { label: "Instagram", href: INSTAGRAM_URL, external: true },
      { label: "WhatsApp", href: WHATSAPP_URL, external: true },
      { label: "Email", href: `mailto:${EMAIL}` },
      { label: "Política de privacidade", href: "/politica-de-privacidade" },
      { label: "Termos de uso", href: "/termos-de-uso" },
    ],
  },
];

const LINK_CLASS = "text-[13px] text-mute transition-colors hover:text-fg";

export function Footer() {
  return (
    <footer>
      <Divider />
      <div className="mx-auto grid max-w-[1440px] gap-12 border-x border-line px-6 py-16 sm:px-12 lg:grid-cols-[260px_1fr] lg:px-16">
        <div>
          <Logo className="h-[22px] w-auto text-fg" />
          <p className="mt-5 text-[13px] leading-relaxed text-dim">
            © 2026 Sharken · software house com engenharia acelerada por IA · feita no Brasil
          </p>
          <address className="mt-5 text-[13px] not-italic leading-relaxed text-dim">{CITY}</address>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:justify-self-end lg:gap-x-24">
          {COLS.map((c) => (
            <div key={c.title}>
              <div className="text-[13px] font-medium text-fg">{c.title}</div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/") && !l.href.startsWith("/#") ? (
                      <Link href={l.href} className={LINK_CLASS}>{l.label}</Link>
                    ) : (
                      <a
                        href={l.href}
                        className={LINK_CLASS}
                        {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
