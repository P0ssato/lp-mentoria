"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "./FadeInSection";

/* ─────────────────────────────────────────
   Brazilian phone mask
───────────────────────────────────────── */
function applyPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  return value;
}

/* ─────────────────────────────────────────
   Zod Schema
───────────────────────────────────────── */
const schema = z.object({
  nome: z.string().min(3, "Informe seu nome completo"),
  email: z.string().email("Informe um e-mail válido"),
  whatsapp: z.string().min(14, "Informe um número válido no formato (00) 00000-0000"),
  sobreOQuê: z.string().min(10, "Descreva brevemente sobre o que você quer escrever"),
  estagio: z.enum(["so-ideia", "comecei-travei", "tenho-material"], {
    error: "Selecione uma opção",
  }),
  motivacao: z.string().min(10, "Conte um pouco sobre sua motivação"),
  trava: z.string().min(5, "Descreva o que te trava hoje"),
  disponibilidade: z.enum(["sim-disponibilidade", "rotina-corrida", "nao-consigo"], {
    error: "Selecione uma opção",
  }),
  investimento: z.enum(["sim-cabe", "no-limite", "nao-cabe"], {
    error: "Selecione uma opção",
  }),
});

type FormData = z.infer<typeof schema>;

/* ─────────────────────────────────────────
   Step definitions
───────────────────────────────────────── */
const STEPS = [
  {
    id: "contato",
    label: "Contato",
    title: "Como posso te chamar?",
    subtitle: "Preciso de algumas informações básicas para dar continuidade.",
    fields: ["nome", "email", "whatsapp"] as const,
  },
  {
    id: "livro",
    label: "O livro",
    title: "Sobre o que você quer escrever?",
    subtitle: "Me conta sobre o projeto do seu livro.",
    fields: ["sobreOQuê", "estagio"] as const,
  },
  {
    id: "motivacao",
    label: "Motivação",
    title: "O que te motiva e o que te trava?",
    subtitle: "Preciso entender o seu momento atual.",
    fields: ["motivacao", "trava"] as const,
  },
  {
    id: "compromisso",
    label: "Compromisso",
    title: "Vamos ver se faz sentido agora.",
    subtitle: "Duas perguntas práticas sobre disponibilidade e investimento.",
    fields: ["disponibilidade", "investimento"] as const,
  },
];

const TOTAL_STEPS = STEPS.length;

/* ─────────────────────────────────────────
   Radio Group
───────────────────────────────────────── */
function RadioGroup({
  name,
  options,
  value,
  onChange,
  error,
}: {
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <div className="radio-group">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`radio-option${value === opt.value ? " radio-selected" : ""}`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
            />
            <span className="radio-custom">
              <span className="radio-dot" />
            </span>
            <span className="radio-label-text">{opt.label}</span>
          </label>
        ))}
      </div>
      {error && <span className="form-error-msg">{error}</span>}
    </div>
  );
}

/* ─────────────────────────────────────────
   Slide animation variants
───────────────────────────────────────── */
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -48 : 48,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

