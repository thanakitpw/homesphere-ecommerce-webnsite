import Image from "next/image";
import {
  ChevronLeft, ChevronRight,
  Wrench, Truck, Store, CreditCard, BadgeCheck, ArrowRight,
  Refrigerator, UtensilsCrossed, Bath, Sofa, LampCeiling, Trees,
  Hammer, HousePlug, Bed, Utensils, Briefcase,
  Sparkles, CircleDashed, Snowflake, Warehouse, Landmark, Gem,
  Wind, Lightbulb, ShowerHead, Zap, Gift, RefreshCcw, Star,
  Camera, Library, Microwave, Droplet, Armchair, QrCode,
} from "lucide-react";
import { AnnouncementBar, SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductCard } from "@/components/product-card";
import { IconApple, IconGooglePlay } from "@/components/icons/brand";

/* ============================================================
   HOMESPHERE — Home Page (14 sections)
============================================================ */

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main className="flex-1 w-full bg-white">
        <HeroCarousel />
        <ServiceCalloutBar />
        <FlashSale />
        <CircularCategories />
        <TrendingProducts />
        <ShopByRoom />
        <ShopByStyle />
        <PromoStrip />
        <NewArrivals />
        <BrandGrid />
        <AppBanner />
      </main>
      <SiteFooter />
    </>
  );
}

/* ─────────────── Hero Carousel ─────────────── */
function HeroCarousel() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
          <div className="absolute inset-0 flex flex-col justify-center p-10 lg:p-14">
            <span className="text-orange-400 font-semibold text-sm mb-3 tracking-wider">MID-MONTH SALE</span>
            <h2 className="font-display font-extrabold text-4xl lg:text-6xl leading-tight mb-4">ลดกลางเดือน<br />สูงสุด 50%</h2>
            <p className="text-white/80 max-w-md mb-6 text-sm lg:text-base">
              เครื่องใช้ไฟฟ้า เฟอร์นิเจอร์ ห้องน้ำ ส่งฟรีถึงบ้าน ผ่อน 0% นานสูงสุด 10 เดือน
            </p>
            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg w-fit transition">
              ช้อปเลย <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-1.5">
            {[0,1,2].map((i) => (
              <span key={i} className={`h-1.5 rounded-full transition-all ${i===0 ? "w-8 bg-white" : "w-4 bg-white/40"}`} />
            ))}
          </div>
          <button className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 grid place-items-center backdrop-blur"><ChevronLeft className="w-5 h-5" /></button>
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 grid place-items-center backdrop-blur"><ChevronRight className="w-5 h-5" /></button>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 flex flex-col justify-center">
            <Wrench className="w-8 h-8 mb-3 opacity-90" />
            <h3 className="font-display font-bold text-xl lg:text-2xl mb-1">ฟรีติดตั้ง</h3>
            <p className="text-sm opacity-90 mb-3">ทุกเครื่องใช้ไฟฟ้า + ประกัน 1 ปี</p>
            <a href="#" className="text-sm font-semibold inline-flex items-center gap-1">รายละเอียด <ArrowRight className="w-4 h-4" /></a>
          </div>
          <div className="relative rounded-2xl bg-gradient-to-br from-primary-800 to-primary-950 text-white p-6 flex flex-col justify-center">
            <BadgeCheck className="w-8 h-8 mb-3 text-orange-400" />
            <h3 className="font-display font-bold text-xl lg:text-2xl mb-1">Homesphere Card</h3>
            <p className="text-sm opacity-80 mb-3">สมัครฟรี รับส่วนลดทันที 500฿</p>
            <a href="#" className="text-sm font-semibold inline-flex items-center gap-1 text-orange-400">สมัครเลย <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Service callout bar ─────────────── */
