import Image from "next/image";
import {
  ChevronRight, Heart, Share2, Star, Truck, Wrench, Store, CreditCard,
  BadgeCheck, Shield, RefreshCcw, Check, Minus, Plus, ShoppingCart, Zap,
  MapPin, Package, MessageCircle, ThumbsUp, Wind,
} from "lucide-react";
import { AnnouncementBar, SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductCard } from "@/components/product-card";
import { Armchair, Refrigerator, LampCeiling, Bed, Microwave } from "lucide-react";

/* ============================================================
   PRODUCT DETAIL (PDP) — /product/[slug]
============================================================ */

const PRODUCT = {
  slug: "aeris-aircon-12000btu",
  title: "แอร์ Aeris 12000 BTU Inverter รุ่น AR-I12",
  titleEn: "Aeris Inverter Air Conditioner 12000 BTU",
  brand: "Aeris",
  category: { slug: "appliances", label: "เครื่องใช้ไฟฟ้า" },
  sub: { slug: "air-conditioner", label: "เครื่องปรับอากาศ" },
  sku: "HS-APP-AER-001",
  price: 9990,
  original: 15900,
  discount: 37,
  rating: 4.6,
  reviews: 289,
  sold: 1247,
  stock: 23,
  images: [
    "/seed/flash-sale/aeris-aircon.png",
    "/seed/flash-sale/aeris-aircon.png",
    "/seed/flash-sale/aeris-aircon.png",
    "/seed/flash-sale/aeris-aircon.png",
    "/seed/flash-sale/aeris-aircon.png",
  ],
  variants: {
    btu: [
      { label: "9,000 BTU", value: "9000", price: 8490, available: true },
      { label: "12,000 BTU", value: "12000", price: 9990, available: true, selected: true },
      { label: "18,000 BTU", value: "18000", price: 14900, available: true },
      { label: "24,000 BTU", value: "24000", price: 18900, available: false },
    ],
    color: [
      { label: "ขาว", value: "white", selected: true },
      { label: "เทา", value: "gray" },
    ],
  },
  services: [
    { icon: Truck, label: "ส่งฟรีกรุงเทพ", sub: "ภายใน 2-3 วัน" },
    { icon: Wrench, label: "ฟรีติดตั้ง", sub: "ช่างประจำสาขา" },
    { icon: CreditCard, label: "ผ่อน 0%", sub: "นาน 10 เดือน" },
    { icon: Shield, label: "ประกันศูนย์", sub: "1 ปีเต็ม" },
    { icon: RefreshCcw, label: "คืนสินค้า", sub: "ภายใน 14 วัน" },
    { icon: Store, label: "รับที่สาขา", sub: "120+ สาขาทั่วไทย" },
  ],
  specs: [
    { k: "แบรนด์", v: "Aeris" },
    { k: "รุ่น", v: "AR-I12" },
    { k: "ระบบ", v: "Inverter R32" },
    { k: "ขนาด BTU", v: "12,000 BTU" },
    { k: "พื้นที่แนะนำ", v: "14-20 ตร.ม." },
    { k: "ค่าประสิทธิภาพ SEER", v: "18.5" },
    { k: "ระดับเสียง", v: "20 dB" },
    { k: "ตัวกรอง", v: "PM 2.5 + Ionizer" },
    { k: "ประกัน", v: "เครื่อง 1 ปี · คอมเพรสเซอร์ 5 ปี" },
    { k: "น้ำหนัก", v: "9.5 kg (ตัวใน) + 32 kg (ตัวนอก)" },
  ],
  features: [
    "ประหยัดไฟเบอร์ 5 · ค่าไฟถูกกว่าเดิมสูงสุด 40%",
    "ฟิลเตอร์ PM 2.5 กรองฝุ่นละออง",
    "ระบบทำความเย็นเร็ว Cool Turbo ภายใน 30 วินาที",
    "เสียงเบา 20 dB เหมาะกับห้องนอน",
    "รองรับ Smart Home — สั่งผ่าน LINE / แอป",
  ],
  description:
    "แอร์ Aeris 12000 BTU ระบบ Inverter R32 ประหยัดไฟและเป็นมิตรกับสิ่งแวดล้อม มาพร้อมฟิลเตอร์ PM 2.5 กรองฝุ่นละออง และระบบทำความเย็นเร็ว Cool Turbo ที่เย็นทันใจภายใน 30 วินาที เหมาะสำหรับห้องขนาด 14-20 ตร.ม. เช่น ห้องนอน ห้องทำงาน หรือห้องรับแขกขนาดกะทัดรัด",
};

