# SOP — Workflow การทำโปรเจกต์ Full-Stack Demo/Portfolio

> เอกสารนี้สรุป workflow ที่ใช้จริงกับโปรเจกต์ **Homesphere E-commerce** เพื่อเป็น
> Standard Operating Procedure สำหรับโปรเจกต์ full-stack demo / portfolio ถัดไป
> ของ Best Solution — เริ่มจาก brief → design → code → deploy

---

## 0 · หลักคิดที่ต้องถือไว้ตั้งแต่แรก

| Principle | เหตุผล |
|---|---|
| **Scope lock ก่อนเขียนโค้ด** | demo มักบานปลาย ถ้าไม่ล็อกจำนวนหน้า/ฟีเจอร์/ข้อมูล จะทำไม่จบ |
| **Sample data ก็พอ** | portfolio ไม่ต้องมี 500 สินค้า — 10-20 ตัวที่ดูจริงดีกว่า |
| **รูปฟรีก่อน, paid รูปเฉพาะจุด** | Unsplash/placeholder สำหรับสินค้า, fal.ai / Midjourney เฉพาะ banner |
| **Design-first หรือ Code-first ตัดสินใจให้ชัด** | กลางทางแล้วสลับจะเสียเวลา (ดูข้อ 2) |
| **Commit บ่อย, push ตาม phase** | กันข้อมูลหาย + รีวิวง่าย |
| **หลีกเลี่ยง over-engineering** | ไม่ต้องมี i18n, multi-tenant, advanced cache ถ้า brief ไม่ต้องการ |

---

## 1 · Phase overview

```
Phase 0  Research & Brief     (0.5 วัน)
Phase 1  Skills & Agent Setup (0.5 วัน)
Phase 2  Design Brief         (1 วัน)
Phase 3  Visual Design        (1-2 วัน — Figma หรือ code-first)
Phase 4  Tech Stack Confirm   (0.5 วัน)
Phase 5  Scaffold             (0.5 วัน)
Phase 6  Build Frontend UI    (3-5 วัน — mock data)
Phase 7  Backend Setup        (1-2 วัน — schema, seed, RLS)
Phase 8  Hook Frontend→Backend(2-3 วัน — sprint แบ่ง catalog/auth/cart)
Phase 9  Polish & QA          (1 วัน)
Phase 10 Deploy               (0.5 วัน)
```

รวม: ~10-15 วันทำงาน สำหรับ demo full-stack ขนาด e-commerce

---

## 2 · Design-First vs Code-First — เลือกให้ถูก

| กรณี | ใช้แบบไหน |
|---|---|
| ลูกค้าให้ mockup Figma มาแล้ว | **Design-first** (extract via Figma MCP → code) |
| ไม่มี design, มี reference site | **Code-first** (build UI ด้วย Tailwind ตาม ref แล้วค่อย export เข้า Figma ถ้าต้องการ) |
| ทำ portfolio ของตัวเอง | **Code-first** เร็วกว่า |
| ต้อง present design ก่อนสร้าง | **Design-first** |

> **บทเรียนจาก Homesphere:** ช่วงแรกเลือก design-first แต่ Figma design ช้ากว่าที่คิด
> จึง pivot เป็น code-first กลางทาง — เสียเวลาไป ~1 วัน. ตัดสินใจตั้งแต่แรกดีกว่า.

---

## 3 · Phase 0 — Research & Brief

### สิ่งที่ต้องได้

- **Reference site** 1-2 เว็บ (หลักกับรอง)
- **Target audience** (B2C / B2B / SME)
- **หมวดสินค้า / service scope** ชัดเจน
- **Pages list** (public + admin)
- **Non-goals** (อะไรที่ **จะไม่ทำ**)

### ผลลัพธ์

- `CLAUDE.md` — project brief + coding conventions (ไฟล์นี้ต้องมีใน root เสมอ)
- `FEATURES.md` — feature list สำหรับ pitch ลูกค้า

### Template CLAUDE.md

```markdown
# {ProjectName} — {Type}

## Language / ภาษา
- ตอบกลับเป็นภาษาไทยเสมอ (เทคนิคเทอมภาษาอังกฤษได้)

## Project Overview
- Reference: {url}
- Scope: {Full-stack / Frontend-only / ...}
- Target: {desktop / mobile / both}

## Tech Stack (ยืนยันก่อนเริ่ม)
- Frontend: {...}
- Backend: {...}
- Deploy: {...}

## Pages / Routes
### Storefront
- `/` — ...

### Admin
- `/admin` — ...

## Feature Priorities
- [ ] ...

## Non-Goals
- {สิ่งที่ **จะไม่ทำ**}

## Coding Conventions
- TypeScript strict mode
- Server Components by default
- Tailwind utility-first
- ห้ามเพิ่ม feature เกิน scope
```

