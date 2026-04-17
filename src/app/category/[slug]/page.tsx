import { notFound } from "next/navigation";
import {
  ChevronRight, SlidersHorizontal, Grid3x3, List, ArrowUpDown, Star,
  Refrigerator, UtensilsCrossed, Bath, Sofa, LampCeiling, Trees, Hammer, HousePlug,
  Wind, Armchair, ShowerHead, Lightbulb, Bed, Microwave, Camera, Library,
  Droplet, ChevronLeft, ChevronDown, Package, type LucideIcon,
} from "lucide-react";
import { AnnouncementBar, SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductCard } from "@/components/product-card";
import { getCategoryBySlug, getCategoryProducts, getBrands } from "@/lib/queries/home";

const LUCIDE_ICONS: Record<string, LucideIcon> = {
  refrigerator: Refrigerator,
  "utensils-crossed": UtensilsCrossed,
  bath: Bath,
  "shower-head": ShowerHead,
  shower: ShowerHead,
  sofa: Sofa,
  "lamp-ceiling": LampCeiling,
  trees: Trees,
  hammer: Hammer,
  "house-plug": HousePlug,
  wind: Wind,
  bed: Bed,
  briefcase: Package,
  camera: Camera,
  library: Library,
  microwave: Microwave,
  droplet: Droplet,
  armchair: Armchair,
  lightbulb: Lightbulb,
  "package": Package,
};

function iconForProduct(slug: string): LucideIcon {
  if (slug.includes("aircon") || slug.includes("fan") || slug.includes("air")) return Wind;
  if (slug.includes("fridge") || slug.includes("refrigerator")) return Refrigerator;
  if (slug.includes("lamp") || slug.includes("light") || slug.includes("pendant")) return LampCeiling;
  if (slug.includes("bed") || slug.includes("mattress")) return Bed;
  if (slug.includes("sofa") || slug.includes("chair") || slug.includes("armchair")) return Armchair;
  if (slug.includes("microwave") || slug.includes("fryer") || slug.includes("oven")) return Microwave;
  if (slug.includes("shower") || slug.includes("faucet")) return ShowerHead;
  if (slug.includes("drill") || slug.includes("ladder") || slug.includes("hammer")) return Hammer;
  if (slug.includes("cctv") || slug.includes("camera")) return Camera;
  if (slug.includes("filter") || slug.includes("water")) return Droplet;
  if (slug.includes("kitchen") || slug.includes("pot") || slug.includes("pan")) return UtensilsCrossed;
  if (slug.includes("shelf") || slug.includes("bookshelf")) return Library;
  if (slug.includes("patio") || slug.includes("garden")) return Trees;
  return Package;
}

/* ============================================================
   CATEGORY LISTING — /category/[slug]
============================================================ */

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const [dbProducts, brands] = await Promise.all([
    getCategoryProducts(category.id, 24),
    getBrands(),
  ]);

  const CatIcon = (category.icon_name && LUCIDE_ICONS[category.icon_name]) || Package;

  const products = dbProducts.map((p) => ({
    icon: iconForProduct(p.slug),
    name: p.title_th,
    slug: p.slug,
    price: p.is_flash_sale && p.flash_sale_price != null ? p.flash_sale_price : p.base_price,
    original: p.compare_at_price ?? undefined,
    rating: p.rating_average,
    reviews: p.rating_count,
    badge: p.is_flash_sale ? "ลดราคา" : undefined,
  }));

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
            <span className="text-neutral-900 font-medium">{category.title_th}</span>
          </div>
        </div>

        {/* Hero banner */}
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
          <div className="max-w-[1440px] mx-auto px-6 py-10 flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/10 grid place-items-center">
              <CatIcon className="w-10 h-10" strokeWidth={1.8} />
            </div>
            <div className="flex-1">
              <h1 className="font-display font-extrabold text-3xl lg:text-4xl">{category.title_th}</h1>
              <p className="text-white/80 text-sm mt-1">{category.product_count.toLocaleString()} รายการสินค้า · ส่งฟรีกรุงเทพ · ผ่อน 0% สูงสุด 10 เดือน</p>
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
                  {brands.map((b) => (
                    <li key={b.id}>
                      <label className="flex items-center gap-2 hover:text-primary-600 cursor-pointer">
                        <input type="checkbox" className="accent-primary-600" />
                        <span className="flex-1">{b.name}</span>
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
                พบ <b className="text-neutral-900">{products.length.toLocaleString()}</b> รายการ
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
            {products.length === 0 ? (
              <div className="bg-white rounded-xl border border-neutral-200 p-10 text-center text-neutral-500">
                ยังไม่มีสินค้าในหมวดนี้
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((p, i) => <ProductCard key={i} {...p} />)}
              </div>
            )}

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
            {products.length > 0 && (
              <div className="mt-12 bg-white rounded-xl border border-neutral-200 p-5">
                <h3 className="font-display font-bold text-lg mb-3">สินค้าที่ดูล่าสุด</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {products.slice(0, 6).map((p, i) => {
                    const Icon = p.icon;
                    return (
                      <a key={i} href={`/product/${p.slug}`} className="group">
                        <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg grid place-items-center mb-1 group-hover:ring-2 group-hover:ring-primary-300 transition">
                          <Icon className="w-10 h-10 text-neutral-400" strokeWidth={1.5} />
                        </div>
                        <p className="text-[11px] text-neutral-600 line-clamp-1">{p.name}</p>
                        <p className="text-xs font-bold text-primary-700">฿{p.price.toLocaleString()}</p>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
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
