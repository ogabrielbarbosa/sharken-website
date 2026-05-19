export default function Reputation() {
  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <span className="section-eyebrow">Reputação</span>
        <h2
          style={{
            fontSize: "clamp(32px, 4.2vw, 56px)",
            lineHeight: 1.1,
            margin: "12px auto 20px",
            maxWidth: 900,
            color: "#eef2fb",
          }}
        >
          Reputação é tudo — e a nossa é <span className="accent-gradient">impecável.</span>
        </h2>
        <p style={{ fontSize: 16, color: "#8b94ae", margin: "0 auto 40px", maxWidth: 640, lineHeight: 1.55 }}>
          Construímos uma reputação excepcional entre devs e clientes por qualidade, cuidado e execução.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
          <div
            className="card"
            style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 20px", borderRadius: 999 }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: "linear-gradient(135deg, oklch(0.72 0.20 85), oklch(0.55 0.22 50))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 700,
                color: "#2a1d00",
              }}
            >
              ★
            </div>
            <span style={{ fontSize: 14, color: "#eef2fb", fontWeight: 600 }}>AWS Gold Partner</span>
          </div>
          <div
            className="card"
            style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 20px 8px 10px", borderRadius: 999 }}
          >
            <div style={{ display: "flex" }}>
              {["#7a8bff", "#9a6bff", "#6be6ff", "#b5b9c8"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 26,
                    height: 26,
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
                <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="oklch(0.82 0.18 85)">
                  <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.2 22 12 17.5 5.8 22l2.39-8.14L2 9.36h7.61z" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: 14, color: "#eef2fb", fontWeight: 600 }}>5.0</span>
            <span style={{ fontSize: 12, color: "#8b94ae" }}>de 196 reviews</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "flex-end", maxWidth: 860, margin: "0 auto" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "linear-gradient(135deg, oklch(0.58 0.14 30), oklch(0.4 0.1 30))",
              flexShrink: 0,
              border: "2px solid rgba(120,160,255,0.2)",
            }}
          />
          <div className="card" style={{ flex: 1, padding: "28px 32px", borderRadius: 20, textAlign: "left", position: "relative" }}>
            <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="oklch(0.82 0.18 85)">
                  <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.2 22 12 17.5 5.8 22l2.39-8.14L2 9.36h7.61z" />
                </svg>
              ))}
            </div>
            <p style={{ fontSize: 15, color: "#d4dae8", lineHeight: 1.65, margin: "0 0 16px" }}>
              O time da{" "}
              <span style={{ background: "oklch(0.35 0.22 258 / 0.4)", padding: "2px 4px", borderRadius: 3 }}>Sharken</span>{" "}
              foi incrível. Criei um app interno pra minha empresa e precisei de ajuda pra evoluir — contratei eles e o
              processo não poderia ter sido mais simples. Faço um pedido e em poucos dias tenho uma feature nova.{" "}
              <span style={{ background: "oklch(0.35 0.22 258 / 0.4)", padding: "2px 4px", borderRadius: 3 }}>
                Impressiona o quão bem entendem o que eu quero
              </span>
              , e o resultado ficou muito melhor do que qualquer coisa que eu faria sozinho. Recomendo demais{" "}
              <span style={{ background: "oklch(0.35 0.22 258 / 0.4)", padding: "2px 4px", borderRadius: 3 }}>
                dar uma chance pra esses caras mostrarem o que sabem.
              </span>
            </p>
            <div style={{ fontSize: 12, color: "#8b94ae" }}>
              — Ricardo Bayles · <span style={{ color: "#6b7390" }}>CEO, FloorAuthority</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
