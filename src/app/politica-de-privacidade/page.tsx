import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { CITY, EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Política de Privacidade · Sharken",
  description: "Como a Sharken coleta, usa e protege seus dados pessoais, de acordo com a LGPD.",
};

// TODO: preencher razão social e CNPJ antes de publicar
const COMPANY = "[RAZÃO SOCIAL]";
const CNPJ = "[CNPJ]";

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade" updated="17 de novembro de 2026">
      <p>
        Esta política explica como a Sharken ({COMPANY}, CNPJ {CNPJ}, com sede em {CITY}) trata os dados pessoais de quem
        visita este site ou entra em contato com a gente. Ela segue a Lei Geral de Proteção de Dados (Lei nº 13.709/2018,
        a LGPD).
      </p>

      <h2>1. Quais dados coletamos</h2>
      <ul>
        <li>
          <strong>Dados que você nos envia:</strong> nome, telefone, email, empresa e as informações sobre o seu projeto
          que você compartilha quando fala com a gente por WhatsApp, email ou redes sociais.
        </li>
        <li>
          <strong>Dados de navegação:</strong> endereço IP, tipo de navegador e dispositivo, páginas visitadas, origem do
          acesso e tempo de visita, coletados por cookies e ferramentas de análise.
        </li>
      </ul>

      <h2>2. Para que usamos</h2>
      <ul>
        <li>Responder seu contato, entender seu projeto e enviar propostas.</li>
        <li>Executar e dar suporte aos serviços contratados.</li>
        <li>Medir o desempenho do site e das nossas campanhas e melhorar a experiência de navegação.</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>
      <p>
        As bases legais são o seu consentimento, a execução de contrato ou de procedimentos preliminares a ele, o
        cumprimento de obrigação legal e o nosso legítimo interesse, sempre dentro do que você esperaria de uma relação
        comercial.
      </p>

      <h2>3. Cookies</h2>
      <p>
        Usamos cookies essenciais para o site funcionar e, quando ativos, cookies de análise e de publicidade (como Google
        Analytics e Meta Pixel) para entender como o site é usado e medir anúncios. Você pode bloquear ou apagar cookies
        nas configurações do seu navegador; algumas partes do site podem funcionar de forma diferente sem eles.
      </p>

      <h2>4. Com quem compartilhamos</h2>
      <p>
        Não vendemos seus dados. Podemos compartilhá-los com fornecedores que nos ajudam a operar, como serviços de
        hospedagem, email, mensageria (WhatsApp) e análise de dados, só na medida necessária e com obrigação de
        confidencialidade. Também podemos compartilhar quando a lei ou uma autoridade competente exigir. Alguns desses
        fornecedores podem armazenar dados fora do Brasil, com as salvaguardas previstas na LGPD.
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <p>
        Guardamos os dados pelo tempo necessário para as finalidades acima ou pelo prazo que a lei exigir. Depois disso,
        eles são apagados ou anonimizados.
      </p>

      <h2>6. Como protegemos</h2>
      <p>
        Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou
        vazamento, como conexões criptografadas e controle de acesso. Nenhum sistema é 100% imune, mas tratamos a
        segurança como parte do nosso trabalho.
      </p>

      <h2>7. Seus direitos</h2>
      <p>Pela LGPD, você pode a qualquer momento pedir:</p>
      <ul>
        <li>confirmação de que tratamos seus dados e acesso a eles;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;</li>
        <li>portabilidade dos dados a outro fornecedor;</li>
        <li>eliminação dos dados tratados com base no seu consentimento e revogação desse consentimento;</li>
        <li>informação sobre com quem compartilhamos seus dados.</li>
      </ul>
      <p>
        Para exercer qualquer um desses direitos, escreva para <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Você também pode
        reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>8. Mudanças nesta política</h2>
      <p>
        Podemos atualizar esta política de tempos em tempos. A data no topo da página mostra a última revisão.
      </p>

      <h2>9. Contato</h2>
      <p>
        Dúvidas sobre privacidade? Fale com a gente em <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
