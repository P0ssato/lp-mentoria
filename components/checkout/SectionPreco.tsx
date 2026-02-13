"use client";

import FadeInSection from "../FadeInSection";

const CHECKOUT_URL =
  "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-mentoria-de-escrita-j9p7t/C99160623K";

export default function SectionPreco() {
  return (
    <section
      id="investimento"
      style={{
        paddingTop: "var(--section-gap)",
        paddingBottom: "var(--section-gap)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "680px", marginLeft: "auto", marginRight: "auto" }}
      >
        <FadeInSection>
          <div className="section-rule" />
          <h2 style={{ marginBottom: "12px" }}>Investimento</h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "40px" }}>
            Mentoria individual de 12 meses. Acompanhamento completo da primeira
            linha ao capítulo final.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {/* Cabeçalho do card */}
            <div
              style={{
                padding: "36px 40px 32px",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(36px, 5vw, 52px)",
                    fontWeight: 400,
                    color: "var(--color-text)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  R$9.997
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--color-text-muted)",
                }}
              >
                ou até 10× no cartão
              </p>
            </div>

            {/* O que inclui */}
            <div style={{ padding: "32px 40px" }}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  marginBottom: "20px",
                }}
              >
                O que está incluído
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
                {[
                  "12 meses de mentoria individual",
                  "12 sessões de acompanhamento",
                  "Reuniões frequentes ao longo do processo",
                  "Acompanhamento capítulo a capítulo",
                  "Estrutura e método editorial personalizado",
                  "Feedback detalhado em cada etapa",
                  "Suporte direto com a Viviane durante todo o processo",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        minWidth: "22px",
                        borderRadius: "50%",
                        background: "var(--color-primary-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="11" height="8" viewBox="0 0 13 10" fill="none" aria-hidden="true">
                        <path
                          d="M1.5 5L5 8.5L11.5 1.5"
                          stroke="var(--color-primary)"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "clamp(14px, 1.1vw, 16px)",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                  width: "100%",
                  textAlign: "center",
                  boxSizing: "border-box",
                }}
              >
                Garantir minha vaga agora
              </a>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--color-text-muted)",
                  textAlign: "center",
                  marginTop: "14px",
                }}
              >
                Você será redirecionado para a página de pagamento segura
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