const REVIEWS = [
  { user: "สมหมาย ใจดี", date: "2026-04-10", rating: 5, title: "เย็นไว เงียบมาก", body: "ใช้ได้ 2 สัปดาห์แล้ว เย็นเร็วจริง ๆ เงียบด้วย ค่าไฟก็ลดลงจริงตามโฆษณา คุ้มค่ามาก", helpful: 42, verified: true },
  { user: "ณัฐวุฒิ ช่างฝัน", date: "2026-04-08", rating: 5, title: "ติดตั้งดี บริการหลังการขาย OK", body: "ช่างของ Homesphere มาติดตั้งตรงเวลา ให้คำแนะนำดี ทดสอบให้เสร็จสรรพ ประทับใจ", helpful: 28, verified: true },
  { user: "ปวีณา สุขใจ", date: "2026-04-03", rating: 4, title: "ดีแต่ตัวนอกใหญ่ไปนิด", body: "เย็นไวและประหยัดไฟจริง แต่ตัวนอกขนาดใหญ่กว่าที่คิด ต้องวางระเบียงใหญ่ ๆ หน่อย", helpful: 14, verified: true },
];

const RELATED = [
  { icon: Wind, name: "พัดลมตั้งพื้น Aeris 16''", price: 1990, rating: 4.6, reviews: 89 },
  { icon: Refrigerator, name: "ตู้เย็น Stella 7.6Q", price: 8490, original: 12900, rating: 4.5, reviews: 76, badge: "-34%" },
  { icon: LampCeiling, name: "โคมเพดาน Luma 24W", price: 1990, rating: 4.7, reviews: 154 },
  { icon: Bed, name: "ที่นอน Haven 6 ฟุต", price: 14900, rating: 4.9, reviews: 201 },
  { icon: Microwave, name: "เครื่องกรองอากาศ Aeris", price: 6990, rating: 4.8, reviews: 63 },
];

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  await params;
  const p = PRODUCT;

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
            <a href={`/category/${p.category.slug}`} className="hover:text-primary-600">{p.category.label}</a>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <a href="#" className="hover:text-primary-600">{p.sub.label}</a>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-900 line-clamp-1">{p.title}</span>
          </div>
        </div>

        {/* Main product block */}
        <div className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-8">
          {/* Gallery */}
          <div>
            <div className="aspect-square bg-white rounded-2xl border border-neutral-200 overflow-hidden relative">
              <Image src={p.images[0]} alt={p.title} fill sizes="(max-width: 1024px) 100vw, 920px" className="object-cover" priority />
              <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-lg z-10">-{p.discount}%</span>
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <button className="w-10 h-10 rounded-full bg-white shadow grid place-items-center hover:bg-red-50 hover:text-red-500"><Heart className="w-5 h-5" /></button>
                <button className="w-10 h-10 rounded-full bg-white shadow grid place-items-center hover:bg-primary-50 hover:text-primary-600"><Share2 className="w-5 h-5" /></button>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {p.images.map((src, i) => (
                <button key={i} className={`aspect-square rounded-lg overflow-hidden relative border-2 ${i===0 ? "border-primary-600" : "border-neutral-200 hover:border-primary-300"}`}>
                  <Image src={src} alt="" fill sizes="120px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div className="space-y-5">
            {/* Title + brand + rating */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <a href="#" className="text-primary-600 text-sm font-semibold hover:underline">{p.brand}</a>
                <span className="text-neutral-300">·</span>
                <span className="text-xs text-neutral-500">SKU: {p.sku}</span>
              </div>
              <h1 className="font-display font-bold text-2xl text-neutral-900 leading-tight">{p.title}</h1>
              <p className="text-sm text-neutral-500 mt-1">{p.titleEn}</p>
              <div className="flex items-center gap-4 mt-3 text-sm">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(p.rating) ? "fill-orange-500 text-orange-500" : "text-neutral-300"}`} />
                  ))}
                  <span className="ml-1 font-semibold">{p.rating}</span>
                </div>
                <span className="text-neutral-600 hover:text-primary-600 cursor-pointer"><span className="underline">{p.reviews}</span> รีวิว</span>
                <span className="text-neutral-500">ขายแล้ว {p.sold.toLocaleString()}</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-5">
              <div className="flex items-baseline gap-3">
                <span className="text-red-600 font-display font-extrabold text-4xl">฿{p.price.toLocaleString()}</span>
                <span className="text-lg text-neutral-500 line-through">฿{p.original.toLocaleString()}</span>
                <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">ประหยัด ฿{(p.original - p.price).toLocaleString()}</span>
              </div>
              <p className="text-xs text-neutral-600 mt-2">ราคารวม VAT · ผ่อน 0% เริ่มต้น ฿999/เดือน · Flash Sale เหลือ <span className="font-mono font-bold text-red-600">23:59:42</span></p>
            </div>

            {/* Variant — BTU */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold">ขนาด BTU: <span className="text-primary-700">12,000 BTU</span></span>
                <button className="text-xs text-primary-600 hover:underline">คู่มือเลือกขนาด</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {p.variants.btu.map((v) => (
                  <button key={v.value} disabled={!v.available} className={`border rounded-lg px-3 py-2 text-sm text-left transition ${
                    v.selected ? "border-primary-600 bg-primary-50 text-primary-700 font-semibold" :
                    v.available ? "border-neutral-200 hover:border-primary-400" :
                    "border-neutral-200 text-neutral-300 cursor-not-allowed line-through"}`}>
                    <div>{v.label}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">฿{v.price.toLocaleString()}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Variant — Color */}
            <div>
              <span className="text-sm font-semibold block mb-2">สี: <span className="text-primary-700">ขาว</span></span>
              <div className="flex gap-2">
                {p.variants.color.map((c) => (
                  <button key={c.value} className={`border rounded-lg px-4 py-2 text-sm transition ${
                    c.selected ? "border-primary-600 bg-primary-50 text-primary-700 font-semibold" : "border-neutral-200 hover:border-primary-400"}`}>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + stock */}
            <div className="flex items-center gap-4 pt-2 border-t border-neutral-200">
              <span className="text-sm font-semibold">จำนวน</span>
              <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
                <button className="w-10 h-10 grid place-items-center hover:bg-neutral-50"><Minus className="w-4 h-4" /></button>
                <input type="text" defaultValue="1" className="w-12 h-10 text-center text-sm outline-none" />
                <button className="w-10 h-10 grid place-items-center hover:bg-neutral-50"><Plus className="w-4 h-4" /></button>
              </div>
              <span className="text-xs text-neutral-500">มีสินค้า {p.stock} ชิ้น</span>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-xl inline-flex items-center justify-center gap-2 transition">
                <ShoppingCart className="w-5 h-5" /> เพิ่มลงตะกร้า
              </button>
              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-xl inline-flex items-center justify-center gap-2 transition">
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
            {p.services.map((s, i) => (
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
          {/* Left: tabs content */}
          <div className="bg-white rounded-2xl border border-neutral-200">
            <div className="border-b border-neutral-200 flex overflow-x-auto">
              {["รายละเอียด", "สเปคสินค้า", `รีวิว (${p.reviews})`, "คำถาม-ตอบ", "รับประกัน"].map((t, i) => (
                <button key={t} className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition ${i===0 ? "border-primary-600 text-primary-700" : "border-transparent text-neutral-600 hover:text-primary-600"}`}>{t}</button>
              ))}
            </div>
            <div className="p-6 space-y-6">
              {/* Description */}
              <section>
                <h3 className="font-display font-bold text-lg mb-2">รายละเอียดสินค้า</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">{p.description}</p>
              </section>

              {/* Features */}
              <section>
                <h3 className="font-display font-bold text-lg mb-3">คุณสมบัติเด่น</h3>
                <ul className="space-y-2">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                      <Check className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Specs */}
              <section>
                <h3 className="font-display font-bold text-lg mb-3">สเปคสินค้า</h3>
                <dl className="divide-y divide-neutral-100 text-sm">
                  {p.specs.map((s, i) => (
                    <div key={i} className="flex py-2.5">
                      <dt className="w-40 text-neutral-500 shrink-0">{s.k}</dt>
                      <dd className="text-neutral-800 font-medium">{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Reviews */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-lg">รีวิว ({p.reviews})</h3>
                  <button className="text-sm text-primary-600 font-medium hover:underline">เขียนรีวิว</button>
                </div>
                {/* Rating summary */}
                <div className="bg-gradient-to-br from-primary-50 to-primary-100/30 rounded-xl p-4 mb-4 flex items-center gap-6">
                  <div className="text-center">
                    <div className="font-display font-bold text-4xl text-primary-700">{p.rating}</div>
                    <div className="flex justify-center mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.round(p.rating) ? "fill-orange-500 text-orange-500" : "text-neutral-300"}`} />
                      ))}
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">{p.reviews} รีวิว</div>
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
                {/* Review list */}
                <div className="space-y-5">
                  {REVIEWS.map((r, i) => (
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
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < r.rating ? "fill-orange-500 text-orange-500" : "text-neutral-300"}`} />
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

          {/* Sticky right: store info + trust signals */}
          <aside className="space-y-4">
            <div className="bg-white rounded-2xl border border-neutral-200 p-5">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-lg bg-primary-50 grid place-items-center font-display font-bold text-primary-600">A</span>
                <div>
                  <div className="font-semibold">{p.brand}</div>
                  <div className="text-xs text-neutral-500">Official Store · 4.8 ★</div>
                </div>
                <button className="ml-auto px-3 py-1.5 border border-primary-600 text-primary-600 rounded-lg text-xs font-medium hover:bg-primary-50">ดูร้าน</button>
              </div>
              <div className="grid grid-cols-3 mt-4 pt-4 border-t border-neutral-100 text-center text-xs">
                <div>
                  <div className="font-bold text-primary-700">156</div>
                  <div className="text-neutral-500">สินค้า</div>
                </div>
                <div>
                  <div className="font-bold text-primary-700">4.8</div>
                  <div className="text-neutral-500">คะแนน</div>
                </div>
                <div>
                  <div className="font-bold text-primary-700">98%</div>
                  <div className="text-neutral-500">ตอบไว</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600 shrink-0" />
                <span>รับประกันของแท้ 100%</span>
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
        <section className="max-w-[1440px] mx-auto px-6 py-8">
          <h2 className="font-display font-bold text-2xl mb-5">สินค้าที่คุณอาจสนใจ</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {RELATED.map((r, i) => <ProductCard key={i} {...r} />)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
