"use client";

import { useState } from "react";

const faqs = [
  { q: "Como eu começo?", a: "Você agenda um discovery de 30 min pelo formulário. Em 24h mandamos um plano inicial com escopo, timeline e um orçamento claro." },
  { q: "Em que tipo de sistema vocês trabalham?", a: "Foco em produtos SaaS e sistemas internos que têm IA como parte core — agentes, RAG, automação, fine-tunes. Stack moderna: Next, React Native, Python, Postgres, AWS." },
  { q: "Como vocês trabalham?", a: "Squads de 2 a 4 pessoas, async-first, standups semanais, updates diários no portal. Você vê o progresso em tempo real — nada de caixa-preta." },
  { q: "Onde vocês ficam?", a: "Base em São Paulo, mas operamos 100% remoto com clientes globais. Reuniões síncronas em fuso que funciona pra você." },
  { q: "O que é uma feature?", a: "Uma unidade de trabalho estimada entre 4 e 16 horas. Pode ser uma tela nova, um endpoint, um agente, um job de background, um ajuste de modelo." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        padding: "22px 28px",
        background: open ? "rgba(15,22,40,0.8)" : "rgba(10,14,24,0.5)",
        border: "1px solid rgba(120,160,255,0.12)",
        borderRadius: 18,
        cursor: "pointer",
        transition: "background 180ms ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 15, color: "#eef2fb", fontWeight: 500 }}>{q}</span>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: "1px solid rgba(120,160,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 200ms ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            color: "oklch(0.78 0.20 255)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 4v16M4 12h16" />
          </svg>
        </div>
      </div>
      {open && <p style={{ fontSize: 13, color: "#8b94ae", lineHeight: 1.6, margin: "16px 0 0" }}>{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="contato" style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <span className="section-eyebrow">FAQ</span>
        <h2
          style={{
            fontSize: "clamp(32px, 4.2vw, 56px)",
            lineHeight: 1.1,
            margin: "12px 0 60px",
            maxWidth: 900,
            color: "#eef2fb",
          }}
        >
          Saiba mais sobre <span className="accent-gradient">trabalhar com a gente.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, alignItems: "start" }}>
          <div style={{ display: "grid", gap: 10 }}>
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>

          <div className="card card-lg" style={{ padding: 36, position: "sticky", top: 120 }}>
            <h3 style={{ fontSize: 28, margin: "0 0 20px", color: "#eef2fb", lineHeight: 1.2 }}>
              Comece em 24 horas.
            </h3>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center", marginBottom: 16 }}>
              Começar projeto
              <span style={{ display: "inline-block", transform: "rotate(-25deg)" }}>↗</span>
            </button>
            <div
              style={{
                padding: 16,
                background: "rgba(8,12,22,0.6)",
                border: "1px solid rgba(120,160,255,0.12)",
                borderRadius: 14,
                display: "flex",
                gap: 12,
                alignItems: "start",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "oklch(0.35 0.22 258 / 0.4)",
                  border: "1px solid oklch(0.6 0.24 258 / 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "oklch(0.78 0.20 255)",
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 13, color: "#eef2fb", fontWeight: 600, marginBottom: 4 }}>Precisa de NDA?</div>
                <div style={{ fontSize: 12, color: "#8b94ae", lineHeight: 1.5 }}>
                  Você recebe um link pra assinar um NDA padrão direto por email, em segundos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
