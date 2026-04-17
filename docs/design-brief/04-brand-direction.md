# 04 — Brand Direction

**Owner:** `design-system-lead`
**Phase:** 1B — Design Brief
**Status:** v2 — **Locked** (HomePro-inspired · approved by team-lead)

> **Changelog v2 (pivot):** เปลี่ยนจาก "Warm Minimal (sage)" เป็น **"HomePro-inspired Royal Blue + accent red/yellow"** ตาม direction ลูกค้า · display font เปลี่ยนจาก serif → **Prompt** (sans) · bilingual TH/EN confirmed · dark mode = tokens only (no Figma dark screens)

---

## Brand Positioning

**Homesphere** — modern home & living marketplace ของคนยุคใหม่
- **Inspiration:** HomePro.co.th — big-box home improvement store ของไทย (trust, variety, deal-driven)
- **Values:** ครบ · คุ้ม · เชื่อถือได้ · inspire-your-space · มีบริการครบวงจร (ติดตั้ง, ผ่อน, ส่ง)
- **Tone of voice:** energetic, deal-driven, trustworthy, bilingual-friendly — เร้าใจแต่ไม่ถูกจริต
- **Brand moment:** Royal Blue primary สร้างความเชื่อมั่น · Accent Red กระตุ้น urgency (Shocking Deal / Flash Sale) · Accent Yellow เน้น rewards & service callouts
- **Target audience:** เจ้าของบ้าน / ผู้กำลังซื้อบ้าน / ครอบครัว 25-55 ปี · นักตกแต่ง DIY · ผู้ใช้ hybrid TH/EN

### Differentiation from pure-HomePro clone
Homesphere **ไม่ใช่** การก๊อป HomePro — เราหยิบ DNA (Blue + Red + Yellow palette, service-first messaging, category-first homepage) มาทำใหม่ให้:
- **Typography ดีกว่า** — Prompt + IBM Plex Sans Thai (HomePro ใช้ font ไทยเก่าแน่นกว่า)
- **Spacing หายใจได้กว่า** — HomePro อัดข้อมูลแน่น, Homesphere เว้น breathing room
- **Modern component polish** — soft shadow, subtle radius, clean grid vs HomePro table-dense

---

## Mood Direction — LOCKED

**Chosen:** HomePro-Inspired Royal Blue
- **Feel:** trusted, energetic, deal-forward, category-rich, bilingual TH/EN
- **Keywords:** royal blue hero, red flash urgency, **orange rewards**, white space base, circular category icons, service chips
- **Benchmark:** HomePro.co.th (DNA reference) + Lotus's / Central Online (Thai retail polish) + Best Buy (Western benchmark for electronics big-box)
- **Primary hue:** Royal Blue `#1E65B2` (updated 2026-04-17 per lead)

> เดิม Option A (Warm Minimal) / B (Editorial Navy) / C (Modern Terracotta) ถูกยกเลิกหลัง pivot

---

## Color Tokens — HomePro-Inspired (LOCKED)

ใช้ Tailwind `50-950` scale + CSS variables รองรับ dark mode (tokens only, ไม่ออก dark screens ใน Figma Phase 2)

### Primary — Royal Blue

```
primary-50:  #EBF3FA
primary-100: #D1E2F2
primary-200: #A7C6E6
primary-300: #75A3D6
primary-400: #4680C3
primary-500: #2C6FBB
primary-600: #1E65B2   ← BRAND PRIMARY (updated 2026-04-17 — ฟ้าสว่างขึ้น)
primary-700: #17528F
primary-800: #12406F
primary-900: #0D2D50
primary-950: #061E36
```

**Usage:**
- `primary-600` = brand primary (logo, primary CTA default, active nav link, link text)
- `primary-700` = primary button hover/pressed, active-deep
- `primary-800-900` = header background (desktop top bar), footer background
- `primary-50-100` = tint surface (selected row, info background)

