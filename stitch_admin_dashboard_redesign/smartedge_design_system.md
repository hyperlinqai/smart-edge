---
name: "SmartEdge Fintech Admin"
description: "Crisp, mint-tinted light-mode fintech operations dashboard with high-craft vector iconography, soft ambient elevation, and tabular financial clarity."
---

## Overview

SmartEdge is a B2B payment and utility operations portal built for retail merchants and enterprise agents ("Mehul Enterprises"). The interface balances approachable freshness with financial precision: a soft mint-white canvas, pure white elevated cards, vibrant emerald-green brand accents for primary navigation and active states, and distinct semantic tints (sky blue, warm amber, coral red) for wallet categories and transaction statuses.

The visual style is **Corporate / Modern** with subtle organic wave flourishes in the background and metric cards, crisp tabular numerals for INR (`₹`) currency amounts, and high-quality vector icons throughout.

## Colors

The palette pairs SmartEdge's signature emerald green (`#109B4D`) with a mint-tinted neutral surface hierarchy (`#F5FBF1` background, `#FFFFFF` elevated cards) and semantic status/category accents.

- **Primary:** Deep emerald green (`#006B32` / `#109B4D`) used for brand identity, active navigation gradients, primary links, and positive growth indicators.
- **Category & Status Accents:** Sky blue (`#2563EB` on `#EEF4FF`) for AEPS Wallet and Reversal metrics; warm amber (`#D97706` on `#FEF3C7`) for Commission and Verification states; coral red (`#DC2626` on `#FEE2E2`) for Refund states and Borrowed Amount metrics.

```yaml
colors:
  brand-green: "#109B4D"
  brand-green-bright: "#48C16E"
  brand-green-deep: "#064E2E"
  brand-mint-soft: "#E6F7ED"
  info-blue: "#2563EB"
  info-blue-soft: "#EEF4FF"
  warning-amber: "#92400E"
  warning-amber-soft: "#FEF3C7"
  success-green: "#15803D"
  success-green-soft: "#DCFCE7"
  refund-red: "#B91C1C"
  refund-red-soft: "#FEE2E2"
  light:
    primary: "#006B32"
    on-primary: "#FFFFFF"
    primary-container: "#008741"
    on-primary-container: "#F7FFF3"
    secondary: "#3D6846"
    on-secondary: "#FFFFFF"
    secondary-container: "#BCECC0"
    on-secondary-container: "#416C4A"
    tertiary: "#A4324C"
    on-tertiary: "#FFFFFF"
    tertiary-container: "#C44A64"
    on-tertiary-container: "#FFFBFF"
    error: "#BA1A1A"
    on-error: "#FFFFFF"
    error-container: "#FFDAD6"
    on-error-container: "#93000A"
    background: "#F5FBF1"
    on-background: "#171D17"
    surface: "#F5FBF1"
    surface-dim: "#D5DCD2"
    surface-bright: "#F5FBF1"
    surface-container-lowest: "#FFFFFF"
    surface-container-low: "#EFF6EB"
    surface-container: "#E9F0E6"
    surface-container-high: "#E3EAE0"
    surface-container-highest: "#DEE4DA"
    on-surface: "#171D17"
    surface-variant: "#D9E6D7"
    on-surface-variant: "#3E4A3E"
    outline: "#6E7A6D"
    outline-variant: "#BDCABB"
    inverse-surface: "#2B322B"
    inverse-on-surface: "#ECF3E8"
    inverse-primary: "#66DE87"
    shadow: "#000000"
    scrim: "#000000"
  dark:
    primary: "#66DE87"
    on-primary: "#003917"
    primary-container: "#24A556"
    on-primary-container: "#00260D"
    secondary: "#A3D2A8"
    on-secondary: "#0C381B"
    secondary-container: "#275232"
    on-secondary-container: "#95C49B"
    tertiary: "#FFB2BC"
    on-tertiary: "#670023"
    tertiary-container: "#E8667F"
    on-tertiary-container: "#470016"
    error: "#FFB4AB"
    on-error: "#690005"
    error-container: "#93000A"
    on-error-container: "#FFDAD6"
    background: "#0F150F"
    on-background: "#DEE4DA"
    surface: "#0F150F"
    surface-dim: "#0F150F"
    surface-bright: "#343B34"
    surface-container-lowest: "#09100A"
    surface-container-low: "#171D17"
    surface-container: "#1B211B"
    surface-container-high: "#252C25"
    surface-container-highest: "#303630"
    on-surface: "#DEE4DA"
    surface-variant: "#3E4A3E"
    on-surface-variant: "#BDCABB"
    outline: "#879486"
    outline-variant: "#3E4A3E"
    inverse-surface: "#DEE4DA"
    inverse-on-surface: "#2B322B"
    inverse-primary: "#006D33"
    shadow: "#000000"
    scrim: "#000000"
```

