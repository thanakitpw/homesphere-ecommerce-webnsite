import Link from "next/link";
import Image from "next/image";
import {
  Search, Filter, Package, Truck, Check, X, Clock, RefreshCcw,
  ChevronRight, MessageCircle, Wind, Refrigerator, LampCeiling,
  Armchair, Bed, Microwave,
} from "lucide-react";

/* ============================================================
   ACCOUNT ORDERS — /account/orders
============================================================ */

type OrderStatus = "pending" | "paid" | "packed" | "shipped" | "delivered" | "cancelled" | "refunded";

const ORDERS: Array<{
  id: string; date: string; status: OrderStatus;
  items: Array<{ icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; image?: string; title: string; variant: string; qty: number; price: number }>;
  total: number; payment: string; tracking?: string;
}> = [
  {
    id: "HS250417-4F9K2A",
    date: "17 เม.ย. 2026 · 14:23",
    status: "shipped",
    items: [
      { icon: Wind, image: "/seed/flash-sale/aeris-aircon.png", title: "แอร์ Aeris 12000 BTU Inverter", variant: "12,000 BTU · ขาว", qty: 1, price: 9990 },
      { icon: LampCeiling, title: "โคมเพดาน Luma LED 24W", variant: "24W · Warm", qty: 2, price: 1990 },
    ],
    total: 13970,
    payment: "บัตรเครดิต · ผ่อน 10 เดือน",
    tracking: "TH789012345678",
  },
  {
    id: "HS250412-2C7M1X",
    date: "12 เม.ย. 2026 · 09:47",
    status: "delivered",
    items: [
      { icon: Refrigerator, title: "ตู้เย็น Stella 7.6Q 2 ประตู", variant: "7.6 คิว · เงิน", qty: 1, price: 8490 },
    ],
    total: 8490,
    payment: "พร้อมเพย์ QR",
    tracking: "TH678901234567",
  },
  {
    id: "HS250408-8D3R6E",
    date: "8 เม.ย. 2026 · 18:02",
    status: "paid",
    items: [
      { icon: Wind, title: "พัดลมตั้งพื้น Aeris 16''", variant: "สีขาว", qty: 1, price: 1990 },
      { icon: Microwave, title: "หม้อทอด Pomme 6Q ไร้น้ำมัน", variant: "6 ลิตร · เทา", qty: 1, price: 2490 },
    ],
    total: 4480,
    payment: "บัตรเครดิต",
  },
  {
    id: "HS250402-5X9P0L",
    date: "2 เม.ย. 2026 · 11:15",
    status: "cancelled",
    items: [
      { icon: Armchair, title: "เก้าอี้ทำงาน Haven Ergo", variant: "Mesh · ดำ", qty: 1, price: 5490 },
    ],
    total: 5490,
    payment: "COD (ยกเลิกก่อนจัดส่ง)",
  },
  {
    id: "HS250325-3B1T8Y",
    date: "25 มี.ค. 2026 · 15:34",
    status: "delivered",
    items: [
      { icon: Bed, title: "ที่นอน Haven Premium 6 ฟุต", variant: "King · สปริงพ็อคเกต", qty: 1, price: 14900 },
    ],
    total: 14900,
    payment: "โอนผ่านธนาคาร",
    tracking: "TH567890123456",
  },
];

const STATUS_TABS: Array<{ key: OrderStatus | "all"; label: string; count?: number }> = [
  { key: "all", label: "ทั้งหมด", count: 24 },
  { key: "pending", label: "รอชำระ" },
  { key: "paid", label: "กำลังเตรียม", count: 1 },
  { key: "shipped", label: "กำลังส่ง", count: 2 },
  { key: "delivered", label: "สำเร็จ", count: 18 },
  { key: "cancelled", label: "ยกเลิก", count: 3 },
];

export default function OrdersPage() {
  return (
    <div className="space-y-5">
      {/* Header */}
      <header className="bg-white rounded-2xl border border-neutral-200 p-5">
        <h1 className="font-display font-bold text-2xl mb-1">คำสั่งซื้อของฉัน</h1>
        <p className="text-sm text-neutral-500">ประวัติคำสั่งซื้อทั้งหมด · ติดตามพัสดุ · ขอคืนสินค้า</p>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input type="text" placeholder="ค้นหาด้วย Order ID, ชื่อสินค้า, เลขพัสดุ..." className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-xl text-sm outline-none focus:border-primary-400" />
          </div>
          <button className="px-4 py-2.5 border border-neutral-200 rounded-xl text-sm hover:border-primary-300 flex items-center gap-2">
            <Filter className="w-4 h-4" /> กรอง
          </button>
        </div>
      </header>

      {/* Status tabs */}
      <nav className="bg-white rounded-2xl border border-neutral-200 px-2 py-2 flex items-center gap-1 overflow-x-auto no-scrollbar">
        {STATUS_TABS.map((t, i) => (
          <button key={t.key} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
            i === 0 ? "bg-primary-600 text-white" : "text-neutral-600 hover:bg-neutral-100"
          }`}>
            {t.label}
            {t.count !== undefined && <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${i===0 ? "bg-white/20" : "bg-neutral-200"}`}>{t.count}</span>}
          </button>
        ))}
      </nav>

      {/* Orders list */}
      <div className="space-y-4">
        {ORDERS.map((o) => <OrderCard key={o.id} {...o} />)}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <button className="px-4 py-2 border border-neutral-200 rounded-lg text-sm bg-white hover:border-primary-300">← ก่อนหน้า</button>
        <span className="text-sm text-neutral-600">หน้า 1 / 5</span>
        <button className="px-4 py-2 border border-neutral-200 rounded-lg text-sm bg-white hover:border-primary-300">ถัดไป →</button>
      </div>
    </div>
  );
}

