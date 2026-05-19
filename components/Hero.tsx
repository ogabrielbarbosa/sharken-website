export default function Hero() {
  return (
    <section style={{ position: "relative", padding: "140px 24px 80px", overflow: "hidden" }}>
      <div
        className="glow-bg"
        style={{ top: "-10%", left: "10%", width: 600, height: 600, background: "oklch(0.45 0.26 258 / 0.35)" }}
      />
      <div
        className="glow-bg"
        style={{ top: "20%", right: "-5%", width: 500, height: 500, background: "oklch(0.55 0.24 265 / 0.25)" }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(120,160,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(120,160,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 60,
          alignItems: "center",
          position: "relative",
        }}
      >
        <div>
          <h1 style={{ fontSize: "clamp(40px, 5.2vw, 72px)", lineHeight: 1.05, margin: 0, color: "#eef2fb" }}>
            Seu software deveria <span className="accent-gradient">acelerar</span> o negócio,
            <br /> não travar ele.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "#8b94ae", margin: "28px 0 36px", maxWidth: 520 }}>
            Somos o time que founders chamam para destravar débito técnico, simplificar sistemas complexos e colocar
            IA pra rodar — de verdade, em produção.
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <a href="#contato" className="btn-primary">
              Começar projeto
              <span style={{ display: "inline-block", transform: "rotate(-25deg)" }}>↗</span>
            </a>
          </div>

          <div style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 16px",
                background: "rgba(15,22,40,0.7)",
                border: "1px solid rgba(120,160,255,0.15)",
                borderRadius: 999,
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, oklch(0.72 0.20 85), oklch(0.55 0.22 50))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#2a1d00",
                }}
              >
                ★
              </div>
              <span style={{ fontSize: 13, color: "#e7ecf5", fontWeight: 500 }}>Parceiro AWS Gold</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 16px 8px 8px",
                background: "rgba(15,22,40,0.7)",
                border: "1px solid rgba(120,160,255,0.15)",
                borderRadius: 999,
              }}
            >
              <div style={{ display: "flex" }}>
                {["#7a8bff", "#9a6bff", "#6be6ff", "#b5b9c8"].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: c,
                      border: "2px solid #0a0e18",
                      marginLeft: i === 0 ? 0 : -8,
                    }}
                  />
                ))}
              </div>
              <div style={{ display: "flex", gap: 2 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="oklch(0.82 0.18 85)">
                    <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.2 22 12 17.5 5.8 22l2.39-8.14L2 9.36h7.61z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: 12, color: "#e7ecf5", fontWeight: 600 }}>5.0</span>
              <span style={{ fontSize: 11, color: "#8b94ae" }}>de 196 reviews</span>
            </div>
          </div>
        </div>

        <div className="card card-lg" style={{ boxShadow: "0 30px 80px oklch(0.35 0.22 258 / 0.3)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 8 }}>
            <div>
              <h3 style={{ fontSize: 22, margin: 0, color: "#eef2fb" }}>
                118 features em produção <span className="accent">(últimos 7 dias)</span>
              </h3>
              <p style={{ fontSize: 13, color: "#8b94ae", margin: "8px 0 0" }}>
                Atualizações recentes do portal dos clientes.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 10px",
                border: "1px solid oklch(0.7 0.18 150 / 0.3)",
                borderRadius: 999,
                background: "oklch(0.2 0.08 150 / 0.3)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "oklch(0.72 0.18 150)",
                  boxShadow: "0 0 8px oklch(0.72 0.18 150)",
                  animation: "pulse 1.6s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: 10, letterSpacing: "0.15em", color: "oklch(0.82 0.15 150)", fontWeight: 600 }}>
                LIVE
              </span>
            </div>
          </div>

          <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
            {[
              { title: "Pipeline RAG com reranker custom", tag: "IA", tagColor: "oklch(0.78 0.20 255)", when: "2h atrás" },
              { title: "Auth unificado web + mobile", tag: "Infra", tagColor: "oklch(0.72 0.16 180)", when: "1d atrás" },
              { title: "Dashboard de evals por cliente", tag: "Ops", tagColor: "oklch(0.78 0.16 85)", when: "2d atrás" },
              { title: "Agente de triagem de tickets", tag: "IA", tagColor: "oklch(0.78 0.20 255)", when: "1d atrás" },
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 16px",
                  background: "rgba(8,12,22,0.6)",
                  border: "1px solid rgba(120,160,255,0.1)",
                  borderRadius: 14,
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "oklch(0.55 0.18 150)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#05070d" strokeWidth="3.5">
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, color: "#e7ecf5", fontWeight: 500, marginBottom: 4 }}>{f.title}</div>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: 10,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: f.tagColor,
                      padding: "2px 8px",
                      border: `1px solid ${f.tagColor}`,
                      borderRadius: 4,
                      opacity: 0.9,
                    }}
                  >
                    {f.tag}
                  </span>
                </div>
                <div style={{ fontSize: 11, color: "#6b7390", flexShrink: 0 }}>{f.when}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
