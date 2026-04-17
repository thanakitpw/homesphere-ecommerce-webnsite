import Link from "next/link";
import {
  Package, Truck, Check, MapPin, Heart, Ticket, BadgeCheck,
  ArrowRight, ChevronRight, Clock, Wallet, Gift, Bell, Wind, Refrigerator, LampCeiling,
} from "lucide-react";
import Image from "next/image";

/* ============================================================
   ACCOUNT OVERVIEW — /account
============================================================ */

export default function AccountPage() {
  return (
    <div className="space-y-6">
      {/* Hero — greeting + loyalty */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10 flex items-center gap-6 flex-wrap">
          <div className="flex-1 min-w-[250px]">
            <span className="text-orange-400 font-semibold text-sm mb-1 inline-block">สวัสดี ☀️</span>
            <h1 className="font-display font-extrabold text-2xl lg:text-3xl">คุณสมชาย ใจดี</h1>
            <p className="text-white/70 text-sm mt-1">Homesphere Member ตั้งแต่ เม.ย. 2025 · สถานะ <b className="text-orange-400">Gold Tier</b></p>
          </div>
          <div className="flex gap-3">
            <StatTile label="Points" value="1,250" sub="= 125฿" />
            <StatTile label="คูปอง" value="5" sub="ใช้ได้" />
            <StatTile label="Cashback" value="฿340" sub="รอใช้" />
          </div>
        </div>
        {/* Tier progress */}
        <div className="mt-5 pt-5 border-t border-white/10 relative z-10">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-white/70">อีก <b className="text-orange-400">฿4,870</b> เพื่อไป <b>Platinum</b></span>
            <span className="text-white/50">฿15,130 / ฿20,000</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500" style={{ width: "76%" }} />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      </section>

      {/* Quick actions */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <QuickAction href="/account/orders" icon={Package} label="ติดตามพัสดุ" count="2 กำลังส่ง" accent="blue" />
        <QuickAction href="/account/wishlist" icon={Heart} label="สินค้าถูกใจ" count="12 รายการ" accent="red" />
        <QuickAction href="/account/coupons" icon={Ticket} label="คูปอง" count="5 ใช้ได้" accent="orange" />
        <QuickAction href="/account/addresses" icon={MapPin} label="ที่อยู่" count="2 รายการ" accent="primary" />
      </section>

      {/* Two-col: orders + recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-neutral-200">
          <header className="px-5 py-4 border-b border-neutral-100 flex items-center justify-between">
            <h2 className="font-display font-bold text-lg">คำสั่งซื้อล่าสุด</h2>
            <Link href="/account/orders" className="text-sm text-primary-600 hover:underline flex items-center gap-1">
              ดูทั้งหมด <ArrowRight className="w-4 h-4" />
            </Link>
          </header>
          <div className="divide-y divide-neutral-100">
            <OrderRow
              id="HS250417-4F9K2A"
              date="17 เม.ย. 2026"
              status="shipped"
              items={[
                { icon: Wind, image: "/seed/flash-sale/aeris-aircon.png", title: "แอร์ Aeris 12000 BTU", qty: 1, price: 9990 },
                { icon: LampCeiling, title: "โคมเพดาน Luma LED 24W", qty: 2, price: 1990 },
              ]}
              total={13970}
              tracking="TH789012345678"
            />
            <OrderRow
              id="HS250412-2C7M1X"
              date="12 เม.ย. 2026"
              status="delivered"
              items={[
                { icon: Refrigerator, title: "ตู้เย็น Stella 7.6Q", qty: 1, price: 8490 },
              ]}
              total={8490}
            />
            <OrderRow
              id="HS250408-8D3R6E"
              date="8 เม.ย. 2026"
              status="paid"
              items={[
                { icon: Package, title: "พัดลม Aeris 16'' + หม้อทอด Pomme 6Q", qty: 2, price: 4480 },
              ]}
              total={4480}
            />
          </div>
        </div>

        {/* Right column — promo / notif / wallet */}
        <div className="space-y-4">
          {/* Loyalty card */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-5 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider opacity-90 mb-1">
                <BadgeCheck className="w-4 h-4" /> HOMESPHERE GOLD
              </div>
              <div className="font-mono text-lg tracking-widest mt-2">•••• •••• •••• 4821</div>
              <div className="flex items-end justify-between mt-4 text-xs">
                <div>
                  <div className="opacity-80">สมาชิกตั้งแต่</div>
                  <div className="font-semibold">04/2025</div>
                </div>
                <div>
                  <div className="opacity-80">ใช้ได้ถึง</div>
                  <div className="font-semibold">04/2027</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
            <div className="absolute -right-4 -bottom-6 w-24 h-24 bg-white/10 rounded-full" />
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl border border-neutral-200">
            <header className="px-5 py-3 border-b border-neutral-100 flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2 text-sm"><Bell className="w-4 h-4" /> แจ้งเตือน</h3>
              <span className="text-[10px] bg-red-500 text-white px-1.5 rounded font-bold">3 ใหม่</span>
            </header>
            <ul className="divide-y divide-neutral-100 text-sm">
              <Notif icon={Truck} title="พัสดุอยู่ที่ศูนย์คัดแยก" sub="HS250417-4F9K2A" time="2 ชม. ที่แล้ว" unread />
              <Notif icon={Gift} title="คุณได้รับคูปองใหม่ ฿100" sub="ใช้ภายใน 7 วัน" time="1 วันที่แล้ว" unread />
              <Notif icon={BadgeCheck} title="อัพเกรดเป็น Gold Tier สำเร็จ" sub="สิทธิพิเศษเพิ่มเติม" time="3 วันที่แล้ว" unread />
              <Notif icon={Check} title="ชำระเงิน Order HS250412 สำเร็จ" sub="" time="5 วันที่แล้ว" />
            </ul>
          </div>

          {/* Ongoing promo */}
          <Link href="/promotions" className="block bg-gradient-to-br from-primary-50 to-orange-50 border border-primary-200 rounded-2xl p-5 hover:shadow-md transition">
            <div className="flex items-center gap-2 text-orange-600 font-semibold text-xs mb-1 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" /> หมดเวลา 23:59
            </div>
            <div className="font-display font-bold text-lg text-primary-900">Mid-Month Sale</div>
            <p className="text-xs text-neutral-600 mt-1">ลดสูงสุด 50% เฉพาะสมาชิก Gold+</p>
            <div className="mt-3 text-sm text-primary-600 font-semibold flex items-center gap-1">ดูโปรโมชั่น <ChevronRight className="w-4 h-4" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── components ─────────────── */

function StatTile({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-3 min-w-[100px]">
      <div className="text-[11px] text-white/70 font-semibold">{label}</div>
      <div className="font-display font-extrabold text-2xl">{value}</div>
      <div className="text-[10px] text-orange-300 mt-0.5">{sub}</div>
    </div>
  );
}

function QuickAction({ href, icon: Icon, label, count, accent }: {
  href: string; icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string; count: string;
  accent: "blue" | "red" | "orange" | "primary";
}) {
  const styles: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    red: "bg-red-50 text-red-500",
    orange: "bg-orange-50 text-orange-600",
    primary: "bg-primary-50 text-primary-600",
  };
  return (
    <Link href={href} className="bg-white border border-neutral-200 rounded-xl p-4 flex items-center gap-3 hover:border-primary-300 hover:shadow-sm transition group">
      <span className={`w-11 h-11 rounded-lg grid place-items-center shrink-0 ${styles[accent]}`}>
        <Icon className="w-5 h-5" strokeWidth={1.8} />
      </span>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-sm">{label}</div>
        <div className="text-xs text-neutral-500">{count}</div>
      </div>
      <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-primary-600" />
    </Link>
  );
}

type OrderStatus = "pending" | "paid" | "packed" | "shipped" | "delivered" | "cancelled";
function OrderRow({
  id, date, status, items, total, tracking,
}: {
  id: string; date: string; status: OrderStatus; total: number; tracking?: string;
  items: Array<{ icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; image?: string; title: string; qty: number; price: number }>;
}) {
  const statusMap: Record<OrderStatus, { label: string; color: string }> = {
    pending: { label: "รอชำระ", color: "bg-neutral-100 text-neutral-700" },
    paid: { label: "ชำระแล้ว · กำลังเตรียม", color: "bg-primary-100 text-primary-700" },
    packed: { label: "เตรียมจัดส่ง", color: "bg-primary-100 text-primary-700" },
    shipped: { label: "กำลังจัดส่ง", color: "bg-orange-100 text-orange-700" },
    delivered: { label: "จัดส่งสำเร็จ", color: "bg-green-100 text-green-700" },
    cancelled: { label: "ยกเลิก", color: "bg-red-50 text-red-700" },
  };
  const s = statusMap[status];
  return (
    <div className="p-5">
      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono font-semibold text-sm">#{id}</span>
            <span className={`text-[11px] ${s.color} px-2 py-0.5 rounded font-semibold`}>{s.label}</span>
          </div>
          <div className="text-xs text-neutral-500">สั่งซื้อเมื่อ {date}</div>
        </div>
        <Link href={`/account/orders/${id}`} className="text-sm text-primary-600 hover:underline flex items-center gap-1">
          ดูรายละเอียด <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex -space-x-2">
          {items.slice(0, 3).map((it, i) => (
            <div key={i} className="w-12 h-12 rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200 grid place-items-center ring-2 ring-white relative overflow-hidden">
              {it.image ? (
                <Image src={it.image} alt={it.title} fill sizes="48px" className="object-cover" />
              ) : (
                <it.icon className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
              )}
            </div>
          ))}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-neutral-700 line-clamp-1">{items.map((i) => i.title).join(" · ")}</p>
          <p className="text-xs text-neutral-500 mt-0.5">
            {items.length} รายการ · ยอดรวม <b className="text-primary-700">฿{total.toLocaleString()}</b>
          </p>
        </div>
        <div className="flex gap-2">
          {tracking && (
            <button className="text-xs border border-primary-200 text-primary-700 bg-primary-50 hover:bg-primary-100 px-3 py-1.5 rounded-lg font-medium inline-flex items-center gap-1">
              <Truck className="w-3.5 h-3.5" /> ติดตาม
            </button>
          )}
          {status === "delivered" && (
            <button className="text-xs border border-orange-200 text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-lg font-medium">รีวิว</button>
          )}
          <button className="text-xs border border-neutral-200 px-3 py-1.5 rounded-lg font-medium hover:border-primary-300">สั่งซื้ออีก</button>
        </div>
      </div>
    </div>
  );
}

function Notif({ icon: Icon, title, sub, time, unread = false }: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; title: string; sub: string; time: string; unread?: boolean;
}) {
  return (
    <li className={`px-5 py-3 flex items-start gap-3 hover:bg-neutral-50 transition ${unread ? "bg-primary-50/40" : ""}`}>
      <span className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 grid place-items-center shrink-0">
        <Icon className="w-4 h-4" strokeWidth={1.8} />
      </span>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm leading-tight">{title}</div>
        {sub && <div className="text-xs text-neutral-500 mt-0.5">{sub}</div>}
        <div className="text-[11px] text-neutral-400 mt-1">{time}</div>
      </div>
      {unread && <span className="w-2 h-2 rounded-full bg-primary-600 mt-1 shrink-0" />}
    </li>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const WalletIcon = Wallet; // ensure import used even if referenced via layout