### Accent Red — Urgency / Deal

```
red-50:  #FDECEC
red-100: #FBD0D0
red-200: #F6A4A4
red-300: #EE7373
red-400: #E63B3B
red-500: #E30613   ← ACCENT RED (flash sale, shocking deal, discount %)
red-600: #C0030F
red-700: #9B020C
red-800: #7A0309
red-900: #5A0206
```

**Usage:**
- `red-500` = Flash Sale bar, Shocking Deal badge, discount % text, strikethrough-price replacement
- `red-600` = hover state ของ red CTAs (ใช้น้อย — ไม่ควรแข่งกับ primary)
- ❌ **ห้ามใช้เป็น primary CTA** — red สงวนไว้สำหรับ urgency/promo เท่านั้น เพื่อไม่ให้ความหมาย dilute
- ⚠️ **error-500 ใน semantic ต้อง distinct จาก red-500** — ดูด้านล่าง

### Accent Orange — Rewards / Service (updated 2026-04-17 — เปลี่ยนจาก yellow เป็น orange ตาม lead directive)

```
orange-50:  #FEF4E7
orange-100: #FDE4C1
orange-200: #FCCA87
orange-300: #FBB04D
orange-400: #FA9E24
orange-500: #F99012   ← ACCENT ORANGE (rewards, service callout — ใกล้ HomePro จริงกว่า yellow เดิม)
orange-600: #E07C0B
orange-700: #B86207
orange-800: #8F4905
orange-900: #663303
orange-950: #3D1E02
```

**Usage:**
- `orange-500` = Homesphere Card rewards badge, "ฟรีติดตั้ง" callout, service strip accent, star rating fill
- `orange-100-200` = soft highlight background (promotion strip, announcement)
- ⚠️ Contrast: `orange-500` บน white **ผ่าน AA แบบจำกัด** (ratio ~3.3:1 — ใช้ได้กับ **large text ≥18pt** หรือ UI components เท่านั้น) — สำหรับ body text ยังต้องใช้กับ `neutral-900` หรือ fill icon/badge

### Neutral — Cool Gray (คู่กับ Blue)

ปรับ neutral จาก "warm stone" เดิมเป็น **cool gray** เพื่อคู่กับ Royal Blue (warm gray จะขัดกับ cool primary)

```
neutral-0:   #FFFFFF
neutral-50:  #F7F9FC   ← body background (very light cool)
neutral-100: #EEF2F7
neutral-200: #DDE3EC
neutral-300: #C3CBD6
neutral-400: #9099A5
neutral-500: #6B7280
neutral-600: #4B5563
neutral-700: #374151
neutral-800: #1F2937
neutral-900: #111827
neutral-950: #0A0F1A
```

### Semantic Colors

ปรับเพื่อ (a) harmony กับ blue primary, (b) distinct จาก accent red

```
success-500: #16A34A   (green — distinct จาก blue/red, use for confirm/paid/in-stock)
warning-500: #F59E0B   (amber — distinct จาก orange-500 — ใช้แค่ system warning)
error-500:   #DC2626   (error red — **เข้มกว่า** red-500 เพื่อไม่ชนกับ accent)
info-500:    #2563EB   (info blue — ใช้แค่ system info, สว่างกว่า primary เพื่อไม่ชนกัน)
```

**กฎการใช้ red 2 เฉด:**
- `red-500 #E30613` = **marketing accent** (flash sale badge, discount %)
- `error-500 #DC2626` = **system error state** (form error, toast error, validation)
- ห้ามสลับ — context ต่างกันต้องต่างเฉด เพื่อไม่ให้ user สับสน flash-sale vs ระบบ error

### Overlay

```
overlay-scrim: rgba(6, 30, 54, 0.52)      ← modal backdrop (derived from primary-950)
overlay-hover: rgba(30, 101, 178, 0.06)   ← primary-600 @ 6% — hover tint
overlay-press: rgba(30, 101, 178, 0.12)   ← primary-600 @ 12% — pressed tint
```

