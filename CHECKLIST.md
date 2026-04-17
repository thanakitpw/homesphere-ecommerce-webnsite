# Homesphere — Master Checklist

Checklist ภาพรวมทั้งโปรเจกต์ แยกตาม phase — ใช้ track progress ตั้งแต่วางแผนจนส่งมอบลูกค้า

**Legend**: `[ ]` = ยังไม่ทำ · `[~]` = กำลังทำ · `[x]` = เสร็จ · `[!]` = ติดปัญหา

---

## Phase 0 — Prerequisites / Environment Setup

### ฝั่งผู้ใช้ (คุณต้องทำเอง)
- [x] Claude Code ≥ 2.1.32 (มี 2.1.97)
- [x] `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` เปิดแล้ว
- [x] ติดตั้ง Figma MCP (direct MCP, not plugin) + OAuth authenticated
- [x] สร้าง Figma file `phLhyCMXMCmJPFB6t55Kfn` (Home-Sphere — Ecommerce)
- [x] Node.js 20+ ติดตั้งแล้ว (v20.12.2)
- [x] **npm** (ไม่ใช้ pnpm) — v10.5.0
- [ ] (optional) `brew install tmux` ถ้าอยากดูแบบ split-pane
- [ ] PostgreSQL — เลือก local (Postgres.app) หรือ cloud (Neon/Supabase) — Phase 4
- [ ] Cloudinary account — Phase 4
- [ ] Stripe account (test mode) — Phase 4
- [ ] Vercel account พร้อม GitHub integration — Phase 8

### ฝั่งโปรเจกต์ (ทำแล้ว)
- [x] วิเคราะห์ reference homepro.co.th
- [x] เขียน `CLAUDE.md`
- [x] เขียน `docs/SKILLS.md`
- [x] เขียน `docs/TEAMS.md`
- [x] เขียน `CHECKLIST.md` (ไฟล์นี้)

---

## Phase 1 — Design Brief (Agent Team: `Homesphere-Prep`)

### 1A. `ux-architect` deliverables
- [ ] **Sitemap** — ผังหน้าทั้งหมด (public + auth + account + admin)
- [ ] **Navigation structure** — desktop mega menu, mobile drawer/hamburger
- [ ] **User flow**: Browse → Category → PDP → Add to cart → Checkout → Confirm
- [ ] **User flow**: Search → Results → Filter → PDP
- [ ] **User flow**: Guest → Register → Verify email → Login
- [ ] **User flow**: Login → Account → Order history → Order detail
- [ ] **User flow**: Admin login → Product CRUD → Publish
- [ ] **User flow**: Flash sale countdown → Add to cart (urgency UX)
- [ ] **Wireframe annotation** per page (layout intent, ไม่ใช่ final design)

### 1B. `design-system-lead` deliverables
- [ ] **Brand direction proposal** — mood board concept (2-3 options ให้เลือก)
- [ ] **Color tokens** — primary, secondary, neutral, semantic (success/warning/error), overlay
- [ ] **Typography system** — font family, scale (display, h1-h6, body, caption), line-height
- [ ] **Spacing / grid system** — base unit (4/8px), breakpoints (mobile/tablet/desktop)
- [ ] **Elevation / shadow** scale
- [ ] **Border radius** scale
- [ ] **Component inventory** (รายการเต็ม)
  - [ ] Primitives: Button, Input, Select, Checkbox, Radio, Textarea, Switch
  - [ ] Data: Table, Card, Badge, Avatar, Tag
  - [ ] Navigation: Header, Footer, MegaMenu, MobileDrawer, Breadcrumb, Pagination, Tabs
  - [ ] Feedback: Toast, Alert, Dialog, Tooltip, Skeleton, Spinner, EmptyState
  - [ ] E-commerce: ProductCard, ProductGrid, PriceTag, RatingStars, VariantSelector, QuantityStepper, CartItem, AddressCard, OrderStatus, CouponInput, FilterPanel, SortDropdown, CountdownTimer
  - [ ] Marketing: HeroBanner, PromoStrip, CategoryTile, BrandLogoGrid, FlashSaleBar

