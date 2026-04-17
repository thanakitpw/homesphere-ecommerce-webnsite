import Image from "next/image";
import {
  ChevronRight, Trash2, Plus, Minus, Heart, Truck, Wrench, CreditCard,
  Shield, Tag, Info, ArrowRight, ShoppingCart, Wind, Refrigerator,
  LampCeiling,
} from "lucide-react";
import { AnnouncementBar, SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductCard } from "@/components/product-card";
import { Armchair, Bed, Microwave } from "lucide-react";

/* ============================================================
   CART PAGE — /cart
============================================================ */

type CartItem = {
  id: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  image?: string;
  title: string;
  variant: string;
  brand: string;
  price: number;
  original?: number;
  qty: number;
  stock: number;
  installService: boolean;
  storePickup?: string;
};

const ITEMS: CartItem[] = [
  {
    id: "1",
    icon: Wind,
    image: "/seed/flash-sale/aeris-aircon.png",
    title: "แอร์ Aeris 12000 BTU Inverter รุ่น AR-I12",
    variant: "12,000 BTU · สีขาว",
    brand: "Aeris",
    price: 9990,
    original: 15900,
    qty: 1,
    stock: 23,
    installService: true,
  },
  {
    id: "2",
    icon: Refrigerator,
    title: "ตู้เย็น Stella 7.6Q 2 ประตู",
    variant: "7.6 คิว · สีเงิน",
    brand: "Stella",
    price: 8490,
    original: 12900,
    qty: 1,
    stock: 12,
    installService: true,
    storePickup: "สาขาลาดพร้าว",
  },
  {
    id: "3",
    icon: LampCeiling,
    title: "โคมเพดาน Luma LED 24W พร้อมรีโมท",
    variant: "24W · Warm White",
    brand: "Luma",
    price: 1990,
    original: 3590,
    qty: 2,
    stock: 45,
    installService: false,
  },
];

const RECOMMENDED = [
  { icon: Armchair, name: "โซฟา Haven 3 ที่นั่ง", price: 24900, rating: 4.8, reviews: 128 },
  { icon: Wind, name: "พัดลมตั้งพื้น Aeris 16''", price: 1990, rating: 4.6, reviews: 89 },
  { icon: Bed, name: "ที่นอน Haven 5 ฟุต", price: 7990, original: 13900, rating: 4.7, reviews: 201, badge: "-42%" },
  { icon: Microwave, name: "หม้อทอด Pomme 6Q", price: 2490, rating: 4.8, reviews: 92, badge: "NEW" },
];