### Palette Role Summary

| Role | Token | ใช้ที่ไหน |
|------|-------|----------|
| Brand primary | `primary-600 #1E65B2` | Logo, primary CTA, header, footer, active states |
| Deal urgency | `red-500 #E30613` | Flash Sale, Shocking Deal, discount %, countdown ending-soon |
| Rewards / Service | `orange-500 #F99012` | Rewards badge, service callouts, star rating, "ฟรีติดตั้ง" |
| Success / In-stock | `success-500 #16A34A` | Order paid, in-stock, form success |
| System error | `error-500 #DC2626` | Form error, toast error |
| System warning | `warning-500 #F59E0B` | Low-stock warning, system notice |
| System info | `info-500 #2563EB` | Info toast, neutral banner |

---

## Typography System

### Font Stack — LOCKED

**Display (hero, h1-h3, flash sale, banners):** **`Prompt`**
- Google Fonts · Cadson Demak · รองรับไทย-อังกฤษ · weights 100-900
- เหมาะกับ HomePro-style impact (high-energy, deal-driven)
- ใช้กับ hero headlines, section titles, promotional banners, price display

**Body / UI:** **`IBM Plex Sans Thai`** + `IBM Plex Sans`
- รองรับไทยเต็มรูปแบบ · น้ำหนัก 300-700 · neutral & legible for long reading
- Fallback: `system-ui, -apple-system, "Segoe UI", sans-serif`

**Number / Price (optional tabular):** `IBM Plex Sans` พร้อม `font-variant-numeric: tabular-nums`
- บังคับ tabular กับ price, quantity, countdown, order total เพื่อเรียง digit ตรง column

### Type Scale (rem, base 16px)

| Token | Size | Line-height | Weight | Letter-spacing | ใช้กับ |
|-------|------|-------------|--------|----------------|--------|
| `display-2xl` | 4.5rem (72) | 1.05 | 700 (Prompt) | -0.02em | Hero headline (desktop) |
| `display-xl`  | 3.75rem (60) | 1.08 | 700 (Prompt) | -0.02em | Hero (mobile) / landing |
| `display-lg`  | 3rem (48) | 1.1 | 600 (Prompt) | -0.015em | Section hero, Flash Sale banner |
| `h1` | 2.25rem (36) | 1.2 | 600 (Prompt) | -0.01em | Page title |
| `h2` | 1.875rem (30) | 1.25 | 600 (Prompt) | -0.01em | Major section |
| `h3` | 1.5rem (24) | 1.3 | 600 (Prompt) | 0 | Sub section, card title |
| `h4` | 1.25rem (20) | 1.35 | 600 (IBM Plex) | 0 | Group heading |
| `h5` | 1.125rem (18) | 1.4 | 600 (IBM Plex) | 0 | Minor heading |
| `h6` | 1rem (16) | 1.45 | 600 (IBM Plex) | 0.01em | Eyebrow / micro heading |
| `body-lg` | 1.125rem (18) | 1.6 | 400 (IBM Plex) | 0 | Lead paragraph, PDP desc |
| `body`    | 1rem (16) | 1.6 | 400 (IBM Plex) | 0 | Default body |
| `body-sm` | 0.875rem (14) | 1.55 | 400 (IBM Plex) | 0 | Meta, secondary |
| `caption` | 0.75rem (12) | 1.5 | 500 (IBM Plex) | 0 | Badge, label, timestamps |
| `overline`| 0.6875rem (11) | 1.4 | 600 (IBM Plex) | 0.08em UPPERCASE | Eyebrow above title |
| `price-lg` | 1.875rem (30) | 1.1 | 700 (Prompt, tabular) | -0.01em | PDP price display |
| `price-md` | 1.25rem (20) | 1.2 | 700 (Prompt, tabular) | 0 | ProductCard price |
| `price-sm` | 1rem (16) | 1.3 | 700 (IBM Plex, tabular) | 0 | Cart line item, inline |