### 1C. `data-architect` deliverables
- [ ] **Entity list เต็ม** พร้อม fields
  - [ ] Product (base, variants, images, specs, description)
  - [ ] Variant (SKU, price, stock, attributes)
  - [ ] Category (hierarchy / tree)
  - [ ] Brand
  - [ ] User (customer)
  - [ ] Admin / Staff (roles + permissions)
  - [ ] Address
  - [ ] Cart + CartItem
  - [ ] Order + OrderItem + OrderStatusHistory
  - [ ] Payment + PaymentMethod
  - [ ] Shipping + ShippingMethod
  - [ ] Review
  - [ ] Wishlist
  - [ ] Coupon / Promo
  - [ ] Banner / HeroSlide
  - [ ] Page (CMS pages: about, contact, policy)
  - [ ] Store / Branch (สำหรับ store locator)
- [ ] **Relationship diagram** (ER) — markdown หรือ mermaid
- [ ] **Product variant matrix** — option types × values
- [ ] **Order state machine** — pending → paid → packed → shipped → delivered / cancelled / refunded
- [ ] **User role matrix** — customer / staff / admin permissions
- [ ] **Seed data plan** — mock products (อย่างน้อย 50 ชิ้น), categories, users, orders

### 1D. Lead synthesis (ผม)
- [ ] รวบ output 3 agents → `docs/design-brief/README.md`
- [ ] Cross-check #1: ทุกหน้าใน sitemap มี component ใน inventory ครบ
- [ ] Cross-check #2: ทุก component ที่ต้องแสดง data มี entity รองรับ
- [ ] Cross-check #3: ทุก user flow ใช้ entity/component ที่มีจริง
- [ ] Flag + resolve inconsistencies
- [ ] **Cleanup team** (`Homesphere-Prep`) หลังทุกคน idle

---

## Phase 2 — Figma Design (single agent: `homesphere-designer`)

### Prerequisites
- [ ] Figma MCP ติดตั้งเสร็จ
- [ ] Figma file สร้างและแชร์กับ agent ได้
- [ ] Design Brief จาก Phase 1 เสร็จสมบูรณ์

### Design System foundation
- [ ] Color styles ใน Figma (ตาม tokens)
- [ ] Text styles (typography scale)
- [ ] Effect styles (shadows)
- [ ] Grid styles (breakpoints)
- [ ] Icon library (Lucide หรือ custom)

### Components (สร้างเป็น Figma component + variants)
- [ ] Primitives (Button, Input, Select, etc.)
- [ ] Navigation components
- [ ] Data display components
- [ ] Feedback components
- [ ] E-commerce components (ทุกตัวใน inventory)
- [ ] Marketing components

### Pages — Desktop
- [ ] Home
- [ ] Category listing + filter
- [ ] Product detail (PDP)
- [ ] Search results
- [ ] Cart
- [ ] Checkout (multi-step)
- [ ] Login / Register
- [ ] Account dashboard
- [ ] Account — Orders, Addresses, Wishlist, Profile
- [ ] Store locator
- [ ] Promotion landing
- [ ] About / Contact
- [ ] 404 / Error
- [ ] Admin dashboard preview

### Pages — Mobile
- [ ] ทุกหน้าในรายการ desktop ข้างบน (mobile version)

### Interaction states
- [ ] Hover / Active / Focus / Disabled สำหรับ interactive elements
- [ ] Loading states (skeleton)
- [ ] Empty states (empty cart, no results, no orders)
- [ ] Error states (failed checkout, 500)

### Design review
- [ ] Internal review กับ lead (ผม)
- [ ] Export design tokens → JSON สำหรับ code
- [ ] Final Figma file ready for dev handoff

---

## Phase 3 — Project Scaffold

- [x] `git init` + `.gitignore` (มาจาก create-next-app)
- [ ] First commit with docs
- [ ] Create GitHub repo (private)
- [ ] Connect origin
- [x] `npx create-next-app@latest` (Next.js **16.2** + React 19.2, App Router, TS, Tailwind v4, ESLint, src/)
- [x] ตั้งค่า TypeScript strict mode
- [x] ตั้งค่า path alias `@/*`
- [x] Tailwind v4 tokens (CSS-based `@theme` ใน `globals.css`) — Primary `#1E65B2`, Orange `#F99012`, Red `#E30613`, neutral cool gray
- [x] Fonts — Prompt (display) + IBM Plex Sans Thai (body) ผ่าน `next/font`
- [x] ติดตั้ง `lucide-react` (icons)
- [ ] ติดตั้ง shadcn/ui init — defer until needed (ตอนนี้ใช้ Tailwind ตรง ๆ)
- [ ] ติดตั้ง Payload CMS 3 — Phase 4
- [ ] Setup PostgreSQL — Phase 4
- [ ] ติดตั้ง Zustand, TanStack Query, Zod, React Hook Form — ตามที่ต้องใช้
- [x] ESLint (Next.js default)
- [ ] Prettier config
- [x] Folder structure — `src/app` (pages) + `src/components/layout` + `src/components/icons` + `public/seed`
- [ ] `.env.example` + `.env.local` — Phase 4
- [ ] README.md update

