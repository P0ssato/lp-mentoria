"use client";

import Image from "next/image";
import FadeInSection from "./FadeInSection";

/* SVG decorativo: linhas de caderno */
function QuemFazLines({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <line x1="0" y1="18" x2="180" y2="18" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.09" />
      <line x1="0" y1="36" x2="180" y2="36" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.06" />
      <line x1="0" y1="54" x2="180" y2="54" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.09" />
      <line x1="0" y1="72" x2="180" y2="72" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.06" />
    </svg>
  );
}

export default function SectionQuemFaz() {
  return (
    <section
      id="viviane"
      style={{
        paddingTop: "var(--section-gap)",
        paddingBottom: "var(--section-gap)",
        borderTop: "1px solid var(--color-border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decoração: linhas de caderno no fundo direito */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "80px",
          right: "0",
          width: "180px",
          height: "90px",
          pointerEvents: "none",
          opacity: 0.8,
        }}
      >
        <QuemFazLines style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(48px, 7vw, 100px)",
            alignItems: "start",
            maxWidth: "1040px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="quemfaz-editorial"
        >
          {/* Esquerda: stack de fotos com offset */}
          <FadeInSection delay={0.06}>
            <div style={{ position: "relative", paddingTop: "40px", paddingBottom: "40px" }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <Image
                  src="/fotos/viviane-desk.jpeg"
                  alt="Viviane em seu escritório"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 767px) 100vw, 44vw"
                  quality={90}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "0px",
                  right: "-20px",
                  width: "42%",
                  aspectRatio: "1/1",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "3px solid #fff",
                  boxShadow: "var(--shadow-md)",
                  zIndex: 2,
                }}
              >
                <Image
                  src="/fotos/viviane-08.jpeg"
                  alt="Viviane jornalista"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="20vw"
                  quality={85}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "-16px",
                  background: "var(--color-primary)",
                  color: "#fff",
                  borderRadius: "var(--radius-sm)",
                  padding: "8px 16px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 12px rgba(188,61,61,0.3)",
                  zIndex: 2,
                }}
              >
                Ex-Globo · 20 anos
              </div>
            </div>
          </FadeInSection>

          {/* Direita: Texto */}
          <div style={{ paddingTop: "16px" }}>
            <FadeInSection>
              <div className="section-rule" />
              <h2 style={{ marginBottom: "32px" }}>Quem vai te acompanhar</h2>
            </FadeInSection>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <FadeInSection delay={0.1}>
                <p style={{ lineHeight: 1.8 }}>
                  Eu sou Viviane, jornalista com 20 anos de experiência na Globo.
                  Passei duas décadas escrevendo histórias que precisavam ser
                  objetivas e envolventes ao mesmo tempo.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.18}>
                <p style={{ lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
                  Quando comecei a ajudar pessoas a escreverem livros, trouxe essa
                  mesma lógica. Não é sobre inspiração ou fórmula mágica — é sobre
                  ter processo e acompanhamento de quem entende.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.24}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginTop: "8px",
                  }}
                >
                  {[
                    { n: "20", label: "anos na Globo" },
                    { n: "12", label: "meses de mentoria" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        background: "var(--color-bg-subtle)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-md)",
                        padding: "20px",
                      }}
                    >
                      <div className="stat-number">{s.n}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div
                  style={{
                    position: "relative",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    aspectRatio: "16/9",
                    marginTop: "8px",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <Image
                    src="/fotos/viviane-11.jpeg"
                    alt="Viviane durante entrevista"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                    sizes="(max-width: 767px) 100vw, 40vw"
                    quality={85}
                  />
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
