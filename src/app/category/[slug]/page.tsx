import {
  ChevronRight, SlidersHorizontal, Grid3x3, List, ArrowUpDown, Star,
  Refrigerator, UtensilsCrossed, Bath, Sofa, LampCeiling, Trees, Hammer, HousePlug,
  Wind, Armchair, ShowerHead, Lightbulb, Bed, Microwave, Camera, Library,
  Droplet, ChevronLeft, ChevronDown,
} from "lucide-react";
import { AnnouncementBar, SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductCard } from "@/components/product-card";

/* ============================================================
   CATEGORY LISTING — /category/[slug]
============================================================ */

const CATEGORY_MAP: Record<string, { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string; count: number }> = {
  appliances: { icon: Refrigerator, label: "เครื่องใช้ไฟฟ้า", count: 248 },
  kitchen: { icon: UtensilsCrossed, label: "เครื่องครัว", count: 186 },
  bathroom: { icon: Bath, label: "ห้องน้ำ", count: 134 },
  furniture: { icon: Sofa, label: "เฟอร์นิเจอร์", count: 312 },
  lighting: { icon: LampCeiling, label: "ไฟและโคมไฟ", count: 98 },
  garden: { icon: Trees, label: "แต่งสวน", count: 76 },
  tools: { icon: Hammer, label: "เครื่องมือช่าง", count: 142 },
  "smart-home": { icon: HousePlug, label: "สมาร์ทโฮม", count: 89 },
};

const PRODUCTS = [
  { icon: Armchair, name: "โซฟา Haven 3 ที่นั่ง ผ้ากำมะหยี่", price: 24900, original: 29900, rating: 4.8, reviews: 128, badge: "ขายดี" },
  { icon: Bed, name: "ที่นอน Haven Premium 6 ฟุต", price: 14900, rating: 4.9, reviews: 201 },
  { icon: Wind, name: "แอร์ Aeris 12000 BTU Inverter", price: 9990, original: 15900, rating: 4.6, reviews: 89, badge: "-37%" },
  { icon: Refrigerator, name: "ตู้เย็น Stella 7.6Q 2 ประตู", price: 8490, original: 12900, rating: 4.5, reviews: 76, badge: "-34%" },
  { icon: Microwave, name: "หม้อทอด Pomme 6L ไร้น้ำมัน", price: 2490, rating: 4.8, reviews: 92, badge: "NEW" },
  { icon: LampCeiling, name: "โคมเพดาน Luma LED 24W", price: 1990, original: 3590, rating: 4.7, reviews: 154, badge: "-45%" },
  { icon: ShowerHead, name: "ฝักบัวฝักก้าน Vessel Pro", price: 3490, rating: 4.9, reviews: 201 },
  { icon: Lightbulb, name: "หลอดไฟ LED Luma 9W แพ็ค 4", price: 490, rating: 4.5, reviews: 312 },
  { icon: UtensilsCrossed, name: "ชุดหม้อ Kisho 5 ชิ้น", price: 2890, rating: 4.7, reviews: 154 },
  { icon: Droplet, name: "เครื่องกรองน้ำ Aeris RO 5 ขั้น", price: 8990, rating: 4.9, reviews: 31 },
  { icon: Camera, name: "กล้องวงจรปิด Nimbus 4K Pan-Tilt", price: 2990, rating: 4.7, reviews: 76, badge: "NEW" },
  { icon: Library, name: "ชั้นวางหนังสือ Arbor 5 ชั้น", price: 4590, rating: 4.6, reviews: 54 },
];

