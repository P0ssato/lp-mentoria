"use client";

import FadeInSection from "./FadeInSection";

/* ─────────────────────────────────────────
   Seção 5 — Próximo Passo
   "Como a gente começa"
   Steps numerados com layout visual
───────────────────────────────────────── */

const steps = [
  {
    n: "1",
    title: "Preencha o diagnóstico",
    body: "Eu preciso entender sobre o que você quer escrever, em que estágio está, e se esse momento faz sentido. Leva uns 3 minutos.",
  },
  {
    n: "2",
    title: "Agende uma conversa",
    body: "Depois de preencher, você agenda uma reunião diretamente na minha agenda. A gente conversa sobre o seu livro.",
  },
  {
    n: "3",
    title: "A gente decide juntos",
    body: "Eu te mostro como funciona, tiro suas dúvidas. Você decide se quer seguir. Sem compromisso.",
  },
];

export default function SectionProximoPasso() {
  const scrollToForm = () => {
    const el = document.getElementById("diagnostico");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="como-comecar"
      className="section-alt"
      style={{
        paddingTop: "var(--section-gap)",
        paddingBottom: "var(--section-gap)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
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
            <h2 style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}>Como a gente começa</h2>
          </FadeInSection>

          {/* Steps */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              marginBottom: "clamp(48px, 6vw, 64px)",
            }}
            className="grid-3"
          >
            {steps.map((step, i) => (
              <FadeInSection key={step.n} delay={0.08 * (i + 1)}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    height: "100%",
                  }}
                >
                  <div className="step-number">{step.n}</div>
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: "8px", fontSize: "clamp(15px, 1.3vw, 17px)" }}>
                      {step.title}
                    </p>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "clamp(14px, 1.1vw, 16px)", lineHeight: 1.65 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Final line + CTA */}
          <FadeInSection delay={0.32}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(17px, 1.5vw, 20px)",
                  fontStyle: "italic",
                  color: "var(--color-text-secondary)",
                  marginBottom: "8px",
                }}
              >
                Simples assim.
              </p>
              <button className="btn-primary" onClick={scrollToForm}>
                Preencher diagnóstico
              </button>
              <span className="microcopy">3 minutos · depois você agenda uma conversa comigo</span>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