---

## 4 · Phase 1 — Skills & Agent Setup

### ตั้ง `.claude/`

- `.claude/settings.local.json` — whitelist tool permissions
- `.mcp.json` — MCP server config (commit ได้, ไม่มี secrets)

### MCP servers ที่ควรติด (e-commerce demo)

| MCP | ใช้ทำอะไร | ติดตั้ง |
|---|---|---|
| **Supabase** | DB + Auth + Storage + SQL runner | http://mcp.supabase.com/mcp?project_ref=XXX |
| **Figma** | อ่าน/เขียน design, extract code | https://mcp.figma.com/mcp |
| **Context7** (optional) | lookup docs libraries | (per-project) |

### Agent teams — ใช้เมื่อไหร่

| สถานการณ์ | ใช้ agent แบบไหน |
|---|---|
| งานเดียวชัดเจน (แก้ bug, เพิ่ม field) | direct ไม่ต้องใช้ agent |
| Research หลาย source | `general-purpose` หรือ `Explore` |
| Build หน้าเว็บหลายหน้าพร้อมกัน | agent team split: `frontend-dev` + `backend-dev` + `qa` |
| Figma design | **agent เดียว** ตลอด (consistency) |
| Schema migration + seed | agent เดียวเรียงลำดับ |

> **บทเรียน:** agent teams เร็วก็จริงแต่ต้อง brief ชัด — ถ้า context ไม่ชัด
> จะต้อง rework บ่อย. งานที่ต้อง consistency สูง (design, data model) → agent เดียว

---

## 5 · Phase 2 — Design Brief

### ต้องสร้างไฟล์เหล่านี้ใน `docs/design-brief/`

| File | เนื้อหา |
|---|---|
| `01-sitemap.md` | ทุกหน้า + URL structure |
| `02-user-flows.md` | flow หลัก (browse → cart → checkout, login → order) |
| `03-component-inventory.md` | atoms, molecules, organisms |
| `04-brand-direction.md` | **tokens LOCKED**: colors, typography, spacing |
| `05-content-model.md` | data schema ระดับ business (ไม่ใช่ DB) |

### Tokens ต้องล็อคก่อน (non-negotiable)

```
Primary color      #XXXXXX (brand main)
Accent color       #XXXXXX (CTA/urgency)
Success / Danger   standard green/red
Font display       (heading) — e.g. Prompt, Noto Serif Thai
Font body          (paragraph) — e.g. IBM Plex Sans Thai
Radius scale       4 / 8 / 12 / 16 / 24px
Spacing scale      4px grid
```

---

## 6 · Phase 3 — Visual Design (optional)

### ถ้าใช้ Figma

1. สร้าง file ใน Figma → เปิด MCP
2. Design tokens → styles ใน Figma
3. Component library → main components
4. Page layouts → 3-5 หน้าหลัก (home, PDP, cart, checkout, account)
5. Export ผ่าน Figma MCP `get_design_context` → adapt เป็น React/Tailwind

### ถ้า code-first

1. Setup Tailwind v4 `@theme` ใน `globals.css` ด้วย tokens จาก brand-direction
2. Build components เลย, screenshot ไว้ดู
3. ถ้าจะเอาเข้า Figma ภายหลัง → ใช้ Figma MCP `get_screenshot` บน running URL

---

## 7 · Phase 4 — Tech Stack (ยืนยันครั้งสุดท้าย)

### Stack มาตรฐานของ Best Solution สำหรับ demo

```
Frontend
├─ Next.js 15/16 (App Router, TypeScript strict, Turbopack)
├─ Tailwind CSS v4 (@theme inline)
├─ Lucide React (icons — ไม่ใช้ emoji)
├─ Zustand (client state — cart, UI)
└─ next/font (Google Fonts)

Backend (เลือก 1)
├─ Supabase (PostgreSQL + Auth + Storage + RLS)  ← แนะนำสำหรับ demo
├─ Payload CMS 3 (unified Next.js, admin UI built-in)
└─ Custom API (NestJS/Hono) — เฉพาะโปรเจกต์ใหญ่

Package manager: npm (ตาม preference user)
Deploy: Vercel + Supabase
```

