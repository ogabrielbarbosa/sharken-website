import type { ReactNode } from "react";

const features = [
  "Entregas novas toda semana",
  "Dev sênior dedicado com foco em IA",
  "Design incluso",
  "Pause ou cancele quando quiser",
  "Evals e observabilidade de modelos",
];

const guarantees = [
  { icon: "check" as const, title: "Teste por uma semana", body: "Se não gostar em 7 dias, 75% de volta, sem pergunta." },
  { icon: "pause" as const, title: "Pause quando quiser", body: "Paralise sua subscription temporariamente, sem estresse." },
];

const mvpItems: ReactNode[] = [
  "Design e dev inclusos",
  "Construído por devs sêniores",
  "30 dias de suporte pós-launch",
  <span key="slots" className="accent">Vagas limitadas</span>,
];

const phases = [
  { title: "Discovery", price: "Grátis", days: "2 dias", body: "Transformamos sua ideia em um plano detalhado em até 48h." },
  { title: "Prototyping", price: "$1,200", days: "1 semana", body: "Protótipo clicável pra você ver exatamente como vai parecer e funcionar." },
  { title: "Build", price: "$34,000 → $27,200", days: "4 semanas", body: "Zero ao launch, tudo coberto. Updates diários no seu portal." },
  { title: "Launch", price: "Quando você quiser", days: "Ongoing", body: "Standby com suporte rápido e os 30 dias de launch support inclusos." },
];

