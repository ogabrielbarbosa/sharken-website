import Solution from "@/components/Solution";
import Compare from "@/components/Compare";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";

export const metadata = { title: "Auditoria IA — Sharken" };

export default function AuditoriaIaPage() {
  return (
    <main style={{ paddingTop: 120 }}>
      <section style={{ padding: "60px 24px 0", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <span className="section-eyebrow">Auditoria IA</span>
        <h1
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 1.05,
            margin: "12px 0 20px",
            color: "#eef2fb",
          }}
        >
          Sua IA em produção, <span className="accent-gradient">sem surpresas.</span>
        </h1>
        <p style={{ fontSize: 17, color: "#8b94ae", lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
          Revisamos seu stack de IA ponta a ponta — privacidade, custo, evals, observabilidade e segurança — e
          entregamos um roadmap priorizado.
        </p>
      </section>
      <Solution />
      <Compare />
      <Founder />
      <FAQ />
    </main>
  );
}
