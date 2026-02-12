"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────
   Navbar
   Fixa no topo, transparente → branca ao rolar.
   Links âncora para seções + botão CTA.
   Hamburger em mobile.
───────────────────────────────────────── */

const NAV_LINKS = [
  { label: "O processo", href: "#processo" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Viviane", href: "#viviane" },
  { label: "Como começar", href: "#como-comecar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    setMenuOpen(false);
    const el = document.getElementById("diagnostico");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 280ms ease, box-shadow 280ms ease, border-color 280ms ease",
          background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* ── Logo / Wordmark ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1px",
            }}
            aria-label="Voltar ao topo"
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "17px",
                fontWeight: 600,
                color: "var(--color-text)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Viviane
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 400,
                color: "var(--color-primary)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Mentoria de Livro
            </span>
          </button>

          {/* ── Desktop links ── */}
          <div
            className="nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "var(--color-text-secondary)",
                  padding: "4px 0",
                  letterSpacing: "0.01em",
                  transition: "color var(--transition)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
              >
                {link.label}
              </button>
            ))}

            {/* CTA */}
            <button
              className="btn-primary"
              onClick={scrollToForm}
              style={{ padding: "10px 22px", fontSize: "14px", borderRadius: "6px" }}
            >
              Diagnóstico gratuito
            </button>
          </div>

          {/* ── Hamburger (mobile) ── */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "6px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--color-text)",
                transition: "all 260ms ease",
                transformOrigin: "center",
                transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--color-text)",
                transition: "all 260ms ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--color-text)",
                transition: "all 260ms ease",
                transformOrigin: "center",
                transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 99,
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderBottom: "1px solid var(--color-border)",
              padding: "16px 24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "var(--color-text)",
                  padding: "12px 0",
                  textAlign: "left",
                  borderBottom: "1px solid var(--color-border-subtle)",
                  transition: "color var(--transition)",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              className="btn-primary full-width"
              onClick={scrollToForm}
              style={{ marginTop: "16px" }}
            >
              Diagnóstico gratuito
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer para compensar navbar fixa */}
      <div style={{ height: "64px" }} />
    </>
  );
}
