import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight, Heart, Share2, Star, Truck, Wrench, Store, CreditCard,
  BadgeCheck, Shield, RefreshCcw, Check, Minus, Plus, ShoppingCart, Zap,
  MapPin, Package, MessageCircle, ThumbsUp, Wind, Refrigerator, LampCeiling,
  Bed, Armchair, ShowerHead, Microwave, Camera, Library, Droplet, UtensilsCrossed,
  Hammer, Trees, type LucideIcon,
} from "lucide-react";
import { AnnouncementBar, SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductCard } from "@/components/product-card";
import { getProductBySlug, getRelatedProducts } from "@/lib/queries/product";

function iconForProduct(slug: string): LucideIcon {
  if (slug.includes("aircon") || slug.includes("fan") || slug.includes("air")) return Wind;
  if (slug.includes("fridge") || slug.includes("refrigerator")) return Refrigerator;
  if (slug.includes("lamp") || slug.includes("light") || slug.includes("pendant")) return LampCeiling;
  if (slug.includes("bed") || slug.includes("mattress")) return Bed;
  if (slug.includes("sofa") || slug.includes("chair") || slug.includes("armchair")) return Armchair;
  if (slug.includes("microwave") || slug.includes("fryer") || slug.includes("oven")) return Microwave;
  if (slug.includes("shower") || slug.includes("faucet") || slug.includes("toilet")) return ShowerHead;
  if (slug.includes("drill") || slug.includes("ladder") || slug.includes("hammer")) return Hammer;
  if (slug.includes("cctv") || slug.includes("camera") || slug.includes("lock")) return Camera;
  if (slug.includes("filter") || slug.includes("water")) return Droplet;
  if (slug.includes("kitchen") || slug.includes("pot") || slug.includes("pan") || slug.includes("dining")) return UtensilsCrossed;
  if (slug.includes("shelf") || slug.includes("bookshelf")) return Library;
  if (slug.includes("patio") || slug.includes("garden")) return Trees;
  return Package;
}

