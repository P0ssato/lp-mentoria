import type { Metadata, Viewport } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

/* ─── Noto Serif — fonte serif para headings ─── */
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: true,
});

/* ─────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────── */
const BASE_URL = "https://lp-mentoria-z1js.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Mentoria de Livro | Viviane — Da ideia à publicação em 12 meses",
    template: "%s | Viviane — Mentoria de Livro",
  },
  description:
    "Mentoria individual para profissionais que querem escrever e publicar seu livro de não ficção em 12 meses. Jornalista com 20 anos de Globo. Método claro, da ideia à publicação.",

  keywords: [
    "mentoria de livro",
    "como escrever livro",
    "publicar livro não ficção",
    "jornalista mentora",
    "escrever livro 12 meses",
    "Viviane mentoria",
    "livro não ficção profissional",
  ],

  authors: [{ name: "Viviane", url: BASE_URL }],
  creator: "Viviane",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Mentoria de Livro — Viviane",
    title: "Escreva e publique seu livro em 12 meses",
    description:
      "Mentoria individual para profissionais que têm conhecimento a compartilhar. Com método claro e acompanhamento do primeiro capítulo até a publicação.",
    images: [
      {
        url: "/fotos/viviane-13.jpeg",
        width: 719,
        height: 1280,
        alt: "Viviane — Mentoria de Livro",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Escreva e publique seu livro em 12 meses — Mentoria de Livro",
    description:
      "Mentoria individual para profissionais que têm conhecimento a compartilhar.",
    images: ["/fotos/viviane-13.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={notoSerif.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Mentoria de Livro",
              provider: {
                "@type": "Person",
                name: "Viviane",
                jobTitle: "Jornalista e Mentora de Livros",
                description:
                  "Jornalista com 20 anos de experiência na Globo, mentora especializada em livros de não ficção.",
              },
              description:
                "Mentoria individual para profissionais que querem escrever e publicar seu livro de não ficção em 12 meses.",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/LimitedAvailability",
                priceCurrency: "BRL",
              },
              url: BASE_URL,
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
