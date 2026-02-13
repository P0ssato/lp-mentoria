"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInSection from "../FadeInSection";

const CHECKOUT_URL =
  "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-mentoria-de-escrita-j9p7t/C99160623K";

function NotebookLines({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <line x1="0" y1="16" x2="240" y2="16" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.12" />
      <line x1="0" y1="32" x2="240" y2="32" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.08" />
      <line x1="0" y1="48" x2="240" y2="48" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.12" />
      <line x1="0" y1="64" x2="240" y2="64" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.08" />
    </svg>
  );
}

function SignatureWhite({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <path
        d="M10 35 C 30 10, 50 40, 70 25 C 90 10, 100 38, 130 20 C 150 8, 165 30, 175 22"
        stroke="#ffffff"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.45"
        fill="none"
      />
      <path
        d="M8 42 C 20 40, 40 44, 60 41"
        stroke="#ffffff"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeOpacity="0.25"
        fill="none"
      />
    </svg>
  );
}

export default function SectionCTACheckout() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "clamp(460px, 60vw, 680px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Foto de fundo */}
      <Image
        src="/fotos/viviane-notebook.jpeg"
        alt=""
        fill
        quality={95}
        style={{ objectFit: "cover", objectPosition: "center 30%" }}
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(20,10,10,0.82) 0%, rgba(20,10,10,0.65) 50%, rgba(20,10,10,0.40) 100%)",
        }}
      />

      {/* Textura */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 31px, rgba(255,255,255,0.025) 31px, rgba(255,255,255,0.025) 32px)",
          pointerEvents: "none",
        }}
      />

      {/* Decoração canto superior direito */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "32px",
          right: "48px",
          width: "240px",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      >
        <NotebookLines style={{ width: "100%", height: "auto" }} />
      </div>

      {/* Conteúdo */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "clamp(72px, 9vw, 120px)",
          paddingBottom: "clamp(72px, 9vw, 120px)",
        }}
      >
        <div style={{ maxWidth: "640px" }}>
          {/* Eyebrow */}
          <FadeInSection>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "1px",
                  background: "var(--color-primary)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Garanta sua vaga
              </span>
            </div>
          </FadeInSection>

          {/* Título */}
          <FadeInSection delay={0.08}>
            <h2
              style={{
                color: "#ffffff",
                fontSize: "clamp(32px, 4.5vw, 58px)",
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Seu livro começa agora.
            </h2>
          </FadeInSection>

          {/* Assinatura decorativa */}
          <FadeInSection delay={0.14}>
            <SignatureWhite style={{ width: "140px", height: "36px", marginBottom: "24px" }} />
          </FadeInSection>

          {/* Subtítulo */}
          <FadeInSection delay={0.18}>
            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "clamp(16px, 1.4vw, 19px)",
                lineHeight: 1.75,
                marginBottom: "48px",
                fontFamily: "var(--font-sans)",
              }}
            >
              12 meses de acompanhamento individual, capítulo a capítulo. Com
              método editorial, estrutura e presença de quem entende do processo.
            </p>
          </FadeInSection>

          {/* CTA */}
          <FadeInSection delay={0.26}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
              <motion.a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "#ffffff",
                  color: "var(--color-text)",
                  border: "none",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Garantir minha vaga
              </motion.a>

              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                R$9.997 · até 10× no cartão
              </span>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