function ServiceCalloutBar() {
  const services = [
    { icon: Wrench, label: "ฟรีติดตั้ง", sub: "ทุกเครื่องใช้ไฟฟ้า" },
    { icon: Truck, label: "ส่งถึงบ้าน", sub: "ฟรีในกรุงเทพ" },
    { icon: Store, label: "รับที่สาขา", sub: "120+ สาขาทั่วไทย" },
    { icon: CreditCard, label: "ผ่อน 0%", sub: "นานสูงสุด 10 เดือน" },
    { icon: BadgeCheck, label: "Homesphere Card", sub: "สมัครฟรี + ลด 500฿" },
  ];
  return (
    <section className="max-w-[1440px] mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 py-6 border-y border-neutral-200">
        {services.map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-2">
            <span className="w-11 h-11 rounded-full bg-primary-50 text-primary-600 grid place-items-center shrink-0">
              <s.icon className="w-5 h-5" strokeWidth={2} />
            </span>
            <div className="leading-tight">
              <div className="font-semibold text-sm">{s.label}</div>
              <div className="text-xs text-neutral-500">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── Flash Sale ─────────────── */
function FlashSale() {
  const items = [
    { icon: Wind, image: "/seed/flash-sale/aeris-aircon.png", name: "แอร์ Aeris 12000 BTU", price: 9990, original: 15900, discount: 37, sold: 78 },
    { icon: Refrigerator, name: "ตู้เย็น Stella 7.6Q", price: 8490, original: 12900, discount: 34, sold: 65 },
    { icon: LampCeiling, name: "โคมเพดาน Luma LED", price: 1990, original: 3590, discount: 45, sold: 92 },
    { icon: Bed, name: "ที่นอน Haven 5 ฟุต", price: 7990, original: 13900, discount: 42, sold: 54 },
    { icon: Microwave, name: "ไมโครเวฟ Pomme 23L", price: 3290, original: 4990, discount: 34, sold: 41 },
  ];
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-10">
      <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 bg-white text-red-600 px-3 py-1 rounded-lg font-bold text-sm">
              <Zap className="w-4 h-4" strokeWidth={2.5} /> SHOCKING DEAL
            </span>
            <h2 className="font-display font-bold text-2xl">Flash Sale</h2>
            <span className="text-white/90 text-sm hidden md:inline">เหลือเวลา</span>
            <div className="flex items-center gap-1 font-mono">
              {["23","59","42"].map((t, i) => (
                <span key={i} className="inline-flex items-center">
                  <span className="bg-neutral-900 px-2 py-1 rounded text-sm font-bold min-w-[30px] text-center">{t}</span>
                  {i < 2 && <span className="px-1">:</span>}
                </span>
              ))}
            </div>
          </div>
          <a href="/flash-sale" className="text-sm font-semibold hover:underline hidden md:inline-flex items-center gap-1">ดีลทั้งหมด <ArrowRight className="w-4 h-4" /></a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {items.map((item, i) => <FlashCard key={i} {...item} />)}
        </div>
      </div>
    </section>
  );
}

function FlashCard({ icon: Icon, image, name, price, original, discount, sold }: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  image?: string; name: string; price: number; original: number; discount: number; sold: number;
}) {
  return (
    <a href="/product/aeris-aircon-12000btu" className="block bg-white text-neutral-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition group">
      <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 relative grid place-items-center">
        {image ? (
          <Image src={image} alt={name} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
        ) : (
          <Icon className="w-16 h-16 text-neutral-400" strokeWidth={1.5} />
        )}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">-{discount}%</span>
      </div>
      <div className="p-3">
        <p className="text-xs text-neutral-600 line-clamp-2 h-8 mb-2 group-hover:text-red-600">{name}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-red-500 font-bold text-lg">฿{price.toLocaleString()}</span>
          <span className="text-xs text-neutral-400 line-through">฿{original.toLocaleString()}</span>
        </div>
        <div className="mt-2">
          <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-red-500" style={{ width: `${sold}%` }} />
          </div>
          <p className="text-[10px] text-neutral-500 mt-1">ขายแล้ว {sold} ชิ้น</p>
        </div>
      </div>
    </a>
  );
}

/* ─────────────── Circular Categories ─────────────── */
function CircularCategories() {
  const cats = [
    { icon: Refrigerator, label: "เครื่องใช้ไฟฟ้า", slug: "appliances" },
    { icon: UtensilsCrossed, label: "ห้องครัว", slug: "kitchen" },
    { icon: Bath, label: "ห้องน้ำ", slug: "bathroom" },
    { icon: Sofa, label: "เฟอร์นิเจอร์", slug: "furniture" },
    { icon: LampCeiling, label: "ไฟและโคมไฟ", slug: "lighting" },
    { icon: Trees, label: "แต่งสวน", slug: "garden" },
    { icon: Hammer, label: "เครื่องมือช่าง", slug: "tools" },
    { icon: HousePlug, label: "สมาร์ทโฮม", slug: "smart-home" },
  ];
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-10">
      <h2 className="font-display font-bold text-2xl mb-6">เลือกหมวดสินค้า</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {cats.map((c, i) => (
          <a key={i} href={`/category/${c.slug}`} className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-24 rounded-full bg-primary-50 grid place-items-center group-hover:bg-primary-100 group-hover:scale-105 transition">
              <c.icon className="w-10 h-10 text-primary-600" strokeWidth={1.8} />
            </div>
            <span className="text-xs text-center text-neutral-700 group-hover:text-primary-600 font-medium">{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── Trending ─────────────── */
function TrendingProducts() {
  const items = [
    { icon: Armchair, name: "โซฟา Haven 3 ที่นั่ง", price: 24900, rating: 4.8, reviews: 128 },
    { icon: Wind, name: "พัดลมตั้งพื้น Aeris 16''", price: 1990, rating: 4.6, reviews: 89 },
    { icon: ShowerHead, name: "ก๊อกฝักบัว Vessel Premium", price: 3490, rating: 4.9, reviews: 201 },
    { icon: Lightbulb, name: "หลอดไฟ LED Luma 9W x4", price: 490, rating: 4.5, reviews: 312 },
    { icon: UtensilsCrossed, name: "ชุดเครื่องครัว Kisho 5 ชิ้น", price: 2890, rating: 4.7, reviews: 154 },
  ];
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display font-bold text-2xl">สินค้ามาแรง</h2>
        <div className="flex items-center gap-2">
          {["ทั้งหมด","ยอดนิยม","มาใหม่","ลดราคา"].map((t, i) => (
            <button key={i} className={`px-3 py-1.5 rounded-full text-sm ${i===0 ? "bg-primary-600 text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`}>{t}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>
    </section>
  );
}

/* ─────────────── Shop by Room ─────────────── */
function ShopByRoom() {
  const rooms = [
    { icon: Bed, label: "ห้องนอน", from: "from-primary-500", to: "to-primary-700" },
    { icon: Utensils, label: "ห้องครัว", from: "from-orange-500", to: "to-orange-700" },
    { icon: Bath, label: "ห้องน้ำ", from: "from-primary-400", to: "to-primary-600" },
    { icon: Sofa, label: "ห้องนั่งเล่น", from: "from-neutral-700", to: "to-neutral-900" },
    { icon: Trees, label: "สวน", from: "from-green-500", to: "to-green-700" },
    { icon: Briefcase, label: "Office", from: "from-primary-700", to: "to-primary-900" },
  ];
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-10">
      <h2 className="font-display font-bold text-2xl mb-2">ช้อปตามห้อง</h2>
      <p className="text-neutral-500 text-sm mb-6">เลือกซื้อตามการใช้งานแต่ละห้อง</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {rooms.map((r, i) => (
          <a key={i} href="#" className={`relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br ${r.from} ${r.to} text-white group`}>
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <r.icon className="w-8 h-8 opacity-90" />
              <div>
                <div className="font-display font-bold text-lg mb-1">{r.label}</div>
                <span className="text-xs inline-flex items-center gap-1 opacity-90 group-hover:opacity-100">ช้อปเลย <ArrowRight className="w-3 h-3" /></span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── Shop by Style ─────────────── */
function ShopByStyle() {
  const styles = [
    { icon: Sparkles, label: "Modern", sub: "สะอาดตา", from: "from-neutral-800", to: "to-neutral-950", dark: false },
    { icon: CircleDashed, label: "Minimal", sub: "เรียบง่าย", from: "from-neutral-100", to: "to-neutral-300", dark: true },
    { icon: Snowflake, label: "Scandinavian", sub: "อบอุ่น สบาย", from: "from-primary-100", to: "to-primary-300", dark: true },
    { icon: Warehouse, label: "Loft", sub: "ดิบ เท่", from: "from-neutral-600", to: "to-neutral-800", dark: false },
    { icon: Landmark, label: "Thai Contemporary", sub: "ร่วมสมัย", from: "from-orange-500", to: "to-orange-700", dark: false },
    { icon: Gem, label: "Luxury", sub: "หรูหรา", from: "from-primary-900", to: "to-primary-950", dark: false },
  ];
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-10">
      <h2 className="font-display font-bold text-2xl mb-2">ช้อปตามสไตล์</h2>
      <p className="text-neutral-500 text-sm mb-6">แต่งบ้านในสไตล์ที่ใช่</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {styles.map((s, i) => (
          <a key={i} href="#" className={`relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br ${s.from} ${s.to} ${s.dark ? "text-neutral-900" : "text-white"} group`}>
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <s.icon className="w-8 h-8 opacity-90" />
              <div>
                <div className="font-display font-bold text-lg">{s.label}</div>
                <div className="text-xs opacity-80 mb-1.5">{s.sub}</div>
                <span className="text-xs inline-flex items-center gap-1 opacity-90">สำรวจ <ArrowRight className="w-3 h-3" /></span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── Promo Strip ─────────────── */
function PromoStrip() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-6 flex items-center gap-5">
          <CreditCard className="w-12 h-12 text-orange-400 shrink-0" strokeWidth={1.5} />
          <div className="flex-1">
            <h3 className="font-display font-bold text-xl">ผ่อน 0% นาน 10 เดือน</h3>
            <p className="text-sm text-white/80">กับบัตรเครดิตที่ร่วมรายการ ไม่มีค่าธรรมเนียม</p>
          </div>
          <ArrowRight className="w-5 h-5" />
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-6 flex items-center gap-5">
          <Gift className="w-12 h-12 shrink-0" strokeWidth={1.5} />
          <div className="flex-1">
            <h3 className="font-display font-bold text-xl">สมาชิกใหม่รับ 500฿</h3>
            <p className="text-sm text-white/90">สมัคร Homesphere Card ฟรี รับทันที</p>
          </div>
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
      <div className="bg-primary-50 border border-primary-100 rounded-xl py-3 px-4 overflow-hidden">
        <div className="flex items-center gap-8 text-primary-700 text-sm whitespace-nowrap">
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4" /> ส่งฟรีกรุงเทพ</span>
          <span className="flex items-center gap-1.5"><Wrench className="w-4 h-4" /> ฟรีติดตั้ง</span>
          <span className="flex items-center gap-1.5"><CreditCard className="w-4 h-4" /> ผ่อน 0%</span>
          <span className="flex items-center gap-1.5"><Star className="w-4 h-4" /> รีวิว 4.8/5</span>
          <span className="flex items-center gap-1.5"><RefreshCcw className="w-4 h-4" /> คืนสินค้า 14 วัน</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── New Arrivals ─────────────── */
function NewArrivals() {
  const items = [
    { icon: Camera, name: "กล้องวงจรปิด Nimbus 4K", price: 2990, rating: 4.7, reviews: 76, badge: "NEW" },
    { icon: Library, name: "ชั้นวางหนังสือ Arbor 5 ชั้น", price: 4590, rating: 4.6, reviews: 54, badge: "NEW" },
    { icon: Microwave, name: "หม้อทอด Pomme 6Q", price: 2490, rating: 4.8, reviews: 92, badge: "NEW" },
    { icon: Droplet, name: "เครื่องกรองน้ำ Aeris RO", price: 8990, rating: 4.9, reviews: 31, badge: "NEW" },
    { icon: Armchair, name: "เก้าอี้ทำงาน Haven Ergo", price: 5490, rating: 4.7, reviews: 48, badge: "NEW" },
  ];
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display font-bold text-2xl">สินค้ามาใหม่</h2>
        <a href="#" className="text-sm text-primary-600 font-medium flex items-center gap-1">ดูทั้งหมด <ArrowRight className="w-4 h-4" /></a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>
    </section>
  );
}

/* ─────────────── Brand Grid ─────────────── */
function BrandGrid() {
  const brands = ["Haven","Arbor","Kisho","Luma","Aeris","Nimbus","Vessel","Pomme"];
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-10">
      <h2 className="font-display font-bold text-2xl mb-6">แบรนด์ยอดนิยม</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {brands.map((b, i) => (
          <a key={i} href="#" className="aspect-video rounded-lg border border-neutral-200 grid place-items-center font-display font-bold text-lg text-neutral-400 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition">{b}</a>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── App Download ─────────────── */
function AppBanner() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-10">
      <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 rounded-3xl p-10 text-white grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 items-center">
        <div>
          <span className="text-orange-400 font-semibold text-sm mb-2 inline-block tracking-wider">HOMESPHERE APP</span>
          <h2 className="font-display font-extrabold text-3xl lg:text-4xl mb-3 leading-tight">ดาวน์โหลดแอป<br />ช้อปง่ายกว่าทุกที่</h2>
          <p className="text-white/80 mb-6 text-sm lg:text-base max-w-md">ติดตามคำสั่งซื้อ รับโปรพิเศษก่อนใคร + รับ Homesphere Points ทุกการซื้อ</p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-3 bg-black text-white px-4 py-2.5 rounded-lg">
              <IconApple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-[10px]">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 bg-black text-white px-4 py-2.5 rounded-lg">
              <IconGooglePlay className="w-6 h-6" />
              <div className="text-left">
                <div className="text-[10px]">GET IT ON</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
            <div className="hidden md:flex items-center gap-3 px-4 py-2.5 bg-white/10 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-md grid place-items-center">
                <QrCode className="w-12 h-12 text-primary-800" strokeWidth={1.5} />
              </div>
              <div className="text-xs text-white/80">Scan<br />to download</div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="relative w-48 aspect-[9/19] rounded-[2rem] bg-neutral-900 border-8 border-neutral-900 overflow-hidden shadow-2xl">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
            <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 grid place-items-center">
              <HousePlug className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
