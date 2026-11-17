import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Clients } from "@/components/Clients";
import { Faq, type QaItem } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Divider } from "@/components/ui";
import {
  LpCompare,
  LpHero,
  LpPain,
  LpProjects,
  LpShowcase,
  LpStat,
  LpTestimonials,
} from "@/components/landing-pages/LandingSections";
import type { Shot } from "@/components/landing-pages/shared";

export const metadata: Metadata = {
  title: "Landing pages · Sharken",
  description:
    "Landing pages profissionais que atraem clientes prontos para pagar pelo seu serviço. Entrega em 3 a 7 dias.",
};

/**
 * Imagens da página. Basta soltar os arquivos nas pastas abaixo (png, jpg ou webp);
 * a ordem segue o nome do arquivo ("01-...", "02-...").
 *   /public/landing-pages/projetos     → prints de página inteira dos projetos entregues
 *   /public/landing-pages/depoimentos  → prints de conversas/depoimentos de clientes
 * Enquanto as pastas estiverem vazias, a página mostra esqueletos no lugar.
 */
function loadShots(folder: string, label: string): Shot[] {
  const dir = path.join(process.cwd(), "public", "landing-pages", folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
    .sort()
    .map((file, i) => {
      const slug = file.replace(/\.[^.]+$/, "").replace(/^\d+[-_]/, "");
      const meta = PROJECT_NAMES[slug];
      return {
        src: `/landing-pages/${folder}/${file}`,
        alt: meta ? `${label}: ${meta.name}, ${meta.tag}` : `${label} ${i + 1}`,
        ...meta,
      };
    });
}

/** Nome e nicho que aparecem embaixo de cada projeto (a chave é o nome do arquivo sem o número). */
const PROJECT_NAMES: Record<string, { name: string; tag: string }> = {
  "dra-beatriz-silva": { name: "Dra. Beatriz Silva", tag: "harmonização facial" },
  "nicole-de-oliveira": { name: "Nicole de Oliveira", tag: "lentes de contato dental" },
  "dr-paulo-coimbra": { name: "Dr. Paulo Coimbra", tag: "cirurgia refrativa" },
  "dr-pedro-soares": { name: "Dr. Pedro Soares", tag: "tratamento capilar" },
  "marco-personal": { name: "Marco", tag: "personal trainer" },
  "copy-80x": { name: "Copy 80x", tag: "curso online" },
};

const FAQ: QaItem[] = [
  {
    q: "Quanto tempo leva para o site ficar pronto?",
    a: "Depois do kick-off e com o material em mãos (fotos, textos e informações do seu negócio), a previsão é de 3 a 7 dias para a entrega.",
  },
  {
    q: "Além do site, tenho que pagar mais alguma coisa?",
    a: "Você precisa apenas de uma hospedagem e domínio para ter um site no ar, o desenvolvimento nós damos conta.",
  },
  {
    q: "Como funciona o suporte depois da entrega?",
    a: "Depois que a página vai para o ar, seguimos com você para ajustes e dúvidas. Mudanças maiores, como novas seções ou páginas, são combinadas à parte.",
  },
  {
    q: "Depois que eu contratar, como fica o processo?",
    a: "Com o contrato assinado, fazemos uma reunião para entender seu negócio, você recebe a página pronta para revisar e, com os ajustes feitos, ela vai para o ar no seu domínio.",
  },
];

export default function LandingPagesPage() {
  const projects = loadShots("projetos", "Página desenvolvida pela Sharken");
  const testimonials = loadShots("depoimentos", "Depoimento de cliente");

  return (
    <>
      <Nav />
      <main>
        <LpHero />
        <Divider />
        <Clients />
        <Divider />
        <LpPain />
        <Divider />
        <LpTestimonials shots={testimonials} />
        <Divider />
        <LpCompare />
        <Divider />
        <LpStat />
        <Divider />
        <LpProjects shots={projects} />
        <Divider />
        <LpShowcase />
        <Divider />
        <Faq items={FAQ} title="Perguntas frequentes" subtitle="Ainda com dúvida? Chama a gente no WhatsApp." />
      </main>
      <Footer />
    </>
  );
}
