import SharkLogo from "./SharkLogo";

const pages = ["Home", "Pacote MVP", "Roast", "Auditoria IA", "Sharkscan", "Join", "NDA"];
const legal: { label: string; href: string }[] = [
  { label: "Termos de serviço", href: "#" },
  { label: "Política de privacidade", href: "/privacidade" },
  { label: "LGPD", href: "/privacidade" },
];

export default function Footer() {
  return (
    <footer style={{ padding: "40px 24px" }}>
      <div
        className="card card-lg"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "48px 56px",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <SharkLogo size={40} />
            <div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "#eef2fb", lineHeight: 1 }}>Sharken</div>
              <div style={{ fontSize: 11, color: "#8b94ae", marginTop: 4, letterSpacing: "0.1em" }}>
                AI SOFTWARE HOUSE
              </div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "#8b94ae", lineHeight: 1.6, maxWidth: 380, margin: "0 0 24px" }}>
            Sharken é uma software house full-service com foco em IA que te leva da ideia ao launch com tudo incluído.
          </p>
          <button className="btn-primary">
            Começar projeto
            <span style={{ display: "inline-block", transform: "rotate(-25deg)" }}>↗</span>
          </button>
        </div>

        <div>
          <h4 style={{ fontSize: 14, color: "#eef2fb", margin: "0 0 18px", fontWeight: 600 }}>Páginas</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            {pages.map((l) => (
              <li key={l}>
                <a href="#" style={{ fontSize: 13, color: "#8b94ae" }}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: 14, color: "#eef2fb", margin: "0 0 18px", fontWeight: 600 }}>Legal</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} style={{ fontSize: 13, color: "#8b94ae" }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            style={{
              marginTop: 28,
              paddingTop: 18,
              borderTop: "1px solid rgba(120,160,255,0.1)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: "#4a5166",
              letterSpacing: "0.15em",
            }}
          >
            © 2026 SHARKEN · SP · BR
          </div>
        </div>
      </div>
    </footer>
  );
}