const REVIEWS_MOCK = [
  { user: "สมหมาย ใจดี", date: "2026-04-10", rating: 5, title: "คุ้มค่ามาก", body: "ใช้งานได้ดีเกินคาด ส่งเร็ว ติดตั้งฟรี คุ้มราคา แนะนำเลยครับ", helpful: 42, verified: true },
  { user: "ณัฐวุฒิ ช่างฝัน", date: "2026-04-08", rating: 5, title: "บริการดี", body: "ช่างของ Homesphere มาติดตั้งตรงเวลา ให้คำแนะนำดี ประทับใจ", helpful: 28, verified: true },
  { user: "ปวีณา สุขใจ", date: "2026-04-03", rating: 4, title: "คุณภาพดี", body: "ของดีมีคุณภาพ ตามรีวิวเลย ราคาคุ้มค่า ใช้มาเดือนกว่ายังไม่มีปัญหา", helpful: 14, verified: true },
];

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const related = product.category
    ? await getRelatedProducts(product.category.id, product.id, 5)
    : [];

  const services = [
    { icon: Truck, label: "ส่งฟรีกรุงเทพ", sub: "ภายใน 2-3 วัน" },
    { icon: Wrench, label: "ฟรีติดตั้ง", sub: "ช่างประจำสาขา" },
    { icon: CreditCard, label: "ผ่อน 0%", sub: "นาน 10 เดือน" },
    { icon: Shield, label: "ประกันศูนย์", sub: `${Math.max(1, Math.round(product.warranty_months / 12))} ปีเต็ม` },
    { icon: RefreshCcw, label: "คืนสินค้า", sub: "ภายใน 14 วัน" },
    { icon: Store, label: "รับที่สาขา", sub: "120+ สาขาทั่วไทย" },
  ];

  const currentPrice =
    product.is_flash_sale && product.flash_sale_price != null ? product.flash_sale_price : product.base_price;
  const originalPrice = product.compare_at_price ?? product.base_price;
  const hasDiscount = product.discount_percent > 0;

  const ProductIcon = iconForProduct(product.slug);
  const galleryImages = product.gallery.length > 0 ? product.gallery : [];
  const mainImage = galleryImages[0] ?? (product.slug.includes("aircon") ? "/seed/flash-sale/aeris-aircon.png" : null);

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
            {product.category && (
              <>
                <a href={`/category/${product.category.slug}`} className="hover:text-primary-600">{product.category.title_th}</a>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              </>
            )}
            <span className="text-neutral-900 line-clamp-1">{product.title_th}</span>
          </div>
        </div>

        {/* Main product block */}
        <div className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-8">
          {/* Gallery */}
          <div>
            <div className="aspect-square bg-white rounded-2xl border border-neutral-200 overflow-hidden relative grid place-items-center">
              {mainImage ? (
                <Image src={mainImage} alt={product.title_th} fill sizes="(max-width: 1024px) 100vw, 920px" className="object-cover" priority />
              ) : (
                <ProductIcon className="w-40 h-40 text-neutral-300" strokeWidth={1.2} />
              )}
              {hasDiscount && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-lg z-10">-{product.discount_percent}%</span>
              )}
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <button className="w-10 h-10 rounded-full bg-white shadow grid place-items-center hover:bg-red-50 hover:text-red-500"><Heart className="w-5 h-5" /></button>
                <button className="w-10 h-10 rounded-full bg-white shadow grid place-items-center hover:bg-primary-50 hover:text-primary-600"><Share2 className="w-5 h-5" /></button>
              </div>
            </div>
            {galleryImages.length > 1 && (
              <div className="mt-3 grid grid-cols-5 gap-2">
                {galleryImages.slice(0, 5).map((src, i) => (
                  <button key={i} className={`aspect-square rounded-lg overflow-hidden relative border-2 ${i===0 ? "border-primary-600" : "border-neutral-200 hover:border-primary-300"}`}>
                    <Image src={src} alt="" fill sizes="120px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info panel */}
          <div className="space-y-5">
            {/* Title + brand + rating */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.brand && (
                  <a href="#" className="text-primary-600 text-sm font-semibold hover:underline">{product.brand.name}</a>
                )}
                <span className="text-neutral-300">·</span>
                <span className="text-xs text-neutral-500">SKU: {product.sku}</span>
              </div>
              <h1 className="font-display font-bold text-2xl text-neutral-900 leading-tight">{product.title_th}</h1>
              {product.title_en && <p className="text-sm text-neutral-500 mt-1">{product.title_en}</p>}
              <div className="flex items-center gap-4 mt-3 text-sm">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating_average) ? "fill-orange-500 text-orange-500" : "text-neutral-300"}`} />
                  ))}
                  <span className="ml-1 font-semibold">{product.rating_average.toFixed(1)}</span>
                </div>
                <span className="text-neutral-600 hover:text-primary-600 cursor-pointer"><span className="underline">{product.rating_count}</span> รีวิว</span>
                <span className="text-neutral-500">ขายแล้ว {product.sales_count.toLocaleString()}</span>
              </div>
            </div>

            {/* Price */}
            <div className={`border rounded-2xl p-5 ${hasDiscount ? "bg-gradient-to-br from-red-50 to-orange-50 border-red-200" : "bg-neutral-50 border-neutral-200"}`}>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className={`font-display font-extrabold text-4xl ${hasDiscount ? "text-red-600" : "text-primary-700"}`}>
                  ฿{currentPrice.toLocaleString()}
                </span>
                {hasDiscount && (
                  <>
                    <span className="text-lg text-neutral-500 line-through">฿{originalPrice.toLocaleString()}</span>
                    <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                      ประหยัด ฿{(originalPrice - currentPrice).toLocaleString()}
                    </span>
                  </>
                )}
              </div>
              <p className="text-xs text-neutral-600 mt-2">
                ราคารวม VAT · ผ่อน 0% เริ่มต้น ฿{Math.max(1, Math.round(currentPrice / 10)).toLocaleString()}/เดือน
                {product.is_flash_sale && (
                  <> · Flash Sale เหลือ <span className="font-mono font-bold text-red-600">23:59:42</span></>
                )}
              </p>
            </div>

            {/* Short description */}
            {product.short_description_th && (
              <p className="text-sm text-neutral-700 leading-relaxed">{product.short_description_th}</p>
            )}

            {/* Quantity + stock */}
            <div className="flex items-center gap-4 pt-2 border-t border-neutral-200">
              <span className="text-sm font-semibold">จำนวน</span>
              <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
                <button className="w-10 h-10 grid place-items-center hover:bg-neutral-50"><Minus className="w-4 h-4" /></button>
                <input type="text" defaultValue="1" className="w-12 h-10 text-center text-sm outline-none" />
                <button className="w-10 h-10 grid place-items-center hover:bg-neutral-50"><Plus className="w-4 h-4" /></button>
              </div>
              <span className="text-xs text-neutral-500">
                {product.stock_quantity > 0 ? `มีสินค้า ${product.stock_quantity} ชิ้น` : "สินค้าหมด"}
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <button
                disabled={product.stock_quantity === 0}
                className="flex-1 bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-300 text-white font-semibold py-4 rounded-xl inline-flex items-center justify-center gap-2 transition"
              >
                <ShoppingCart className="w-5 h-5" /> เพิ่มลงตะกร้า
              </button>
              <button
                disabled={product.stock_quantity === 0}
                className="flex-1 bg-red-500 hover:bg-red-600 disabled:bg-neutral-300 text-white font-semibold py-4 rounded-xl inline-flex items-center justify-center gap-2 transition"
              >
                <Zap className="w-5 h-5" /> ซื้อเลย
              </button>
            </div>

            {/* Delivery options */}
            <div className="bg-white border border-neutral-200 rounded-xl p-4 space-y-3">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                <div className="flex-1 text-sm">
                  <div className="font-semibold">ส่งถึงบ้าน</div>
                  <p className="text-xs text-neutral-500">จัดส่งที่ <span className="text-primary-600 underline cursor-pointer">กรุงเทพฯ</span> · ฟรี · ถึงภายใน 2-3 วัน · ช่างมาติดตั้งให้</p>
                </div>
                <button className="text-xs text-primary-600 hover:underline">เปลี่ยน</button>
              </div>
              <div className="flex items-start gap-3 pt-3 border-t border-neutral-100">
                <Store className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                <div className="flex-1 text-sm">
                  <div className="font-semibold">รับที่สาขา</div>
                  <p className="text-xs text-neutral-500">มีสินค้าที่ <b>สาขาลาดพร้าว</b> · รับได้ภายใน 2 ชม.</p>
                </div>
                <a href="#" className="text-xs text-primary-600 hover:underline">ดูสาขาอื่น</a>
              </div>
            </div>
          </div>
        </div>

        {/* Service callout bar */}
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="bg-white border border-neutral-200 rounded-2xl px-5 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {services.map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <s.icon className="w-5 h-5 text-primary-600 shrink-0" />
                <div className="leading-tight">
                  <div className="font-semibold text-xs">{s.label}</div>
                  <div className="text-[11px] text-neutral-500">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs: Description / Specs / Reviews */}
        <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          <div className="bg-white rounded-2xl border border-neutral-200">
            <div className="border-b border-neutral-200 flex overflow-x-auto">
              {["รายละเอียด", "สเปคสินค้า", `รีวิว (${product.rating_count})`, "คำถาม-ตอบ", "รับประกัน"].map((t, i) => (
                <button key={t} className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition ${i===0 ? "border-primary-600 text-primary-700" : "border-transparent text-neutral-600 hover:text-primary-600"}`}>{t}</button>
              ))}
            </div>
            <div className="p-6 space-y-6">
              {/* Description */}
              {product.description_th && (
                <section>
                  <h3 className="font-display font-bold text-lg mb-2">รายละเอียดสินค้า</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed whitespace-pre-line">{product.description_th}</p>
                </section>
              )}

              {/* Features */}
              {product.features.length > 0 && (
                <section>
                  <h3 className="font-display font-bold text-lg mb-3">คุณสมบัติเด่น</h3>
                  <ul className="space-y-2">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                        <Check className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Specs */}
              {product.specs.length > 0 && (
                <section>
                  <h3 className="font-display font-bold text-lg mb-3">สเปคสินค้า</h3>
                  <dl className="divide-y divide-neutral-100 text-sm">
                    {product.specs.map((s, i) => (
                      <div key={i} className="flex py-2.5">
                        <dt className="w-40 text-neutral-500 shrink-0">{s.k}</dt>
                        <dd className="text-neutral-800 font-medium">{s.v}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

              {/* Reviews */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-lg">รีวิว ({product.rating_count})</h3>
                  <button className="text-sm text-primary-600 font-medium hover:underline">เขียนรีวิว</button>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-primary-100/30 rounded-xl p-4 mb-4 flex items-center gap-6">
                  <div className="text-center">
                    <div className="font-display font-bold text-4xl text-primary-700">{product.rating_average.toFixed(1)}</div>
                    <div className="flex justify-center mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating_average) ? "fill-orange-500 text-orange-500" : "text-neutral-300"}`} />
                      ))}
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">{product.rating_count} รีวิว</div>
                  </div>
                  <div className="flex-1 space-y-1">
                    {[5,4,3,2,1].map((star, i) => {
                      const pct = [72, 20, 5, 2, 1][i];
                      return (
                        <div key={star} className="flex items-center gap-2 text-xs">
                          <span className="w-3">{star}</span>
                          <Star className="w-3 h-3 fill-orange-500 text-orange-500" />
                          <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="w-8 text-right text-neutral-500">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-5">
                  {REVIEWS_MOCK.map((r, i) => (
                    <div key={i} className="pb-5 border-b border-neutral-100 last:border-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 grid place-items-center text-xs font-bold">{r.user.charAt(0)}</span>
                          <span className="font-semibold text-sm">{r.user}</span>
                          {r.verified && (
                            <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded flex items-center gap-0.5"><BadgeCheck className="w-3 h-3" /> ซื้อจริง</span>
                          )}
                        </div>
                        <span className="text-xs text-neutral-400">{r.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-1 ml-10">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className={`w-3.5 h-3.5 ${j < r.rating ? "fill-orange-500 text-orange-500" : "text-neutral-300"}`} />
                        ))}
                      </div>
                      <div className="ml-10">
                        <h4 className="font-semibold text-sm mb-1">{r.title}</h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">{r.body}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button className="text-xs text-neutral-500 hover:text-primary-600 flex items-center gap-1">
                            <ThumbsUp className="w-3.5 h-3.5" /> มีประโยชน์ ({r.helpful})
                          </button>
                          <button className="text-xs text-neutral-500 hover:text-primary-600 flex items-center gap-1">
                            <MessageCircle className="w-3.5 h-3.5" /> ตอบกลับ
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button className="px-5 py-2 border border-neutral-200 rounded-lg text-sm hover:border-primary-400 hover:text-primary-600">ดูรีวิวทั้งหมด</button>
                </div>
              </section>
            </div>
          </div>

          {/* Sticky right */}
          <aside className="space-y-4">
            {product.brand && (
              <div className="bg-white rounded-2xl border border-neutral-200 p-5">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-lg bg-primary-50 grid place-items-center font-display font-bold text-primary-600">
                    {product.brand.name.charAt(0)}
                  </span>
                  <div>
                    <div className="font-semibold">{product.brand.name}</div>
                    <div className="text-xs text-neutral-500">Official Store · 4.8 ★</div>
                  </div>
                  <button className="ml-auto px-3 py-1.5 border border-primary-600 text-primary-600 rounded-lg text-xs font-medium hover:bg-primary-50">ดูร้าน</button>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600 shrink-0" />
                <span>รับประกันของแท้ {Math.max(1, Math.round(product.warranty_months / 12))} ปี</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-green-600 shrink-0" />
                <span>คืนสินค้าฟรีภายใน 14 วัน</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-green-600 shrink-0" />
                <span>ติดตั้งฟรีโดยช่าง Homesphere</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600 shrink-0" />
                <span>120+ สาขาทั่วประเทศ</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="max-w-[1440px] mx-auto px-6 py-8">
            <h2 className="font-display font-bold text-2xl mb-5">สินค้าที่คุณอาจสนใจ</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {related.map((r) => {
                const price = r.is_flash_sale && r.flash_sale_price != null ? r.flash_sale_price : r.base_price;
                return (
                  <ProductCard
                    key={r.id}
                    icon={iconForProduct(r.slug)}
                    name={r.title_th}
                    slug={r.slug}
                    price={price}
                    original={r.compare_at_price ?? undefined}
                    rating={r.rating_average}
                    reviews={r.rating_count}
                  />
                );
              })}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
