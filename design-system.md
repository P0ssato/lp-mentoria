# Design System - Landing Page Mentoria de Escrita

Inspirado no design do Claude.ai, adaptado para esquema de cores claro (branco/bege + vinho/vermelho escuro).

---

## 1. Paleta de Cores

### Cores Principais

**Background & Surfaces:**
- `background-primary`: #FDFBF7 (bege muito claro, quase branco)
- `background-secondary`: #F5F1E8 (bege claro)
- `surface-elevated`: #FFFFFF (branco puro para cards)
- `surface-subtle`: #FAF7F0 (bege sutilíssimo)

**Brand Colors:**
- `brand-primary`: #8B1538 (vinho escuro - CTAs principais)
- `brand-hover`: #6D1028 (vinho mais escuro - hover states)
- `brand-light`: #B8506E (vinho claro - accents sutis)
- `brand-subtle`: #F4E8EC (rosa muito claro - backgrounds de destaque)

**Text Colors:**
- `text-primary`: #1A1614 (quase preto, para headlines e corpo)
- `text-secondary`: #5C5550 (cinza escuro para texto secundário)
- `text-tertiary`: #9A938C (cinza médio para labels e metadata)
- `text-on-brand`: #FFFFFF (branco para texto sobre vinho)

**Borders & Dividers:**
- `border-subtle`: #E8E3DA (bege escuro para bordas sutis)
- `border-default`: #D4CEC3 (bege médio para divisórias)
- `border-emphasis`: #8B1538 (vinho para bordas de destaque)

**States:**
- `state-success`: #2D5F3F (verde escuro)
- `state-error`: #B8323F (vermelho escuro)
- `state-warning`: #C5864E (laranja terroso)
- `state-info`: #4A6FA5 (azul acinzentado)

---

## 2. Tipografia

### Font Families

**Primary (Sans-serif):**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", "Helvetica Neue", Arial, sans-serif;
```

**Display (Headlines):**
```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
font-weight: 600-700;
letter-spacing: -0.02em;
```

---

## 3. Espaçamento (4px base)
```
spacing-1: 4px
...
spacing-32: 128px
```

---

## 4. Border Radius
```
radius-sm: 6px
radius-md: 12px
radius-lg: 16px
radius-xl: 24px
radius-full: 9999px
```

---

## 5. Shadow System
- `shadow-subtle`: 0 2px 8px rgba(26, 22, 20, 0.04)
- `shadow-default`: 0 8px 24px rgba(26, 22, 20, 0.08)
- `shadow-emphasis`: 0 8px 32px rgba(26, 22, 20, 0.12)
- `shadow-strong`: 0 16px 48px rgba(139, 21, 56, 0.15)
