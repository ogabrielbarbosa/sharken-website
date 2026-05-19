import type { ReactElement } from "react";

type ItemKey = "📉" | "🐛" | "🐌" | "📅";

const iconPaths: Record<ItemKey, ReactElement> = {
  "📉": <path d="M4 20 L20 20 M4 12 L10 16 L14 10 L20 14" stroke="currentColor" strokeWidth="2" fill="none" />,
  "🐛": (
    <g fill="currentColor">
      <circle cx="12" cy="13" r="5" />
      <path
        d="M8 8 L6 5 M16 8 L18 5 M5 13 H3 M21 13 H19 M6 18 L4 20 M18 18 L20 20"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </g>
  ),
  "🐌": (
    <path
      d="M3 16 Q3 10 9 10 L14 10 M14 10 Q18 10 18 14 Q18 18 14 18 L6 18 M14 6 L14 10"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  ),
  "📅": (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="6" width="16" height="14" rx="2" />
      <path d="M4 10 H20 M9 4 V8 M15 4 V8" />
    </g>
  ),
};

const items: { icon: ItemKey; title: string; body: string }[] = [
  { icon: "📉", title: "Trabalho não vira receita", body: "O que vocês entregam não mexe nas métricas que realmente importam." },
  { icon: "🐛", title: "Cada release quebra algo", body: "Fluxos frágeis se quebram e ninguém sabe explicar por quê." },
  { icon: "🐌", title: "App lento, usuário sai", body: "Conversão, retenção e demos sofrem; o backend virou desculpa." },
  { icon: "📅", title: "Roadmap arrasta há meses", body: "Demos perdidas, prazos estourados, tudo parece levar uma eternidade." },
];

export default function Problems() {
  return (
    <section style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(32px, 4.2vw, 56px)",
            lineHeight: 1.1,
            margin: "0 0 60px",
            maxWidth: 900,
            color: "#eef2fb",
          }}
        >
          Seu sistema está <span className="accent-gradient">te segurando</span>, e isso está
          <br />
          custando receita.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {items.map((it, i) => (
            <div key={i} className="card" style={{ padding: 28 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "oklch(0.35 0.22 258 / 0.3)",
                  border: "1px solid oklch(0.6 0.24 258 / 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "oklch(0.78 0.20 255)",
                  marginBottom: 20,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24">
                  {iconPaths[it.icon]}
                </svg>
              </div>
              <h3 style={{ fontSize: 18, margin: "0 0 10px", color: "#eef2fb", lineHeight: 1.25 }}>{it.title}</h3>
              <p style={{ fontSize: 13, color: "#8b94ae", lineHeight: 1.55, margin: 0 }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
