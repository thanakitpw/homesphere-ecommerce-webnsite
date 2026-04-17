# Homesphere — E-Commerce Demo Project

## Language / ภาษา
- **ตอบกลับเป็นภาษาไทยเสมอ** (ใช้คำศัพท์เทคนิคภาษาอังกฤษได้ตามปกติ เช่น component, state, API)
- คำอธิบาย, คำถาม, สรุปงาน — ทุกอย่างเป็นภาษาไทย
- โค้ด, commit message, identifier, comment ในโค้ด — ใช้ภาษาอังกฤษ

## Project Overview
**Homesphere** เป็นเว็บ e-commerce demo สำหรับโชว์ลูกค้า (portfolio piece ของ Best Solution)
- Reference site: https://www.homepro.co.th/
- หมวดสินค้าหลัก: Home & Living (เครื่องใช้ไฟฟ้า, เฟอร์นิเจอร์, ห้องน้ำ, เครื่องมือช่าง ฯลฯ)
- Scope: Full-stack (Frontend + Backend + CMS)
- Target: Desktop + Mobile (responsive ทั้งคู่)

## Workflow: Design-First
ลำดับการทำงาน **ต้องทำตามขั้น** — ห้ามข้ามไปเขียนโค้ดก่อนออกแบบเสร็จ

1. **วิเคราะห์ reference** (HomePro) ✅ เสร็จแล้ว
2. **Design ใน Figma** (ผู้ใช้จะติดตั้ง Figma MCP ให้)
   - Wireframe → Hi-fi mockup
   - Design tokens (สี, typography, spacing)
   - Component library
3. **Extract design → code** ผ่าน Figma MCP
4. **Implement** component library → pages → integrate backend
5. **Test** responsive + functionality

**สำคัญ:** ก่อนเขียนโค้ด UI ต้องมี Figma design ก่อนเสมอ — ถ้ายังไม่มี ให้ถามผู้ใช้

## Tech Stack (แผนเริ่มต้น — ยืนยันก่อนเริ่ม)

### Frontend
- **Next.js 15** (App Router, Server Components, TypeScript)
- **Tailwind CSS** + **shadcn/ui** (component primitives)
- **Zustand** (cart, UI state)
- **TanStack Query** (data fetching / caching)
- **next/image** (image optimization)

### Backend / CMS
- **Payload CMS 3** — รันใน Next.js app เดียวกัน (unified codebase)
  - TypeScript-native, admin UI พร้อมใช้
  - Collections: Products, Categories, Orders, Users, Banners, Promotions
- **PostgreSQL** (production) / **SQLite** (local dev)
- **Auth**: Payload built-in (customer + admin)

### Integrations (mock ได้สำหรับ demo)
- **Stripe** (test mode) สำหรับ checkout
- **Cloudinary** หรือ local storage สำหรับรูปสินค้า
- **Resend** สำหรับ transactional email (order confirmation)

### DevOps
- **Package manager**: pnpm
- **Deployment**: Vercel (frontend) + Neon/Supabase (PostgreSQL)
- **Version control**: Git (ยังไม่ได้ init)

## Pages / Routes ที่ต้องมี

### Storefront (Public)
- `/` — Homepage (hero carousel, flash sale, categories, trending, brands)
- `/category/[slug]` — Category listing + filters (price, brand, rating)
- `/product/[slug]` — Product detail (PDP) + reviews + related
- `/search?q=` — Search results
- `/cart` — Shopping cart
- `/checkout` — Checkout flow (address, shipping, payment)
- `/login`, `/register` — Authentication
- `/account` — Dashboard (orders, addresses, wishlist, profile)
- `/stores` — Store locator
- `/promotions` — Promotion listing
- `/about`, `/contact` — Static pages

### Admin (Payload)
- `/admin` — CMS dashboard (products, orders, users, content management)

## Feature Priorities (จาก HomePro analysis)
- [ ] Flash Sale + countdown timer
- [ ] Product categories + browse by room/brand
- [ ] Product filtering + sorting
- [ ] Shopping cart + persistent storage
- [ ] Checkout flow
- [ ] User account + order history
- [ ] Admin CMS สำหรับจัดการสินค้า/โปรโมชั่น
- [ ] Promo banners (installment 0%, free installation)
- [ ] Store locator (mock data ได้)
- [ ] Loyalty program preview (Homesphere Card)
- [ ] Responsive mobile nav (hamburger + drawer)
- [ ] TH/EN language toggle (optional — เน้น TH ก่อน)

## Branding
- **ชื่อแบรนด์**: Homesphere
- **สี**: รอดีไซน์ใน Figma (อย่าเพิ่งกำหนด — แนวโน้ม modern/warm, ไม่จำเป็นต้องลอกสีส้ม HomePro)
- **Tone**: Modern home & living, คุณภาพพรีเมียม, เข้าถึงง่าย

## Project Structure (เสนอ — ปรับได้)
```
homesphere-ecommerce-website/
├── src/
│   ├── app/
│   │   ├── (storefront)/       # public routes
│   │   ├── (auth)/             # login/register
│   │   └── (payload)/          # admin
│   ├── collections/            # Payload collections
│   ├── components/
│   │   ├── ui/                 # shadcn primitives
│   │   ├── storefront/         # domain components
│   │   └── layout/
│   ├── lib/
│   ├── hooks/
│   └── styles/
├── public/
├── payload.config.ts
├── next.config.ts
└── package.json
```

## Coding Conventions
- **TypeScript strict mode** — ห้ามใช้ `any` (ยกเว้นมี justify)
- **Server Components by default** — ใช้ `"use client"` เฉพาะเมื่อจำเป็น (state, effect, event handler)
- **Component naming**: PascalCase, ไฟล์ตรงชื่อ component
- **Styling**: Tailwind utility classes; สร้าง `cn()` helper สำหรับ conditional classes
- **Imports**: absolute paths ผ่าน `@/*` alias
- **Forms**: React Hook Form + Zod validation
- **ห้ามเพิ่ม feature/abstraction เกิน scope** — ทำตามที่วางแผน, ไม่ over-engineer

## Non-Goals (สำหรับ demo เวอร์ชันแรก)
- ระบบ payment จริง (ใช้ Stripe test mode พอ)
- Real shipping integration
- Tax calculation ซับซ้อน
- Multi-vendor marketplace
- Review moderation workflow
- SEO schema markup ขั้นสูง (ทำแค่พื้นฐาน)

## Status
- [x] วิเคราะห์ reference site เสร็จ
- [ ] รอติดตั้ง Figma MCP
- [ ] รอ Figma design
- [ ] รอยืนยัน tech stack
- [ ] Scaffold project
- [ ] Implement pages
- [ ] Setup CMS
- [ ] Deploy demo
