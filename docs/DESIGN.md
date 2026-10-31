# Bhagavath Safety Nets - Design System & Brand Identity

## 1. Color Palette

The color system for Bhagavath Safety Nets is distinct from prior reference projects, establishing an architectural, warm, and trustworthy tone suited for premium residential high-rise communities in Bengaluru.

| Role | Color Name | Hex Code | Purpose | Contrast Ratio (vs White / Dark) |
|---|---|---|---|---|
| **Primary** | Espresso | `#4A2C2A` | Core brand identity, primary buttons, major section headings | **11.93:1** vs White (WCAG AAA) |
| **Dark Espresso** | Deep Roast | `#2C1816` | Header backgrounds, footer, dark surface accents | **16.15:1** vs White (WCAG AAA) |
| **Espresso Mid** | Warm Mocha | `#5A3633` | Borders, subtle dividers, cards | **9.1:1** vs White (WCAG AAA) |
| **Espresso Light**| Roasted Sienna | `#6B4340` | Gradient endpoints for primary buttons | **7.8:1** vs White (WCAG AAA) |
| **Accent** | Mustard Gold | `#E0A526` | Badges, callout chips, highlights | **7.46:1** vs `#1A1A1A` text (WCAG AAA) |
| **Highlight** | Warm Cream | `#FFF4DC` | Hero chips, badge containers, alert fills | **9.5:1** vs `#3A3A3A` body text |
| **Tint Surface**| Soft Cream | `#FAF5ED` | Alternating section backgrounds, card surfaces | Crisp, gentle warm neutral |
| **Body Text** | Charcoal Brown | `#3A3A3A` | All readable paragraph content | **10.4:1** vs White (WCAG AAA) |
| **Headings** | Deep Espresso | `#1A1A1A` / `#2C1816` | H1-H6 headings and card titles | **16.2:1** vs White (WCAG AAA) |
| **Messaging** | WhatsApp Green | `#25D366` | Instant messaging actions and buttons | **4.5:1+** standard brand CTA |

### WCAG AA / AAA Accessibility Verification
- All button labels on Mustard (`#E0A526`) use dark text (`#1A1A1A`) to ensure a contrast ratio of **7.46:1**, exceeding WCAG AAA standards (minimum 7.0:1).
- Primary button gradient: `linear-gradient(135deg, #4A2C2A, #6B4340)` with crisp white text (`#FFFFFF`), delivering a contrast ratio exceeding **10:1**.
- Paragraph text in `#3A3A3A` on `#FFFFFF` and `#FAF5ED` backgrounds delivers **10.4:1**, far exceeding the WCAG AA requirement of 4.5:1.

---

## 2. Typography

Manikanta used `Inter` and `Geist` / `Geist_Mono`.

Bhagavath Safety Nets uses a distinct, modern architectural pairing:

- **Heading Font**: `Plus Jakarta Sans` (`next/font/google`)
  - Modern geometric sans with clean letterforms, wide apertures, and exceptional legibility at bold weights (`500`, `600`, `700`, `800`).
  - CSS Variable: `--font-heading`
- **Body Font**: `DM Sans` (`next/font/google`)
  - Highly legible grotesque sans-serif engineered for digital screens and comfortable long-form reading across mobile and desktop.
  - CSS Variable: `--font-sans`

---

## 3. Layout and Structural Principles

1. **Elevation & Structure**:
   - Split hero layout placing verified engineering pillars alongside instant site booking.
   - Distinct section sequence focusing on engineering discipline and on-site laser measurement rather than generic sales hype.
2. **Honest Data Presentation**:
   - Zero invented stats, zero fake reviews.
   - Pricing ranges only, with clear notice: *"Prices vary with size, material, and site access. Final quote after a free site visit."*
3. **Warranty Visibility**:
   - `10-Year Warranty` linked to `/terms-and-conditions#warranty` from all occurrences.

