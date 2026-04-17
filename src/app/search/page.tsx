import { Search, X, Filter, ArrowUpDown, Grid3x3, List, TrendingUp, Clock } from "lucide-react";
import { Wind, Armchair, Bed, Refrigerator, ShowerHead, Lightbulb } from "lucide-react";
import { AnnouncementBar, SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductCard } from "@/components/product-card";

const RESULTS = [
  { icon: Wind, image: "/seed/flash-sale/aeris-aircon.png", name: "แอร์ Aeris 12000 BTU Inverter", price: 9990, original: 15900, rating: 4.6, reviews: 289, badge: "-37%" },
  { icon: Wind, name: "แอร์ติดผนัง Aeris 18000 BTU", price: 14900, rating: 4.7, reviews: 154 },
  { icon: Wind, name: "พัดลมตั้งพื้น Aeris 16''", price: 1990, rating: 4.6, reviews: 89 },
  { icon: Wind, name: "พัดลมแอร์คูลเลอร์ Aeris 8L", price: 3490, rating: 4.5, reviews: 67 },
  { icon: Armchair, name: "โซฟา Haven 3 ที่นั่ง", price: 24900, rating: 4.8, reviews: 128 },
  { icon: Refrigerator, name: "ตู้เย็น Stella 7.6Q", price: 8490, original: 12900, rating: 4.5, reviews: 76, badge: "-34%" },
  { icon: Bed, name: "ที่นอน Haven 6 ฟุต", price: 14900, rating: 4.9, reviews: 201 },
  { icon: ShowerHead, name: "ฝักบัว Vessel Pro", price: 3490, rating: 4.9, reviews: 201 },
];

const TRENDING_SEARCHES = ["แอร์ inverter", "โซฟา L-shape", "ตู้เย็น 2 ประตู", "ที่นอน pocket spring", "โคมเพดาน", "ฟรีติดตั้ง"];
const RECENT_SEARCHES = ["แอร์ Aeris", "โซฟา Haven", "ที่นอน king size"];

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "แอร์" } = await searchParams;
  const count = RESULTS.length;

  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main className="flex-1 w-full bg-neutral-50">
        {/* Search header */}
        <section className="bg-white border-b border-neutral-200">
          <div className="max-w-[1440px] mx-auto px-6 py-5">
            <div className="relative max-w-3xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text" defaultValue={q} placeholder="ค้นหาสินค้า, แบรนด์, หมวดหมู่..."
                className="w-full pl-12 pr-12 py-3.5 border-2 border-primary-200 rounded-full text-base outline-none focus:border-primary-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 grid place-items-center" aria-label="Clear">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="max-w-3xl mx-auto mt-4 text-sm text-neutral-600">
              ผลการค้นหาสำหรับ <b className="text-neutral-900">"{q}"</b> — <b className="text-primary-700">{count} รายการ</b>
            </div>
          </div>
        </section>

        {/* Quick filter chips */}
        <section className="bg-white border-b border-neutral-200">
          <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {["ทั้งหมด","เครื่องใช้ไฟฟ้า","เฟอร์นิเจอร์","ห้องน้ำ","ห้องครัว","ไฟและโคมไฟ","สมาร์ทโฮม"].map((c, i) => (
              <button key={c} className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${i===0 ? "bg-primary-600 text-white" : "border border-neutral-200 hover:border-primary-300"}`}>{c}</button>
            ))}
          </div>
        </section>

        {/* Body */}
        <div className="max-w-[1440px] mx-auto px-6 py-6">
          {/* Toolbar */}
          <div className="bg-white rounded-xl border border-neutral-200 px-4 py-3 mb-4 flex items-center gap-3 flex-wrap">
            <button className="text-sm border border-neutral-200 hover:border-primary-300 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5">
              <Filter className="w-4 h-4" /> ตัวกรอง
            </button>
            {["ลด 30%+","ส่งฟรี","ฟรีติดตั้ง","ผ่อน 0%","มาใหม่"].map((t) => (
              <button key={t} className="text-sm border border-neutral-200 hover:border-primary-300 px-3 py-1.5 rounded-full text-neutral-600">{t}</button>
            ))}
            <div className="ml-auto flex items-center gap-2">
              <label className="flex items-center gap-2 text-sm">
                <ArrowUpDown className="w-4 h-4 text-neutral-500" />
                <select className="px-3 py-1.5 border border-neutral-200 rounded-lg text-sm outline-none">
                  <option>ตรงกับคำค้น</option>
                  <option>ราคาต่ำ - สูง</option>
                  <option>ราคาสูง - ต่ำ</option>
                  <option>เรตติ้ง</option>
                </select>
              </label>
              <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
                <button className="w-8 h-8 grid place-items-center bg-primary-600 text-white"><Grid3x3 className="w-4 h-4" /></button>
                <button className="w-8 h-8 grid place-items-center text-neutral-500 hover:bg-neutral-100"><List className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {RESULTS.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>

          {/* Trending + Recent */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-neutral-200 p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-orange-500" /> ค้นหายอดนิยม</h3>
              <div className="flex flex-wrap gap-2">
                {TRENDING_SEARCHES.map((s, i) => (
                  <a key={i} href={`/search?q=${encodeURIComponent(s)}`} className="text-sm bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full">{s}</a>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Clock className="w-4 h-4 text-primary-600" /> ค้นหาล่าสุด</h3>
              <div className="flex flex-wrap gap-2">
                {RECENT_SEARCHES.map((s, i) => (
                  <a key={i} href={`/search?q=${encodeURIComponent(s)}`} className="text-sm bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1.5 rounded-full inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const _unused = [Lightbulb];
