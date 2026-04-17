import { MapPin, Phone, Clock, Search, Navigation, Store, Check, X } from "lucide-react";
import { AnnouncementBar, SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const STORES = [
  {
    id: "bkk-ladprao", name: "Homesphere ลาดพร้าว",
    address: "999 ถ.ลาดพร้าว แขวงวังทองหลาง เขตวังทองหลาง กรุงเทพฯ 10310",
    phone: "02-123-4567", distance: "2.4 km",
    hours: { today: "10:00 - 22:00", status: "open" as const },
    services: { pickup: true, repair: true, consultation: true, installation: true },
    parking: true, featured: true,
  },
  {
    id: "bkk-rama9", name: "Homesphere พระราม 9",
    address: "123 อาคารเซ็นทรัลพระราม 9 ชั้น 3 ถ.พระราม 9 แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310",
    phone: "02-234-5678", distance: "5.1 km",
    hours: { today: "10:00 - 22:00", status: "open" as const },
    services: { pickup: true, repair: false, consultation: true, installation: true },
    parking: true,
  },
  {
    id: "chiangmai-central", name: "Homesphere เชียงใหม่",
    address: "456 ถ.ช้างคลาน ต.ช้างคลาน อ.เมือง จ.เชียงใหม่ 50100",
    phone: "053-123-456", distance: "712 km",
    hours: { today: "10:00 - 21:00", status: "open" as const },
    services: { pickup: true, repair: true, consultation: true, installation: false },
    parking: true,
  },
  {
    id: "phuket-town", name: "Homesphere ภูเก็ต",
    address: "789 ถ.วิชิตสงคราม ต.วิชิต อ.เมือง จ.ภูเก็ต 83000",
    phone: "076-123-456", distance: "862 km",
    hours: { today: "10:00 - 21:00", status: "closing-soon" as const },
    services: { pickup: true, repair: false, consultation: true, installation: true },
    parking: false,
  },
];

export default function StoresPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main className="flex-1 w-full bg-neutral-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 text-white">
          <div className="max-w-[1440px] mx-auto px-6 py-10">
            <div className="flex items-center gap-5 flex-wrap">
              <Store className="w-14 h-14 opacity-90" strokeWidth={1.5} />
              <div className="flex-1 min-w-[260px]">
                <h1 className="font-display font-extrabold text-3xl">ค้นหาสาขา</h1>
                <p className="text-white/80 text-sm mt-1">Homesphere มี 120+ สาขาทั่วไทย · รับของที่สาขา ฟรีค่าส่ง · เปิดทุกวัน 10:00-22:00</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <Stat n="120+" label="สาขา" />
                <Stat n="77" label="จังหวัด" />
                <Stat n="24/7" label="Call Center" />
              </div>
            </div>
          </div>
        </section>

        {/* Search + filter */}
        <section className="max-w-[1440px] mx-auto px-6 -mt-6">
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-4 flex items-center gap-3 flex-wrap">
            <div className="flex-1 relative min-w-[250px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input type="text" placeholder="ค้นหาสาขา / จังหวัด / รหัสไปรษณีย์..." className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-xl text-sm outline-none focus:border-primary-400" />
            </div>
            <select className="px-3 py-2.5 border border-neutral-200 rounded-xl text-sm outline-none bg-white">
              <option>ทุกจังหวัด</option>
              <option>กรุงเทพฯ</option>
              <option>เชียงใหม่</option>
              <option>ภูเก็ต</option>
              <option>ขอนแก่น</option>
            </select>
            <button className="px-4 py-2.5 bg-primary-600 text-white rounded-xl font-medium text-sm inline-flex items-center gap-2 hover:bg-primary-700">
              <Navigation className="w-4 h-4" /> ใช้ตำแหน่งปัจจุบัน
            </button>
          </div>
        </section>

        {/* Map + list */}
        <section className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          {/* Map placeholder */}
          <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden relative min-h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-50 grid place-items-center">
              <div className="text-center text-neutral-500">
                <MapPin className="w-16 h-16 mx-auto mb-3 text-primary-400" strokeWidth={1.5} />
                <div className="font-semibold">แผนที่สาขา</div>
                <div className="text-xs mt-1">(Integration กับ Google Maps / Longdo Maps ใน production)</div>
              </div>
            </div>
            {/* Mock pins */}
            {[
              { top: "30%", left: "45%" },
              { top: "38%", left: "52%" },
              { top: "18%", left: "40%" },
              { top: "68%", left: "35%" },
            ].map((p, i) => (
              <div key={i} className="absolute" style={p}>
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white grid place-items-center ring-4 ring-white shadow-lg animate-pulse">
                  <MapPin className="w-4 h-4" strokeWidth={2.5} />
                </div>
              </div>
            ))}
          </div>

          {/* Store list */}
          <aside className="space-y-3">
            <div className="text-sm text-neutral-600">พบ <b className="text-neutral-900">{STORES.length}</b> สาขา · เรียงตามระยะทาง</div>
            {STORES.map((s) => <StoreCard key={s.id} {...s} />)}
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl px-3 py-2 min-w-[80px]">
      <div className="font-display font-extrabold text-xl">{n}</div>
      <div className="text-[10px] text-white/70">{label}</div>
    </div>
  );
}

