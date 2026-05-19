export default function Founder() {
  return (
    <section style={{ padding: "80px 24px 100px" }}>
      <div
        className="card card-lg"
        style={{ maxWidth: 720, margin: "0 auto", padding: "48px 56px", textAlign: "center" }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "linear-gradient(135deg, oklch(0.58 0.14 30), oklch(0.4 0.1 30))",
            margin: "0 auto 20px",
            border: "2px solid rgba(120,160,255,0.2)",
          }}
        />
        <h3 style={{ fontSize: 22, margin: "0 0 24px", color: "#eef2fb" }}>Uma nota do fundador</h3>
        <div style={{ fontSize: 14, color: "#b8c0d4", lineHeight: 1.75, textAlign: "center" }}>
          <p style={{ margin: "0 0 18px" }}>
            A gente é obcecado pelas partes que a maioria das agências pula — privacidade, arquitetura de dados,
            performance de inferência, evals — porque é o que faz o resto de fato funcionar. Você não vê diretamente,
            mas vai notar que seu sistema fica mais rápido, mais seguro, mais fácil de iterar.
          </p>
          <p style={{ margin: "0 0 18px" }}>
            A gente resolve problemas de negócio, não checklist de features. Isso significa empurrar de volta quando
            algo não faz sentido, dividir ownership do resultado e manter tudo previsível e calmo.
          </p>
          <p style={{ margin: 0 }}>
            Construímos a Sharken em torno de uma ideia simples: faça a coisa certa, faça direito, mesmo quando ninguém
            está olhando. Respostas rápidas, updates claros, zero enrolação. Se é assim que você também trabalha, vamos
            dar certo.
          </p>
        </div>
        <div style={{ marginTop: 32, fontWeight: 600, color: "#eef2fb", fontSize: 16 }}>Bruno Azevedo</div>
        <div style={{ fontSize: 12, color: "#8b94ae", marginTop: 4 }}>Fundador e Lead Engineer</div>
      </div>
    </section>
  );
}
