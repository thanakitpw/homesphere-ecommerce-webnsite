# Homesphere — Design Brief (Phase 1 Synthesis)

**Project**: Homesphere e-commerce demo (Best Solution portfolio)
**Reference**: [HomePro.co.th](https://www.homepro.co.th/)
**Phase**: 1 (Design Brief) — **COMPLETE**
**Date locked**: 2026-04-17
**Lead**: team-lead · **Team**: `Homesphere-Prep`

---

## สถานะ
✅ **Phase 1 Design Brief LOCKED** — พร้อมเข้า Phase 2 (Figma) เมื่อ Figma MCP ติดตั้ง + Figma file เตรียมแล้ว

---

## เอกสารใน Design Brief

| # | ไฟล์ | Owner | สรุป |
|---|---|---|---|
| 1 | [01-sitemap.md](./01-sitemap.md) | `ux-architect` | ผังหน้า 14 home sections, navigation structure, 8 categories, TH/EN toggle |
| 2 | [02-user-flows.md](./02-user-flows.md) | `ux-architect` | 6 user flows + wireframe annotations, Shop by Room/Style |
| 3 | [03-component-inventory.md](./03-component-inventory.md) | `design-system-lead` | ~70 components (Primitives, Data, Navigation, Feedback, E-commerce, Marketing) |
| 4 | [04-brand-direction.md](./04-brand-direction.md) | `design-system-lead` | HomePro-inspired Royal Blue palette + Prompt typography |
| 5 | [05-content-model.md](./05-content-model.md) | `data-architect` | 23 collections, ER diagram, localization policy, seed plan |

---

## Brand Summary

### Positioning
Modern home & living marketplace — **HomePro-inspired แต่ modern polish กว่า**
- **Trust + variety** (HomePro DNA) — category-first homepage, service chips
- **Premium breathing room** — spacing หายใจได้ (HomePro อัดแน่น, Homesphere สะอาดกว่า)
- **Bilingual TH/EN** — รองรับลูกค้าไทย + expat

### Color system
| Role | Hex | ใช้ที่ |
|---|---|---|
| Primary (Royal Blue) | `#1E65B2` | Brand, CTA default, header bg, active nav (updated 2026-04-17) |
| Accent Red | `#E30613` | Flash sale, Shocking Deal, discount %, urgent price **เท่านั้น** |
| Accent Orange | `#F99012` | Rewards badge, service callout, star rating (เปลี่ยนจาก yellow 2026-04-17) |
| Error (system) | `#DC2626` | Form validation, system error — **แยกจาก marketing red** |
| Base | White + cool gray | Background, neutral surface |

### Typography
- **Display**: Prompt (sans, พลังงานสูง) — h1-h3, hero, flash sale, price
- **Body**: IBM Plex Sans Thai — body-lg/body/body-sm/caption
- **Numeric**: `tabular-nums` สำหรับ price tokens

### Foundation
- Spacing: base `4px` · radius: `md=8px` default · shadow: cool tint (match blue)
- Breakpoints: Tailwind + `xs` · Grid: 12-col
- Dark mode: **tokens only** (ไม่ออก Figma dark screens — defer)
- Icons: **Lucide Icons** (match shadcn/ui)

### ⚠️ Accessibility notes (สำคัญ — dev/design ต้องระวัง)
- `yellow-500` บน white = **fail WCAG AA** → ใช้ได้เฉพาะกับ `text-neutral-900` หรือเป็น **badge fill** เท่านั้น
- **`red-500` (marketing urgency) vs `error-500` (system)** = **ห้ามสลับ context** — FE dev ต้อง import semantic token ถูก

---

## Information Architecture (IA)

### Home page — 14 sections (authoritative order)
1. Announcement bar (optional, global)
2. Header (3-row desktop / sticky mobile)
3. Hero banner carousel (**3 banners**)
4. Service callout bar (ฟรีติดตั้ง · ส่ง · สาขา · ผ่อน 0% · Homesphere Card)
5. Shocking Deal / Flash Sale (countdown)
6. Circular category tiles (8 categories)
7. Trending / Best seller
8. **Shop by Room** (6 rooms: นอน/ครัว/น้ำ/นั่งเล่น/สวน/Office)
9. **Shop by Style** (6 styles: Modern/Minimal/Scandinavian/Loft/Thai Contemporary/Luxury)
10. Promo strip (ผ่อน 0%, ฟรีติดตั้ง — secondary)
11. Trending products (personalized / general)
12. Brand logo grid (8 fictional brands)
13. App download banner (demo placeholder)
14. Footer + newsletter signup

### Routes
- **Storefront public** (12): `/`, `/category/[slug]`, `/product/[slug]`, `/search`, `/cart`, `/checkout`, `/login`, `/register`, `/forgot-password`, `/flash-sale`, `/stores`, `/promotions`, `/about`, `/contact`, `/policy`, `/terms`
- **Account** (4): `/account`, `/account/orders`, `/account/orders/[id]`, `/account/addresses`, `/account/wishlist`, `/account/profile`
- **Admin**: `/admin` (Payload dashboard)
- **Error**: `not-found.tsx`, `error.tsx`, `loading.tsx`

### Navigation
- **Desktop header**: 3 rows — utility (TH/EN + hotline) · main (logo + search + delivery selector + cart) · category nav (8 mega menu)
- **Mobile**: drawer hamburger + bottom nav 5-tab (home/หมวด/flash/ถูกใจ/บัญชี)
- **Language toggle**: globe icon 🌐 ที่ utility bar (desktop) · segmented `[TH] [EN]` ใน mobile drawer

---

## Component Inventory Summary

### 6 หมวด, ~70 components
| หมวด | ตัวเด่น |
|---|---|
| **Primitives** | Button, Input, Select, Checkbox, Radio, Textarea, Switch |
| **Data** | Table, Card, Badge, Avatar, Tag |
| **Navigation** | Header, Footer, MegaMenu, MobileDrawer, Breadcrumb, Pagination, Tabs, LanguageToggle |
| **Feedback** | Toast, Alert, Dialog, Tooltip, Skeleton, Spinner, EmptyState, Accordion, Popover |
| **E-commerce** | ProductCard, ProductGrid, PriceTag, RatingStars, VariantSelector, QuantityStepper, CartItem, AddressCard, OrderStatus, CouponInput, FilterPanel, SortDropdown, CountdownTimer, WishlistToggle, StockIndicator, ReviewCard, OrderSummary, PaymentMethodSelector, ShippingMethodSelector |
| **Marketing** | HeroBanner, PromoStrip (4 variants), CircularCategoryTile, ShopByRoomTile, ServiceCalloutBar, BrandLogoGrid, AppDownloadBanner, FlashSaleBar, NewsletterSignup, TestimonialCard, FeatureCallout, RecentlyViewed, StoreLocatorCard |

### HomePro-signature additions (จากภาพ homepage จริง)
- `CircularCategoryTile` — วงกลม icon + label
- `ServiceCalloutBar` — 5 service chips
- `ShopByRoomTile` — room lifestyle tile
- `PromoStrip` expanded — 4 variants (icon-row / marquee / solid-cta / countdown-promo)

---

## Data Model Summary

### 23 Payload collections
`media`, `categories`, `brands`, `products`, `product_variants`, `users` (customers), `admins` (staff), `addresses`, `carts`, `orders`, `order_items`, `order_status_history`, `payments`, `payment_methods`, `shipments`, `shipping_methods`, `reviews`, `wishlists`, `coupons`, `banners`, `pages`, `stores`, `settings` (global)

### Key design decisions
- **แยก `users` / `admins`** เป็น 2 auth collection (security + Payload admin UI)
- **Cart items = embedded array** (cart lifecycle สั้น, ลด join)
- **Order items = แยก collection** (audit trail + analytics)
- **Snapshot address + coupon ใน orders** (ประวัติไม่เปลี่ยนเมื่อลูกค้าลบ)
- **Price = number (บาท)** — demo scope, prod scale ค่อย migrate เป็น integer สตางค์
- **Review ผูก `order_item`** (ซื้อซ้ำ review ซ้ำได้)
- **Coupon stacking จำกัด** — 1 code + 1 auto + 1 free-shipping

### Localization Policy
- **Strategy**: `locales: ['th', 'en']`, `defaultLocale: 'th'`, `fallback: true`
- **TH required + EN optional** (fallback → TH ถ้า EN ว่าง)
- **Localized fields**: `products.title/description/specs`, `categories.name`, `brands.name` (optional), `pages.*`, `banners.title/subtitle/ctaLabel`, `shipping_methods.name`, `stores.name/address`, `coupons.title/description`, `media.alt/caption`, SEO meta
- **จงใจไม่ localize**: SKU, price, stock, reviews (UGC), order snapshots, transactional fields

### Order state machine
`pending` → `paid` → `packed` → `shipped` → `delivered` / `cancelled` / `refunded`

### Coupon types
percent · fixed-amount · free-shipping · bogo

---

## Seed Data Plan

### Volumes (LOCKED)
| Collection | Count |
|---|---|
| Products | **15** (spread 8 categories) |
| Variants | ~30 (47% products have variants) |
| Categories | **8 main-only** (flat, no sub-tree) |
| Brands | **8 fictional** (text-only wordmark, no image) |
| Users (customers) | 8 · **Admins** 3 (admin/staff/support) |
| Orders | **10** (state spread: pending/paid/shipped/delivered/cancelled/refunded) |
| Reviews | 15 · **Coupons** 5 · **Banners** 3 (home hero) |
| Stores | 4 · **Addresses** ~16 · **Wishlists** 8

### Brand roster (8 fictional, text-only)
| Brand | Positioning | Category focus |
|---|---|---|
| **Haven** | Premium home comfort | Furniture, bedroom |
| **Arbor** | Natural wood / artisanal | Furniture, decor |
| **Kisho** | Japanese minimalism | Kitchen, home essentials |
| **Luma** | Lighting specialist | Lighting |
| **Aeris** | Air & cooling | Appliances |
| **Nimbus** | Smart home / IoT | Smart home |
| **Vessel** | Bathroom & sanitary | Bathroom |
| **Pomme** | Kitchen appliance (friendly) | Kitchen |

### Image strategy — **Split: Unsplash (FREE) + fal.ai banners** (final for demo)
**Decision (lead 2026-04-17)**: Demo scope → ประหยัด cost โดย split source
- **Unsplash (curated URLs, FREE)** → product/category/room/store (46 images, $0)
- **fal.ai nano-banana-pro (paid)** → home banners 3 ชิ้น (ต้องใส่ข้อความไทย, aspect 21:9 @ 1K, $0.45)
- **Total: 49 images · $0.45**
- Mobile banner = CSS `object-position` crop (no separate gen)
- Brand logos = SVG wordmark จาก Figma (no AI gen)
- Env: `FAL_KEY` in `.env.local` (gitignored)
- Commands: `pnpm seed:banners:dry` → `pnpm seed:banners --confirm` · `pnpm seed` (other entities use hardcoded Unsplash URLs from `src/seed/data/images.json`)

> **`05-content-model.md` §2.1 + §8 sync แล้ว** — schema `media.source/sourceRef/attribution` + split pipeline + commands `pnpm seed:images:unsplash` / `pnpm seed:images:banners --confirm` · cost **$0.45 + $0.30 buffer = $0.75**

### ⚠️ API key reminder
API key ที่ผู้ใช้ส่งมาใน chat — **rotate หลัง demo เสร็จ** และเก็บใหม่ใน `.env.local` only

---

## Resolved Decisions (16 locked)

### Design / Visual
1. Primary: Royal Blue `#0F4C9E` (HomePro-inspired)
2. Display font: Prompt · Body: IBM Plex Sans Thai
3. Dark mode: tokens only
4. Logo: Figma Designer (Phase 2)
5. Brand guideline: demo fictional

### UX / Feature
6. TH/EN toggle: **มี**
7. Flash sale dedicated page: `/flash-sale` + home section
8. Wishlist guest: localStorage + merge on login
9. Blog/Articles: **ตัด**
10. PDPA consent: required
11. Admin role: admin เดียว (schema field `role` รองรับ staff/support)

### Business Logic
12. Stock reservation: **field มี, ไม่ enforce** (demo)
13. Loyalty tier: cosmetic only (no point logic)
14. VAT: included in price (tax=0)
15. Review moderation: auto-publish
16. Return window: 14 วัน

### Bonus (from team work)
17. Guest checkout: **ON**
18. Localization: bilingual TH/EN (`locales: ['th','en']`)
19. Product hero aspect: 1:1
20. Sample data: **15 products, 49 images, $0.45** (Unsplash + fal.ai banners split)

---

## Open Items (carry to Phase 2 / 4)

### Phase 2 Figma Designer ต้องทำ
- [ ] Logo Homesphere (wordmark + icon)
- [ ] Brand logo set (8 fictional — SVG wordmark)
- [ ] Final color scale token validation (ensure AA contrast)
- [ ] Component visual spec ทุกตัวใน inventory
- [ ] Desktop + Mobile screens ทุก route
- [ ] Interaction states (hover/active/focus/disabled/loading/empty/error)
- [ ] Design token JSON export (สำหรับ Tailwind config)

### Phase 4 Backend (data-architect flag)
- [ ] Add fields: `categories.iconName` (lucide key) + `imageSrc`
- [ ] Create `rooms` + `styles` collections (Option B separate taxonomy) + `products.roomTags[]` + `products.styleTags[]`
- [ ] Create `services` collection (config-driven ServiceCalloutBar, seed 5 records)
- [ ] Validate all localized fields per matrix §15
- [ ] Trademark check on 8 brand names (DBD/WIPO) before public deploy
- [ ] Seed script structure per §8 (fal-client, image manifest, 9 entity seeders)

### Misc notes
- Shop by Room tile: ux-architect มี 6 rooms · seed plan ใช้ **4 tiles** เริ่ม; seed เพิ่ม 2 tiles ($0.30) ถ้า Phase 2 ออกแบบ 6 tiles
- Mobile banner variant: seed ไม่ gen; ถ้า designer ตัดสินใจ art-direct mobile แยก → regenerate 3 banners @ 4:5 ($0.45)

---

## Team Retrospective

### เสร็จในเวลา
Phase 1 ใช้เวลา ~1.5 ชั่วโมง · ทั้ง 3 teammates ทำขนาน + 2 รอบ revision

### Key collaboration moments
- `design-system-lead` flag a11y issue (yellow on white) → lock ใน README
- `data-architect` propose Localization Policy แบบ per-collection matrix → ได้ดีกว่า flat spec
- `ux-architect` ครอบคลุม IA/flow ละเอียด → design-system-lead + data-architect ใช้ cross-check ได้เยอะ

### ที่ควรปรับครั้งหน้า
- Directive ต้องชัดเจนและต่อเนื่อง (รอบ revision ของ data-architect เจอ context drift ต้อง re-assert หลายครั้ง)
- Files edit conflicts ระหว่าง teammate + lead — แนะนำ teammate claim file ownership ก่อนแก้

---

## Handoff to Phase 2 — Figma Design

**Single agent `homesphere-designer`** จะรับ context จากเอกสารชุดนี้ + เชื่อม Figma MCP ออกแบบ:
- Design tokens (จาก [04-brand-direction.md](./04-brand-direction.md))
- Component library (จาก [03-component-inventory.md](./03-component-inventory.md))
- Page templates (จาก [01-sitemap.md](./01-sitemap.md) + [02-user-flows.md](./02-user-flows.md))

**Prerequisites ก่อน spawn designer**:
- [x] Phase 1 Design Brief complete
- [ ] Figma MCP authenticated (OAuth)
- [ ] Figma file created + shared
- [ ] `CLAUDE.md` point agent to this README

**Key guardrails for designer**:
- **Single session ถาวร** — ห้าม spawn parallel design agents (consistency)
- ทุก design ต้องอ้างอิง tokens จาก 04-brand-direction ไม่ improvise
- Component variants ต้องตรง 03-component-inventory
- Desktop + Mobile ทุก screen (per [CHECKLIST.md](../../CHECKLIST.md) Phase 2)
