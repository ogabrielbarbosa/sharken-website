import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Reputation from "@/components/Reputation";

export const metadata = { title: "Pacote MVP — Sharken" };

export default function PacoteMvpPage() {
  return (
    <main style={{ paddingTop: 120 }}>
      <section style={{ padding: "60px 24px 0", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <span className="section-eyebrow">Pacote MVP</span>
        <h1
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 1.05,
            margin: "12px 0 20px",
            color: "#eef2fb",
          }}
        >
          Do zero ao launch em <span className="accent-gradient">6 semanas.</span>
        </h1>
        <p style={{ fontSize: 17, color: "#8b94ae", lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
          Pacote fechado, preço fixo, design e dev inclusos. Construído por devs sêniores com 30 dias de suporte
          pós-launch.
        </p>
      </section>
      <Pricing />
      <Reputation />
      <FAQ />
    </main>
  );
}