function OrderCard({
  id, date, status, items, total, payment, tracking,
}: {
  id: string; date: string; status: OrderStatus; total: number; payment: string; tracking?: string;
  items: Array<{ icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; image?: string; title: string; variant: string; qty: number; price: number }>;
}) {
  const statusMeta: Record<OrderStatus, { label: string; color: string; icon: React.ComponentType<{ className?: string }> }> = {
    pending: { label: "รอชำระเงิน", color: "bg-neutral-100 text-neutral-700", icon: Clock },
    paid: { label: "ชำระแล้ว · กำลังเตรียม", color: "bg-primary-100 text-primary-700", icon: Package },
    packed: { label: "เตรียมจัดส่ง", color: "bg-primary-100 text-primary-700", icon: Package },
    shipped: { label: "กำลังจัดส่ง", color: "bg-orange-100 text-orange-700", icon: Truck },
    delivered: { label: "จัดส่งสำเร็จ", color: "bg-green-100 text-green-700", icon: Check },
    cancelled: { label: "ยกเลิก", color: "bg-red-50 text-red-700", icon: X },
    refunded: { label: "คืนเงินแล้ว", color: "bg-neutral-100 text-neutral-700", icon: RefreshCcw },
  };
  const s = statusMeta[status];
  const StatusIcon = s.icon;

  return (
    <article className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
      {/* Header */}
      <header className="px-5 py-3 bg-neutral-50 border-b border-neutral-100 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs text-neutral-500">Order ID</span>
          <span className="font-mono font-semibold text-sm">#{id}</span>
          <span className="text-neutral-300">·</span>
          <span className="text-xs text-neutral-500">{date}</span>
        </div>
        <span className={`text-xs ${s.color} px-2.5 py-1 rounded font-semibold flex items-center gap-1`}>
          <StatusIcon className="w-3 h-3" /> {s.label}
        </span>
      </header>

      {/* Items */}
      <div className="divide-y divide-neutral-100">
        {items.map((it, i) => (
          <div key={i} className="px-5 py-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200 grid place-items-center relative overflow-hidden shrink-0">
              {it.image ? (
                <Image src={it.image} alt={it.title} fill sizes="64px" className="object-cover" />
              ) : (
                <it.icon className="w-8 h-8 text-neutral-400" strokeWidth={1.5} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <Link href="#" className="font-medium text-sm text-neutral-900 hover:text-primary-700 line-clamp-1">{it.title}</Link>
              <div className="text-xs text-neutral-500 mt-0.5">{it.variant} · จำนวน {it.qty} ชิ้น</div>
            </div>
            <div className="text-right text-sm whitespace-nowrap">
              <div className="font-semibold">฿{(it.price * it.qty).toLocaleString()}</div>
              <div className="text-xs text-neutral-400">฿{it.price.toLocaleString()} × {it.qty}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="px-5 py-4 border-t border-neutral-100 flex items-center justify-between flex-wrap gap-3">
        <div className="text-sm text-neutral-600">
          <span>รวม {items.length} รายการ · </span>
          <span className="text-xs">ชำระผ่าน {payment}</span>
          {tracking && (
            <><span className="text-neutral-300"> · </span><span className="text-xs">พัสดุ <span className="font-mono">{tracking}</span></span></>
          )}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {status === "shipped" && (
            <button className="text-sm bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center gap-1">
              <Truck className="w-4 h-4" /> ติดตามพัสดุ
            </button>
          )}
          {status === "delivered" && (
            <>
              <button className="text-sm border border-orange-200 text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-2 rounded-lg font-medium">รีวิวสินค้า</button>
              <button className="text-sm border border-neutral-200 px-3 py-2 rounded-lg font-medium hover:border-primary-300">ขอคืนสินค้า</button>
            </>
          )}
          {status === "paid" && (
            <button className="text-sm border border-red-200 text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg font-medium">ยกเลิก</button>
          )}
          <button className="text-sm border border-neutral-200 px-3 py-2 rounded-lg font-medium hover:border-primary-300 inline-flex items-center gap-1">
            <MessageCircle className="w-4 h-4" /> ติดต่อ
          </button>
          <Link href={`/account/orders/${id}`} className="text-sm bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-1">
            ดูรายละเอียด <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="w-full text-right lg:w-auto pt-2 lg:pt-0 border-t lg:border-t-0 border-neutral-100">
          <span className="text-xs text-neutral-500">ยอดรวม </span>
          <span className="font-display font-extrabold text-xl text-red-600">฿{total.toLocaleString()}</span>
        </div>
      </footer>
    </article>
  );
}
