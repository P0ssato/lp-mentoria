"use client";

import FadeInSection from "./FadeInSection";

/* ─────────────────────────────────────────
   Seção 1 — O Problema
   "Por que você ainda não escreveu"
   Cards com ícone + texto, layout 3-col em desktop
───────────────────────────────────────── */

const items = [
  {
    icon: "✦",
    heading: "O conteúdo você tem.",
    body: "Você tem anos de experiência, conhecimento construído na prática, histórias que outras pessoas poderiam aprender. Isso não está faltando.",
  },
  {
    icon: "✦",
    heading: "O que trava é a organização.",
    body: "Você começa, escreve algumas páginas e para porque não sabe se está bom. Reescreve. Duvida. Para de novo. E o livro fica lá, sempre \"quase começando\".",
  },
  {
    icon: "✦",
    heading: "Falta direção — e sem isso, o normal é desistir.",
    body: "Escrever sozinho é difícil porque você não tem com quem validar. Não sabe se o capítulo faz sentido, se a estrutura está certa, qual é o próximo passo.",
  },
];

export default function SectionProblema() {
  return (
    <section
      style={{
        paddingTop: "var(--section-gap)",
        paddingBottom: "var(--section-gap)",
      }}
    >
      <div className="container">
        {/* Header */}
        <FadeInSection>
          <div
            style={{
              maxWidth: "640px",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              marginBottom: "clamp(48px, 6vw, 72px)",
            }}
          >
            <div className="section-rule" style={{ margin: "0 auto 40px" }} />
            <h2>Por que você ainda não escreveu</h2>
          </div>
        </FadeInSection>

        {/* Cards 3-col */}
        <div className="grid-3" style={{ maxWidth: "1040px", marginLeft: "auto", marginRight: "auto" }}>
          {items.map((item, i) => (
            <FadeInSection key={item.heading} delay={0.08 * (i + 1)}>
              <div
                style={{
                  background: "var(--color-bg-subtle)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "32px 28px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    color: "var(--color-primary)",
                    fontSize: "20px",
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(17px, 1.5vw, 20px)", fontWeight: 500, lineHeight: 1.35 }}>
                  {item.heading}
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "clamp(15px, 1.2vw, 17px)", lineHeight: 1.75 }}>
                  {item.body}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
