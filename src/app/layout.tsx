import type { Metadata } from "next";
import { Geist_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sharken",
  description:
    "A software house de quem tem pressa de ver o produto no ar. Apps, plataformas, MVPs e IA aplicada, em código e sem tecniquês.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-bg text-fg">{children}</body>
    </html>
  );
}
