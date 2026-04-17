# 03 — Component Inventory

**Owner:** `design-system-lead`
**Phase:** 1B — Design Brief
**Status:** v2 — aligned with HomePro-inspired brand direction

> **Changelog v2:** เพิ่ม `CircularCategoryTile`, `ShopByRoomTile`, `ServiceCalloutBar`, `AppDownloadBanner` · ขยาย variants ของ `PromoStrip` · confirm `BrandLogoGrid` pattern · color references ใช้ Royal Blue + accent red/yellow ตาม `04-brand-direction.md` v2

---

## หลักการ

- Component library ถูกวางบน **shadcn/ui** (Radix primitives + Tailwind)
- ทุก interactive component ต้องรองรับ state: `default / hover / focus-visible / active / disabled / loading / error` (ถ้าเกี่ยวข้อง)
- Accessibility baseline: WCAG 2.1 AA — focus ring ชัด (ring 3px primary-600 @ 35%), contrast ≥ 4.5:1 body text, keyboard navigable
- Responsive: mobile-first — ทุก component ต้องทำงานได้บน viewport ตั้งแต่ 360px
- Theming: ใช้ CSS variables ผ่าน Tailwind tokens (ดู `04-brand-direction.md`)
- **Color usage rule:** `primary-600` Royal Blue = brand/CTA · `red-500` = deal urgency เท่านั้น · `yellow-500` = rewards/service callouts

---

## 1. Primitives

พื้นฐานที่ทุก screen ใช้ — มาจาก shadcn/ui เป็นหลัก

### 1.1 Button
- **Description:** ปุ่มโต้ตอบหลักของระบบ
- **Variants:** `primary` · `secondary` · `outline` · `ghost` · `destructive` · `link`
- **Sizes:** `sm (32px)` · `md (40px)` · `lg (48px)` · `icon (40×40)`
- **States:** default, hover, focus-visible, active, disabled, loading (spinner ในปุ่ม)
- **Props หลัก:** `variant`, `size`, `loading`, `disabled`, `asChild`, `leftIcon`, `rightIcon`, `fullWidth`
- **ใช้ที่:** ทุกหน้า (CTA, form submit, cart actions, checkout)
- **Radix base:** `@radix-ui/react-slot` (สำหรับ `asChild`)

### 1.2 Input
- **Description:** text field สำหรับ form
- **Variants:** `default` · `with-icon` · `with-prefix` · `password` (มีปุ่ม toggle)
- **Sizes:** `sm` · `md` · `lg`
- **States:** default, hover, focus, disabled, error (ขอบแดง + helper text)
- **Props หลัก:** `type`, `size`, `error`, `helperText`, `leftIcon`, `rightAddon`, `placeholder`
- **ใช้ที่:** Login, Register, Checkout (address), Account profile, Search bar
- **Radix base:** HTML `<input>` wrapper

### 1.3 Select
- **Description:** dropdown เลือกค่าจาก list
- **Variants:** `default` · `searchable` (combobox)
- **Sizes:** `sm` · `md` · `lg`
- **States:** default, open, hover option, selected, disabled, error
- **Props หลัก:** `options`, `value`, `onValueChange`, `placeholder`, `searchable`
- **ใช้ที่:** Checkout (จังหวัด/อำเภอ), Sort dropdown, Filter (brand, rating)
- **Radix base:** `@radix-ui/react-select`

### 1.4 Checkbox
- **Description:** เลือกหลายตัวเลือก
- **Variants:** `default` · `with-label` · `indeterminate`
- **States:** unchecked, checked, indeterminate, disabled, error
- **Props หลัก:** `checked`, `onCheckedChange`, `label`, `description`, `disabled`
- **ใช้ที่:** Filter panel (brand, features), Terms agreement, Bulk select (wishlist)
- **Radix base:** `@radix-ui/react-checkbox`

### 1.5 Radio (Group)
- **Description:** เลือกหนึ่งจากหลายตัวเลือก
- **Variants:** `default` · `card` (การ์ดเลือก เช่น shipping method)
- **States:** unchecked, checked, hover, disabled
- **Props หลัก:** `value`, `onValueChange`, `options`, `orientation`
- **ใช้ที่:** Checkout (payment method, shipping method), Filter (price range single)
- **Radix base:** `@radix-ui/react-radio-group`

### 1.6 Textarea
- **Description:** multi-line text input
- **Variants:** `default` · `auto-resize`
- **States:** default, focus, disabled, error
- **Props หลัก:** `rows`, `maxLength`, `error`, `helperText`
- **ใช้ที่:** Review form, Contact form, Order note
- **Radix base:** HTML `<textarea>` wrapper