### Workflow pivot: Code-first (Phase 2 Figma PAUSED)
ลูกค้าเลือก build code → capture เข้า Figma (ผ่าน `generate_figma_design`) แทนการทำ Figma ก่อน · Figma Design Brief v2 (frames `7:2` + `11:2`) เก็บเป็น reference

---

## Phase 4 — Backend / CMS (Team: `fullstack-admin`)

### Payload collections
- [ ] `Products` collection (+ variants + images)
- [ ] `Categories` collection (hierarchical)
- [ ] `Brands` collection
- [ ] `Users` collection (customer auth)
- [ ] `Admins` collection (หรือ role field ใน Users)
- [ ] `Orders` collection
- [ ] `Carts` collection (หรือ session-based)
- [ ] `Addresses` collection
- [ ] `Reviews` collection
- [ ] `Wishlists` collection
- [ ] `Coupons` collection
- [ ] `Banners` collection
- [ ] `Pages` collection (CMS static)
- [ ] `Stores` collection (branches)

### Access control
- [ ] Role-based access per collection
- [ ] Customer can't access admin
- [ ] Admin full access

### API / Routes
- [ ] Storefront API (GraphQL/REST ตาม Payload default)
- [ ] Custom endpoint: cart add/update/remove
- [ ] Custom endpoint: checkout create
- [ ] Custom endpoint: order confirm
- [ ] Stripe webhook handler
- [ ] Email trigger on order (Resend)

### Seed data
- [ ] Script สร้าง categories, brands, products
- [ ] Script สร้าง admin user
- [ ] Script สร้าง test customer

---

## Phase 5 — Frontend Storefront (Team: `fullstack-storefront` · ยังไม่ spawn)

### Layout
- [x] Root layout + fonts (`src/app/layout.tsx`)
- [x] `SiteHeader` + `AnnouncementBar` (`src/components/layout/site-header.tsx`)
- [x] `SiteFooter` (`src/components/layout/site-footer.tsx`)
- [x] `ProductCard` shared (`src/components/product-card.tsx`)
- [x] Brand icons (`src/components/icons/brand.tsx`)
- [ ] Mobile bottom nav (optional)
- [x] Announcement bar (ใน SiteHeader)
- [ ] Cart drawer (global) — Phase 5 next
- [ ] Search overlay