### ทำไม Supabase > Payload สำหรับ demo

| Criteria | Supabase | Payload |
|---|---|---|
| เวลา setup | 1 ชม | 1 วัน |
| Admin UI | ต้องทำเอง (ข้อดี: custom ตาม brand) | built-in |
| Auth | มาพร้อม | ต้อง config |
| RLS | strong | field-level access |
| SQL query | เต็มพลัง | abstract |

> **เลือก Supabase** ถ้าลูกค้าอยากได้ admin UI ที่ custom ได้ 100%
> **เลือก Payload** ถ้าต้อง admin UI ใช้งานได้ทันที

---

## 8 · Phase 5 — Scaffold

### Commands (Next.js + Tailwind v4 + TypeScript)

```bash
npx create-next-app@latest {name} \
  --typescript --tailwind --app --src-dir --import-alias "@/*" \
  --no-turbopack  # หรือ --turbopack ถ้าอยาก Turbopack (Next 15+)

cd {name}
npm i zustand @supabase/ssr @supabase/supabase-js lucide-react
```

### Setup เบื้องต้น

1. **Fonts** — `src/app/layout.tsx` ใช้ `next/font/google` สำหรับ display + body
2. **Design tokens** — `src/app/globals.css` ใช้ `@theme inline` ประกาศ CSS vars
3. **Supabase clients** — สร้าง `src/lib/supabase/{client.ts,server.ts,admin.ts}`
4. **Types** — `src/types/database.ts` (generate จาก Supabase: `supabase gen types typescript`)
5. **Env** — `.env.local` + `.env.example` (commit template, ไม่ commit real secrets)
6. **Icon** — `src/app/icon.svg` (ลบ `favicon.ico` ถ้ามี, SVG ดีกว่า)

### โครงสร้างที่แนะนำ

```
src/
├─ app/
│  ├─ (auth)/login, register
│  ├─ (storefront)/category, product, cart, checkout
│  ├─ account/...
│  ├─ globals.css, layout.tsx, page.tsx
│  ├─ loading.tsx, error.tsx, not-found.tsx, icon.svg
├─ components/
│  ├─ layout/{site-header,site-footer}.tsx
│  ├─ ui/{button,input,...}.tsx (หรือ shadcn)
│  └─ {product-card,...}.tsx
├─ lib/
│  ├─ supabase/{client,server,admin}.ts
│  ├─ queries/{home,product,user}.ts
│  ├─ actions/{auth,cart,order}.ts
│  └─ utils.ts (cn helper)
├─ types/
│  └─ database.ts (auto-generated)
├─ hooks/
└─ proxy.ts (Next 16) หรือ middleware.ts (Next 15)
```

---

## 9 · Phase 6 — Build Frontend UI (with mock data)

### Order ของการ build

1. **Layout shell** → `SiteHeader`, `SiteFooter`, `AnnouncementBar`
2. **Home page** → ทำให้ดูจริงตั้งแต่แรก (motivation)
3. **Category listing** → `/category/[slug]`
4. **PDP** → `/product/[slug]`
5. **Cart, Checkout** → flow หลักของ e-commerce
6. **Auth pages** → login, register, forgot password
7. **Account** → dashboard + sub-pages
8. **Special pages** → search, flash-sale, stores, not-found, error

### กติกา

- **ไม่ใช้ emoji** ใน UI — ใช้ Lucide React icon แทน
- **Mock data แบบ typed** — ประกาศ type/interface, ใช้ `const MOCK: ProductCard[] = [...]`
- **Server Components default** — ใส่ `"use client"` เฉพาะเมื่อต้องการ (state, effect, event)
- **Component file ไม่เกิน 400 บรรทัด** — ถ้าเกิน split ออกเป็น sub-component
- **ProductCard / PriceBlock / RatingStars** — สร้าง shared component
- **ไฟล์ `icons/brand.tsx`** — สำหรับ SVG brands ที่ Lucide ไม่มี (Apple, Google Play, LINE, Facebook)

### Responsive

- Mobile-first Tailwind classes (`grid-cols-2 md:grid-cols-5`)
- Test ที่ 375, 768, 1440 widths
- Header ต้องมี hamburger menu สำหรับ mobile

---

## 10 · Phase 7 — Backend Setup (Supabase)

