import fs from "node:fs";
import path from "node:path";
import { ClientsGrid, type ClientLogo } from "./ClientsGrid";

/**
 * Logos das empresas parceiras. Basta soltar os arquivos em /public/clients
 * (svg, png ou webp). A ordem segue o nome do arquivo, então prefixe com
 * número para controlar: "01-acme.svg", "02-globex.svg"...
 * O texto alternativo vem do nome do arquivo sem o prefixo ("acme" → "Acme").
 */
/**
 * Logos largos e baixos parecem maiores que logos compactos na mesma altura.
 * Ajusta a altura pela proporção para todos ocuparem área visual parecida.
 */
function logoHeight(file: string): number {
  const BASE = 36;
  if (!file.endsWith(".svg")) return BASE;
  const svg = fs.readFileSync(file, "utf8").slice(0, 500);
  const vb = svg.match(/viewBox="[\d.\s-]*?\s([\d.]+)\s+([\d.]+)"/);
  const ratio = vb ? Number(vb[1]) / Number(vb[2]) : 0;
  if (!ratio) return BASE;
  return Math.round(Math.min(48, Math.max(28, BASE * Math.sqrt(4.5 / ratio))));
}

function loadLogos(): ClientLogo[] {
  const dir = path.join(process.cwd(), "public", "clients");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(svg|png|webp)$/i.test(f))
    .sort()
    .map((file) => {
      const base = file.replace(/\.[^.]+$/, "").replace(/^\d+[-_]/, "");
      const name = base.replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
      return { name, src: `/clients/${file}`, height: logoHeight(path.join(dir, file)) };
    });
}

export function Clients() {
  return <ClientsGrid logos={loadLogos()} />;
}
