"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CHECKOUT_URL =
  "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-mentoria-de-escrita-j9p7t/C99160623K";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fade = (delay: number, x = -20) => ({
  hidden: { opacity: 0, x },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  },
});

function PenSvg({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      aria-hidden="true"
    >
      <line x1="0" y1="20" x2="200" y2="20" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.18" />
      <line x1="0" y1="40" x2="200" y2="40" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.12" />
      <line x1="0" y1="60" x2="200" y2="60" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.18" />
      <line x1="0" y1="80" x2="200" y2="80" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.12" />
      <line x1="0" y1="100" x2="200" y2="100" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.18" />
    </svg>
  );
}

function SignatureSvg({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 180 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      aria-hidden="true"
    >
      <path
        d="M10 35 C 30 10, 50 40, 70 25 C 90 10, 100 38, 130 20 C 150 8, 165 30, 175 22"
        stroke="#BC3D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.35"
        fill="none"
      />
      <path
        d="M8 42 C 20 40, 40 44, 60 41"
        stroke="#BC3D3D"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.2"
        fill="none"
      />
    </svg>
  );
}

export default function HeroCheckout() {
  return (
    <header
      style={{
        paddingTop: "clamp(56px, 7vw, 96px)",
        paddingBottom: "clamp(56px, 7vw, 96px)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Fundo texturado */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 31px, rgba(188,61,61,0.05) 31px, rgba(188,61,61,0.05) 32px)",
          pointerEvents: "none",
        }}
      />

      <div className="container hero-grid" style={{ position: "relative" }}>

        {/* Esquerda: Texto */}
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>

          {/* Eyebrow */}
          <motion.div
            variants={fade(0)}
            initial="hidden"
            animate="visible"
            style={{ marginBottom: "28px", display: "flex", alignItems: "center", gap: "10px" }}
          >
            <span className="tag">Mentoria Individual</span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "var(--color-text-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Não Ficção
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fade(0.08)}
            initial="hidden"
            animate="visible"
            style={{ marginBottom: "28px", maxWidth: "520px" }}
          >
            Escreva seu livro em até 12 meses.
          </motion.h1>

          {/* Assinatura decorativa */}
          <motion.div
            variants={fade(0.14)}
            initial="hidden"
            animate="visible"
            style={{ marginBottom: "24px", marginTop: "-8px" }}
          >
            <SignatureSvg style={{ width: "160px", height: "40px" }} />
          </motion.div>

          {/* Descrição */}
          <motion.p
            variants={fade(0.18)}
            initial="hidden"
            animate="visible"
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "clamp(16px, 1.3vw, 18px)",
              lineHeight: 1.8,
              marginBottom: "44px",
              maxWidth: "440px",
            }}
          >
            Mentoria individual para profissionais que têm conhecimento a
            compartilhar. Com método claro e acompanhamento da primeira linha
            ao capítulo final.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fade(0.26)}
            initial="hidden"
            animate="visible"
            style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "flex-start" }}
          >
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: "none" }}
            >
              Garantir minha vaga
            </a>
            <span className="microcopy" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--color-primary)",
                  opacity: 0.5,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              R$9.997 · até 10x no cartão
            </span>
          </motion.div>

          {/* Credencial */}
          <motion.div
            variants={fade(0.36)}
            initial="hidden"
            animate="visible"
            style={{
              marginTop: "52px",
              paddingTop: "24px",
              borderTop: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
                border: "1.5px solid var(--color-border)",
              }}
            >
              <Image
                src="/fotos/viviane-07.jpeg"
                alt="Viviane"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="36px"
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "var(--color-text-secondary)",
                lineHeight: 1.4,
              }}
            >
              <strong style={{ color: "var(--color-text)", fontWeight: 500 }}>Viviane</strong>
              {" — "}jornalista · 20 anos Globo · mentora de livros
            </p>
          </motion.div>
        </div>

        {/* Direita: Foto */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.12 }}
          style={{ position: "relative" }}
        >
          {/* Linhas decorativas */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: "180px",
              height: "120px",
              zIndex: 0,
              opacity: 0.6,
            }}
          >
            <PenSvg style={{ width: "100%", height: "100%" }} />
          </div>

          {/* Foto */}
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              aspectRatio: "4/5",
              zIndex: 1,
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <Image
              src="/fotos/viviane-13.jpeg"
              alt="Viviane, jornalista e mentora de livros"
              fill
              priority
              quality={90}
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 767px) 100vw, 52vw"
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "30%",
                background: "linear-gradient(to top, rgba(0,0,0,0.18), transparent)",
              }}
            />
          </div>

          {/* Badge flutuante */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
            className="hero-badge"
            style={{
              position: "absolute",
              bottom: "28px",
              left: "clamp(8px, -24px + 5vw, -24px)",
              zIndex: 2,
              background: "#fff",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              padding: "12px 18px",
              boxShadow: "var(--shadow-md)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--color-primary)",
                flexShrink: 0,
              }}
            />
            <div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  lineHeight: 1.2,
                  marginBottom: "2px",
                }}
              >
                Mentoria Individual
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  color: "var(--color-text-muted)",
                  lineHeight: 1,
                }}
              >
                Da primeira linha ao capítulo final
              </p>
            </div>
          </motion.div>

          {/* Tag de prazo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.65 }}
            style={{
              position: "absolute",
              top: "20px",
              right: "-12px",
              zIndex: 2,
              background: "var(--color-primary)",
              color: "#fff",
              borderRadius: "var(--radius-sm)",
              padding: "6px 14px",
              fontFamily: "var(--font-serif)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.01em",
              boxShadow: "0 4px 12px rgba(188,61,61,0.35)",
            }}
          >
            12 meses
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
