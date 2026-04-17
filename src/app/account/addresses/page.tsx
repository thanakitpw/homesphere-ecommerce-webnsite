import { MapPin, Plus, Edit, Trash2, Home, Briefcase, Star } from "lucide-react";

const ADDRESSES = [
  { id: "1", tag: "บ้าน", icon: Home, name: "สมชาย ใจดี", phone: "081-234-5678", line: "123/45 ถ.สุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110", isDefaultShipping: true, isDefaultBilling: true },
  { id: "2", tag: "ที่ทำงาน", icon: Briefcase, name: "สมชาย ใจดี", phone: "081-234-5678", line: "99/1 อาคารเซ็นทรัลเวิลด์ ชั้น 22 ถ.ราชดำริ แขวงปทุมวัน เขตปทุมวัน กรุงเทพฯ 10330" },
  { id: "3", tag: "บ้านที่เชียงใหม่", icon: Home, name: "สมชาย ใจดี", phone: "081-234-5678", line: "77/8 หมู่ 4 ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200" },
];

export default function AddressesPage() {
  return (
    <div className="space-y-5">
      <header className="bg-white rounded-2xl border border-neutral-200 p-5 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display font-bold text-2xl flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary-600" /> ที่อยู่
          </h1>
          <p className="text-sm text-neutral-500 mt-1">จัดการที่อยู่สำหรับจัดส่งและออกใบกำกับภาษี · สูงสุด 10 ที่</p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2">
          <Plus className="w-4 h-4" /> เพิ่มที่อยู่ใหม่
        </button>
      </header>

      {/* Address cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ADDRESSES.map((a) => (
          <article key={a.id} className="bg-white border border-neutral-200 rounded-2xl p-5 hover:border-primary-300 transition">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 grid place-items-center shrink-0">
                <a.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded font-semibold">{a.tag}</span>
                  {a.isDefaultShipping && (
                    <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold inline-flex items-center gap-0.5">
                      <Star className="w-2.5 h-2.5 fill-orange-600" /> DEFAULT SHIPPING
                    </span>
                  )}
                  {a.isDefaultBilling && (
                    <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">DEFAULT BILLING</span>
                  )}
                </div>
                <h3 className="font-semibold mt-1">{a.name}</h3>
                <p className="text-xs text-neutral-500">{a.phone}</p>
              </div>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed pl-13">{a.line}</p>
            <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div className="flex gap-2">
                <button className="text-sm border border-neutral-200 hover:border-primary-300 px-3 py-1.5 rounded-lg inline-flex items-center gap-1">
                  <Edit className="w-3.5 h-3.5" /> แก้ไข
                </button>
                {!a.isDefaultShipping && (
                  <button className="text-sm border border-neutral-200 hover:border-orange-300 px-3 py-1.5 rounded-lg">
                    ตั้งเป็น default
                  </button>
                )}
              </div>
              <button className="text-sm text-neutral-400 hover:text-red-500 p-1.5" aria-label="ลบ">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}

        {/* Add new placeholder */}
        <button className="border-2 border-dashed border-neutral-300 rounded-2xl p-5 min-h-[200px] flex flex-col items-center justify-center gap-2 hover:border-primary-400 hover:bg-primary-50/30 text-neutral-500 hover:text-primary-600 transition">
          <Plus className="w-10 h-10" strokeWidth={1.5} />
          <span className="text-sm font-medium">เพิ่มที่อยู่ใหม่</span>
        </button>
      </div>

      {/* Info */}
      <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 text-sm flex items-start gap-3">
        <MapPin className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
        <div>
          <p className="font-semibold text-primary-900">เคล็ดลับ</p>
          <p className="text-xs text-neutral-600 mt-0.5">ตั้งที่อยู่ default เพื่อให้ checkout เร็วขึ้น · เลือก default ต่างระหว่าง shipping/billing ได้</p>
        </div>
      </div>
    </div>
  );
}