### Pages
- [x] `/` Home — 14 sections (hero, flash sale, categories, trending, room, style, brands, promo, app banner, footer)
- [x] `/category/[slug]` — breadcrumb, filter sidebar (6 groups), sort, grid, pagination, recently viewed
- [ ] `/product/[slug]` PDP + variant selection + add to cart + related — **next (priority #3)**
- [ ] `/search` search results
- [ ] `/cart` cart page
- [ ] `/checkout` multi-step checkout (4 steps)
- [ ] `/login`, `/register`, `/forgot-password`
- [ ] `/account` dashboard
- [ ] `/account/orders` + `/account/orders/[id]`
- [ ] `/account/addresses`
- [ ] `/account/wishlist`
- [ ] `/account/profile`
- [ ] `/stores` store locator
- [ ] `/promotions` promo list
- [ ] `/flash-sale` dedicated flash sale
- [ ] `/about`, `/contact`, `/policy`, `/terms`
- [ ] `not-found.tsx`, `error.tsx`, `loading.tsx`

### Features
- [x] Flash sale countdown (static display, no real-time)
- [ ] Filter + sort + URL sync (UI done, logic pending)
- [ ] Add to cart + toast confirm
- [ ] Wishlist toggle
- [ ] Recently viewed (localStorage) — UI in Category page
- [ ] TH/EN toggle (UI in header dropdown, i18n pending)
- [ ] Responsive ครบทุกหน้า (desktop done, mobile partial via Tailwind breakpoints)

### Images
- [x] Pipeline: Figma asset → `public/seed/...` → Next Image (demonstrated with aircon)
- [x] `public/seed/flash-sale/aeris-aircon.png` (จาก Figma node 9:1343, 1024×1024)
- [ ] เติมรูปที่เหลือตาม `05-content-model.md` seed plan

---

## Phase 6 — Admin Customization (Team: `fullstack-admin`)

- [ ] Branding admin panel (Homesphere logo, favicon, color)
- [ ] Custom dashboard widgets (order count, revenue)
- [ ] Media upload flow (Cloudinary)
- [ ] Order management actions (mark shipped, refund)

---

## Phase 7 — Testing & QA (Team: `qa-engineer`)

### Setup
- [ ] Playwright install + config
- [ ] Test fixtures (seeded DB)

### E2E tests
- [ ] Happy path: browse → add to cart → checkout → order created
- [ ] Register → login → update profile
- [ ] Add to wishlist → view → remove
- [ ] Search → filter → find product
- [ ] Admin: login → create product → publish
- [ ] Checkout failure (invalid card)
- [ ] Guest checkout

### Quality gates
- [ ] Accessibility audit — WCAG 2.1 AA (axe-core)
- [ ] Lighthouse — Performance ≥ 85 (mobile), SEO ≥ 90
- [ ] Cross-browser smoke — Chrome, Safari, Firefox
- [ ] Mobile device test (iOS Safari, Android Chrome)
- [ ] Visual regression (optional — Chromatic)

---

## Phase 8 — Deploy

- [ ] Create Vercel project
- [ ] Connect GitHub repo
- [ ] PostgreSQL — provision Neon/Supabase production DB
- [ ] Run migrations on prod
- [ ] Environment variables set
- [ ] Deploy preview → test
- [ ] Fix any prod-only issues
- [ ] Merge main → auto-deploy production
- [ ] Custom domain (optional)
- [ ] Test ทุก critical flow บน prod
- [ ] Seed production with demo data

---

## Phase 9 — Client Deliverables

- [ ] **Demo URL** (public)
- [ ] **Admin URL + credentials** (test admin)
- [ ] **Test customer credentials**
- [ ] **Figma file** share link (view access)
- [ ] **GitHub repo** invite (ถ้าต้องส่ง)
- [ ] **README** — overview, tech stack, how to run locally, how to deploy
- [ ] **Architecture diagram** (simple — 1 หน้า)
- [ ] **Feature list** / walkthrough script สำหรับ sale pitch
- [ ] (optional) **Loom walkthrough video**

---

## Phase 10 — Post-delivery (ถ้ามีเวลา)

- [ ] Blog post / case study สำหรับเว็บ Best Solution
- [ ] Screenshots / video สำหรับ portfolio
- [ ] Archive team resources (`~/.claude/teams/Homesphere-*`)
- [ ] Lessons learned doc (internal)

---

## Progress Summary

| Phase | Status | % |
|---|---|---|
| 0 — Prerequisites | ✅ complete for current phase | 85% |
| 1 — Design Brief | ✅ **LOCKED** | 100% |
| 2 — Figma Design | 🟡 **PAUSED** (pivot to code-first · tokens + Home mockup done) | 30% |
| 3 — Scaffold | ✅ **complete** | 90% |
| 4 — Backend/CMS | 🔒 not started (next after core pages) | 0% |
| 5 — Storefront | 🟡 **in progress** | 20% (2/11 pages: Home + Category) |
| 6 — Admin | 🔒 blocked | 0% |
| 7 — QA | 🔒 blocked | 0% |
| 8 — Deploy | 🔒 blocked | 0% |
| 9 — Delivery | 🔒 blocked | 0% |

### Pages done (Phase 5)
| Route | Status | Highlights |
|---|---|---|
| `/` | ✅ done | 14 sections, tokens v2, real aircon image |
| `/category/[slug]` | ✅ done | 8 categories, sidebar filters (6 groups), sort, pagination, recently viewed |
| `/product/[slug]` | ⏳ next | |
| `/cart` + drawer | ⏳ next | |
| `/checkout` (4-step) | ⏳ next | |
| `/login`, `/register` | ⏳ next | |
| `/account*` | 🔜 | |
| `/search`, `/flash-sale`, `/stores`, `/promotions` | 🔜 | |
| static `/about`, `/contact`, etc. | 🔜 | |
| Admin `/admin` (Payload) | Phase 4 | |

### Figma deliverables (frozen record)
- `7:2` Tokens v2 spec page
- `11:2` Home v2 HTML+Lucide (static mock)
- `13:2` Home captured from Next.js (real render)

### Notable workflow pivot (2026-04-17)
Code-first pipeline replaces Figma-first. Capture code → Figma แทน design-in-Figma · Figma ใช้เป็น docs/reference

> อัปเดตตารางนี้ทุกครั้งที่ผ่าน milestone
