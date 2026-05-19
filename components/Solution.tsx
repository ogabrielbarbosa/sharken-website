import SharkLogo from "./SharkLogo";

export default function Solution() {
  return (
    <section style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div
        className="glow-bg"
        style={{
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 500,
          background: "oklch(0.45 0.26 258 / 0.3)",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        <h2
          style={{
            fontSize: "clamp(32px, 4.2vw, 56px)",
            lineHeight: 1.1,
            margin: "0 auto 60px",
            textAlign: "center",
            maxWidth: 880,
            color: "#eef2fb",
          }}
        >
          Você quer transformar seu sistema em
          <br />
          uma <span className="accent-gradient">máquina de crescimento</span> de novo.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          <div className="card" style={{ padding: 32 }}>
            <h3 style={{ fontSize: 20, margin: "0 0 12px", color: "#eef2fb", lineHeight: 1.3 }}>
              Mover receita, não tickets
            </h3>
            <p style={{ fontSize: 13, color: "#8b94ae", lineHeight: 1.6, margin: "0 0 24px" }}>
              Trabalhamos nos fluxos que movem MRR e ops, entregando melhorias semanais que você consegue medir.
            </p>
            <div
              style={{
                padding: 16,
                background: "rgba(8,12,22,0.7)",
                border: "1px solid rgba(120,160,255,0.12)",
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#6b7390",
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.15em",
                    marginBottom: 4,
                  }}
                >
                  MRR
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ fontSize: 24, fontWeight: 600, color: "oklch(0.78 0.18 150)" }}>$128k</span>
                  <span style={{ fontSize: 11, color: "oklch(0.78 0.18 150)", fontWeight: 600 }}>+21%</span>
                </div>
              </div>
              <div
                style={{
                  padding: "6px 12px",
                  background: "oklch(0.35 0.22 258 / 0.4)",
                  border: "1px solid oklch(0.6 0.24 258 / 0.4)",
                  borderRadius: 999,
                  fontSize: 11,
                  color: "oklch(0.85 0.15 258)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "oklch(0.78 0.20 255)" }} />
                3 tarefas ativas
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: 32 }}>
            <h3 style={{ fontSize: 20, margin: "0 0 12px", color: "#eef2fb", lineHeight: 1.3 }}>
              Segurança nível enterprise
            </h3>
            <p style={{ fontSize: 13, color: "#8b94ae", lineHeight: 1.6, margin: "0 0 24px" }}>
              Tooling proprietário de análise estática + pentest contínuo nos maiores deploys do ecossistema IA.
            </p>
            <div
              style={{
                padding: "14px 16px",
                background: "rgba(8,12,22,0.7)",
                border: "1px solid rgba(120,160,255,0.12)",
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "#05070d",
                  border: "1px solid oklch(0.6 0.24 258 / 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SharkLogo size={22} />
              </div>
              <div style={{ fontSize: 12, color: "#b8c0d4", lineHeight: 1.4 }}>
                Powered by <strong style={{ color: "#eef2fb" }}>Sharkscan</strong>, nosso scanner de segurança para
                sistemas com IA
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: 32 }}>
            <h3 style={{ fontSize: 20, margin: "0 0 12px", color: "#eef2fb", lineHeight: 1.3 }}>
              Engenheiros sênior que entendem seu negócio
            </h3>
            <p style={{ fontSize: 13, color: "#8b94ae", lineHeight: 1.6, margin: "0 0 24px" }}>
              Acesso direto a devs sêniores que pensam como você — self-driven, proativos e focados em resultado.
            </p>
            <div
              style={{
                padding: 16,
                background: "rgba(8,12,22,0.7)",
                border: "1px solid rgba(120,160,255,0.12)",
                borderRadius: 14,
                display: "flex",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, oklch(0.58 0.14 30), oklch(0.4 0.1 30))",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 6 }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="oklch(0.82 0.18 85)">
                      <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.2 22 12 17.5 5.8 22l2.39-8.14L2 9.36h7.61z" />
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: 11.5, color: "#b8c0d4", margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>
                  &ldquo;Impressiona o quão bem entenderam o que eu queria construir. O resultado ficou melhor do que eu
                  faria sozinho.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
