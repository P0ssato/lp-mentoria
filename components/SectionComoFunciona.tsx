"use client";

import FadeInSection from "./FadeInSection";

/* ─────────────────────────────────────────
   Seção 2 — Como Funciona
   "O processo da mentoria"
   Timeline numerada com linha conectora
───────────────────────────────────────── */

/* SVG decorativo: linhas de caderno */
function PenLines({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <line x1="0" y1="20" x2="200" y2="20" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.10" />
      <line x1="0" y1="40" x2="200" y2="40" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.07" />
      <line x1="0" y1="60" x2="200" y2="60" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.10" />
      <line x1="0" y1="80" x2="200" y2="80" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.07" />
    </svg>
  );
}

const steps = [
  {
    n: "01",
    title: "Você não vai escrever sozinho.",
    body: "A gente trabalha junto, capítulo a capítulo. Reuniões semanais onde eu te ajudo a organizar as ideias, estruturar o texto, resolver o que travou. Você sempre sabe o próximo passo.",
  },
  {
    n: "02",
    title: "Tem prazo definido.",
    body: '12 meses para sair do zero até o livro publicado. Não é "um dia você termina" — é cronograma real de trabalho.',
  },
  {
    n: "03",
    title: "Método que já funciona.",
    body: "Eu passei 20 anos na Globo escrevendo matérias que precisavam ser claras e diretas. Uso a mesma lógica aqui: organizar conhecimento de um jeito que outras pessoas consigam ler e aplicar.",
  },
];

export default function SectionComoFunciona() {
  return (
    <section
      id="processo"
      className="section-alt"
      style={{
        paddingTop: "var(--section-gap)",
        paddingBottom: "var(--section-gap)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decoração: linhas de caderno no canto direito */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "60px",
          right: "0px",
          width: "200px",
          height: "100px",
          pointerEvents: "none",
        }}
      >
        <PenLines style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Decoração: linhas de caderno no canto esquerdo inferior */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "60px",
          left: "0px",
          width: "160px",
          height: "80px",
          pointerEvents: "none",
          opacity: 0.7,
        }}
      >
        <PenLines style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="container">
        <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div className="section-rule" />
            <h2 style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>O processo da mentoria</h2>
          </FadeInSection>

          {/* Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((step, i) => (
              <FadeInSection key={step.n} delay={0.08 * (i + 1)}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: "24px",
                    position: "relative",
                  }}
                >
                  {/* Left: number + line */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        minWidth: "48px",
                        borderRadius: "50%",
                        border: "1.5px solid var(--color-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-serif)",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "var(--color-primary)",
                        background: "#fff",
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      {step.n}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        style={{
                          width: "1px",
                          flex: 1,
                          minHeight: "40px",
                          background: "var(--color-border)",
                          marginTop: "4px",
                          marginBottom: "4px",
                        }}
                      />
                    )}
                  </div>

                  {/* Right: content */}
                  <div style={{ paddingBottom: i < steps.length - 1 ? "40px" : "0", paddingTop: "12px" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 500,
                        marginBottom: "12px",
                        fontSize: "clamp(17px, 1.6vw, 21px)",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Callout final */}
          <FadeInSection delay={0.36}>
            <div
              style={{
                marginTop: "48px",
                padding: "28px 32px",
                background: "#fff",
                border: "1px solid var(--color-border)",
                borderLeft: "3px solid var(--color-primary)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: 1.65, fontStyle: "italic" }}>
                No final você tem um livro de verdade. Não e-book de 30 páginas, não "material digital". Um livro que representa o que você sabe.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
