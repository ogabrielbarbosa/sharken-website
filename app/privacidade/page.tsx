export const metadata = { title: "Política de Privacidade — Sharken" };

const sections = [
  {
    title: "1. Quem somos",
    body: (
      <>
        A <strong style={{ color: "#eef2fb" }}>Sharken</strong> é uma software house full-service com foco em IA,
        sediada em São Paulo, Brasil. Esta política descreve como coletamos, usamos, armazenamos e protegemos seus
        dados pessoais quando você visita nosso site, contrata nossos serviços ou interage conosco por qualquer
        canal.
        <br />
        <br />
        Para fins da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD), a Sharken atua como{" "}
        <strong style={{ color: "#eef2fb" }}>controladora</strong> dos dados que coleta diretamente de você e como{" "}
        <strong style={{ color: "#eef2fb" }}>operadora</strong> quando trata dados em nome de clientes contratantes.
      </>
    ),
  },
  {
    title: "2. Quais dados coletamos",
    body: (
      <>
        Coletamos somente o necessário para prestar nossos serviços e nos comunicar com você:
        <ul style={{ paddingLeft: 20, margin: "16px 0", display: "grid", gap: 10 }}>
          <li>
            <strong style={{ color: "#eef2fb" }}>Dados de contato:</strong> nome, e-mail, telefone, empresa e cargo
            informados em formulários ou conversas.
          </li>
          <li>
            <strong style={{ color: "#eef2fb" }}>Dados de projeto:</strong> informações técnicas, documentos,
            credenciais e materiais que você compartilha durante uma auditoria, MVP ou outro engajamento.
          </li>
          <li>
            <strong style={{ color: "#eef2fb" }}>Dados de navegação:</strong> endereço IP, tipo de dispositivo,
            navegador, páginas visitadas e tempo de sessão, coletados via cookies e ferramentas de analytics.
          </li>
          <li>
            <strong style={{ color: "#eef2fb" }}>Dados de pagamento:</strong> processados por gateways parceiros
            (não armazenamos números de cartão em nossos servidores).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Como usamos seus dados",
    body: (
      <>
        Tratamos seus dados com base nas hipóteses legais previstas na LGPD (consentimento, execução de contrato,
        legítimo interesse e cumprimento de obrigação legal) para as seguintes finalidades:
        <ul style={{ paddingLeft: 20, margin: "16px 0", display: "grid", gap: 10 }}>
          <li>Responder a contatos, propostas e dúvidas comerciais.</li>
          <li>Executar projetos contratados e prestar suporte.</li>
          <li>Emitir notas fiscais, contratos e cumprir obrigações fiscais e regulatórias.</li>
          <li>Melhorar nosso site, produtos e serviços.</li>
          <li>Enviar comunicações sobre novidades, conteúdos e oportunidades — sempre com opção de descadastro.</li>
        </ul>
        Não vendemos seus dados pessoais. Ponto.
      </>
    ),
  },
  {
    title: "4. Compartilhamento com terceiros",
    body: (
      <>
        Podemos compartilhar dados com parceiros estritamente necessários à operação, sob obrigação contratual de
        confidencialidade e segurança:
        <ul style={{ paddingLeft: 20, margin: "16px 0", display: "grid", gap: 10 }}>
          <li>Provedores de infraestrutura em nuvem (ex.: AWS, Google Cloud, Vercel).</li>
          <li>Ferramentas de analytics, CRM e comunicação (ex.: Google Analytics, e-mail transacional).</li>
          <li>Gateways de pagamento e plataformas de faturamento.</li>
          <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Cookies e tecnologias similares",
    body: (
      <>
        Usamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como ele é
        utilizado. Você pode desabilitar cookies nas configurações do seu navegador, mas algumas funções podem
        deixar de operar corretamente.
      </>
    ),
  },
  {
    title: "6. Armazenamento e segurança",
    body: (
      <>
        Aplicamos controles técnicos e organizacionais para proteger seus dados — criptografia em trânsito (TLS),
        controle de acesso por papel, registros de auditoria e ambientes segregados para clientes. Mantemos os
        dados pelo tempo necessário ao cumprimento das finalidades descritas ou por exigência legal.
      </>
    ),
  },
  {
    title: "7. Seus direitos como titular",
    body: (
      <>
        A LGPD garante a você, como titular, os seguintes direitos:
        <ul style={{ paddingLeft: 20, margin: "16px 0", display: "grid", gap: 10 }}>
          <li>Confirmar a existência de tratamento dos seus dados.</li>
          <li>Acessar os dados que mantemos sobre você.</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade.</li>
          <li>Solicitar a portabilidade para outro fornecedor.</li>
          <li>Revogar o consentimento a qualquer momento.</li>
        </ul>
        Para exercer qualquer um destes direitos, entre em contato pelo e-mail abaixo.
      </>
    ),
  },
  {
    title: "8. Transferência internacional",
    body: (
      <>
        Alguns parceiros podem processar dados fora do Brasil (ex.: provedores de nuvem nos EUA ou Europa). Quando
        isso ocorre, garantimos que existam salvaguardas adequadas conforme exigido pela LGPD.
      </>
    ),
  },
  {
    title: "9. Alterações desta política",
    body: (
      <>
        Podemos atualizar esta política periodicamente para refletir mudanças legais ou operacionais. A versão
        vigente está sempre disponível nesta página, com a data da última atualização indicada no rodapé.
      </>
    ),
  },
  {
    title: "10. Contato e Encarregado (DPO)",
    body: (
      <>
        Para dúvidas, solicitações ou exercício de direitos relacionados aos seus dados, fale com nosso
        Encarregado de Proteção de Dados:
        <div
          style={{
            marginTop: 16,
            padding: "16px 20px",
            border: "1px solid rgba(120,160,255,0.15)",
            borderRadius: 12,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: "#eef2fb",
          }}
        >
          privacidade@sharken.com.br
        </div>
      </>
    ),
  },
];

export default function PrivacidadePage() {
  return (
    <main style={{ paddingTop: 120 }}>
      <section
        style={{
          padding: "60px 24px 0",
          textAlign: "center",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <span className="section-eyebrow">Legal</span>
        <h1
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 1.05,
            margin: "12px 0 20px",
            color: "#eef2fb",
          }}
        >
          Política de <span className="accent-gradient">Privacidade</span>
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "#8b94ae",
            lineHeight: 1.6,
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          Como tratamos seus dados na Sharken — em conformidade com a LGPD e com a transparência que você merece.
        </p>
      </section>

      <section style={{ padding: "60px 24px" }}>
        <div
          className="card card-lg"
          style={{
            maxWidth: 880,
            margin: "0 auto",
            padding: "56px 56px",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "#4a5166",
              letterSpacing: "0.15em",
              marginBottom: 32,
            }}
          >
            ÚLTIMA ATUALIZAÇÃO · 03 DE MAIO DE 2026
          </div>

          <div style={{ display: "grid", gap: 40 }}>
            {sections.map((s) => (
              <div key={s.title}>
                <h2
                  style={{
                    fontSize: 22,
                    color: "#eef2fb",
                    margin: "0 0 14px",
                    fontWeight: 600,
                  }}
                >
                  {s.title}
                </h2>
                <div
                  style={{
                    fontSize: 15,
                    color: "#8b94ae",
                    lineHeight: 1.7,
                  }}
                >
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
