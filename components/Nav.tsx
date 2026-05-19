"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SharkLogo from "./SharkLogo";

const links = [
  { label: "Home", href: "/" },
  { label: "Pacote MVP", href: "/pacote-mvp" },
  { label: "Auditoria IA", href: "/auditoria-ia" },
  { label: "Join", href: "/join" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0 24px",
        pointerEvents: "none",
      }}
    >
      <nav
        style={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 8px 8px 20px",
          background: "rgba(10,14,24,0.7)",
          border: "1px solid rgba(120,160,255,0.18)",
          borderRadius: 999,
          backdropFilter: "blur(18px)",
          boxShadow: "0 20px 50px rgba(5,10,30,0.5)",
          width: "min(880px, 100%)",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <SharkLogo size={32} />
          <span
            style={{
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#e7ecf5",
            }}
          >
            Sharken
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 14 }}>
          {links.map((it) => {
            const active = pathname === it.href;
            return (
              <Link
                key={it.label}
                href={it.href}
                style={{
                  color: active ? "oklch(0.78 0.20 255)" : "#b8c0d4",
                  borderBottom: active
                    ? "1.5px solid oklch(0.78 0.20 255)"
                    : "1.5px solid transparent",
                  paddingBottom: 2,
                  fontWeight: 500,
                  transition: "color 150ms ease",
                }}
              >
                {it.label}
              </Link>
            );
          })}
        </div>

        <a href="#contato" className="btn-primary" style={{ padding: "10px 18px", fontSize: 13 }}>
          Começar projeto
          <span style={{ display: "inline-block", transform: "rotate(-25deg)" }}>↗</span>
        </a>
      </nav>
    </div>
  );
}