### 1.7 Switch
- **Description:** toggle on/off
- **Variants:** `default` · `with-label`
- **States:** on, off, disabled
- **Props หลัก:** `checked`, `onCheckedChange`, `label`
- **ใช้ที่:** Account settings (email notifications), Admin (publish toggle), TH/EN toggle (ถ้าใช้)
- **Radix base:** `@radix-ui/react-switch`

### 1.8 Label
- **Description:** field label ที่ associate กับ input
- **Variants:** `default` · `required` (มี * แดง)
- **ใช้ที่:** ทุก form
- **Radix base:** `@radix-ui/react-label`

### 1.9 Separator
- **Description:** เส้นแบ่ง section
- **Variants:** `horizontal` · `vertical`
- **ใช้ที่:** Cart summary, Account sidebar, PDP sections
- **Radix base:** `@radix-ui/react-separator`

---

## 2. Data Display

### 2.1 Card
- **Description:** container สำหรับกลุ่มเนื้อหา
- **Variants:** `default` · `interactive` (hoverable, clickable) · `bordered` · `elevated`
- **Composition:** `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- **ใช้ที่:** Account dashboard widgets, Order summary, Address card, Review card, Checkout step wrapper

### 2.2 Badge
- **Description:** small label บอกสถานะ/หมวด
- **Variants:** `default` · `success` · `warning` · `destructive` · `info` · `outline` · `promo` (สี accent)
- **Sizes:** `sm` · `md`
- **ใช้ที่:** ProductCard (NEW, SALE, Flash), OrderStatus, Category tag, Review verified badge

### 2.3 Avatar
- **Description:** รูป profile ของ user / reviewer
- **Variants:** `default` (รูป) · `fallback` (ตัวอักษร initial) · `with-status-dot`
- **Sizes:** `xs (24)` · `sm (32)` · `md (40)` · `lg (56)` · `xl (80)`
- **ใช้ที่:** Header (logged-in user), Account dashboard, Review author, Admin user list
- **Radix base:** `@radix-ui/react-avatar`

### 2.4 Table
- **Description:** tabular data
- **Variants:** `default` · `striped` · `bordered` · `compact`
- **Features:** sortable header, row hover, selectable (checkbox), sticky header
- **ใช้ที่:** Account orders list, Admin (products, orders, users), Cart (desktop)
- **Radix base:** HTML `<table>` — shadcn pattern

### 2.5 Tag / Chip
- **Description:** small removable label (เช่น filter ที่ active)
- **Variants:** `filter-active` (มีปุ่ม ×) · `readonly` · `selectable`
- **ใช้ที่:** Category listing (active filters), Product specs (เช่น วัสดุ, สี), Search history
- **Radix base:** —

### 2.6 Accordion
- **Description:** collapsible content sections
- **Variants:** `single` · `multiple`
- **ใช้ที่:** PDP (specifications, shipping info, warranty), FAQ page, Mobile filter, Footer (mobile)
- **Radix base:** `@radix-ui/react-accordion`

---

## 3. Navigation

### 3.1 Header
- **Description:** top navigation bar (sticky)
- **Variants:** `desktop` (mega menu + search + actions) · `mobile` (logo + hamburger + search icon + cart icon)
- **Sub-components:** logo, search bar, cart icon (+ badge count), wishlist icon, account menu, language toggle
- **States:** default, scrolled (compact shadow), transparent (on homepage hero overlay — optional)
- **ใช้ที่:** ทุกหน้า storefront

### 3.2 Footer
- **Description:** site footer
- **Sections:** company info · customer service · categories · social · payment methods · copyright
- **Variants:** `desktop` (4-column) · `mobile` (accordion)
- **ใช้ที่:** ทุกหน้า storefront

### 3.3 MegaMenu
- **Description:** multi-column dropdown สำหรับ category browse (desktop only)
- **Structure:** left = parent categories list · right = sub-categories + featured image/brand
- **States:** closed, open (on hover with delay), keyboard-navigable
- **ใช้ที่:** Header desktop
- **Radix base:** `@radix-ui/react-navigation-menu`

### 3.4 MobileDrawer
- **Description:** slide-out panel สำหรับ navigation บน mobile
- **Variants:** `nav-drawer` (categories) · `cart-drawer` · `filter-drawer`
- **Features:** overlay backdrop, swipe-to-close, focus trap, scroll lock
- **ใช้ที่:** Mobile header hamburger, Mobile cart icon, Mobile "Filter" button on category page
- **Radix base:** `@radix-ui/react-dialog` (Sheet variant)

### 3.5 Breadcrumb
- **Description:** hierarchical path navigation
- **Variants:** `default` · `with-ellipsis` (ถ้ายาวเกิน)
- **ใช้ที่:** Category, PDP, Account sub-pages, Search results

### 3.6 Pagination
- **Description:** page navigation สำหรับ lists
- **Variants:** `default` (prev · 1 2 3 · next) · `compact` (mobile — prev/next + "Page X of Y") · `load-more` (button)
- **ใช้ที่:** Category listing, Search results, Account orders, Admin lists

### 3.7 Tabs
- **Description:** switch between parallel views
- **Variants:** `default` (underline) · `pills` · `boxed`
- **ใช้ที่:** PDP (Description, Specs, Reviews, Q&A), Account dashboard tabs, Admin product editor
- **Radix base:** `@radix-ui/react-tabs`

### 3.8 BottomNav (mobile, optional)
- **Description:** fixed bottom navigation
- **Tabs:** Home · Categories · Cart · Wishlist · Account
- **States:** active tab highlighted
- **ใช้ที่:** Mobile only — ทุกหน้า storefront

### 3.9 AnnouncementBar
- **Description:** thin bar บนสุดของหน้า สำหรับ promo message
- **Variants:** `static` · `marquee` (scrolling) · `dismissible`
- **ใช้ที่:** ทุกหน้า (top of header) — "ส่งฟรีเมื่อซื้อครบ 1,500฿"

---

## 4. Feedback

### 4.1 Toast
- **Description:** transient notification
- **Variants:** `default` · `success` · `warning` · `error` · `info`
- **Position:** bottom-right (desktop), top (mobile)
- **Features:** auto-dismiss (5s default), manual close, stack
- **ใช้ที่:** Add to cart confirm, Save address success, Error notifications
- **Radix base:** `@radix-ui/react-toast` (หรือ `sonner` ผ่าน shadcn)

### 4.2 Alert
- **Description:** inline notification (persistent)
- **Variants:** `default` · `success` · `warning` · `destructive` · `info`
- **Composition:** icon + title + description + optional action
- **ใช้ที่:** Checkout (payment error), Form errors summary, Account (verify email banner)

### 4.3 Dialog / Modal
- **Description:** focus-trapped overlay สำหรับ confirmation/form
- **Variants:** `default` · `fullscreen-mobile` · `destructive-confirm`
- **Sizes:** `sm (400)` · `md (560)` · `lg (720)` · `xl (960)`
- **ใช้ที่:** Login prompt, Delete confirmation, Quick view product, Address add/edit form, Coupon apply
- **Radix base:** `@radix-ui/react-dialog`

### 4.4 AlertDialog
- **Description:** destructive confirmation (ลบที่อยู่, ยกเลิกออเดอร์)
- **Radix base:** `@radix-ui/react-alert-dialog`

### 4.5 Tooltip
- **Description:** contextual hint on hover/focus
- **Variants:** `default` · `with-arrow`
- **ใช้ที่:** PDP variant out-of-stock hint, Admin icons, Form helper tips
- **Radix base:** `@radix-ui/react-tooltip`

### 4.6 Popover
- **Description:** floating panel ผูกกับ trigger
- **ใช้ที่:** Account quick menu (header), Filter sub-panel, Share button
- **Radix base:** `@radix-ui/react-popover`

### 4.7 Skeleton
- **Description:** loading placeholder (shimmer)
- **Variants:** `text` · `circle` · `rectangle` · `product-card` · `list-row`
- **ใช้ที่:** ทุก data fetch ที่ user รอได้ (category grid, PDP, search, orders)

### 4.8 Spinner
- **Description:** loading indicator แบบ circular
- **Sizes:** `xs (12)` · `sm (16)` · `md (24)` · `lg (32)`
- **ใช้ที่:** Button loading state, Inline loading, Full-page fallback

### 4.9 EmptyState
- **Description:** zero-data UI พร้อม illustration + CTA
- **Variants:** `empty-cart` · `no-orders` · `no-wishlist` · `no-results` · `error` · `404`
- **Composition:** icon/illustration + title + description + primary action
- **ใช้ที่:** Cart ว่าง, Wishlist ว่าง, Search no results, Filter no matches, Order history ว่าง

### 4.10 ProgressBar
- **Description:** linear progress indicator
- **Variants:** `determinate` · `indeterminate` · `stepper` (checkout steps)
- **ใช้ที่:** Checkout multi-step (Cart → Address → Payment → Confirm), File upload (admin)
- **Radix base:** `@radix-ui/react-progress`

---

## 5. E-Commerce (Domain-Specific)

### 5.1 ProductCard
- **Description:** การ์ดแสดงสินค้าใน grid/list
- **Variants:** `grid-default` · `grid-compact` · `list-horizontal` · `skeleton` · `cart-mini` (ในช่อง wishlist)
- **Composition:** image (1:1) · badges (NEW/SALE/FLASH) · brand · title (2 lines clamp) · rating · price (+strikethrough ถ้ามี discount) · quick-add button · wishlist toggle
- **States:** default, hover (elevate + quick action reveal), focus, out-of-stock (overlay + grayscale), sold-out
- **Props หลัก:** `product`, `variant`, `onAddToCart`, `onToggleWishlist`, `showQuickView`
- **ใช้ที่:** Homepage (trending, flash sale), Category grid, Search results, Related products (PDP), Wishlist

### 5.2 ProductGrid
- **Description:** responsive grid ของ ProductCard
- **Variants:** `4-col-desktop` (default category) · `2-col-mobile` · `carousel` (homepage sections)
- **Features:** skeleton loading, empty state, infinite scroll / pagination
- **ใช้ที่:** Homepage sections, Category listing, Search, Related products

### 5.3 PriceTag
- **Description:** แสดงราคา พร้อม discount
- **Variants:** `default` · `with-discount` (ขีดราคาเดิม + % off badge) · `installment` (ผ่อน 0% X เดือน) · `compact` (ใน cart mini)
- **ใช้ที่:** ProductCard, PDP, Cart, Checkout summary

### 5.4 RatingStars
- **Description:** star rating display / input
- **Variants:** `readonly` (display) · `interactive` (ใน review form) · `compact` (ใน ProductCard)
- **Sizes:** `sm` · `md` · `lg`
- **Props หลัก:** `value` (0-5, support half), `onChange`, `readonly`, `showCount`
- **ใช้ที่:** ProductCard, PDP header, Reviews list, Review form

### 5.5 VariantSelector
- **Description:** เลือก variant (สี, ขนาด, วัสดุ)
- **Variants:** `swatch` (สี — circle) · `pill` (ขนาด — label box) · `dropdown` (เยอะเกิน swatch)
- **States:** default, selected (border + check), disabled (out of stock — slash overlay), hover
- **Props หลัก:** `options`, `value`, `onChange`, `type`, `disabled`
- **ใช้ที่:** PDP (บังคับเลือกก่อน add to cart), Quick view dialog

### 5.6 QuantityStepper
- **Description:** ปรับจำนวน (− n +)
- **Variants:** `default` (แนวนอน) · `compact` (cart mini)
- **States:** default, at-min (− disabled), at-max (+ disabled), editing (type number)
- **Props หลัก:** `value`, `min`, `max`, `onChange`
- **ใช้ที่:** PDP (before add to cart), Cart items, Quick view

### 5.7 CartItem
- **Description:** รายการสินค้าใน cart
- **Variants:** `cart-drawer` (compact) · `cart-page` (full) · `checkout-readonly`
- **Composition:** image · title · variant info · quantity stepper · unit price · line total · remove button
- **States:** default, updating (spinner overlay), removed (fade out), out-of-stock warning
- **ใช้ที่:** Cart drawer, /cart page, Checkout review step

### 5.8 AddressCard
- **Description:** บัตรแสดงที่อยู่
- **Variants:** `default` (display) · `selectable` (checkout) · `editable` (account)
- **Badges:** `default` (ค่าเริ่มต้น), `home`, `work`
- **Actions:** edit, delete, set as default
- **ใช้ที่:** Account → addresses, Checkout address selection

### 5.9 OrderStatus
- **Description:** แสดงสถานะ order
- **Variants:** `pill` (inline — badge) · `timeline` (vertical steps ใน order detail) · `horizontal-stepper` (อยู่ด้านบน order detail)
- **Statuses:** pending → paid → packed → shipped → delivered (+ cancelled / refunded branch)
- **States per step:** upcoming, current (highlighted + pulse), complete (check), failed
- **ใช้ที่:** Account → orders list (pill), Account → order detail (timeline)

### 5.10 CouponInput
- **Description:** ใส่โค้ดส่วนลด
- **Variants:** `default` · `applied` (แสดงโค้ดที่ใส่แล้ว + ปุ่ม remove)
- **States:** idle, validating (spinner), success (green check), error (red + message)
- **ใช้ที่:** Cart, Checkout

### 5.11 FilterPanel
- **Description:** panel กรองสินค้าใน category/search
- **Variants:** `sidebar-desktop` (sticky) · `drawer-mobile`
- **Sub-filters:** price range slider · brand (checkbox list) · rating (radio — 4★ up) · color swatch · feature (checkbox) · on-sale toggle
- **Features:** active filter chips ด้านบน, "Clear all", sticky apply button (mobile)
- **ใช้ที่:** Category listing, Search results

### 5.12 SortDropdown
- **Description:** เรียงลำดับ (ขายดี, ใหม่, ราคาต่ำ-สูง, ราคาสูง-ต่ำ, rating)
- **ใช้ที่:** Category, Search, Admin lists

### 5.13 CountdownTimer
- **Description:** นับถอยหลังสำหรับ flash sale
- **Variants:** `large-hero` (สี่เหลี่ยม DD:HH:MM:SS ใหญ่) · `inline-card` (ใน ProductCard flash sale) · `bar` (ใน FlashSaleBar header)
- **States:** running, ending-soon (< 1hr — สีเปลี่ยนเร้า), expired
- **ใช้ที่:** Homepage flash sale section, FlashSaleBar, PDP (flash sale product)

### 5.14 SearchBar
- **Description:** ค้นหาสินค้า
- **Variants:** `header-desktop` (inline) · `header-mobile` (icon → overlay) · `inline-page`
- **Features:** autocomplete suggestion, recent searches, trending keywords, category filter dropdown
- **States:** idle, focused (panel open), typing (debounced suggestions), no-results

### 5.15 ReviewCard
- **Description:** แสดง review ใน PDP
- **Composition:** avatar · name · verified badge · rating · date · title · body · images (optional) · helpful count
- **ใช้ที่:** PDP reviews tab

### 5.16 WishlistToggle
- **Description:** ปุ่ม heart (โต้ตอบ add/remove wishlist)
- **Variants:** `icon-only` (ใน ProductCard) · `icon-with-label` (PDP)
- **States:** off (outline), on (filled red/accent), loading, guest-prompt (ชวน login)

### 5.17 OrderSummary
- **Description:** สรุปราคาใน checkout/cart
- **Composition:** subtotal · shipping · discount · tax · total · payment method preview
- **Variants:** `sticky-sidebar` (desktop) · `bottom-sheet` (mobile) · `accordion-collapsed` (มือถือ checkout)

### 5.18 PaymentMethodSelector
- **Description:** เลือกวิธีชำระเงิน (Card, Bank transfer, COD, PromptPay, installment)
- **ใช้ที่:** Checkout step payment
- **Radix base:** `@radix-ui/react-radio-group` (card variant)

### 5.19 ShippingMethodSelector
- **Description:** เลือกวิธีจัดส่ง (Standard, Express, Pickup)
- **Composition:** radio card แสดง ชื่อ · ETA · ราคา
- **ใช้ที่:** Checkout step shipping

### 5.20 StockIndicator
- **Description:** แสดง stock status
- **Variants:** `in-stock` · `low-stock` (< 5 ชิ้น — สีเตือน) · `out-of-stock` · `pre-order`
- **ใช้ที่:** PDP, ProductCard (บางกรณี)

---

## 6. Marketing

### 6.1 HeroBanner
- **Description:** banner หลักบน homepage (+ landing pages)
- **Variants:** `carousel` (slideshow 3-5 slides, autoplay + arrow + dots) · `static` · `split` (รูป + CTA ข้าง)
- **Composition:** background image/video · title · subtitle · CTA button(s) · optional countdown
- **Features:** autoplay pause-on-hover, swipe on mobile, lazy loaded images, dot indicators `primary-600` active
- **ใช้ที่:** Homepage, Promotion landing, Category hero

### 6.2 PromoStrip
- **Description:** แถบบาง ๆ สำหรับ promo messages (deal-driven, HomePro pattern — ใช้ทั้งระหว่าง section + ใต้ hero)
- **Variants:**
  - `icon-row` — 3-4 icon + label เรียงแนวนอน (ส่งฟรี · ผ่อน 0% · ติดตั้งฟรี · คืนสินค้าได้) — **ใต้ hero**
  - `marquee-banner` — ข้อความเลื่อน (ผ่อน 0% สูงสุด 10 เดือน, แลกเก่าเพื่อโลกใหม่) — **ระหว่าง section, full-width**
  - `solid-cta` — สีพื้น (`primary-900` หรือ `yellow-100`) + headline + CTA chevron link — **section divider**
  - `countdown-promo` — มี countdown timer inline (สำหรับ "โปรสิ้นเดือน")
- **Background palette:** `primary-900` (trust) · `yellow-100` (rewards) · `red-50` with `red-500` text (urgency) · `neutral-50` (subtle)
- **States:** static, dismissible (มี × ปุ่ม), sticky (top of page variant)
- **ใช้ที่:** Homepage (หลายตำแหน่ง — ใต้ hero, ระหว่าง section, ก่อน footer), Category page top, PDP (installment callout), Checkout (trust badges)

### 6.3 CategoryTile (square / hero variants)
- **Description:** การ์ดประเภทสินค้า — รูปทรงสี่เหลี่ยม (ใช้คู่กับ CircularCategoryTile)
- **Variants:** `square-image` (สี่เหลี่ยมพร้อม lifestyle image) · `hero-banner-style` (ใหญ่เต็มแถว — ใช้เป็น visual hook)
- **Composition:** image · title · optional item count · hover → `primary-600` overlay subtle
- **ใช้ที่:** Homepage (feature category section), Category listing (sub-category grid), Footer top-level

### 6.4 CircularCategoryTile ⭐ NEW (HomePro signature pattern)
- **Description:** หมวดสินค้าแบบวงกลม — icon หรือ product image ในวงกลม + label ด้านล่าง · เรียงเป็น horizontal scroll หรือ grid บนมือถือ
- **Variants:**
  - `icon-circle` — lucide icon ใน circle (solid `primary-50` background, `primary-600` icon stroke) · label ไทย+อังกฤษ
  - `image-circle` — product/category photo ใน circle (มี thin border `neutral-200`)
  - `promo-circle` — circle พร้อม small badge ทับมุมบนขวา (เช่น "NEW", "SALE") — สำหรับ featured category
- **Sizes:** `sm (64px)` mobile · `md (88px)` tablet · `lg (112px)` desktop
- **States:** default, hover (scale 1.05 + shadow-md + circle border → `primary-600`), active (ring-focus), disabled (grayscale)
- **Layout:**
  - Mobile: horizontal scroll (snap-x), 4-5 items visible, scroll shadow ที่ขอบ
  - Desktop: grid 8-10 cols เต็มแถว
- **Composition:** circle container · icon OR image · label (`body-sm` or `caption`) · optional item count
- **Props หลัก:** `icon` OR `imageSrc`, `label`, `labelEn` (bilingual), `href`, `size`, `badge`
- **ใช้ที่:** Homepage (browse by category — ใต้ hero + PromoStrip), Mobile drawer navigation, Category page (sub-categories row)
- **Differentiation:** HomePro ใช้ circle เล็ก + ชื่อสั้น — เราใช้ขนาดใหญ่ขึ้น + spacing generous + typography Prompt เพื่อดู modern กว่า

### 6.5 ShopByRoomTile ⭐ NEW
- **Description:** tile ขนาดใหญ่สำหรับ "Shop by Room" / "Shop by Style" section — lifestyle image + label (ห้องนอน · ห้องครัว · ห้องน้ำ · ห้องนั่งเล่น · สวน · Office)
- **Variants:**
  - `room-large` — 2-col layout (desktop), full-width image + overlay title
  - `room-medium` — 3-col standard grid
  - `style-circular` — alternative ใช้ circular style (Modern · Scandinavian · Minimalist · Traditional · Loft)
- **Composition:** lifestyle image (aspect 4:3 หรือ 16:9) · overlay gradient bottom-to-top · title (`h3` white) · subtitle optional · "Shop now →" link
- **States:** default, hover (image scale 1.03, overlay intensify, title shift up subtle), focus-visible
- **Features:** lazy image loading, next/image, aspect-ratio reserved (no CLS)
- **Props หลัก:** `imageSrc`, `title`, `subtitle`, `href`, `size`
- **ใช้ที่:** Homepage (Shop by Room section), Category landing (lifestyle hero), /promotions

### 6.6 BrandLogoGrid (confirmed design)
- **Description:** grid/row ของโลโก้แบรนด์ที่วางขาย (trust builder + brand discovery) — HomePro pattern: row-based, mono-color, hover → color
- **Variants:**
  - `monochrome-hover-color` ⭐ (default) — grayscale logos, hover → color + subtle scale
  - `color-static` — ใช้เมื่อต้องการ brand personality เต็ม (featured brand section)
  - `carousel` — ใช้เมื่อ brand > 8 ตัว (auto-scroll slow หรือ manual)
- **Layout:**
  - Mobile: 3-col grid
  - Tablet: 4-6-col grid
  - Desktop: 6-8-col row (อาจมี "ดูทั้งหมด →" link ที่ท้าย)
- **Composition:** logo SVG (ไม่ใช้ PNG — keep crisp) · cell background `neutral-50` · hover bg `white` + border `primary-200`
- **States:** default (grayscale 100%), hover (grayscale 0% + shadow-sm + scale 1.02), focus-visible, link to brand page
- **Props หลัก:** `brands[]` ({ logo, name, href }), `variant`, `showAllLink`
- **ใช้ที่:** Homepage ("Shop by Brand" section), Category (brand filter preview), Footer (optional partner logos)

### 6.7 FlashSaleBar
- **Description:** แถบโปรโมชั่น flash sale (full-width, accent background) — core HomePro-inspired element
- **Composition:**
  - Header: "⚡ FLASH SALE" label (`red-500` bg, white text, Prompt weight 700)
  - Countdown timer (HH:MM:SS)
  - ProductGrid carousel (horizontal scroll) ของ flash products
  - "ดูทั้งหมด →" link ไปที่ /promotions/flash
- **Variants:** `homepage-hero` (full-width, ทับ primary bg) · `category-top` (smaller) · `pdp-inline` (ใน PDP)
- **States:** active (countdown running), ending-soon (< 1hr — pulse red-500), ended (fade to "ดูของเหลือ →")
- **ใช้ที่:** Homepage (prime position — ใต้ hero หรือ CircularCategoryTile row), Category top

### 6.8 ServiceCalloutBar ⭐ NEW (HomePro signature pattern)
- **Description:** row ของ service chips — ฟรีติดตั้ง · ส่งถึงบ้าน · รับที่สาขา · ผ่อน 0% · Homesphere Card earn points
- **Variants:**
  - `icon-chip-row` (default) — chips แนวนอน, แต่ละ chip มี icon + label (มีการเว้น separator line)
  - `tab-style` — chips style tab เลือกได้ (สำหรับ PDP — แสดงรายละเอียดเงื่อนไขแต่ละ service)
  - `mobile-scroll` — horizontal scroll (snap-x) บน mobile
- **Composition:** icon (lucide หรือ custom SVG) · label ไทย+อังกฤษ · optional tooltip หรือ "ดูเงื่อนไข" modal trigger
- **Colors:** bg `neutral-50` หรือ `yellow-50` · icon color `primary-600` · label `neutral-800`
- **States:** default, hover (bg → `primary-50`), clickable (opens modal หรือ link)
- **Composition สำหรับ tab-style:** เลือก service → content panel ด้านล่าง แสดงเงื่อนไข (ราคา, พื้นที่ให้บริการ, ระยะเวลา)
- **Props หลัก:** `services[]` ({ icon, label, labelEn, description, onClick }), `variant`
- **ใช้ที่:** Homepage (ใต้ FlashSaleBar หรือ ก่อน ProductGrid section), PDP (ใต้ add-to-cart — service ของสินค้านั้น), Checkout (trust reinforcement), Cart

### 6.9 NewsletterSignup
- **Description:** form เก็บ email สำหรับ newsletter
- **Variants:** `footer-inline` (ใน footer — horizontal) · `modal-popup` (exit intent — optional, defer Phase 5+) · `full-section` (full-width colored section)
- **Composition:** headline · subheadline · email input + submit button · privacy disclaimer link
- **Color:** `full-section` ใช้ `primary-900` bg + white text + yellow-500 accent button — impact
- **ใช้ที่:** Footer (inline), Homepage bottom (full-section), Post-checkout thank you

### 6.10 AppDownloadBanner ⭐ NEW
- **Description:** banner promote mobile app — ก่อน footer หรือ bottom-of-page
- **Variants:**
  - `full-section` (default) — 2-col: lifestyle phone mockup + copy + app store badges
  - `compact-strip` — 1 line: "ดาวน์โหลดแอป Homesphere" + 2 badges
  - `sticky-mobile` — dismissible sticky banner ใน mobile browser เชิญติดตั้ง PWA
- **Composition:**
  - Headline: "Homesphere App" (Prompt display)
  - Subheadline: benefits 3 bullet (push noti โปรโมชัน, ติดตามออเดอร์, รับ point 2x)
  - App Store badge (SVG) + Google Play badge (SVG)
  - QR code (desktop variant) เพื่อสแกน
  - Phone mockup image (right side)
- **Color:** bg `primary-600` หรือ `primary-900` · text white · QR code white on bg
- **States:** default, dismissible (มี × บน `sticky-mobile` variant)
- **Props หลัก:** `variant`, `appStoreUrl`, `playStoreUrl`, `dismissible`
- **ใช้ที่:** Homepage (ก่อน footer), Account dashboard (เชิญ install), Mobile web (sticky variant — optional Phase 5+)

### 6.11 TestimonialCard
- **Description:** คำรีวิวจากลูกค้า (ใช้ marketing page)
- **Composition:** quote · avatar · name · role/product · rating (yellow-500 stars)
- **ใช้ที่:** About page, Homepage trust section (optional)

### 6.12 FeatureCallout
- **Description:** section ไฮไลต์ feature เด่น (เช่น "Homesphere Card benefits", "ทำไมต้อง Homesphere")
- **Composition:** icon (`primary-600`) · headline (Prompt display) · body · CTA
- **Variants:** `3-col-row` (icons + text) · `split-image` (lifestyle image + text)
- **ใช้ที่:** Homepage, About, Loyalty landing

### 6.13 RecentlyViewed
- **Description:** carousel "สินค้าที่คุณดูล่าสุด" (localStorage-driven, lazy hydrate)
- **ใช้ที่:** Homepage (returning user), PDP (ด้านล่าง related), Cart (empty state)

### 6.14 StoreLocatorCard
- **Description:** การ์ดสาขา (name, address, hours, phone, map link)
- **ใช้ที่:** /stores, Footer "Find a store"

---

## Cross-cutting Notes

### Component × Page Coverage (ย่อ)

| Page | Key components |
|------|---------------|
| `/` Homepage | AnnouncementBar · HeroBanner (carousel) · PromoStrip (icon-row) · **CircularCategoryTile** row · FlashSaleBar · **ServiceCalloutBar** · ProductGrid (trending) · **ShopByRoomTile** grid · PromoStrip (marquee) · CategoryTile · BrandLogoGrid · FeatureCallout · **AppDownloadBanner** · NewsletterSignup · RecentlyViewed |
| `/category/[slug]` | Breadcrumb · **CircularCategoryTile** (sub-cat row) · FilterPanel · SortDropdown · ProductGrid · Pagination · Tag (active filters) · EmptyState |
| `/product/[slug]` | Breadcrumb · ProductCard (gallery) · PriceTag · VariantSelector · QuantityStepper · Button · Tabs · Accordion · RatingStars · ReviewCard · **ServiceCalloutBar** (tab-style) · **PromoStrip** (installment) · ProductGrid (related) · StockIndicator · CountdownTimer (flash) · RecentlyViewed |
| `/search` | SearchBar · FilterPanel · SortDropdown · ProductGrid · EmptyState |
| `/cart` | CartItem · QuantityStepper · CouponInput · **ServiceCalloutBar** · OrderSummary · Button · EmptyState · RecentlyViewed |
| `/checkout` | ProgressBar (stepper) · AddressCard · ShippingMethodSelector · PaymentMethodSelector · OrderSummary · **PromoStrip** (trust badges) · Alert · Dialog (confirm) |
| `/login`, `/register` | Input · Button · Alert · Label · Checkbox |
| `/account` | Avatar · Card · Tabs · Badge · OrderStatus (pill) · Table · **AppDownloadBanner** (compact) |
| `/account/orders/[id]` | OrderStatus (timeline) · CartItem (readonly) · AddressCard · OrderSummary · Button |
| `/stores` | StoreLocatorCard · Tabs · Input (search) |
| `/promotions` | HeroBanner · FlashSaleBar · ProductGrid · CategoryTile · **ShopByRoomTile** |
| Admin | Table · Form primitives · Tabs · Dialog · Alert · Toast · Badge |

### Radix Coverage Summary
**ใช้โดยตรง:** Dialog, AlertDialog, NavigationMenu, DropdownMenu, Popover, Tooltip, Select, RadioGroup, Checkbox, Switch, Tabs, Accordion, Toast, Avatar, Label, Separator, Progress, Slot, Slider (price range)

**ไม่ใช้ Radix (custom หรือ HTML base):** Button, Input, Textarea, Table, Card, Badge, Tag, Skeleton, Spinner, ProductCard และ domain components อื่น ๆ

### Decisions & Open Questions

**✅ Resolved by team-lead:**
- **App download links** — placeholder only (`#` หรือ `https://homesphere.demo/app`) · `AppDownloadBanner` props `appStoreUrl` / `playStoreUrl` รองรับอยู่แล้ว
- **ServiceCalloutBar items (5)** — ฟรีติดตั้ง · ส่งถึงบ้าน · รับที่สาขา · ผ่อน 0% · Homesphere Card · `Service` collection จะ config-driven (data-architect จะ define)
- **ShopByRoomTile rooms (6)** — ห้องนอน · ห้องรับแขก · ห้องครัว · ห้องน้ำ · ห้องทำงาน · สวน (sync กับ ux-architect rev 2)
- **TH/EN toggle** — confirmed · Header มี language switcher · copy tokens ต้องเตรียม bilingual
- **Brand guideline** — none (fictional demo)
- **Dark mode** — tokens only, ไม่ออก Figma dark screens
- **Logo** — `homesphere-designer` สร้างใน Phase 2

**🔄 Pending `data-architect`:**
1. `Product.installmentPlans` field — `PriceTag` installment variant + `PromoStrip` installment callout
2. `Review.images[]` — `ReviewCard` คาดว่ามี
3. `Category.iconName` (lucide key) + `Category.imageSrc` — `CircularCategoryTile`
4. `Room`/`Style` taxonomy: entity แยก vs Category special type? — `ShopByRoomTile`
5. `Service` schema: `{ id, iconName, labelTh, labelEn, description, termsUrl? }` — `ServiceCalloutBar`

**🔄 Pending `ux-architect`:**
- `/loyalty` (Homesphere Card landing page) อยู่ใน sitemap? — ถ้ามี ต้องเพิ่ม `LoyaltyTierCard` component

**📌 Note for synthesis (team-lead):**
- ⚠️ A11y: `yellow-500` บน white fail AA — ใช้กับ `neutral-900` text หรือเป็น icon/badge fill เท่านั้น
- ⚠️ Color context: `red-500` (marketing/deal) vs `error-500` (system) แยกกันเสมอ · Figma designer + dev ต้องไม่สลับ

---