## Typography

**Afacad Flux** drives display numbers, greetings, and section headings with geometric clarity, paired with **Radio Canada Big** for UI labels, navigation, and dense transaction tables, and **Spline Sans Mono** for account numbers, UTRs, and keyboard shortcuts. All currency figures and table metrics use `tabular-nums`.

```yaml
typography:
  display-lg:
    fontFamily: "Afacad Flux"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 42px
    letterSpacing: -0.5px
  display-lg-mobile:
    fontFamily: "Afacad Flux"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 34px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: "Afacad Flux"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 34px
    letterSpacing: -0.25px
  headline-md:
    fontFamily: "Afacad Flux"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 30px
    letterSpacing: -0.2px
  headline-sm:
    fontFamily: "Afacad Flux"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: 0px
  title-md:
    fontFamily: "Radio Canada Big"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 22px
    letterSpacing: 0px
  body-md:
    fontFamily: "Radio Canada Big"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Radio Canada Big"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
  label-lg:
    fontFamily: "Radio Canada Big"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0px
  label-md:
    fontFamily: "Radio Canada Big"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.1px
  label-sm:
    fontFamily: "Radio Canada Big"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 14px
    letterSpacing: 0.2px
  mono-sm:
    fontFamily: "Spline Sans Mono"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0px
```

## Layout & Spacing

Desktop-first 12-column fluid dashboard shell (`1280px+` target) with a fixed `240px` left navigation sidebar and a spacious main workspace. A strict `4px` / `8px` spacing scale keeps cards, table rows, and quick-action tiles aligned.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section: 24px
  page-margin: 24px
```

## Elevation & Depth

Cards sit on a soft mint-tinted canvas (`surface`) using pure white (`surface-container-lowest`), subtle `1px` `outline-variant` ghost borders, and extra-diffused ambient shadows (`0 8px 24px -6px rgba(16, 155, 77, 0.06)`). Active states (the Dashboard nav pill and Money Transfer quick action) use soft emerald elevation rather than heavy drop shadows.

## Shapes

Generous rounded corners (`16px` on dashboard cards, `12px` on quick action tiles and nav pills, `9999px` on status badges, search bars, and profile pills) create an approachable, modern fintech feel.

```yaml
rounded:
  sm: 6px
  DEFAULT: 10px
  md: 12px
  lg: 16px
  xl: 20px
  full: 9999px
```

## Motion & Micro-interaction

Interactions are crisp and responsive: hover transitions on quick-action tiles, table rows, and sidebar links settle in `150ms` using `ease-out`, with subtle `translateY(-2px)` lift on interactive action cards.

```yaml
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 240ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
```

## Voice & Content Strategy

Direct, operational, and reassuring. Labels use concise Title Case for navigation and section titles (`Fund Request`, `Quick Actions`, `Business Summary`), Indian Rupee (`₹`) formatting with Indian numbering commas (`₹ 10,19,999.00`, `₹ 5,00,000.00`), and clear 1-word status badges (`Success`, `Verification`, `Refund`).

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Badge** → `@components/badge.html`: `badge-numeric`, `badge-dot`
- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Table** → `@components/table.html`: `table-standard`, `table-interactive`, `table-selectable`