/* ─────────────────────────────────────────
   Main Form Component
───────────────────────────────────────── */
export default function FormDiagnostico() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;
  const step = STEPS[currentStep];

  /* Validate current step fields before advancing */
  const handleNext = async () => {
    const valid = await trigger([...step.fields] as Parameters<typeof trigger>[0]);
    if (!valid) return;
    setDirection(1);
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrentStep((s) => Math.max(s - 1, 0));
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Erro ao enviar. Tente novamente.");
      }
      window.location.href = "/obrigado";
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Ocorreu um erro. Por favor, tente novamente."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="diagnostico"
      style={{
        paddingTop: "var(--section-gap)",
        paddingBottom: "var(--section-gap)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* ── Header ── */}
        <FadeInSection>
          <div className="section-rule" />
          <h2 style={{ marginBottom: "12px" }}>Diagnóstico do seu livro</h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "40px" }}>
            Preciso entender seu caso para a gente conversar com clareza. Leva
            uns 3 minutos.
          </p>
        </FadeInSection>

        {/* ── Progress bar ── */}
        <FadeInSection delay={0.08}>
          <div style={{ marginBottom: "36px" }}>
            {/* Step labels */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              {STEPS.map((s, i) => (
                <span
                  key={s.id}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    fontWeight: i === currentStep ? 600 : 400,
                    color: i <= currentStep ? "var(--color-primary)" : "var(--color-text-muted)",
                    transition: "color 0.3s ease",
                    letterSpacing: "0.02em",
                  }}
                >
                  {s.label}
                </span>
              ))}
            </div>
            {/* Track */}
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Step counter */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "8px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  color: "var(--color-text-muted)",
                }}
              >
                {currentStep + 1} de {TOTAL_STEPS}
              </span>
            </div>
          </div>
        </FadeInSection>

        {/* ── Form card ── */}
        <FadeInSection delay={0.14}>
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Animated step content */}
              <div style={{ overflow: "hidden", position: "relative" }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    style={{ padding: "36px 40px 32px" }}
                  >
                    {/* Step header */}
                    <div style={{ marginBottom: "28px" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "clamp(18px, 1.8vw, 22px)",
                          fontWeight: 500,
                          marginBottom: "8px",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {step.subtitle}
                      </p>
                    </div>

                    {/* ── Step 0: Contato ── */}
                    {currentStep === 0 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div>
                          <label className="form-label" htmlFor="nome">Nome completo</label>
                          <input
                            id="nome"
                            type="text"
                            className={`form-input${errors.nome ? " input-error" : ""}`}
                            placeholder="Seu nome"
                            autoComplete="name"
                            {...register("nome")}
                          />
                          {errors.nome && <span className="form-error-msg">{errors.nome.message}</span>}
                        </div>

                        <div>
                          <label className="form-label" htmlFor="email">E-mail</label>
                          <input
                            id="email"
                            type="email"
                            className={`form-input${errors.email ? " input-error" : ""}`}
                            placeholder="seu@email.com"
                            autoComplete="email"
                            {...register("email")}
                          />
                          {errors.email && <span className="form-error-msg">{errors.email.message}</span>}
                        </div>

                        <div>
                          <label className="form-label" htmlFor="whatsapp">WhatsApp</label>
                          <Controller
                            name="whatsapp"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                id="whatsapp"
                                type="tel"
                                className={`form-input${errors.whatsapp ? " input-error" : ""}`}
                                placeholder="(00) 00000-0000"
                                autoComplete="tel"
                                value={field.value}
                                onBlur={field.onBlur}
                                onChange={(e) => field.onChange(applyPhoneMask(e.target.value))}
                              />
                            )}
                          />
                          {errors.whatsapp && <span className="form-error-msg">{errors.whatsapp.message}</span>}
                        </div>
                      </div>
                    )}

                    {/* ── Step 1: O Livro ── */}
                    {currentStep === 1 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <div>
                          <label className="form-label" htmlFor="sobreOQue">Sobre o que você quer escrever?</label>
                          <textarea
                            id="sobreOQue"
                            className={`form-textarea${errors.sobreOQuê ? " input-error" : ""}`}
                            placeholder="Exemplo: metodologia de vendas, experiência como gestor, trajetória no mercado financeiro..."
                            {...register("sobreOQuê")}
                          />
                          {errors.sobreOQuê && <span className="form-error-msg">{errors.sobreOQuê.message}</span>}
                        </div>

                        <div>
                          <label className="form-label">Você já começou a escrever ou ainda está organizando a ideia?</label>
                          <Controller
                            name="estagio"
                            control={control}
                            render={({ field }) => (
                              <RadioGroup
                                name="estagio"
                                value={field.value ?? ""}
                                onChange={field.onChange}
                                error={errors.estagio?.message}
                                options={[
                                  { value: "so-ideia", label: "Só tenho a ideia na cabeça" },
                                  { value: "comecei-travei", label: "Comecei mas travei no meio" },
                                  { value: "tenho-material", label: "Tenho material mas precisa organizar" },
                                ]}
                              />
                            )}
                          />
                        </div>
                      </div>
                    )}

                    {/* ── Step 2: Motivação ── */}
                    {currentStep === 2 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <div>
                          <label className="form-label" htmlFor="motivacao">Por que você quer escrever esse livro?</label>
                          <textarea
                            id="motivacao"
                            className={`form-textarea${errors.motivacao ? " input-error" : ""}`}
                            placeholder="Registrar conhecimento? Fortalecer autoridade? Deixar um legado? Organizar pensamento?"
                            {...register("motivacao")}
                          />
                          {errors.motivacao && <span className="form-error-msg">{errors.motivacao.message}</span>}
                        </div>

                        <div>
                          <label className="form-label" htmlFor="trava">O que te trava hoje?</label>
                          <textarea
                            id="trava"
                            className={`form-textarea${errors.trava ? " input-error" : ""}`}
                            placeholder="Não sei estruturar? Não sei se está bom? Falta disciplina? Não sei começar?"
                            {...register("trava")}
                          />
                          {errors.trava && <span className="form-error-msg">{errors.trava.message}</span>}
                        </div>
                      </div>
                    )}

                    {/* ── Step 3: Compromisso ── */}
                    {currentStep === 3 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <div>
                          <label className="form-label">
                            Você consegue trabalhar nisso de forma consistente nos próximos 12 meses?
                          </label>
                          <Controller
                            name="disponibilidade"
                            control={control}
                            render={({ field }) => (
                              <RadioGroup
                                name="disponibilidade"
                                value={field.value ?? ""}
                                onChange={field.onChange}
                                error={errors.disponibilidade?.message}
                                options={[
                                  { value: "sim-disponibilidade", label: "Sim, tenho disponibilidade" },
                                  { value: "rotina-corrida", label: "Minha rotina é corrida mas consigo me organizar" },
                                  { value: "nao-consigo", label: "Não consigo agora" },
                                ]}
                              />
                            )}
                          />
                        </div>

                        <div>
                          <label className="form-label">
                            O investimento da mentoria é R$9.997 (até 10x no cartão). Isso cabe para você agora?
                          </label>
                          <Controller
                            name="investimento"
                            control={control}
                            render={({ field }) => (
                              <RadioGroup
                                name="investimento"
                                value={field.value ?? ""}
                                onChange={field.onChange}
                                error={errors.investimento?.message}
                                options={[
                                  { value: "sim-cabe", label: "Sim, cabe" },
                                  { value: "no-limite", label: "Está no limite mas consigo" },
                                  { value: "nao-cabe", label: "Não cabe agora" },
                                ]}
                              />
                            )}
                          />
                        </div>

                        {submitError && (
                          <p style={{ color: "var(--color-primary)", fontSize: "14px", fontFamily: "var(--font-sans)" }}>
                            {submitError}
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ── Navigation footer ── */}
              <div
                style={{
                  display: "flex",
                  justifyContent: currentStep > 0 ? "space-between" : "flex-end",
                  alignItems: "center",
                  padding: "20px 40px 32px",
                  borderTop: "1px solid var(--color-border-subtle)",
                  background: "var(--color-bg-subtle)",
                  gap: "12px",
                }}
              >
                {currentStep > 0 && (
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={handleBack}
                    disabled={isSubmitting}
                  >
                    ← Voltar
                  </button>
                )}

                {currentStep < TOTAL_STEPS - 1 ? (
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={handleNext}
                  >
                    Continuar →
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar e agendar conversa"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
