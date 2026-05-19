import { Fragment } from "react";
import SharkLogo from "./SharkLogo";

const steps = [
  { when: "Agora", label: "Pronto para review", color: "oklch(0.78 0.18 150)", bright: true },
  { when: "3h atrás", label: "Em fila", color: "oklch(0.78 0.18 220)" },
  { when: "15h atrás", label: "Em progresso", color: "oklch(0.78 0.16 65)" },
  { when: "18h atrás", label: "Em progresso", color: "oklch(0.78 0.16 65)" },
];

const plans = [
  { color: "oklch(0.68 0.22 200)", name: "Starter", price: "$3,500 / mês", action: "Downgrade" },
  { color: "oklch(0.68 0.22 260)", name: "Ultra", price: "$7,500 / mês", action: "Selecionado", selected: true },
  { color: "oklch(0.68 0.22 30)", name: "Enterprise", price: "$14,000 / mês", action: "Upgrade" },
];

const pipeline = ["user", "chat", "ai", "code", "deploy"] as const;

export default function Process() {
  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div className="card card-lg">
          <h3 style={{ fontSize: 24, margin: "0 0 8px", color: "#eef2fb" }}>Progresso que você vê</h3>
          <p style={{ fontSize: 13, color: "#8b94ae", margin: "0 0 28px", lineHeight: 1.55 }}>
            O que entrou em produção, o que vem a seguir, e por que importa — tudo no seu portal.
          </p>

          <div style={{ display: "grid", gap: 12 }}>
            {steps.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 18px",
                  background: s.bright ? "rgba(15,22,40,0.9)" : "rgba(8,12,22,0.5)",
                  border: s.bright
                    ? "1px solid oklch(0.6 0.24 258 / 0.3)"
                    : "1px solid rgba(120,160,255,0.1)",
                  borderRadius: 14,
                }}
              >
                <span style={{ fontSize: 13, color: s.bright ? "#eef2fb" : "#8b94ae", fontWeight: s.bright ? 600 : 400 }}>
                  {s.when}
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 11,
                    color: s.color,
                    padding: "4px 10px",
                    background: "oklch(0.15 0.05 250 / 0.6)",
                    borderRadius: 999,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.color }} />
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card card-lg">
          <h3 style={{ fontSize: 24, margin: "0 0 8px", color: "#eef2fb" }}>Crescer sem amarras</h3>
          <p style={{ fontSize: 13, color: "#8b94ae", margin: "0 0 28px", lineHeight: 1.55 }}>
            Sem retainer, sem contrato mínimo. Vire membro pra desenvolvimento contínuo. Pause ou cancele a hora que
            quiser.
          </p>

          <div style={{ display: "grid", gap: 10 }}>
            {plans.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 16px",
                  background: p.selected ? "rgba(15,22,40,0.9)" : "rgba(8,12,22,0.5)",
                  border: p.selected
                    ? "1px solid oklch(0.6 0.24 258 / 0.4)"
                    : "1px solid rgba(120,160,255,0.1)",
                  borderRadius: 14,
                }}
              >
                <div style={{ width: 3, height: 32, background: p.color, borderRadius: 2 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, color: "#eef2fb", fontWeight: 600 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: "#8b94ae" }}>{p.price}</div>
                </div>
                {p.selected ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 12px",
                      background: "oklch(0.25 0.1 150 / 0.5)",
                      border: "1px solid oklch(0.55 0.18 150 / 0.4)",
                      borderRadius: 999,
                      fontSize: 11,
                      color: "oklch(0.78 0.18 150)",
                      fontWeight: 600,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                    {p.action}
                  </div>
                ) : (
                  <button
                    style={{
                      padding: "6px 14px",
                      background: "rgba(15,22,40,0.8)",
                      border: "1px solid rgba(120,160,255,0.2)",
                      borderRadius: 999,
                      fontSize: 11,
                      color: "#b8c0d4",
                      cursor: "pointer",
                    }}
                  >
                    {p.action}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="card card-lg" style={{ gridColumn: "1 / -1", padding: 36 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40, alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: 24, margin: "0 0 10px", color: "#eef2fb" }}>Recupere seu tempo</h3>
              <p style={{ fontSize: 13, color: "#8b94ae", margin: 0, lineHeight: 1.55 }}>
                Invista seu tempo onde o negócio precisa. A gente cuida de PM, QA e sequência do roadmap pra você
                vender, contratar e crescer.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "28px 40px",
                background: "rgba(8,12,22,0.7)",
                border: "1px solid rgba(120,160,255,0.12)",
                borderRadius: 18,
                position: "relative",
              }}
            >
              {pipeline.map((step, i) => (
                <Fragment key={step}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      border: i === 2 ? "2px solid oklch(0.78 0.20 255)" : "1px solid rgba(120,160,255,0.3)",
                      background:
                        i === 2
                          ? "linear-gradient(135deg, oklch(0.35 0.22 258), oklch(0.55 0.26 258))"
                          : "rgba(8,12,22,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 2,
                      boxShadow: i === 2 ? "0 0 20px oklch(0.55 0.26 258 / 0.6)" : "none",
                    }}
                  >
                    {i === 2 ? (
                      <SharkLogo size={22} />
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8c0d4" strokeWidth="2">
                        {i === 0 && (
                          <>
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                          </>
                        )}
                        {i === 1 && <path d="M4 6h16v10H7l-3 3z" />}
                        {i === 3 && <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" />}
                        {i === 4 && (
                          <>
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                            <path d="M3 10h18" />
                          </>
                        )}
                      </svg>
                    )}
                  </div>
                  {i < 4 && <div style={{ flex: 1, height: 1, borderTop: "1.5px dashed rgba(120,160,255,0.25)" }} />}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
