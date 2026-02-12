"use client";

import Image from "next/image";
import FadeInSection from "./FadeInSection";

/* ─────────────────────────────────────────
   Footer — estilo editorial homepage
   Logo / tagline / nav / social / legal
───────────────────────────────────────── */

const NAV_LINKS = [
  { label: "O processo", href: "#processo" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Viviane", href: "#viviane" },
  { label: "Como começar", href: "#como-comecar" },
  { label: "Diagnóstico", href: "#diagnostico" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10v7M7 7v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 17v-3.5c0-1.5 1-2.5 2.5-2.5S16 11 16 13v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 10v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 9.5l5 2.5-5 2.5V9.5z" fill="currentColor" />
      </svg>
    ),
  },
];

/* SVG decorativo: linhas de caderno */
function FooterLines() {
  return (
    <svg viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ position: "absolute", top: 0, left: 0, width: "320px", opacity: 0.5, pointerEvents: "none" }}>
      <line x1="0" y1="12" x2="320" y2="12" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.1" />
      <line x1="0" y1="28" x2="320" y2="28" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.07" />
      <line x1="0" y1="44" x2="320" y2="44" stroke="#BC3D3D" strokeWidth="1" strokeOpacity="0.1" />
    </svg>
  );
}

/* SVG: assinatura cursiva */
function FooterSignature() {
  return (
    <svg viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ width: "120px", height: "30px", display: "block" }}>
      <path
        d="M10 35 C 30 10, 50 40, 70 25 C 90 10, 100 38, 130 20 C 150 8, 165 30, 175 22"
        stroke="#BC3D3D"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.3"
        fill="none"
      />
      <path
        d="M8 42 C 20 40, 40 44, 60 41"
        stroke="#BC3D3D"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeOpacity="0.2"
        fill="none"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-bg-subtle)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: "clamp(64px, 8vw, 96px)",
        paddingBottom: "clamp(40px, 5vw, 56px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative" }}>

        {/* ── Topo: brand + nav + social ── */}
        <FadeInSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "start",
              marginBottom: "clamp(48px, 7vw, 80px)",
            }}
            className="footer-top"
          >
            {/* Brand */}
            <div style={{ maxWidth: "380px" }}>
              {/* Avatar + nome */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
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
                    sizes="44px"
                    quality={90}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "17px",
                      fontWeight: 500,
                      color: "var(--color-text)",
                      lineHeight: 1.2,
                      marginBottom: "2px",
                    }}
                  >
                    Viviane
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                      color: "var(--color-text-muted)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Mentoria de Livro
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(15px, 1.3vw, 17px)",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.65,
                  fontStyle: "italic",
                  marginBottom: "20px",
                }}
              >
                "Do primeiro rascunho até o livro publicado — com método, acompanhamento e prazo real."
              </p>

              <FooterSignature />
            </div>

            {/* Navegação + Social */}
            <div style={{ display: "flex", gap: "clamp(40px, 6vw, 80px)", flexWrap: "wrap" }}>
              {/* Nav links */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                    marginBottom: "20px",
                  }}
                >
                  Navegação
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "14px",
                          color: "var(--color-text-secondary)",
                          textDecoration: "none",
                          transition: "color var(--transition)",
                        }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-primary)")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-secondary)")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                    marginBottom: "20px",
                  }}
                >
                  Redes sociais
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {SOCIAL_LINKS.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          fontFamily: "var(--font-sans)",
                          fontSize: "14px",
                          color: "var(--color-text-secondary)",
                          textDecoration: "none",
                          transition: "color var(--transition)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.color = "var(--color-primary)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.color = "var(--color-text-secondary)";
                        }}
                      >
                        {s.icon}
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* ── Divisor ── */}
        <div style={{ height: "1px", background: "var(--color-border)", marginBottom: "clamp(24px, 3vw, 36px)" }} />

        {/* ── Rodapé legal ── */}
        <FadeInSection delay={0.1}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
            className="footer-legal"
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "var(--color-text-muted)",
                margin: 0,
              }}
            >
              © {year} Viviane · Mentoria de Livro · Todos os direitos reservados
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              {["Privacidade", "Termos de uso"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    transition: "color var(--transition)",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-text)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-muted)")}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Decoração: linhas de papel no canto superior esquerdo */}
        <FooterLines />
      </div>
    </footer>
  );
}
