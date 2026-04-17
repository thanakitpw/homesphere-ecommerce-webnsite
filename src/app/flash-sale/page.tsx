import Image from "next/image";
import Link from "next/link";
import { Zap, Clock, TrendingUp, Flame, ArrowRight, ChevronRight, Wind, Refrigerator, LampCeiling, Bed, Microwave, Armchair, ShowerHead, Lightbulb } from "lucide-react";
import { AnnouncementBar, SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const FLASH_ITEMS = [
  { icon: Wind, image: "/seed/flash-sale/aeris-aircon.png", name: "แอร์ Aeris 12000 BTU Inverter", price: 9990, original: 15900, discount: 37, sold: 78, total: 100 },
  { icon: Refrigerator, name: "ตู้เย็น Stella 7.6Q", price: 8490, original: 12900, discount: 34, sold: 65, total: 80 },
  { icon: LampCeiling, name: "โคมเพดาน Luma LED 24W", price: 1990, original: 3590, discount: 45, sold: 92, total: 150 },
  { icon: Bed, name: "ที่นอน Haven 5 ฟุต", price: 7990, original: 13900, discount: 42, sold: 54, total: 60 },
  { icon: Microwave, name: "ไมโครเวฟ Pomme 23L", price: 3290, original: 4990, discount: 34, sold: 41, total: 100 },
  { icon: Armchair, name: "โซฟา Haven 3 ที่นั่ง", price: 18900, original: 29900, discount: 37, sold: 28, total: 50 },
  { icon: ShowerHead, name: "ฝักบัว Vessel Pro", price: 2290, original: 3490, discount: 34, sold: 89, total: 200 },
  { icon: Lightbulb, name: "หลอดไฟ LED Luma 9W x4", price: 349, original: 490, discount: 29, sold: 312, total: 500 },
];

const UPCOMING = [
  { time: "00:00", label: "รอบเที่ยงคืน", items: 45 },
  { time: "06:00", label: "รอบเช้า", items: 32 },
  { time: "12:00", label: "รอบเที่ยง", items: 58 },
  { time: "18:00", label: "รอบเย็น", items: 41 },
];

export default function FlashSalePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main className="flex-1 w-full bg-neutral-50">
        {/* Hero countdown */}
        <section className="bg-gradient-to-br from-red-500 via-red-600 to-red-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Zap className="absolute top-10 left-10 w-32 h-32" />
            <Flame className="absolute bottom-10 right-10 w-40 h-40" />
          </div>
          <div className="max-w-[1440px] mx-auto px-6 py-12 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
              <Zap className="w-4 h-4" strokeWidth={2.5} /> SHOCKING DEAL
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl leading-none">Flash Sale</h1>
            <p className="text-lg md:text-xl text-white/90 mt-3">ลดสูงสุด <b className="text-3xl">50%</b> · เฉพาะวันนี้เท่านั้น</p>

            {/* Countdown */}
            <div className="mt-8 inline-flex items-center gap-3 bg-black/30 backdrop-blur rounded-2xl p-6">
              <Clock className="w-8 h-8 opacity-80" />
              <span className="text-sm opacity-80">เหลือเวลา</span>
              {[
                { n: "23", l: "ชั่วโมง" },
                { n: "59", l: "นาที" },
                { n: "42", l: "วินาที" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-white text-red-600 rounded-xl px-4 py-3 min-w-[70px]">
                    <div className="font-mono font-extrabold text-3xl">{t.n}</div>
                    <div className="text-[10px] text-neutral-500 font-medium">{t.l}</div>
                  </div>
                  {i < 2 && <span className="font-mono text-2xl opacity-70">:</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current flash sale items */}
        <section className="max-w-[1440px] mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h2 className="font-display font-bold text-2xl flex items-center gap-2">
              <Flame className="w-6 h-6 text-red-500" /> กำลังลดตอนนี้ ({FLASH_ITEMS.length})
            </h2>
            <div className="flex items-center gap-2 text-sm">
              <select className="px-3 py-1.5 border border-neutral-200 rounded-lg outline-none bg-white">
                <option>ทั้งหมด</option>
                <option>เครื่องใช้ไฟฟ้า</option>
                <option>เฟอร์นิเจอร์</option>
                <option>ห้องน้ำ</option>
              </select>
              <select className="px-3 py-1.5 border border-neutral-200 rounded-lg outline-none bg-white">
                <option>ลดมากสุด</option>
                <option>ใกล้หมด</option>
                <option>ราคาต่ำ-สูง</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {FLASH_ITEMS.map((item, i) => <FlashCard key={i} {...item} />)}
          </div>
        </section>

        {/* Upcoming rounds */}
        <section className="max-w-[1440px] mx-auto px-6 py-10">
          <h2 className="font-display font-bold text-2xl mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary-600" /> รอบถัดไป
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {UPCOMING.map((u, i) => (
              <div key={i} className="bg-white rounded-2xl border border-neutral-200 p-5 hover:border-primary-300 transition">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono font-extrabold text-3xl text-primary-700">{u.time}</span>
                  <Clock className="w-5 h-5 text-neutral-400" />
                </div>
                <div className="font-semibold">{u.label}</div>
                <div className="text-sm text-neutral-500 mt-0.5">{u.items} รายการ</div>
                <button className="mt-3 w-full text-sm border border-primary-200 text-primary-700 bg-primary-50 hover:bg-primary-100 py-2 rounded-lg font-medium">
                  แจ้งเตือนฉัน
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Rules */}
        <section className="max-w-[1440px] mx-auto px-6 py-10">
          <div className="bg-white rounded-2xl border border-neutral-200 p-6">
            <h3 className="font-display font-bold text-lg mb-3">เงื่อนไข Flash Sale</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>⚡ สินค้าลดราคาในจำนวนจำกัด · ขายหมดก่อนหมดเวลา</li>
              <li>⚡ จองสินค้าในตะกร้า 10 นาที · หมดเวลาจะปล่อยคืนสต็อก</li>
              <li>⚡ 1 order / user ต่อรอบ flash sale</li>
              <li>⚡ ราคาพิเศษนี้ไม่สามารถใช้ร่วมกับโค้ดส่วนลดอื่น</li>
              <li>⚡ สมาชิก Gold+ ได้สิทธิ์ซื้อก่อน 30 นาที</li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function FlashCard({ icon: Icon, image, name, price, original, discount, sold, total }: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  image?: string; name: string; price: number; original: number; discount: number; sold: number; total: number;
}) {
  const soldPct = Math.round((sold / total) * 100);
  return (
    <Link href="/product/aeris-aircon-12000btu" className="block bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition group">
      <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 relative grid place-items-center">
        {image ? (
          <Image src={image} alt={name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
        ) : (
          <Icon className="w-16 h-16 text-neutral-400" strokeWidth={1.5} />
        )}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-extrabold px-2.5 py-1 rounded z-10">-{discount}%</span>
        {soldPct >= 80 && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10 animate-pulse">ใกล้หมด</span>
        )}
      </div>
      <div className="p-3">
        <p className="text-sm text-neutral-700 line-clamp-2 h-10 mb-2 group-hover:text-red-600">{name}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-red-600 font-extrabold text-xl">฿{price.toLocaleString()}</span>
          <span className="text-xs text-neutral-400 line-through">฿{original.toLocaleString()}</span>
        </div>
        <div className="mt-3">
          <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 to-orange-500" style={{ width: `${soldPct}%` }} />
          </div>
          <div className="flex items-center justify-between mt-1 text-[10px]">
            <span className="text-neutral-500">ขายแล้ว {sold}/{total}</span>
            <span className="text-red-600 font-bold">{soldPct}%</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const _unused = [ArrowRight, ChevronRight];
