import SharkLogo from "./SharkLogo";

const rows = [
  { label: "Velocidade", bad: "Lenta para mudar, processos pesados", good: "Iterações semanais baseadas em uso real" },
  { label: "Tamanho do time", bad: "Time grande, gargalos de comunicação", good: "Time pequeno, denso, comunicação direta" },
  { label: "Segurança", bad: "Dados expostos por devs juniores", good: "Scanner proprietário + pentest contínuo" },
  { label: "IA", bad: "Wrapper de LLM colado por cima", good: "Agentes com evals e observabilidade" },
  { label: "Ownership", bad: "Código opaco, dependência eterna", good: "Código seu, handover completo" },
];

export default function Compare() {
  return (
    <section style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <span className="section-eyebrow">Por que a Sharken</span>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 56px)",
            lineHeight: 1.1,
            margin: "12px auto 20px",
            maxWidth: 950,
            color: "#eef2fb",
          }}
        >
          Você precisa de um time focado em <span className="accent-gradient">resultado, não em horas.</span>
        </h2>
        <p style={{ fontSize: 16, color: "#8b94ae", margin: "0 auto 60px", maxWidth: 620, lineHeight: 1.55 }}>
          Nosso modelo é desenhado para <span className="accent">quem mede sucesso por output</span>, não por promessas.
        </p>

        <div className="card card-lg" style={{ padding: 0, overflow: "hidden", textAlign: "left" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr 1fr",
              padding: "28px 32px",
              borderBottom: "1px solid rgba(120,160,255,0.12)",
              alignItems: "center",
            }}
          >
            <div />
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "oklch(0.3 0.08 30)",
                  border: "1px solid oklch(0.5 0.15 30 / 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "oklch(0.7 0.15 30)",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="8" cy="10" r="3" />
                  <circle cx="16" cy="10" r="3" />
                  <path d="M4 20c0-3 2-5 4-5s4 2 4 5M14 20c0-3 2-5 4-5s4 2 4 5" />
                </svg>
              </div>
              <span style={{ fontSize: 17, fontWeight: 500, color: "#b8c0d4" }}>Agência grande</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <SharkLogo size={40} />
              <span style={{ fontSize: 17, fontWeight: 500, color: "#eef2fb" }}>Sharken</span>
            </div>
          </div>

          {rows.map((r, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr 1fr",
                padding: "24px 32px",
                borderBottom: i < rows.length - 1 ? "1px solid rgba(120,160,255,0.08)" : "none",
                alignItems: "start",
                background: i % 2 === 0 ? "rgba(8,12,22,0.3)" : "transparent",
              }}
            >
              <div style={{ fontSize: 14, color: "#8b94ae", fontWeight: 500 }}>{r.label}</div>
              <div style={{ display: "flex", gap: 10, alignItems: "start" }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "oklch(0.3 0.15 25 / 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="oklch(0.75 0.2 25)" strokeWidth="3">
                    <path d="M6 6l12 12M18 6l-12 12" />
                  </svg>
                </div>
                <span style={{ fontSize: 14, color: "#b8c0d4", lineHeight: 1.5 }}>{r.bad}</span>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "start" }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "oklch(0.3 0.15 150 / 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="oklch(0.8 0.18 150)" strokeWidth="3">
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                </div>
                <span style={{ fontSize: 14, color: "#eef2fb", lineHeight: 1.5, fontWeight: 500 }}>{r.good}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
