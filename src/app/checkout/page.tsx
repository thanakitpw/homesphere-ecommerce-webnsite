import {
  ChevronRight, MapPin, Truck, Store, CreditCard, Wallet, QrCode,
  Banknote, Shield, Tag, Check, Wrench, Info, ArrowRight, Building2,
  Calendar,
} from "lucide-react";
import { AnnouncementBar, SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

/* ============================================================
   CHECKOUT PAGE — /checkout
   4-step: ที่อยู่ → ขนส่ง → ชำระเงิน → สรุป
   (Single-page with all steps visible, step indicator at top)
============================================================ */

export default function CheckoutPage() {
  const itemCount = 4;
  const subtotal = 20470;
  const coupon = 500;
  const shipping = 0;
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
            <a href="/cart" className="hover:text-primary-600">ตะกร้า</a>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-900 font-medium">ชำระเงิน</span>
          </div>
        </div>

        {/* Stepper */}
        <div className="bg-white border-b border-neutral-200">
          <div className="max-w-[1440px] mx-auto px-6 py-5">
            <ol className="flex items-center justify-between max-w-3xl mx-auto">
              {["ตะกร้า","ที่อยู่จัดส่ง","ชำระเงิน","สรุปคำสั่งซื้อ"].map((s, i) => {
                const done = i < 2;
                const active = i === 2;
                return (
                  <li key={s} className="flex-1 flex items-center last:flex-none">
                    <div className="flex flex-col items-center gap-1">
                      <span className={`w-9 h-9 rounded-full grid place-items-center font-bold text-sm ${
                        done ? "bg-primary-600 text-white" :
                        active ? "bg-primary-600 text-white ring-4 ring-primary-100" :
                        "bg-neutral-200 text-neutral-500"
                      }`}>
                        {done ? <Check className="w-4 h-4" /> : i+1}
                      </span>
                      <span className={`text-xs ${active ? "font-semibold text-primary-700" : done ? "text-neutral-700" : "text-neutral-400"}`}>{s}</span>
                    </div>
                    {i < 3 && (
                      <div className={`flex-1 h-0.5 mx-3 mb-5 ${i < 2 ? "bg-primary-600" : "bg-neutral-200"}`} />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          {/* Left — steps content */}
          <div className="space-y-5">
            {/* Step 1: Shipping address */}
            <section className="bg-white rounded-2xl border border-neutral-200">
              <header className="px-5 py-4 border-b border-neutral-100 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-primary-600 text-white grid place-items-center text-xs font-bold">1</span>
                <h2 className="font-display font-bold text-lg">ที่อยู่จัดส่ง</h2>
                <button className="ml-auto text-sm text-primary-600 hover:underline">+ เพิ่มที่อยู่ใหม่</button>
              </header>
              <div className="p-5 space-y-3">
                {/* Saved address radio cards */}
                <AddressCard
                  name="สมชาย ใจดี"
                  phone="081-234-5678"
                  address="123/45 ถ.สุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110"
                  tag="บ้าน"
                  selected
                />
                <AddressCard
                  name="สมชาย ใจดี (ที่ทำงาน)"
                  phone="081-234-5678"
                  address="99/1 อาคารเซ็นทรัลเวิลด์ ชั้น 22 ถ.ราชดำริ แขวงปทุมวัน กรุงเทพฯ 10330"
                  tag="ที่ทำงาน"
                />
              </div>
            </section>

            {/* Step 2: Delivery method */}
            <section className="bg-white rounded-2xl border border-neutral-200">
              <header className="px-5 py-4 border-b border-neutral-100 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-primary-600 text-white grid place-items-center text-xs font-bold">2</span>
                <h2 className="font-display font-bold text-lg">วิธีจัดส่ง</h2>
              </header>
              <div className="p-5 space-y-3">
                <ShippingOption
                  icon={Truck}
                  label="ส่งถึงบ้าน (แนะนำ)"
                  sub="ฟรี · ถึงภายใน 2-3 วัน · ช่างมาติดตั้งให้ที่บ้าน"
                  priceLabel="ฟรี"
                  selected
                />
                <ShippingOption
                  icon={Truck}
                  label="ส่งด่วน (Same-day)"
                  sub="เฉพาะกรุงเทพ + ปริมณฑล · ถึงภายใน 4 ชม."
                  priceLabel="฿199"
                />
                <ShippingOption
                  icon={Store}
                  label="รับที่สาขา"
                  sub="สาขาลาดพร้าว · พร้อมรับได้ภายใน 2 ชม. (ฟรี)"
                  priceLabel="ฟรี"
                />
              </div>
              {/* Install schedule */}
              <div className="border-t border-neutral-100 p-5 bg-orange-50/40">
                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">นัดหมายช่างติดตั้ง</h3>
                    <p className="text-xs text-neutral-600 mb-3">ฟรีติดตั้งสำหรับแอร์ Aeris + ตู้เย็น Stella · เลือกวัน-เวลาที่สะดวก</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {["20 เม.ย. (9-12น.)", "20 เม.ย. (13-17น.)", "21 เม.ย. (9-12น.)", "21 เม.ย. (13-17น.)"].map((t, i) => (
                        <button key={t} className={`text-xs border rounded-lg px-3 py-2 transition ${i===0 ? "border-orange-500 bg-orange-50 text-orange-700 font-semibold" : "border-neutral-200 hover:border-orange-300"}`}>
                          <Calendar className="w-3.5 h-3.5 inline mr-1" /> {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3: Payment */}
            <section className="bg-white rounded-2xl border border-neutral-200">
              <header className="px-5 py-4 border-b border-neutral-100 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-primary-600 text-white grid place-items-center text-xs font-bold">3</span>
                <h2 className="font-display font-bold text-lg">วิธีชำระเงิน</h2>
              </header>
              <div className="p-5 space-y-3">
                <PaymentOption
                  icon={CreditCard}
                  label="บัตรเครดิต / เดบิต"
                  sub="VISA, Mastercard, JCB · ผ่อน 0% นาน 10 เดือน"
                  selected
                />
                {/* Installment plan (shown when CC selected) */}
                <div className="ml-8 -mt-1 space-y-2 pb-2">
                  <div className="text-xs font-semibold text-neutral-600">แผนผ่อน 0%</div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {[
                      { months: 0, label: "ชำระเต็ม" },
                      { months: 3, label: "3 เดือน" },
                      { months: 6, label: "6 เดือน" },
                      { months: 10, label: "10 เดือน", recommended: true },
                      { months: 12, label: "12 เดือน" },
                    ].map((p, i) => (
                      <button key={p.months} className={`relative border rounded-lg p-2.5 text-xs transition ${p.recommended ? "border-primary-600 bg-primary-50" : "border-neutral-200 hover:border-primary-300"}`}>
                        {p.recommended && <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">แนะนำ</span>}
                        <div className="font-semibold">{p.label}</div>
                        {p.months > 0 && (
                          <div className="text-primary-700 font-bold mt-0.5">฿{Math.ceil(total/p.months).toLocaleString()}/ด.</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <PaymentOption
                  icon={QrCode}
                  label="พร้อมเพย์ (QR Code)"
                  sub="สแกน QR ด้วยแอปธนาคาร · ได้รับส่วนลด 50฿"
                  badge="ลด 50฿"
                />
                <PaymentOption
                  icon={Wallet}
                  label="TrueMoney Wallet"
                  sub="ชำระผ่านแอป TrueMoney"
                />
                <PaymentOption
                  icon={Banknote}
                  label="เก็บเงินปลายทาง (COD)"
                  sub="จ่ายสดตอนรับสินค้า · ค่าบริการ 30฿"
                />
                <PaymentOption
                  icon={Building2}
                  label="โอนผ่านธนาคาร"
                  sub="โอนเงินและแจ้งชำระภายใน 24 ชม."
                />
              </div>
            </section>

            {/* Step 4: Review (already shown as summary on right) — add tax invoice option */}
            <section className="bg-white rounded-2xl border border-neutral-200">
              <header className="px-5 py-4 border-b border-neutral-100 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-primary-600 text-white grid place-items-center text-xs font-bold">4</span>
                <h2 className="font-display font-bold text-lg">ตัวเลือกเพิ่มเติม</h2>
              </header>
              <div className="p-5 space-y-3 text-sm">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 mt-0.5 accent-primary-600" />
                  <div className="flex-1">
                    <div className="font-medium">ขอใบกำกับภาษี / ใบเสร็จเต็มรูป</div>
                    <p className="text-xs text-neutral-500">เลือกเพื่อกรอกข้อมูลนิติบุคคล / ผู้เสียภาษี</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 mt-0.5 accent-primary-600" />
                  <div className="flex-1">
                    <div className="font-medium">ใช้ Homesphere Points</div>
                    <p className="text-xs text-neutral-500">คุณมี <b className="text-primary-700">1,250 points</b> · ใช้ได้ 100 points = 10฿</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 mt-0.5 accent-primary-600" />
                  <div className="flex-1">
                    <div className="font-medium">ซื้อเป็นของขวัญ</div>
                    <p className="text-xs text-neutral-500">ไม่แสดงราคาในใบส่ง · ห่อของขวัญฟรี · เพิ่มการ์ดข้อความ</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 mt-0.5 accent-primary-600" />
                  <div className="flex-1">
                    <div className="font-medium">โน้ตถึงผู้ส่ง</div>
                    <textarea rows={2} placeholder="เช่น ฝากไว้หน้าบ้านได้, โทร 081-xxx-xxxx ก่อนส่ง" className="mt-1.5 w-full border border-neutral-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-primary-400"></textarea>
                  </div>
                </label>
              </div>
            </section>

            {/* PDPA consent */}
            <div className="bg-white rounded-xl border border-neutral-200 p-4 flex items-start gap-3 text-sm">
              <input type="checkbox" defaultChecked className="mt-1 accent-primary-600" />
              <p className="text-xs text-neutral-600">
                ข้าพเจ้ายอมรับ <a href="/terms" className="text-primary-600 hover:underline">เงื่อนไขการใช้บริการ</a> และ <a href="/policy" className="text-primary-600 hover:underline">นโยบายความเป็นส่วนตัว</a> รวมถึงยินยอมให้ Homesphere เก็บและใช้ข้อมูลตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)
              </p>
            </div>
          </div>

          {/* Right — sticky summary */}
          <aside className="space-y-4 lg:sticky lg:top-32 lg:self-start">
            {/* Order summary */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-bold text-lg">สรุปคำสั่งซื้อ</h2>
                  <a href="/cart" className="text-xs text-primary-600 hover:underline">แก้ไข</a>
                </div>

                {/* Line items compact */}
                <ul className="space-y-3 pb-4 border-b border-neutral-100">
                  <CompactItem title="แอร์ Aeris 12000 BTU" variant="12,000 BTU · ขาว" price={9990} qty={1} />
                  <CompactItem title="ตู้เย็น Stella 7.6Q" variant="7.6 คิว · เงิน" price={8490} qty={1} />
                  <CompactItem title="โคมเพดาน Luma LED 24W" variant="24W · Warm" price={1990} qty={2} />
                </ul>

                <dl className="space-y-2 text-sm py-4 border-b border-dashed border-neutral-200">
                  <Row label={`ราคาสินค้า (${itemCount})`} value={`฿${subtotal.toLocaleString()}`} />
                  <Row label="ค่าจัดส่ง" value="ฟรี" />
                  <Row label="ค่าติดตั้ง" value="ฟรี" />
                  <Row label={<span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5 text-orange-500" /> WELCOME500</span>} value={`-฿${coupon.toLocaleString()}`} highlight />
                </dl>

                <div className="pt-4 flex items-center justify-between">
                  <span className="font-semibold">ยอดรวมสุทธิ</span>
                  <div className="text-right">
                    <div className="font-display font-extrabold text-2xl text-red-600">฿{total.toLocaleString()}</div>
                    <div className="text-xs text-neutral-500">รวม VAT</div>
                  </div>
                </div>

                <div className="mt-3 bg-gradient-to-r from-primary-50 to-orange-50 border border-primary-100 rounded-lg px-3 py-2 text-xs flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-primary-600" />
                  <span>ผ่อน 0% · 10 เดือน = <b className="text-primary-700">฿{Math.ceil(total/10).toLocaleString()}/ด.</b></span>
                </div>

                <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition">
                  ยืนยันคำสั่งซื้อ <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-[11px] text-neutral-500 text-center mt-2 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" /> ชำระปลอดภัย · SSL · PCI DSS
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white rounded-xl border border-neutral-200 p-4 text-sm">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-primary-600" />
                <span className="font-semibold">ต้องการความช่วยเหลือ?</span>
              </div>
              <ul className="text-xs text-neutral-600 space-y-1">
                <li>📞 โทร 1284 (24 ชม.)</li>
                <li>💬 Chat กับเรา</li>
                <li>📧 support@homesphere.co.th</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

/* ─────────────── address card ─────────────── */
function AddressCard({ name, phone, address, tag, selected = false }: {
  name: string; phone: string; address: string; tag: string; selected?: boolean;
}) {
  return (
    <label className={`block border-2 rounded-xl p-4 cursor-pointer transition ${selected ? "border-primary-600 bg-primary-50/30" : "border-neutral-200 hover:border-primary-300"}`}>
      <div className="flex items-start gap-3">
        <input type="radio" name="address" defaultChecked={selected} className="mt-1 accent-primary-600" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-4 h-4 text-primary-600" />
            <span className="font-semibold">{name}</span>
            <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded">{tag}</span>
            <span className="text-xs text-neutral-500">· {phone}</span>
          </div>
          <p className="text-sm text-neutral-600 pl-6">{address}</p>
        </div>
        <button className="text-xs text-primary-600 hover:underline shrink-0">แก้ไข</button>
      </div>
    </label>
  );
}

/* ─────────────── shipping option ─────────────── */
function ShippingOption({ icon: Icon, label, sub, priceLabel, selected = false }: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string; sub: string; priceLabel: string; selected?: boolean;
}) {
  return (
    <label className={`flex items-center gap-4 border-2 rounded-xl p-4 cursor-pointer transition ${selected ? "border-primary-600 bg-primary-50/30" : "border-neutral-200 hover:border-primary-300"}`}>
      <input type="radio" name="shipping" defaultChecked={selected} className="accent-primary-600" />
      <Icon className="w-6 h-6 text-primary-600" strokeWidth={1.8} />
      <div className="flex-1">
        <div className="font-semibold text-sm">{label}</div>
        <div className="text-xs text-neutral-500">{sub}</div>
      </div>
      <span className={`font-semibold ${priceLabel === "ฟรี" ? "text-green-600" : "text-neutral-700"}`}>{priceLabel}</span>
    </label>
  );
}

/* ─────────────── payment option ─────────────── */
function PaymentOption({ icon: Icon, label, sub, selected = false, badge }: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string; sub: string; selected?: boolean; badge?: string;
}) {
  return (
    <label className={`flex items-center gap-4 border-2 rounded-xl p-4 cursor-pointer transition ${selected ? "border-primary-600 bg-primary-50/30" : "border-neutral-200 hover:border-primary-300"}`}>
      <input type="radio" name="payment" defaultChecked={selected} className="accent-primary-600" />
      <Icon className="w-6 h-6 text-primary-600" strokeWidth={1.8} />
      <div className="flex-1">
        <div className="font-semibold text-sm flex items-center gap-2">
          {label}
          {badge && <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded">{badge}</span>}
        </div>
        <div className="text-xs text-neutral-500">{sub}</div>
      </div>
    </label>
  );
}

/* ─────────────── helpers ─────────────── */
function CompactItem({ title, variant, price, qty }: { title: string; variant: string; price: number; qty: number }) {
  return (
    <li className="flex items-start gap-3 text-sm">
      <div className="w-10 h-10 rounded-lg bg-neutral-100 grid place-items-center text-[10px] font-mono text-neutral-500 shrink-0">×{qty}</div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-xs line-clamp-1">{title}</div>
        <div className="text-[11px] text-neutral-500">{variant}</div>
      </div>
      <div className="font-semibold text-xs whitespace-nowrap">฿{(price*qty).toLocaleString()}</div>
    </li>
  );
}

function Row({ label, value, highlight = false }: { label: React.ReactNode; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-neutral-600">{label}</dt>
      <dd className={highlight ? "text-red-600 font-medium" : "font-medium"}>{value}</dd>
    </div>
  );
}