const BRANDS = ["Haven", "Arbor", "Kisho", "Luma", "Aeris", "Nimbus", "Vessel", "Pomme"];

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = CATEGORY_MAP[slug] ?? { icon: Refrigerator, label: slug, count: 0 };
  const CatIcon = category.icon;

  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main className="flex-1 w-full bg-neutral-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-neutral-200">
          <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center gap-2 text-sm text-neutral-600">
            <a href="/" className="hover:text-primary-600">หน้าแรก</a>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <a href="/category" className="hover:text-primary-600">หมวดสินค้า</a>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-900 font-medium">{category.label}</span>
          </div>
        </div>

        {/* Hero banner */}
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
          <div className="max-w-[1440px] mx-auto px-6 py-10 flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/10 grid place-items-center">
              <CatIcon className="w-10 h-10" strokeWidth={1.8} />
            </div>
            <div className="flex-1">
              <h1 className="font-display font-extrabold text-3xl lg:text-4xl">{category.label}</h1>
              <p className="text-white/80 text-sm mt-1">{category.count.toLocaleString()} รายการสินค้า · ส่งฟรีกรุงเทพ · ผ่อน 0% สูงสุด 10 เดือน</p>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              {["ลด 30% ขึ้นไป", "สินค้ามาใหม่", "Best Seller"].map((t) => (
                <button key={t} className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm backdrop-blur">{t}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-[1440px] mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar filters */}
          <aside className="space-y-4">
            <div className="bg-white rounded-xl border border-neutral-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-base flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" /> ตัวกรอง
                </h3>
                <button className="text-xs text-primary-600 hover:underline">ล้างทั้งหมด</button>
              </div>

              {/* Category tree */}
              <FilterGroup title="หมวดหมู่ย่อย" defaultOpen>
                <ul className="space-y-1.5 text-sm">
                  {["เครื่องปรับอากาศ", "ตู้เย็น", "เครื่องซักผ้า", "พัดลม", "ทีวี", "เครื่องครัวไฟฟ้า"].map((c) => (
                    <li key={c}>
                      <label className="flex items-center gap-2 hover:text-primary-600 cursor-pointer">
                        <input type="checkbox" className="accent-primary-600" />
                        <span className="flex-1">{c}</span>
                        <span className="text-xs text-neutral-400">{Math.floor(Math.random() * 50 + 10)}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              {/* Price */}
              <FilterGroup title="ช่วงราคา" defaultOpen>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input placeholder="ต่ำสุด" className="flex-1 px-2 py-1.5 border border-neutral-200 rounded text-sm" />
                    <span className="text-neutral-400">—</span>
                    <input placeholder="สูงสุด" className="flex-1 px-2 py-1.5 border border-neutral-200 rounded text-sm" />
                  </div>
                  <button className="w-full py-1.5 bg-primary-600 text-white rounded text-sm hover:bg-primary-700">ใช้งาน</button>
                  <ul className="space-y-1.5 text-sm pt-1">
                    {[
                      { label: "ต่ำกว่า 1,000฿", count: 42 },
                      { label: "1,000฿ - 5,000฿", count: 88 },
                      { label: "5,000฿ - 15,000฿", count: 67 },
                      { label: "15,000฿ - 30,000฿", count: 34 },
                      { label: "มากกว่า 30,000฿", count: 17 },
                    ].map((r) => (
                      <li key={r.label}>
                        <label className="flex items-center gap-2 hover:text-primary-600 cursor-pointer">
                          <input type="radio" name="price" className="accent-primary-600" />
                          <span className="flex-1">{r.label}</span>
                          <span className="text-xs text-neutral-400">{r.count}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </FilterGroup>

              {/* Brands */}
              <FilterGroup title="แบรนด์" defaultOpen>
                <ul className="space-y-1.5 text-sm">
                  {BRANDS.map((b) => (
                    <li key={b}>
                      <label className="flex items-center gap-2 hover:text-primary-600 cursor-pointer">
                        <input type="checkbox" className="accent-primary-600" />
                        <span className="flex-1">{b}</span>
                        <span className="text-xs text-neutral-400">{Math.floor(Math.random() * 30 + 5)}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              {/* Rating */}
              <FilterGroup title="คะแนนรีวิว">
                <ul className="space-y-1.5 text-sm">
                  {[5, 4, 3, 2].map((r) => (
                    <li key={r}>
                      <label className="flex items-center gap-2 hover:text-primary-600 cursor-pointer">
                        <input type="radio" name="rating" className="accent-primary-600" />
                        <span className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`w-3.5 h-3.5 ${i < r ? "fill-orange-500 text-orange-500" : "text-neutral-300"}`} />
                          ))}
                        </span>
                        <span className="text-xs">ขึ้นไป</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              {/* Service */}
              <FilterGroup title="บริการ">
                <ul className="space-y-1.5 text-sm">
                  {["ฟรีติดตั้ง", "ส่งฟรี", "รับที่สาขา", "ผ่อน 0%"].map((s) => (
                    <li key={s}>
                      <label className="flex items-center gap-2 hover:text-primary-600 cursor-pointer">
                        <input type="checkbox" className="accent-primary-600" />
                        <span>{s}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterGroup>
            </div>
          </aside>

          {/* Product grid + toolbar */}
          <section>
            {/* Toolbar */}
            <div className="bg-white rounded-xl border border-neutral-200 px-4 py-3 mb-4 flex flex-wrap items-center gap-3">
              <span className="text-sm text-neutral-600">
                พบ <b className="text-neutral-900">{category.count.toLocaleString()}</b> รายการ
              </span>
              <div className="ml-auto flex items-center gap-2">
                <label className="flex items-center gap-2 text-sm">
                  <ArrowUpDown className="w-4 h-4 text-neutral-500" />
                  <span className="text-neutral-600">เรียงตาม</span>
                  <select className="px-3 py-1.5 border border-neutral-200 rounded-lg text-sm outline-none">
                    <option>ยอดนิยม</option>
                    <option>ราคาต่ำ - สูง</option>
                    <option>ราคาสูง - ต่ำ</option>
                    <option>คะแนนรีวิว</option>
                    <option>มาใหม่</option>
                  </select>
                </label>
                <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
                  <button className="w-8 h-8 grid place-items-center bg-primary-600 text-white"><Grid3x3 className="w-4 h-4" /></button>
                  <button className="w-8 h-8 grid place-items-center text-neutral-500 hover:bg-neutral-100"><List className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {PRODUCTS.map((p, i) => <ProductCard key={i} {...p} />)}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <button className="w-10 h-10 rounded-lg border border-neutral-200 bg-white grid place-items-center disabled:opacity-40" disabled>
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[1,2,3,4,5].map((p, i) => (
                <button key={p} className={`w-10 h-10 rounded-lg font-medium text-sm ${i===0 ? "bg-primary-600 text-white" : "border border-neutral-200 bg-white hover:border-primary-300"}`}>{p}</button>
              ))}
              <span className="px-2 text-neutral-400">…</span>
              <button className="w-10 h-10 rounded-lg border border-neutral-200 bg-white font-medium text-sm hover:border-primary-300">21</button>
              <button className="w-10 h-10 rounded-lg border border-neutral-200 bg-white grid place-items-center">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Recently viewed teaser */}
            <div className="mt-12 bg-white rounded-xl border border-neutral-200 p-5">
              <h3 className="font-display font-bold text-lg mb-3">สินค้าที่ดูล่าสุด</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {PRODUCTS.slice(0, 6).map((p, i) => (
                  <a key={i} href="#" className="group">
                    <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg grid place-items-center mb-1 group-hover:ring-2 group-hover:ring-primary-300 transition">
                      <p.icon className="w-10 h-10 text-neutral-400" strokeWidth={1.5} />
                    </div>
                    <p className="text-[11px] text-neutral-600 line-clamp-1">{p.name}</p>
                    <p className="text-xs font-bold text-primary-700">฿{p.price.toLocaleString()}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

/* ─────────────── Filter group (collapsible) ─────────────── */
function FilterGroup({
  title, defaultOpen = false, children,
}: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  return (
    <details open={defaultOpen} className="border-t border-neutral-100 first:border-t-0 py-3 [&[open]_.chev]:rotate-180">
      <summary className="flex items-center justify-between cursor-pointer font-semibold text-sm mb-2">
        {title}
        <ChevronDown className="chev w-4 h-4 text-neutral-400 transition" />
      </summary>
      <div className="pt-2">{children}</div>
    </details>
  );
}