function StoreCard({ name, address, phone, distance, hours, services, parking, featured }: {
  name: string; address: string; phone: string; distance: string;
  hours: { today: string; status: "open" | "closing-soon" | "closed" };
  services: { pickup: boolean; repair: boolean; consultation: boolean; installation: boolean };
  parking?: boolean; featured?: boolean;
}) {
  const statusMap = {
    open: { label: "เปิด", color: "bg-green-100 text-green-700" },
    "closing-soon": { label: "ใกล้ปิด", color: "bg-orange-100 text-orange-700" },
    closed: { label: "ปิดแล้ว", color: "bg-red-100 text-red-700" },
  };
  const st = statusMap[hours.status];

  return (
    <article className={`bg-white rounded-2xl border p-4 hover:border-primary-300 hover:shadow-md transition ${featured ? "border-primary-300 ring-2 ring-primary-100" : "border-neutral-200"}`}>
      {featured && (
        <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider inline-block mb-2">Featured · ใกล้คุณที่สุด</span>
      )}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display font-bold text-base">{name}</h3>
        <span className="text-xs text-primary-600 font-semibold whitespace-nowrap">{distance}</span>
      </div>
      <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed line-clamp-2">{address}</p>
      <div className="mt-3 flex items-center gap-2 flex-wrap text-xs">
        <span className={`${st.color} px-2 py-0.5 rounded font-semibold inline-flex items-center gap-1`}>
          <Clock className="w-3 h-3" /> {st.label}
        </span>
        <span className="text-neutral-500">{hours.today}</span>
      </div>

      {/* Services */}
      <div className="mt-3 flex flex-wrap gap-1">
        {services.pickup && <ServiceChip label="รับที่สาขา" on />}
        {services.repair && <ServiceChip label="ศูนย์ซ่อม" on />}
        {services.consultation && <ServiceChip label="ที่ปรึกษา" on />}
        {services.installation && <ServiceChip label="ติดตั้ง" on />}
        {parking && <ServiceChip label="ที่จอดรถ" on />}
      </div>

      {/* CTAs */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <a href={`tel:${phone.replace(/-/g,"")}`} className="text-xs border border-neutral-200 hover:border-primary-300 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-1">
          <Phone className="w-3.5 h-3.5" /> {phone}
        </a>
        <button className="text-xs bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-semibold inline-flex items-center justify-center gap-1">
          <Navigation className="w-3.5 h-3.5" /> เส้นทาง
        </button>
      </div>
    </article>
  );
}

function ServiceChip({ label, on }: { label: string; on: boolean }) {
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded font-medium inline-flex items-center gap-0.5 ${on ? "bg-neutral-100 text-neutral-700" : "bg-neutral-50 text-neutral-400 line-through"}`}>
      {on ? <Check className="w-2.5 h-2.5" /> : <X className="w-2.5 h-2.5" />} {label}
    </span>
  );
}