### Schema design process

1. **List entities** จาก `05-content-model.md`
2. **Draw ERD** (pen & paper หรือ dbdiagram.io)
3. **Write migration SQL** — tables + enums + indexes + RLS policies
4. **Apply via Supabase MCP** — `apply_migration` tool
5. **Generate types** — `npx supabase gen types typescript --project-id XXX > src/types/database.ts`

### Conventions

| Pattern | ใช้เมื่อ |
|---|---|
| `id uuid primary key default gen_random_uuid()` | PK เสมอ |
| `created_at, updated_at timestamptz` | ทุก table |
| `jsonb` สำหรับ i18n content (เช่น `{th, en}`) | title, description |
| `enum` สำหรับ status, tier | order_status, user_tier |
| Partial index | `WHERE status = 'active'` |
| Composite index | `(category_id, status, sales_count)` สำหรับ listing |
| GIN index | FTS บน `tsvector` column |
| RLS policy | เปิดทุก table, ใช้ helper `is_admin()` |

### Trigger ที่ควรมี

- `handle_new_user()` — สร้าง profile row อัตโนมัติหลัง signup
- `update_updated_at_column()` — อัพเดท `updated_at` ทุก UPDATE
- `update_product_search_vector()` — sync tsvector เมื่อ title/description เปลี่ยน

### Seed strategy

- เขียน `src/lib/seed/` แยก file ตาม entity (brands, categories, products, ...)
- ใช้ **service role key** (ไม่ใช่ anon) เพื่อข้าม RLS
- Sample size: **10-20 products** พอสำหรับ demo
- ระวัง: columns ที่ `NOT NULL + DEFAULT` — supabase-js ตัด `undefined` ออก ต้องใส่ค่า explicit

---

## 11 · Phase 8 — Hook Frontend → Backend

### แบ่ง sprint ตามขนาด

```
Sprint 1 (1 วัน): Catalog (read-only)
├─ Home — flash sale, categories, trending, new arrivals
├─ Category listing — filter by category, list brands
└─ PDP — product detail, related products

Sprint 2 (1-2 วัน): Auth + Cart
├─ Login/Register — Server Actions + useActionState
├─ Proxy (middleware) — guard protected routes
├─ Logout — form action
└─ Cart state — Zustand + localStorage persist

Sprint 3 (1-2 วัน): Checkout + Account
├─ Checkout — INSERT order + items in transaction
├─ Orders list/detail — fetch by user_id
└─ Profile edit — UPDATE profiles row
```

### Pattern: Server Components + Server Actions

```typescript
// src/lib/queries/home.ts — read queries
export async function getHomeCategories() {
  const supabase = await createClient();
  const { data } = await supabase.from("categories")... ;
  return (data ?? []).map(mapper);
}

// src/lib/actions/auth.ts — write mutations
"use server";
export async function loginAction(prev: State, fd: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(...);
  if (error) return { error: mapError(error.message) };
  revalidatePath("/", "layout");
  redirect("/account");
}

// src/app/(auth)/login/page.tsx — client form with Server Action
"use client";
import { useActionState } from "react";
const [state, formAction, pending] = useActionState(loginAction, INITIAL);
return <form action={formAction}>...</form>;
```

### Cart state (Zustand + persist)

```typescript
// src/lib/stores/cart.ts
"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
type CartItem = { id: string; slug: string; qty: number; price: number; ... };
export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (item) => set(...),
      remove: (id) => set(...),
      setQty: (id, qty) => set(...),
      clear: () => set({ items: [] }),
      total: () => get().items.reduce((s, i) => s + i.price * i.qty, 0),
    }),
    { name: "homesphere-cart" }
  )
);
```

### Conventions สำคัญ

- **Error types mapping** — แปลง Supabase error เป็นภาษาไทยที่ user อ่านรู้เรื่อง
- **notFound()** ใช้เมื่อไม่เจอ record (Next renders `not-found.tsx`)
- **revalidatePath("/", "layout")** หลัง mutation ที่กระทบ layout
- **Explicit cast** สำหรับ supabase-js typing เมื่อ nested relations — `(data ?? []) as unknown as Row[]`

---

## 12 · Phase 9 — Polish & QA

### Checklist

