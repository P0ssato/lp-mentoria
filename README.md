# Mentoria de Livro — Landing Page

Next.js 14 + TypeScript + Tailwind CSS v4 + Framer Motion

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styles:** Tailwind CSS v4 + CSS custom properties
- **Animations:** Framer Motion
- **Forms:** react-hook-form + zod
- **Phone mask:** react-input-mask

---

## Instalação e rodando localmente

```bash
cd mentoria-livro
npm install
cp .env.local.example .env.local
# Edite .env.local com seu endpoint
npm run dev
```

Acesse: http://localhost:3000

---

## Configuração do Formulário

O formulário envia os dados via `POST` para a URL em `.env.local`:

```
NEXT_PUBLIC_FORM_ENDPOINT=https://seu-endpoint-aqui.com/webhook
```

### Payload enviado (JSON)

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "whatsapp": "(11) 99999-9999",
  "sobreOQuê": "Metodologia de vendas B2B",
  "estagio": "so-ideia | comecei-travei | tenho-material",
  "motivacao": "Quero registrar meu conhecimento...",
  "trava": "Não sei como estruturar...",
  "disponibilidade": "sim-disponibilidade | rotina-corrida | nao-consigo",
  "investimento": "sim-cabe | no-limite | nao-cabe"
}
```

Plataformas compatíveis: Make.com, n8n, Zapier, ou qualquer API REST.

---

## Integração Google Calendar

1. Vá em **Google Calendar → Configurações → Integrar Calendário**
2. Copie o `<iframe>` de incorporação
3. Abra `components/CalendarWidget.tsx`
4. Substitua o bloco de placeholder pelo seu iframe:

```tsx
<iframe
  src="https://calendar.google.com/calendar/appointments/schedules/SEU_ID?gv=true"
  style={{ border: 0, width: "100%", height: "600px" }}
  frameBorder="0"
/>
```

---

## Deploy na Vercel

```bash
npm i -g vercel
vercel
# Configure NEXT_PUBLIC_FORM_ENDPOINT em Settings → Environment Variables
```

---

## Estrutura

```
app/
  layout.tsx            Root layout + Noto Serif
  page.tsx              Landing page
  globals.css           Design tokens + estilos base
  obrigado/page.tsx     Thank you page

components/
  FadeInSection.tsx     Wrapper de animação on-scroll
  Hero.tsx
  SectionProblema.tsx
  SectionComoFunciona.tsx
  SectionParaQuem.tsx
  SectionQuemFaz.tsx
  SectionProximoPasso.tsx
  FormDiagnostico.tsx   Formulário com react-hook-form + zod
  CalendarWidget.tsx    Container Google Calendar

public/fotos/
  hero.jpeg             Foto principal (hero)
  viviane-desk.jpeg     Foto seção "Quem vai te acompanhar"
  viviane-notebook.jpeg
  viviane-bw.jpeg
```