### Typography Notes (Thai-specific)
- **Line-height body ไทย ≥ 1.6** (อักษรไทยมีวรรณยุกต์ + สระบน–ล่าง → ต้องการ height มากกว่า Latin)
- **Letter-spacing ไทย = 0** (ห้ามบวก + เพราะไทยไม่มี space ระหว่างคำ)
- **Mixed TH/EN** ใช้ font family เดียวเสมอ (Prompt สำหรับ display, IBM Plex Sans Thai สำหรับ body) เพื่อ baseline ไม่เพี้ยน
- **All-caps ใช้เฉพาะ EN + ตัวเลข** ใน `overline` token — ไม่บังคับ caps กับไทย
- **Bilingual TH/EN toggle:** copy tokens จะถูกเตรียมไว้ทั้ง 2 ภาษา · Header language switcher (TH / EN) — Phase 5 implement

---

## Spacing Scale

**Base unit:** `4px` (0.25rem) — Tailwind default

| Token | rem | px | ใช้กับ |
|-------|-----|-----|--------|
| `0` | 0 | 0 | — |
| `0.5` | 0.125 | 2 | hairline gap |
| `1` | 0.25 | 4 | icon gap, micro |
| `1.5` | 0.375 | 6 | dense list |
| `2` | 0.5 | 8 | compact padding |
| `3` | 0.75 | 12 | tight spacing |
| `4` | 1 | 16 | **default body gap** |
| `5` | 1.25 | 20 | small section gap |
| `6` | 1.5 | 24 | card padding |
| `8` | 2 | 32 | section inner gap |
| `10` | 2.5 | 40 | — |
| `12` | 3 | 48 | small section vertical |
| `16` | 4 | 64 | section vertical gap |
| `20` | 5 | 80 | large section gap |
| `24` | 6 | 96 | hero vertical gap (desktop) |

**Section rhythm:** mobile 48-64px · tablet 64-80px · desktop 80-96px

---

## Border Radius Scale

| Token | px | ใช้กับ |
|-------|------|--------|
| `none` | 0 | ตาราง, divider |
| `sm` | 4 | badge, tag, tooltip |
| `md` | 8 | **default** input, button, small card |
| `lg` | 12 | card, modal |
| `xl` | 16 | hero card, featured tile |
| `2xl` | 24 | large marketing section, image hero |
| `full` | 9999 | pill, avatar, badge circle, **CircularCategoryTile** |

**Default สำหรับ button/input/card:** `md (8px)` — modern แต่ไม่ rounded-pill

---

## Elevation / Shadow Scale

Soft cool shadow (เย็นกว่า warm เดิม เพื่อเข้ากับ blue primary)

```
shadow-xs:  0 1px 2px  rgba(17, 24, 39, 0.04)
shadow-sm:  0 2px 4px  rgba(17, 24, 39, 0.06)
shadow-md:  0 4px 12px rgba(17, 24, 39, 0.08)        ← card default
shadow-lg:  0 8px 24px rgba(17, 24, 39, 0.10)        ← popover, dropdown
shadow-xl:  0 16px 48px rgba(17, 24, 39, 0.14)       ← modal
shadow-2xl: 0 24px 64px rgba(17, 24, 39, 0.18)       ← hero / feature spotlight

shadow-inner: inset 0 1px 2px rgba(17, 24, 39, 0.06) ← pressed button, input focus bg
```

**Focus ring** (a11y):
```
ring-focus: 0 0 0 3px rgba(30, 101, 178, 0.35)  ← primary-600 @ 35%
```

---

## Breakpoints

Tailwind default + custom `xs`