- [ ] หน้าเพจทุกหน้าโหลดได้ 200 (`curl` test ครบ)
- [ ] Responsive: 375 / 768 / 1440 widths
- [ ] Dark mode (ถ้า scope) — test toggle
- [ ] Empty states — หน้าที่ไม่มีข้อมูล render ดี (`ยังไม่มีสินค้า`)
- [ ] Error states — 404, 500 render สวย
- [ ] Loading states — `loading.tsx` ทุก route
- [ ] Forms validation — client-side hint + server-side validate
- [ ] Accessibility — alt text, aria-label, keyboard nav
- [ ] Images — `next/image` ทุกที่, sizes ถูกต้อง
- [ ] SEO — title, description, OG tags (พื้นฐานพอ)
- [ ] TypeCheck — `npx tsc --noEmit` ไม่มี error (ยกเว้น seed scripts ยอมได้)

---

## 13 · Phase 10 — Deploy

### Vercel + Supabase

1. `git push` → Vercel auto-deploy
2. Vercel: set env vars — `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Supabase: enable email auth, set redirect URL = `https://{domain}/auth/callback`
4. Domain: ใช้ `.vercel.app` สำหรับ demo ก็พอ, custom domain ตอน pitch ลูกค้า

---

## 14 · Common Pitfalls (ที่เจอจริง)

| ปัญหา | สาเหตุ | วิธีแก้ |
|---|---|---|
| **Turbopack cache stale** ("module has no exports") | edit ไฟล์แล้ว cache ไม่ invalidate | `pkill next; rm -rf .next; npm run dev` |
| **npm install JSON parse error** | parallel install ทำ package.json เสีย | `npm cache clean --force && npm i` |
| **Lucide brand icons missing** (Facebook, Instagram) | lucide-react ถอด brand icons ออก | สร้าง inline SVG ใน `icons/brand.tsx` |
| **favicon corrupted** | image ไฟล์เสีย Turbopack reject | ลบ `favicon.ico`, ใช้ `icon.svg` |
| **RSC pass function to Client Component** | React Server Components ไม่ support function prop | ลบ `"use client"` ออกจาก component ที่ parent เป็น RSC, หรือ move button outside `<Link>` |
| **Product Link nested interactive** | `<button>` inside `<Link>` ทำให้ click ชน | absolute position button outside Link |
| **Supabase NOT NULL + DEFAULT** | `undefined` ถูกตัดโดย supabase-js | ส่งค่า explicit, อย่าใช้ `undefined` |
| **supabase-js returns `never[]`** | column name ผิดใน `.select()` หรือ typing mismatch | cast explicit `as unknown as Row[]` |
| **Next 16 middleware deprecated** | เปลี่ยนชื่อเป็น `proxy.ts` + export `proxy()` | rename ไฟล์ + function name |
| **JSX element union type fail** | ตัวแปร icon type union ระหว่าง 2 array branches | extract `const Icon = x.icon` ก่อน render |
| **`Shower` icon missing** | lucide-react ไม่มี export | ใช้ `ShowerHead` แทน |

---

## 15 · Git commit strategy

### Commit messages (Thai subject + English body ok)

```
scaffold: init Next.js 16 + Tailwind v4 + TypeScript

build(home): add hero, flash sale, categories sections (mock data)

feat(supabase): add schema migrations + seed data (24 tables, 118 rows)

feat(home): hook flash sale + categories to Supabase queries

fix(pdp): handle missing gallery images with icon fallback

chore: update CHECKLIST.md — Phase 8 Sprint 1 complete
```

### Commit ตอนไหน

| ตอน | จะ commit อะไร |
|---|---|
| จบ Phase 0-1 | brief + setup files |
| จบ Phase 2-3 | design brief files (ก่อนเขียนโค้ด) |
| จบ Phase 5 | scaffold + เบสิก layout |
| จบ Phase 6 ทุก 2-3 หน้า | batch ของ UI pages |
| จบ Phase 7 | schema + seed (ทีเดียว) |
| จบ Phase 8 sprint | 1 sprint = 1-3 commits |
| Deploy | tag release |

---

## 16 · ใช้ agents อย่างมีประสิทธิภาพ

### Rules of thumb

- **Brief ครั้งเดียวให้ครบ** — agent ไม่เห็น conversation, ต้องบอกทุกอย่างที่จำเป็น
- **Research → ให้คำถาม** (ไม่ใช่ prescribed steps)
- **Implementation → ให้ spec ชัด** (file path, function signature)
- **ขอ summary ใต้ 200 คำ** เพื่อไม่ให้ context ยุ่ง
- **trust but verify** — agent summary บอกว่า "ทำอะไรตั้งใจจะทำ" ไม่ใช่ "ทำอะไรจริง"

