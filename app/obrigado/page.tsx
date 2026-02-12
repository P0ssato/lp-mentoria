"use client";

import { motion } from "framer-motion";
import CalendarWidget from "@/components/CalendarWidget";

/* ─────────────────────────────────────────
   Página de Obrigado — /obrigado
   Exibida após o envio do formulário diagnóstico.
   Orienta o lead a agendar a reunião.
───────────────────────────────────────── */

// Cubic bezier typed correctly for Framer Motion
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function Obrigado() {
  return (
    <main
      style={{
        minHeight: "100vh",
        paddingTop: "clamp(80px, 10vw, 130px)",
        paddingBottom: "clamp(80px, 10vw, 130px)",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "720px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* ── Header ── */}
        <div style={{ marginBottom: "56px" }}>
          {/* Animated red rule */}
          <motion.div
            className="section-rule"
            initial={{ width: 0 }}
            animate={{ width: "36px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ marginBottom: "40px" }}
          />

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            style={{ marginBottom: "32px" }}
          >
            Pronto. Agora escolhe um horário para conversarmos.
          </motion.h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            >
              Recebi seu diagnóstico. Agora você precisa agendar nossa reunião —
              dura uns 45 minutos.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
            >
              A gente vai falar sobre o seu livro especificamente. Vou te
              explicar como o processo funciona na prática, você tira dúvidas, e
              a gente alinha se faz sentido você entrar.
            </motion.p>

            {/* Italic serif line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--color-text-secondary)",
              }}
            >
              Escolhe um horário abaixo que funciona para você.
            </motion.p>
          </div>
        </div>

        {/* ── Google Calendar Widget ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.38 }}
        >
          <CalendarWidget />
        </motion.div>

        {/* ── Observation ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
          style={{
            marginTop: "32px",
            textAlign: "center",
            fontSize: "14px",
            color: "var(--color-text-secondary)",
            fontFamily: "var(--font-sans)",
            lineHeight: 1.6,
          }}
        >
          Você vai receber confirmação por e-mail. Qualquer dúvida antes da
          reunião, me chama no WhatsApp.
        </motion.p>
      </div>
    </main>
  );
}
