"use client";

import FadeInSection from "./FadeInSection";

/* ─────────────────────────────────────────
   Seção 3 — Para Quem Serve
   "Isso funciona se:"
   Checklist com ícone + texto
───────────────────────────────────────── */

const checks = [
  {
    label: "Você tem experiência real.",
    body: "Pode ser gestão, empreendedorismo, metodologia própria, trajetória profissional relevante. Não precisa ser expert mundial, mas precisa ter algo útil para compartilhar.",
  },
  {
    label: "Você está disposto a trabalhar de forma consistente.",
    body: "Aparecer nas reuniões, fazer o trabalho entre uma e outra, levar a sério pelos próximos 12 meses.",
  },
  {
    label: "Você entende que livro bom leva tempo.",
    body: "Demanda estrutura, acompanhamento, processo real. Se você quer algo sério, essa mentoria é para isso.",
  },
];

export default function SectionParaQuem() {
  return (
    <section
      id="para-quem"
      style={{
        paddingTop: "var(--section-gap)",
        paddingBottom: "var(--section-gap)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <FadeInSection>
            <div className="section-rule" />
            <h2 style={{ marginBottom: "clamp(40px, 5vw, 56px)" }}>Isso funciona se:</h2>
          </FadeInSection>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {checks.map((item, i) => (
              <FadeInSection key={item.label} delay={0.08 * (i + 1)}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "28px 1fr",
                    gap: "20px",
                    alignItems: "start",
                    padding: "24px 0",
                    borderBottom: i < checks.length - 1 ? "1px solid var(--color-border-subtle)" : "none",
                  }}
                >
                  {/* Check icon */}
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      minWidth: "28px",
                      borderRadius: "50%",
                      background: "var(--color-primary-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2px",
                    }}
                  >
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" aria-hidden="true">
                      <path
                        d="M1.5 5L5 8.5L11.5 1.5"
                        stroke="var(--color-primary)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* Text */}
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: "6px", fontSize: "clamp(16px, 1.3vw, 18px)" }}>
                      {item.label}
                    </p>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "clamp(15px, 1.2vw, 17px)", lineHeight: 1.7 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