| Token | min-width | ใช้กับ |
|-------|-----------|--------|
| `xs` | 360px | floor mobile (iPhone SE) |
| `sm` | 640px | large phone / small tablet portrait |
| `md` | 768px | tablet |
| `lg` | 1024px | desktop (default breakpoint สำหรับ mega menu switch) |
| `xl` | 1280px | large desktop |
| `2xl` | 1536px | extra-large (max container) |

---

## Layout Grid

### Container
| Breakpoint | Max-width | Side padding |
|-----------|-----------|--------------|
| `< sm` | 100% | 16px |
| `sm` | 640 | 20px |
| `md` | 768 | 24px |
| `lg` | 1024 | 32px |
| `xl` | 1280 | 32px |
| `2xl` | **1440 (hard cap)** | auto center |

### Grid Columns
| Breakpoint | Columns | Gutter |
|-----------|---------|--------|
| Mobile (< md) | 4 | 16px |
| Tablet (md) | 8 | 24px |
| Desktop (lg+) | 12 | 32px |

### Product Grid Specifics
| Breakpoint | Cols |
|-----------|------|
| xs-sm | 2 |
| md | 3 |
| lg | 4 |
| xl+ | 4-5 (category-dependent) |

### CircularCategoryTile Grid
| Breakpoint | Cols |
|-----------|------|
| xs-sm | 4 |
| md | 6 |
| lg | 8-10 |

---

## Icon System

**Library:** **`lucide-react`** — LOCKED
- Default icon set ของ shadcn/ui · tree-shakable · ISC license
- Stroke 1.5px (soft) · พอดีกับ Royal Blue primary
- Coverage e-commerce เต็ม (cart, heart, user, search, truck, package, star, filter)

**Brand-colored icons (exception):** payment logos (Visa, MasterCard, PromptPay), shipping partners, Homesphere Card — ใช้ SVG ของ brand เอง ไม่ใช่ lucide

**Size scale:**
| Token | px | ใช้กับ |
|-------|------|--------|
| `icon-xs` | 12 | inline text |
| `icon-sm` | 16 | button sm, inline |
| `icon-md` | 20 | **default** button md |
| `icon-lg` | 24 | button lg, navigation |
| `icon-xl` | 32 | feature callout, CircularCategoryTile (center icon) |
| `icon-2xl` | 48 | hero empty state |

**Stroke width:** `1.5` (default `strokeWidth={1.5}`)

---

## Motion / Animation Tokens

| Token | Duration | Easing | ใช้กับ |
|-------|----------|--------|--------|
| `duration-fast` | 120ms | ease-out | hover, focus, color shift |
| `duration-base` | 200ms | ease-out | default transitions |
| `duration-slow` | 300ms | ease-in-out | modal, drawer enter |
| `duration-slower` | 480ms | cubic-bezier(0.16, 1, 0.3, 1) | hero image reveal, skeleton |

**Motion rules:**
- Respect `prefers-reduced-motion: reduce` → ตัด transform, เหลือ fade สั้น
- Micro-interactions (hover, focus): ≤ 150ms
- Panel transitions (drawer, modal): 200-300ms
- Flash Sale countdown: tick ทุก 1s, **ending-soon (<1hr)** เปลี่ยนเป็น red-500 + subtle pulse
- ❌ ไม่มี parallax heavy · ไม่มี auto-animate scroll effect ใหญ่

---

## Accessibility Baselines

- **Contrast:** body text ≥ 4.5:1 · large text ≥ 3:1 · UI/graphical ≥ 3:1
  - ⚠️ `orange-500` บน white = **ผ่าน AA จำกัด** (ratio ~3.3:1) — large text ≥18pt หรือ UI components เท่านั้น · body text ใช้กับ text `neutral-900` หรือ fill icon/badge
  - ✅ `red-500` บน white = ผ่าน AA
  - ✅ `primary-600` บน white = ผ่าน AA (contrast ~8:1)
