import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

/* ─── Noto Serif — serif for headings ─── */
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mentoria de Livro | Viviane",
  description:
    "Mentoria individual para profissionais que querem escrever e publicar seu livro de não ficção em 12 meses. Com método claro, da ideia à publicação.",
  openGraph: {
    title: "Escreva e publique seu livro em 12 meses",
    description:
      "Mentoria individual para profissionais que têm conhecimento a compartilhar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={notoSerif.variable}>
      <body>{children}</body>
    </html>
  );
}
