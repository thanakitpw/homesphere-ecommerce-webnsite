# Skills ที่เลือกใช้ในโปรเจกต์ Homesphere

Skills ถูกจัดกลุ่มตาม phase ของงาน — ติดตั้งเป็นล็อตตามลำดับ ไม่ต้องโหลดทั้งหมดทีเดียว

## Phase 1 — Design (Figma + extract ผ่าน MCP)
> **สถานะ**: ✅ พร้อมใช้ (skills อยู่ใน global list แล้ว — เรียก `/ui-ux-designer` ฯลฯ ได้เลย)

| Skill | เหตุผล |
|---|---|
| `ui-ux-designer` | รีวิว UX flow หน้า checkout, PDP, cart |
| `ui-ux-pro-max` | ยกระดับ UI pattern ให้ดูพรีเมียม |
| `mobile-design` | responsive mobile-first |
| `web-design-guidelines` | ยึดหลัก design system ที่ consistent |
| `radix-ui-design-system` | shadcn/ui build บน Radix — เข้าใจ primitive เพื่อ custom ต่อ |

## Phase 2 — Frontend Development
> **สถานะ**: รอ Phase 1 เสร็จ

| Skill | เหตุผล |
|---|---|
| `nextjs-best-practices` | Next.js 15 App Router conventions |
| `nextjs-app-router-patterns` | Server/Client Components, loading, error states |
| `react-best-practices` | Hooks, composition, perf |
| `react-component-performance` | สำคัญสำหรับ product listing / filter |
| `typescript-pro` | Strict mode, generics สำหรับ Payload types |
| `tailwind-patterns` | Utility class + design token |
| `shadcn` | Component primitives ที่จะใช้ทั้งโปรเจกต์ |
| `zustand-store-ts` | Cart + UI state |
| `tanstack-query-expert` | Data fetching + cache product/category |
| `zod-validation-expert` | Form validation (checkout, auth) |

## Phase 3 — Backend / CMS / Database
> **สถานะ**: รอ Phase 2 เสร็จ

| Skill | เหตุผล |
|---|---|
| `backend-architect` | วาง architecture Payload + Next.js |
| `database-design` | Schema: products, variants, orders, users, carts |
| `postgres-best-practices` | PostgreSQL tuning + schema |
| `auth-implementation-patterns` | Customer + admin auth flow |
| `api-design-principles` | REST/tRPC endpoints ใน Payload custom routes |

## Phase 4 — Integrations
> **สถานะ**: รอช่วง checkout flow

| Skill | เหตุผล |
|---|---|
| `stripe-integration` | Checkout (test mode) |
| `payment-integration` | ภาพรวม payment flow |

## Phase 5 — Quality / Testing / Performance
> **สถานะ**: รอช่วงก่อน deliver

| Skill | เหตุผล |
|---|---|
| `playwright-skill` | E2E test flow สำคัญ (add to cart → checkout) |
| `accessibility-compliance-accessibility-audit` | a11y audit ก่อน deliver |
| `web-performance-optimization` | LCP/CLS สำคัญสำหรับ e-commerce |
| `seo-technical` | SEO พื้นฐาน (PDP, category) |
| `schema-markup` | Product schema.org สำหรับ Google Shopping |
| `code-review-excellence` | รีวิว code ก่อน commit |
| `simplify` | ลด over-engineering |

## Phase 6 — Deployment
> **สถานะ**: รอตอน ship

| Skill | เหตุผล |
|---|---|
| `vercel-deployment` | Deploy Next.js + preview URL ให้ลูกค้า |

---

## Skills ที่ตัดออก (พร้อมเหตุผล)
- `shopify-development`, `wordpress-*`, `laravel-*` — เรา custom build ไม่ได้ใช้ platform พวกนี้
- `nextjs-supabase-auth` — ใช้ Payload auth built-in
- `clerk-auth` — Payload มี auth ให้แล้ว
- `stitch-ui-design`, `magic-ui-generator` — AI UI generator ขัดกับ design-first workflow
- `figma-automation` — Figma MCP handle แล้ว
- `returns-reverse-logistics`, `inventory-demand-planning` — demo ไม่ต้องลึกระดับ business ops
- `tdd-*` — demo เน้น ship ก่อน, เขียน test เฉพาะ critical path

---

## หมายเหตุเรื่อง "ติดตั้ง" Skill
ใน Claude Code — skill ที่ปรากฏใน system list = **พร้อมใช้งานทันที** ไม่ต้องติดตั้งเพิ่ม
เรียกผ่าน `Skill tool` หรือพิมพ์ `/<skill-name>` เมื่อต้องใช้
ที่แบ่ง phase ไว้เพื่อกำหนดว่า "เมื่อไรจะเรียก skill ไหน" ไม่ใช่ "ต้องติดตั้งก่อน"

## Activation Log
- [x] Phase 1 — Design (ready — จะเริ่มใช้เมื่อ Figma design พร้อม)
- [ ] Phase 2 — Frontend (เริ่มใช้เมื่อ extract design → code)
- [ ] Phase 3 — Backend/CMS (เริ่มใช้ช่วง setup Payload)
- [ ] Phase 4 — Integrations (เริ่มใช้ช่วง checkout)
- [ ] Phase 5 — Quality (เริ่มใช้ก่อน deliver)
- [ ] Phase 6 — Deployment (เริ่มใช้ตอน ship)