- **Focus-visible:** ring 3px `primary-600 @ 35%`, ห้าม `outline: none`
- **Touch target:** ≥ 44×44px
- **Keyboard:** tab order ตาม layout, esc ปิด modal/drawer, arrow keys ใน menu/select
- **Motion:** ทุก animation respect `prefers-reduced-motion`
- **Language attribute:** `<html lang>` สลับตาม TH/EN toggle (SEO + screen reader)

---

## Dark Mode (Tokens Only — No Figma Screens in Phase 2)

วาง token structure รองรับไว้ล่วงหน้า — implement ใน Phase 5+ (ถ้ามีเวลา)

```
// Light (default)
--color-bg: #FFFFFF
--color-surface: #F7F9FC         (neutral-50)
--color-text: #111827            (neutral-900)
--color-primary: #1E65B2         (primary-600)

// Dark (future)
--color-bg: #0A0F1A               (neutral-950)
--color-surface: #111827          (neutral-900)
--color-text: #F7F9FC             (neutral-50)
--color-primary: #4680C3          (primary-400 — ปรับ lighten บน dark)
```

Strategy: ใช้ CSS variables + Tailwind `dark:` prefix — component consume variable ไม่ hardcode hex

---

## Tokens → Tailwind Config (pseudo, สำหรับ Phase 3 dev)

```ts
// tailwind.config.ts (pseudo — ยังไม่ implement)
theme: {
  extend: {
    colors: {
      primary: {
        50: '#EAF2FC', 100: '#CFE0F8', 200: '#A0C1F0', 300: '#6A9BE3',
        400: '#4680C3', 500: '#2C6FBB', 600: '#1E65B2', 700: '#17528F',
        800: '#0A3168', 900: '#072551', 950: '#03142E',
      },
      red: { /* ... accent red scale ... */ 500: '#E30613' },
      orange: { /* ... accent orange scale ... */ 500: '#F99012' },
      neutral: { /* cool gray scale */ },
      success: '#16A34A',
      warning: '#F59E0B',
      error: '#DC2626',
      info: '#2563EB',
    },
    fontFamily: {
      sans: ['"IBM Plex Sans Thai"', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      display: ['"Prompt"', '"IBM Plex Sans Thai"', 'sans-serif'],
    },
    fontSize: { /* scale above */ },
    borderRadius: { sm: '4px', md: '8px', lg: '12px', xl: '16px', '2xl': '24px' },
    boxShadow: { /* shadow scale */ },
    container: { center: true, padding: { /* responsive */ }, screens: { '2xl': '1440px' } },
  }
}
```

---

## Decisions Locked (Post-Pivot)

| Item | Decision |
|------|----------|
| Palette | HomePro-inspired Royal Blue + Red + Yellow ✅ |
| Primary hex | `#1E65B2` (primary-600) ✅ updated 2026-04-17 |
| Accent red | `#E30613` ✅ flash sale / deal only |
| Accent orange | `#F99012` ✅ rewards / service (เปลี่ยนจาก yellow 2026-04-17) |
| Display font | `Prompt` (NOT serif) ✅ |
| Body font | `IBM Plex Sans Thai` ✅ |
| Dark mode | Tokens only, no Figma dark screens ✅ |
| Logo | Will be created by `homesphere-designer` in Phase 2 ✅ |
| Bilingual | TH/EN toggle in Header (Phase 5 implement) ✅ |
| Brand guideline from client | None — Homesphere is a fictional demo brand ✅ |

---

## Open Items for Phase 2 (homesphere-designer)

1. **Logo design** — wordmark "Homesphere" + optional icon mark · ใช้ primary-600 เป็นหลัก
2. **Favicon** + app icon set (32, 180, 192, 512)
3. **Hero photography direction** — lifestyle bright, sunlit interiors · ไม่ใช้ studio-sterile
4. **Copy voice test** — 3-5 hero copy variants (TH + EN) สำหรับ internal review
5. **Header background choice** — solid `primary-900` vs white with `primary-600` accent · ต้องตัดสินใน Figma phase

---
