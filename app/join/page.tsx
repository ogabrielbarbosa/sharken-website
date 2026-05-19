import Reputation from "@/components/Reputation";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";

export const metadata = { title: "Join — Sharken" };

export default function JoinPage() {
  return (
    <main style={{ paddingTop: 120 }}>
      <section style={{ padding: "60px 24px 0", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <span className="section-eyebrow">Join</span>
        <h1
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 1.05,
            margin: "12px 0 20px",
            color: "#eef2fb",
          }}
        >
          Venha construir com a gente.
        </h1>
        <p style={{ fontSize: 17, color: "#8b94ae", lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
          Procuramos devs sêniores self-driven, obcecados por qualidade e resultado. Remoto, async-first, base em São
          Paulo.
        </p>
      </section>
      <Reputation />
      <Founder />
      <FAQ />
    </main>
  );
}