export default function CartPage() {
  const subtotal = ITEMS.reduce((s, i) => s + i.price * i.qty, 0);
  const original = ITEMS.reduce((s, i) => s + (i.original ?? i.price) * i.qty, 0);
  const discount = original - subtotal;
  const installFee = 0;
  const shipping = 0;
  const coupon = 500;
  const total = subtotal - coupon;

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
            <span className="text-neutral-900 font-medium">ตะกร้าสินค้า</span>
          </div>
        </div>

        {/* Page header */}
        <div className="max-w-[1440px] mx-auto px-6 pt-8 pb-4">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <h1 className="font-display font-extrabold text-3xl text-neutral-900">ตะกร้าสินค้า</h1>
              <p className="text-sm text-neutral-500 mt-1">คุณมี {ITEMS.length} รายการในตะกร้า</p>
            </div>
            <ul className="flex items-center gap-6 text-sm">
              {["ตะกร้า","ที่อยู่จัดส่ง","ชำระเงิน","สรุปคำสั่งซื้อ"].map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full grid place-items-center text-xs font-bold ${i===0 ? "bg-primary-600 text-white" : "bg-neutral-200 text-neutral-500"}`}>{i+1}</span>
                  <span className={i===0 ? "font-semibold" : "text-neutral-500"}>{step}</span>
                  {i < 3 && <ChevronRight className="w-3.5 h-3.5 text-neutral-300 ml-1" />}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-[1440px] mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          {/* Left — items */}
          <div className="space-y-4">
            {/* Select all + delete */}
            <div className="bg-white rounded-xl border border-neutral-200 px-4 py-3 flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary-600" />
                <span className="font-medium">เลือกทั้งหมด ({ITEMS.length})</span>
              </label>
              <button className="ml-auto text-sm text-neutral-500 hover:text-red-500 flex items-center gap-1">
                <Trash2 className="w-4 h-4" /> ลบที่เลือก
              </button>
            </div>

            {ITEMS.map((item) => (
              <CartRow key={item.id} item={item} />
            ))}

            {/* Empty state reference (hidden) — for future use */}
            {/* <EmptyCart /> */}

            {/* Store-pickup info */}
            <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 flex items-start gap-3">
              <Info className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
              <div className="text-sm">
                <p className="font-semibold text-primary-900">รับของที่สาขาได้เร็วกว่า</p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  สินค้าบางรายการมีสต็อกที่สาขา · ประหยัดค่าส่ง + รับได้ภายใน 2 ชม.
                  <a href="#" className="text-primary-600 font-medium hover:underline ml-1">ดูสาขาใกล้ฉัน →</a>
                </p>
              </div>
            </div>
          </div>

          {/* Right — Order summary (sticky) */}
          <aside className="space-y-4 lg:sticky lg:top-32 lg:self-start">
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
              <div className="p-5">
                <h2 className="font-display font-bold text-lg mb-4">สรุปยอด</h2>

                {/* Coupon */}
                <div className="mb-4 pb-4 border-b border-neutral-100">
                  <label className="text-sm font-medium flex items-center gap-2 mb-2">
                    <Tag className="w-4 h-4 text-orange-500" /> โค้ดส่วนลด
                  </label>
                  <div className="flex gap-2">
                    <input type="text" placeholder="กรอกโค้ด" defaultValue="WELCOME500" className="flex-1 px-3 py-2 border border-neutral-200 rounded-lg text-sm outline-none focus:border-primary-400" />
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700">ใช้โค้ด</button>
                  </div>
                  <div className="mt-2 flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
                    <span className="text-xs text-green-800 flex items-center gap-1">
                      <Tag className="w-3 h-3" /> WELCOME500 · ลด 500฿
                    </span>
                    <button className="text-xs text-green-700 hover:underline">ลบ</button>
                  </div>
                </div>

                {/* Breakdown */}
                <dl className="space-y-2 text-sm">
                  <Row label="ราคาสินค้า" value={`฿${original.toLocaleString()}`} />
                  <Row label="ส่วนลด" value={`-฿${discount.toLocaleString()}`} highlight />
                  <Row label="โค้ดส่วนลด" value={`-฿${coupon.toLocaleString()}`} highlight />
                  <Row label="ค่าจัดส่ง" value={shipping === 0 ? "ฟรี" : `฿${shipping}`} />
                  <Row label="ค่าติดตั้ง" value={installFee === 0 ? "ฟรี" : `฿${installFee}`} />
                </dl>

                {/* Total */}
                <div className="mt-4 pt-4 border-t border-dashed border-neutral-300 flex items-center justify-between">
                  <span className="font-semibold">ยอดรวมสุทธิ</span>
                  <div className="text-right">
                    <div className="font-display font-extrabold text-2xl text-red-600">฿{total.toLocaleString()}</div>
                    <div className="text-xs text-neutral-500">รวม VAT · ประหยัด ฿{(original - total).toLocaleString()}</div>
                  </div>
                </div>

                {/* Installment hint */}
                <div className="mt-3 bg-gradient-to-r from-primary-50 to-orange-50 border border-primary-100 rounded-lg px-3 py-2 text-xs flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-primary-600" />
                  <span>ผ่อน 0% นาน 10 เดือน = <b className="text-primary-700">฿{Math.ceil(total/10).toLocaleString()}/เดือน</b></span>
                </div>

                {/* Checkout button */}
                <a href="/checkout" className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition">
                  ดำเนินการชำระเงิน <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-[11px] text-neutral-500 text-center mt-2">
                  ชำระปลอดภัย · SSL Encrypted · ข้อมูลไม่รั่วไหล
                </p>
              </div>

              {/* Services */}
              <div className="bg-neutral-50 border-t border-neutral-100 px-5 py-4 grid grid-cols-2 gap-3 text-xs">
                <ServiceMini icon={Truck} label="ส่งฟรีกรุงเทพ" />
                <ServiceMini icon={Wrench} label="ฟรีติดตั้ง" />
                <ServiceMini icon={Shield} label="ประกัน 1 ปี" />
                <ServiceMini icon={CreditCard} label="ผ่อน 0%" />
              </div>
            </div>

            {/* Payment methods hint */}
            <div className="bg-white rounded-xl border border-neutral-200 p-4 text-sm">
              <div className="font-semibold mb-2">ช่องทางชำระที่รองรับ</div>
              <div className="flex flex-wrap gap-1.5">
                {["VISA","MASTER","JCB","PROMPTPAY","COD","TRUEMONEY","INSTALLMENT"].map((p) => (
                  <span key={p} className="px-2 py-1 rounded border border-neutral-200 font-mono font-semibold text-[10px] text-neutral-600">{p}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Recommended */}
        <section className="max-w-[1440px] mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-bold text-2xl">คุณอาจจะชอบสิ่งเหล่านี้</h2>
            <a href="#" className="text-sm text-primary-600 font-medium flex items-center gap-1">ดูทั้งหมด <ArrowRight className="w-4 h-4" /></a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RECOMMENDED.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

/* ─────────────── CartRow ─────────────── */
function CartRow({ item }: { item: CartItem }) {
  const lineTotal = item.price * item.qty;
  const lineOriginal = (item.original ?? item.price) * item.qty;
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-4 flex gap-4">
      <label className="pt-1 shrink-0">
        <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary-600" />
      </label>
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 relative grid place-items-center shrink-0">
        {item.image ? (
          <Image src={item.image} alt={item.title} fill sizes="128px" className="object-cover" />
        ) : (
          <item.icon className="w-12 h-12 text-neutral-400" strokeWidth={1.5} />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <a href="#" className="text-xs text-primary-600 font-semibold hover:underline">{item.brand}</a>
            <a href={`/product/${item.id}`} className="block font-medium text-sm text-neutral-900 hover:text-primary-700 line-clamp-2 mt-0.5">{item.title}</a>
            <p className="text-xs text-neutral-500 mt-1">{item.variant}</p>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {item.installService && (
                <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded flex items-center gap-1"><Wrench className="w-3 h-3" /> ฟรีติดตั้ง</span>
              )}
              {item.storePickup && (
                <span className="text-[10px] bg-primary-100 text-primary-700 px-2 py-0.5 rounded">รับได้ที่ {item.storePickup}</span>
              )}
              <span className="text-[10px] text-green-700 bg-green-50 px-2 py-0.5 rounded">ส่งฟรี</span>
            </div>
          </div>
          <button className="text-neutral-400 hover:text-red-500 shrink-0" aria-label="ลบ">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
            <button className="w-8 h-8 grid place-items-center hover:bg-neutral-50 disabled:opacity-40" disabled={item.qty <= 1}>
              <Minus className="w-3.5 h-3.5" />
            </button>
            <input type="text" defaultValue={item.qty} className="w-10 h-8 text-center text-sm outline-none" />
            <button className="w-8 h-8 grid place-items-center hover:bg-neutral-50">
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-xs text-neutral-500 hover:text-primary-600 flex items-center gap-1">
              <Heart className="w-3.5 h-3.5" /> ย้ายไปถูกใจ
            </button>
            <div className="text-right">
              <div className="font-bold text-red-600">฿{lineTotal.toLocaleString()}</div>
              {item.original && (
                <div className="text-xs text-neutral-400 line-through">฿{lineOriginal.toLocaleString()}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Empty cart (reference) ─────────────── */
/* eslint-disable @typescript-eslint/no-unused-vars */
function EmptyCart() {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 py-16 text-center">
      <ShoppingCart className="w-16 h-16 text-neutral-300 mx-auto mb-4" strokeWidth={1.5} />
      <h3 className="font-display font-bold text-xl mb-2">ตะกร้าของคุณยังว่าง</h3>
      <p className="text-sm text-neutral-500 mb-5">เริ่มช้อปเลย · ลดสูงสุด 50% กับ Flash Sale</p>
      <a href="/" className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-700">
        เลือกซื้อสินค้า <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

/* ─────────────── helpers ─────────────── */
function Row({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-neutral-600">{label}</dt>
      <dd className={highlight ? "text-red-600 font-medium" : "font-medium"}>{value}</dd>
    </div>
  );
}

function ServiceMini({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-neutral-600">
      <Icon className="w-4 h-4 text-primary-600" />
      <span>{label}</span>
    </div>
  );
}