### Agent types ที่ใช้บ่อย

| Agent | ใช้ตอนไหน |
|---|---|
| `Explore` | หาไฟล์/โค้ดใน repo (thoroughness: quick / medium / thorough) |
| `general-purpose` | research + multi-step tasks |
| `Plan` | ออกแบบ implementation plan ก่อนเริ่ม |
| `claude-code-guide` | ถามเรื่อง Claude Code features |
| custom `frontend-dev`, `backend-dev`, `qa` | parallel build ของหน้าเว็บ |

---

## 17 · Environment hygiene

### ไฟล์ที่ **ห้าม** commit

- `.env.local`, `.env.production`
- `node_modules/`
- `.next/`, `.turbo/`
- Service role keys, API keys จริง

### ไฟล์ที่ **ต้อง** commit

- `.env.example` (template with placeholder values)
- `.mcp.json` (MCP config, ไม่มี secrets)
- `CLAUDE.md`, `CHECKLIST.md`, `FEATURES.md`, `docs/`
- `package.json`, `package-lock.json`
- `next.config.ts`, `tsconfig.json`, `tailwind.config.ts` (ถ้ามี)

### `.gitignore` สำคัญ

```
# Next
.next/
out/

# Env
.env
.env.local
.env.*.local

# OS / IDE
.DS_Store
.idea/
.vscode/*
!.vscode/extensions.json

# Misc
*.log
"package-lock 2.json"
```

---

## 18 · Pre-flight checklist ก่อนเริ่มโปรเจกต์ใหม่

- [ ] Reference site screenshot/URL ครบ
- [ ] Scope list เขียนแล้ว (pages + features + non-goals)
- [ ] Color + font direction ตกลงแล้ว (อย่างน้อย primary color)
- [ ] Tech stack confirmed (frontend + backend + deploy)
- [ ] Figma file created (ถ้า design-first)
- [ ] Supabase project created (ถ้าใช้ Supabase)
- [ ] GitHub repo created (ยังไม่ต้อง push)
- [ ] `.env.example` template ready
- [ ] `CLAUDE.md` written

---

## 19 · Deliverables สำหรับ pitch ลูกค้า

| Item | Description |
|---|---|
| Live demo URL | Vercel deploy — `https://{project}.vercel.app` |
| Admin login | Email + password ที่ pre-seed |
| User login (customer) | Email + password ที่ pre-seed |
| Source code | GitHub repo (public หรือ invite-only) |
| Feature list | `FEATURES.md` |
| Screenshot deck | 5-10 ภาพ key screens (Figma export หรือ screenshot tool) |
| Tech doc | `docs/TECH-STACK.md` อธิบาย architecture (ถ้าลูกค้าเทคนิค) |

---

## 20 · Maintenance — หลัง pitch

- เก็บ branch `demo-{client-name}-frozen` ที่ tag ไว้ตอน pitch
- ถ้าลูกค้าจ้างจริง → fork เป็น repo ใหม่, ลบ demo data, เริ่ม production
- Supabase demo project อาจต้อง pause หลังผ่าน 7 วันไม่มี activity (free tier)

---

## Appendix A · Reference repos & docs

- Next.js App Router docs: https://nextjs.org/docs/app
- Supabase SSR: https://supabase.com/docs/guides/auth/server-side/nextjs
- Tailwind v4 `@theme`: https://tailwindcss.com/docs/theme
- Lucide icons: https://lucide.dev/icons
- shadcn/ui: https://ui.shadcn.com

## Appendix B · Time estimation formula

```
Total days ≈
  (pages_count × 0.5)            // UI building
  + (entities_count × 0.3)       // schema + seed per entity
  + (sprints × 1)                // frontend→backend hooks
  + 2                            // buffer for polish + deploy
```

สำหรับ e-commerce demo ขนาดกลาง (15 หน้า, 20 entities, 3 sprints):
`15×0.5 + 20×0.3 + 3 + 2 = 18.5 วัน` → round to ~3 สัปดาห์

---

> **เวอร์ชัน:** 1.0 — สรุปจาก Homesphere project (2026-04)
> **ผู้เขียน:** Best Solution agency
> **Review ทุก:** จบโปรเจกต์ใหม่แต่ละครั้ง update SOP ถ้ามี lesson ใหม่
