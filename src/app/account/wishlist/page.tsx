import { Heart, ShoppingCart, Trash2, Share2, Grid3x3, List } from "lucide-react";
import { Armchair, Wind, Refrigerator, LampCeiling, Bed, Microwave, Camera, Library, Droplet, ShowerHead, Lightbulb, UtensilsCrossed } from "lucide-react";
import { ProductCard } from "@/components/product-card";

const WISHLIST = [
  { icon: Armchair, name: "โซฟา Haven 3 ที่นั่ง", price: 24900, original: 29900, rating: 4.8, reviews: 128, badge: "-17%" },
  { icon: Wind, image: "/seed/flash-sale/aeris-aircon.png", name: "แอร์ Aeris 12000 BTU", price: 9990, original: 15900, rating: 4.6, reviews: 289, badge: "-37%" },
  { icon: Refrigerator, name: "ตู้เย็น Stella 7.6Q", price: 8490, original: 12900, rating: 4.5, reviews: 76 },
  { icon: LampCeiling, name: "โคมเพดาน Luma LED 24W", price: 1990, original: 3590, rating: 4.7, reviews: 154, badge: "-45%" },
  { icon: Bed, name: "ที่นอน Haven 6 ฟุต", price: 14900, rating: 4.9, reviews: 201 },
  { icon: Microwave, name: "หม้อทอด Pomme 6Q", price: 2490, rating: 4.8, reviews: 92, badge: "NEW" },
  { icon: ShowerHead, name: "ฝักบัว Vessel Pro", price: 3490, rating: 4.9, reviews: 201 },
  { icon: Lightbulb, name: "หลอดไฟ LED Luma 9W x4", price: 490, rating: 4.5, reviews: 312 },
  { icon: Camera, name: "กล้องวงจรปิด Nimbus 4K", price: 2990, rating: 4.7, reviews: 76, badge: "NEW" },
  { icon: Library, name: "ชั้นวางหนังสือ Arbor 5 ชั้น", price: 4590, rating: 4.6, reviews: 54 },
  { icon: Droplet, name: "เครื่องกรองน้ำ Aeris RO", price: 8990, rating: 4.9, reviews: 31 },
  { icon: UtensilsCrossed, name: "ชุดเครื่องครัว Kisho 5 ชิ้น", price: 2890, rating: 4.7, reviews: 154 },
];

export default function WishlistPage() {
  return (
    <div className="space-y-5">
      {/* Header */}
      <header className="bg-white rounded-2xl border border-neutral-200 p-5 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display font-bold text-2xl flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500 fill-red-500" /> สินค้าถูกใจ
          </h1>
          <p className="text-sm text-neutral-500 mt-1">คุณมี <b className="text-neutral-900">{WISHLIST.length}</b> รายการในรายการถูกใจ · เก็บไว้ซื้อภายหลัง</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-sm border border-neutral-200 px-3 py-2 rounded-lg hover:border-primary-300 inline-flex items-center gap-1.5">
            <Share2 className="w-4 h-4" /> แชร์
          </button>
          <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
            <button className="w-9 h-9 grid place-items-center bg-primary-600 text-white"><Grid3x3 className="w-4 h-4" /></button>
            <button className="w-9 h-9 grid place-items-center text-neutral-500 hover:bg-neutral-100"><List className="w-4 h-4" /></button>
          </div>
        </div>
      </header>

      {/* Bulk actions */}
      <div className="bg-white rounded-xl border border-neutral-200 px-4 py-3 flex items-center gap-3 flex-wrap text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 accent-primary-600" />
          <span>เลือกทั้งหมด</span>
        </label>
        <span className="text-neutral-300">·</span>
        <button className="text-neutral-600 hover:text-primary-600 inline-flex items-center gap-1">
          <ShoppingCart className="w-4 h-4" /> เพิ่มที่เลือกลงตะกร้า
        </button>
        <button className="text-neutral-600 hover:text-red-500 inline-flex items-center gap-1">
          <Trash2 className="w-4 h-4" /> ลบที่เลือก
        </button>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-neutral-500">เรียงตาม</span>
          <select className="px-3 py-1.5 border border-neutral-200 rounded-lg text-sm outline-none">
            <option>เพิ่มล่าสุด</option>
            <option>ราคาต่ำ - สูง</option>
            <option>ราคาสูง - ต่ำ</option>
            <option>เรตติ้ง</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {WISHLIST.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>

      {/* Empty state reference (hidden) */}
    </div>
  );
}
