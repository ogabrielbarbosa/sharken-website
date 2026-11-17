import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { CITY, EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Termos de Uso · Sharken",
  description: "Regras de uso do site da Sharken.",
};

// TODO: preencher razão social e CNPJ antes de publicar
const COMPANY = "[RAZÃO SOCIAL]";
const CNPJ = "[CNPJ]";

export default function TermsPage() {
  return (
    <LegalPage title="Termos de Uso" updated="17 de novembro de 2026">
      <p>
        Estes termos valem para o uso do site da Sharken ({COMPANY}, CNPJ {CNPJ}, com sede em {CITY}). Ao navegar pelo
        site, você concorda com eles. Se não concordar, por favor não use o site.
      </p>

      <h2>1. Sobre o site</h2>
      <p>
        O site apresenta a Sharken, nossos serviços e nossa forma de trabalhar. O conteúdo é informativo e não é uma
        oferta vinculante: escopo, prazo e valor de qualquer projeto são definidos em proposta e contrato próprios, que
        prevalecem sobre o que está aqui.
      </p>

      <h2>2. Uso permitido</h2>
      <p>Você se compromete a usar o site de forma lícita e a não:</p>
      <ul>
        <li>tentar acessar áreas restritas, invadir, sobrecarregar ou prejudicar o funcionamento do site;</li>
        <li>copiar, raspar ou reproduzir o conteúdo em massa ou para fins comerciais sem autorização;</li>
        <li>usar o site para enviar spam, conteúdo ilegal ou se passar por outra pessoa.</li>
      </ul>

      <h2>3. Propriedade intelectual</h2>
      <p>
        Marca, logotipo, textos, imagens, layout e código do site pertencem à Sharken ou a seus licenciantes e são
        protegidos por lei. Marcas e logotipos de clientes e parceiros pertencem aos respectivos donos e aparecem aqui com
        autorização. Nada nestes termos transfere esses direitos a você.
      </p>

      <h2>4. Links para outros sites</h2>
      <p>
        O site pode ter links para serviços de terceiros, como WhatsApp e Instagram. Não controlamos esses serviços e não
        respondemos pelo conteúdo ou pelas práticas de privacidade deles.
      </p>

      <h2>5. Limitação de responsabilidade</h2>
      <p>
        Trabalhamos para manter o site no ar e com informações corretas, mas ele é oferecido como está. Não garantimos
        que funcione sem interrupções ou erros, e não respondemos por danos decorrentes do uso ou da impossibilidade de uso
        do site, nos limites permitidos pela lei.
      </p>

      <h2>6. Privacidade</h2>
      <p>
        O tratamento dos seus dados pessoais está descrito na nossa{" "}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>

      <h2>7. Alterações</h2>
      <p>
        Podemos atualizar estes termos a qualquer momento. A versão em vigor é sempre a publicada nesta página, com a data
        da última atualização no topo.
      </p>

      <h2>8. Lei e foro</h2>
      <p>
        Estes termos seguem a lei brasileira. Fica eleito o foro da comarca de São José dos Campos/SP para resolver
        qualquer questão relacionada a eles, ressalvado o direito do consumidor de propor ação no foro do seu domicílio.
      </p>

      <h2>9. Contato</h2>
      <p>
        Dúvidas sobre estes termos? Escreva para <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
