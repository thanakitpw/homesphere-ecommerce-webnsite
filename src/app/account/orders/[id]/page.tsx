import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft, Package, Truck, Check, Clock, MapPin, CreditCard,
  Wrench, Copy, Download, MessageCircle, Phone, Store, RefreshCcw,
  Shield, FileText, Wind, LampCeiling, ChevronRight, AlertCircle,
} from "lucide-react";

/* ============================================================
   ORDER DETAIL — /account/orders/[id]
============================================================ */

const ORDER = {
  id: "HS250417-4F9K2A",
  placed: "17 เม.ย. 2026 · 14:23",
  status: "shipped" as const,
  items: [
    { icon: Wind, image: "/seed/flash-sale/aeris-aircon.png", title: "แอร์ Aeris 12000 BTU Inverter", variant: "12,000 BTU · ขาว", qty: 1, price: 9990, original: 15900 },
    { icon: LampCeiling, title: "โคมเพดาน Luma LED 24W", variant: "24W · Warm White", qty: 2, price: 1990 },
  ],
  subtotal: 13970,
  discount: 500,
  shipping: 0,
  installFee: 0,
  total: 13470,
  shippingAddress: {
    name: "สมชาย ใจดี", phone: "081-234-5678",
    line: "123/45 ถ.สุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110",
  },
  billingAddress: { same: true },
  payment: { method: "บัตรเครดิต **** 4821", plan: "ผ่อน 10 เดือน (฿1,347/เดือน)", status: "succeeded" },
  shipment: {
    method: "ส่งถึงบ้าน · Kerry Express", tracking: "TH789012345678",
    estimated: "19-20 เม.ย. 2026", shippedAt: "18 เม.ย. 2026 · 09:15",
  },
  install: { scheduled: "20 เม.ย. 2026 · 13:00-17:00น.", technician: "คุณสมศักดิ์ (Aeris Service)" },
  timeline: [
    { label: "ชำระเงินสำเร็จ", time: "17 เม.ย. · 14:28", status: "done" },
    { label: "เตรียมสินค้า", time: "17 เม.ย. · 16:42", status: "done" },
    { label: "จัดส่งแล้ว", time: "18 เม.ย. · 09:15", status: "done" },
    { label: "ถึงศูนย์คัดแยก Kerry", time: "18 เม.ย. · 18:33", status: "done", highlight: true },
    { label: "กำลังจัดส่งถึงบ้าน", time: "คาดถึง 19-20 เม.ย.", status: "current" },
    { label: "ติดตั้งโดยช่าง", time: "20 เม.ย. · 13:00-17:00", status: "pending" },
    { label: "จัดส่งสำเร็จ", time: "-", status: "pending" },
  ],
};

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="space-y-5">
      {/* Back + title */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <Link href="/account/orders" className="text-sm text-neutral-500 hover:text-primary-600 inline-flex items-center gap-1 mb-1">
            <ChevronLeft className="w-4 h-4" /> กลับหน้ารายการ
          </Link>
          <h1 className="font-display font-bold text-2xl">รายละเอียดคำสั่งซื้อ</h1>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <span className="font-mono font-semibold">#{id}</span>
            <button className="text-neutral-400 hover:text-primary-600" aria-label="copy"><Copy className="w-3.5 h-3.5" /></button>
            <span className="text-neutral-300">·</span>
            <span className="text-neutral-600">สั่งซื้อเมื่อ {ORDER.placed}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="text-sm border border-neutral-200 px-3 py-2 rounded-lg hover:border-primary-300 inline-flex items-center gap-1.5">
            <Download className="w-4 h-4" /> ใบเสร็จ
          </button>
          <button className="text-sm border border-neutral-200 px-3 py-2 rounded-lg hover:border-primary-300 inline-flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4" /> ติดต่อ Support
          </button>
        </div>
      </div>

      {/* Status hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10 flex items-center gap-5 flex-wrap">
          <div className="w-16 h-16 rounded-2xl bg-white/20 grid place-items-center shrink-0">
            <Truck className="w-8 h-8" strokeWidth={1.8} />
          </div>
          <div className="flex-1 min-w-[250px]">
            <div className="text-xs font-semibold tracking-wider opacity-80">STATUS</div>
            <h2 className="font-display font-extrabold text-2xl">กำลังจัดส่ง</h2>
            <p className="text-sm text-white/80 mt-0.5">คาดถึงภายใน {ORDER.shipment.estimated} · พัสดุอยู่ที่ Kerry ลาดพร้าว</p>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-xl px-4 py-3">
            <div className="text-xs opacity-80">เลขพัสดุ</div>
            <div className="font-mono font-bold text-lg flex items-center gap-2">
              {ORDER.shipment.tracking}
              <button className="opacity-70 hover:opacity-100" aria-label="copy"><Copy className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* 2-col: items + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-5">
        {/* Left — items + tracking timeline */}
        <div className="space-y-5">
          {/* Items */}
          <section className="bg-white rounded-2xl border border-neutral-200">
            <header className="px-5 py-4 border-b border-neutral-100 flex items-center justify-between">
              <h3 className="font-display font-bold text-base flex items-center gap-2"><Package className="w-4 h-4" /> สินค้าในคำสั่งซื้อ ({ORDER.items.length})</h3>
            </header>
            <ul className="divide-y divide-neutral-100">
              {ORDER.items.map((it, i) => (
                <li key={i} className="p-5 flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200 relative overflow-hidden grid place-items-center shrink-0">
                    {it.image ? (
                      <Image src={it.image} alt={it.title} fill sizes="80px" className="object-cover" />
                    ) : (
                      <it.icon className="w-10 h-10 text-neutral-400" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href="/product/aeris-aircon-12000btu" className="font-medium text-sm text-neutral-900 hover:text-primary-700 line-clamp-1">{it.title}</Link>
                    <div className="text-xs text-neutral-500 mt-0.5">{it.variant} · จำนวน {it.qty} ชิ้น</div>
                    <div className="mt-2 flex gap-2">
                      <button className="text-xs border border-orange-200 text-orange-700 bg-orange-50 hover:bg-orange-100 px-2.5 py-1 rounded font-medium">รีวิว</button>
                      <button className="text-xs border border-neutral-200 px-2.5 py-1 rounded font-medium hover:border-primary-300">สั่งซื้ออีก</button>
                    </div>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap">
                    <div className="font-semibold">฿{(it.price * it.qty).toLocaleString()}</div>
                    <div className="text-xs text-neutral-400">฿{it.price.toLocaleString()} × {it.qty}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Tracking timeline */}
          <section className="bg-white rounded-2xl border border-neutral-200">
            <header className="px-5 py-4 border-b border-neutral-100 flex items-center justify-between">
              <h3 className="font-display font-bold text-base flex items-center gap-2"><Truck className="w-4 h-4" /> ติดตามพัสดุ</h3>
              <span className="text-xs text-neutral-500 font-mono">{ORDER.shipment.tracking}</span>
            </header>
            <ol className="px-5 py-4">
              {ORDER.timeline.map((t, i) => (
                <li key={i} className="flex gap-4 pb-4 last:pb-0 relative">
                  {i < ORDER.timeline.length - 1 && (
                    <div className={`absolute left-[11px] top-6 bottom-0 w-0.5 ${t.status === "done" ? "bg-green-300" : "bg-neutral-200"}`} />
                  )}
                  <div className={`w-6 h-6 rounded-full grid place-items-center shrink-0 relative z-10 ${
                    t.status === "done" ? "bg-green-500 text-white" :
                    t.status === "current" ? "bg-orange-500 text-white ring-4 ring-orange-100" :
                    "bg-neutral-200 text-neutral-400"
                  }`}>
                    {t.status === "done" ? <Check className="w-3.5 h-3.5" strokeWidth={2.5} /> :
                     t.status === "current" ? <Clock className="w-3 h-3" /> :
                     <div className="w-1.5 h-1.5 rounded-full bg-current" />}
                  </div>
                  <div className="flex-1 pb-1">
                    <div className={`font-medium text-sm ${t.status === "pending" ? "text-neutral-400" : "text-neutral-900"}`}>{t.label}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">{t.time}</div>
                    {t.highlight && (
                      <div className="mt-2 text-xs bg-orange-50 text-orange-800 border border-orange-200 rounded px-2 py-1 inline-block">
                        <AlertCircle className="w-3 h-3 inline mr-1" />ล่าสุด — 2 ชม. ที่แล้ว
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Installation */}
          <section className="bg-white rounded-2xl border border-neutral-200">
            <header className="px-5 py-4 border-b border-neutral-100 flex items-center justify-between">
              <h3 className="font-display font-bold text-base flex items-center gap-2"><Wrench className="w-4 h-4" /> นัดหมายติดตั้ง</h3>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-semibold">ฟรี</span>
            </header>
            <div className="p-5 flex items-center gap-4 flex-wrap">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 grid place-items-center shrink-0">
                <Wrench className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-[200px]">
                <div className="font-semibold">{ORDER.install.scheduled}</div>
                <div className="text-xs text-neutral-500 mt-0.5">ช่าง: {ORDER.install.technician}</div>
              </div>
              <button className="text-sm border border-neutral-200 px-3 py-2 rounded-lg hover:border-primary-300 inline-flex items-center gap-1.5">
                <Phone className="w-4 h-4" /> โทรช่าง
              </button>
              <button className="text-sm text-primary-600 hover:underline">เปลี่ยนเวลา</button>
            </div>
          </section>

          {/* Actions */}
          <section className="bg-white rounded-2xl border border-neutral-200 p-5 flex items-center gap-2 flex-wrap">
            <button className="text-sm border border-red-200 text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg font-medium inline-flex items-center gap-1.5">
              <RefreshCcw className="w-4 h-4" /> ขอคืนสินค้า
            </button>
            <button className="text-sm border border-neutral-200 hover:border-primary-300 px-3 py-2 rounded-lg font-medium inline-flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> รายงานปัญหา
            </button>
            <button className="text-sm border border-neutral-200 hover:border-primary-300 px-3 py-2 rounded-lg font-medium inline-flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4" /> Chat with Support
            </button>
            <button className="ml-auto text-sm bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold">
              สั่งซื้ออีก
            </button>
          </section>
        </div>

        {/* Right — summary sticky */}
        <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          {/* Summary */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-5">
            <h3 className="font-display font-bold text-base mb-4">สรุปยอด</h3>
            <dl className="space-y-2 text-sm pb-4 border-b border-dashed border-neutral-200">
              <Row label="ราคาสินค้า" value={`฿${ORDER.subtotal.toLocaleString()}`} />
              <Row label="โค้ดส่วนลด" value={`-฿${ORDER.discount.toLocaleString()}`} highlight />
              <Row label="ค่าจัดส่ง" value="ฟรี" />
              <Row label="ค่าติดตั้ง" value="ฟรี" />
            </dl>
            <div className="pt-4 flex items-center justify-between">
              <span className="font-semibold">ยอดรวมสุทธิ</span>
              <div className="text-right">
                <div className="font-display font-extrabold text-2xl text-red-600">฿{ORDER.total.toLocaleString()}</div>
                <div className="text-xs text-neutral-500">รวม VAT</div>
              </div>
            </div>
          </div>

          {/* Shipping address */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-5">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary-600" /> ที่อยู่จัดส่ง</h3>
            <div className="text-sm">
              <div className="font-medium">{ORDER.shippingAddress.name}</div>
              <div className="text-xs text-neutral-500">{ORDER.shippingAddress.phone}</div>
              <p className="text-neutral-600 mt-2 leading-relaxed">{ORDER.shippingAddress.line}</p>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-5">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2"><CreditCard className="w-4 h-4 text-primary-600" /> การชำระเงิน</h3>
            <div className="text-sm">
              <div className="font-medium">{ORDER.payment.method}</div>
              <div className="text-xs text-neutral-500 mt-0.5">{ORDER.payment.plan}</div>
              <span className="mt-2 inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-semibold">
                <Check className="w-3 h-3" /> ชำระสำเร็จ
              </span>
            </div>
          </div>

          {/* Trust */}
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 text-xs">
            <div className="flex items-center gap-2 text-primary-900 font-semibold mb-2">
              <Shield className="w-4 h-4" /> การรับประกัน
            </div>
            <ul className="space-y-1 text-neutral-600">
              <li>• ประกันสินค้า 1 ปีเต็ม</li>
              <li>• คืนสินค้าฟรีภายใน 14 วัน</li>
              <li>• บริการหลังการขายโดย Homesphere</li>
            </ul>
          </div>

          {/* Store pickup hint */}
          <Link href="/stores" className="block bg-white rounded-xl border border-neutral-200 p-4 hover:border-primary-300 transition">
            <div className="flex items-center gap-3">
              <Store className="w-5 h-5 text-primary-600" />
              <div className="flex-1 text-sm">
                <div className="font-medium">สาขาใกล้คุณ</div>
                <div className="text-xs text-neutral-500">Homesphere ลาดพร้าว · เปิด 10:00-21:00</div>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </div>
          </Link>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-neutral-600">{label}</dt>
      <dd className={highlight ? "text-red-600 font-medium" : "font-medium"}>{value}</dd>
    </div>
  );
}