export default function Pricing() {
  return (
    <section style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div
        className="glow-bg"
        style={{ top: "40%", right: "10%", width: 600, height: 500, background: "oklch(0.5 0.24 258 / 0.3)" }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-eyebrow">Pricing</span>
          <h2
            style={{
              fontSize: "clamp(32px, 4.4vw, 60px)",
              lineHeight: 1.1,
              margin: "12px auto 20px",
              maxWidth: 900,
              color: "#eef2fb",
            }}
          >
            Preço simples, transparente
            <br />
            <span className="accent-gradient">e acessível.</span>
          </h2>
          <p style={{ fontSize: 16, color: "#8b94ae", margin: "0 auto", maxWidth: 620, lineHeight: 1.55 }}>
            Preço desenhado para <span className="accent">entregar qualidade superior</span> a qualquer outra agência,
            em qualquer nível de investimento.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            background: "linear-gradient(180deg, rgba(12,18,32,0.95), rgba(8,12,22,0.95))",
            border: "1px solid rgba(120,160,255,0.18)",
            borderRadius: 32,
            overflow: "hidden",
            boxShadow: "0 30px 80px oklch(0.3 0.22 258 / 0.3)",
          }}
        >
          <div style={{ padding: 44 }}>
            <h3 className="accent" style={{ fontSize: 22, margin: "0 0 16px", fontWeight: 600 }}>
              Starter
            </h3>
            <p style={{ fontSize: 13, color: "#8b94ae", lineHeight: 1.55, margin: "0 0 32px" }}>
              Uma membership. Desenvolvimento ilimitado para sistemas com IA já em produção.
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: 56, fontWeight: 600, color: "#eef2fb", letterSpacing: "-0.03em" }}>$3,500</span>
              <span style={{ fontSize: 15, color: "#8b94ae" }}>/ mês</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "oklch(0.78 0.18 150)",
                  boxShadow: "0 0 8px oklch(0.78 0.18 150)",
                  animation: "pulse 1.6s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: 13, color: "#b8c0d4" }}>118 features em produção nos últimos 7 dias</span>
              <span style={{ fontSize: 11, color: "#6b7390" }}>ⓘ</span>
            </div>

            <div style={{ display: "grid", gap: 10, marginBottom: 24 }}>
              {[
                { name: "Ultra", meta: "32 tarefas / mês", delta: "+ $4,000" },
                { name: "Enterprise", meta: "64 tarefas / mês", delta: "+ $10,500" },
              ].map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    background: "rgba(8,12,22,0.6)",
                    border: "1px solid rgba(120,160,255,0.1)",
                    borderRadius: 14,
                  }}
                >
                  <div>
                    <span style={{ fontSize: 14, color: "#eef2fb", fontWeight: 600 }}>{t.name}</span>
                    <span style={{ fontSize: 12, color: "#8b94ae", marginLeft: 10 }}>{t.meta}</span>
                  </div>
                  <span style={{ fontSize: 13, color: "#eef2fb", fontFamily: "'JetBrains Mono', monospace" }}>
                    {t.delta}
                  </span>
                </div>
              ))}
            </div>

            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Entrar agora
              <span style={{ display: "inline-block", transform: "rotate(-25deg)" }}>↗</span>
            </button>
          </div>

          <div
            style={{
              padding: 44,
              background:
                "linear-gradient(135deg, oklch(0.45 0.26 258), oklch(0.35 0.22 265) 60%, oklch(0.25 0.18 270))",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at 20% 30%, oklch(0.7 0.26 255 / 0.4), transparent 50%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
                  <path d="M4.5 16.5L12 2l7.5 14.5L12 20z" opacity="0.9" />
                </svg>
                <span style={{ fontSize: 16, color: "#fff", fontWeight: 600 }}>≈ 16 tarefas / mês</span>
              </div>

              <div style={{ display: "grid", gap: 14, marginBottom: 32 }}>
                {features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5">
                        <path d="M4 12l5 5L20 6" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 15, color: "#fff" }}>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {guarantees.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      padding: 18,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 14,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                          {b.icon === "check" ? (
                            <path d="M4 12l5 5L20 6" />
                          ) : (
                            <>
                              <rect x="6" y="5" width="3" height="14" />
                              <rect x="15" y="5" width="3" height="14" />
                            </>
                          )}
                        </svg>
                      </div>
                      <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>{b.title}</span>
                    </div>
                    <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.45 }}>
                      {b.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 20 }}>
          <div className="card card-lg" style={{ padding: 36 }}>
            <h3 className="accent" style={{ fontSize: 22, margin: "0 0 20px", fontWeight: 600 }}>
              Pacote MVP
            </h3>
            <div style={{ fontSize: 52, fontWeight: 600, color: "#eef2fb", letterSpacing: "-0.03em", margin: "0 0 8px" }}>
              $34,000
            </div>
            <div style={{ fontSize: 13, color: "#8b94ae", marginBottom: 20 }}>De São Paulo 🇧🇷</div>
            <div
              style={{
                display: "inline-block",
                padding: "6px 12px",
                background: "oklch(0.25 0.1 150 / 0.5)",
                border: "1px solid oklch(0.55 0.18 150 / 0.4)",
                borderRadius: 999,
                fontSize: 11,
                color: "oklch(0.82 0.18 150)",
                fontWeight: 600,
                marginBottom: 28,
              }}
            >
              ✓ Entregue em 6 semanas
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "grid", gap: 10 }}>
              {mvpItems.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#b8c0d4" }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "oklch(0.78 0.20 255)" }} />
                  {item}
                </li>
              ))}
            </ul>

            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Reservar meu slot
              <span style={{ display: "inline-block", transform: "rotate(-25deg)" }}>↗</span>
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {phases.map((p, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
                  <h4 style={{ fontSize: 18, margin: 0, color: "#eef2fb", fontWeight: 600 }}>{p.title}</h4>
                  <span className="accent" style={{ fontSize: 12, fontWeight: 500 }}>
                    • {p.price}
                  </span>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    color: "#8b94ae",
                    marginBottom: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="6" width="16" height="14" rx="2" />
                    <path d="M4 10h16M9 4v4M15 4v4" />
                  </svg>
                  {p.days}
                </div>
                <p style={{ fontSize: 12.5, color: "#8b94ae", lineHeight: 1.55, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
