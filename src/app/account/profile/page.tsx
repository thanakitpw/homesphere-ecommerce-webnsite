import { User, Mail, Phone, Calendar, Globe, Camera, Shield, Lock, Bell, Smartphone } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-5 max-w-3xl">
      <header className="bg-white rounded-2xl border border-neutral-200 p-5">
        <h1 className="font-display font-bold text-2xl flex items-center gap-2">
          <User className="w-6 h-6 text-primary-600" /> ข้อมูลส่วนตัว
        </h1>
        <p className="text-sm text-neutral-500 mt-1">จัดการโปรไฟล์ · การแจ้งเตือน · ความปลอดภัย</p>
      </header>

      {/* Avatar */}
      <section className="bg-white rounded-2xl border border-neutral-200 p-5">
        <div className="flex items-center gap-5 flex-wrap">
          <div className="relative">
            <span className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white grid place-items-center font-display font-bold text-2xl">ส</span>
            <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-white border border-neutral-200 grid place-items-center hover:bg-primary-50 hover:border-primary-300" aria-label="Change avatar">
              <Camera className="w-3.5 h-3.5 text-neutral-600" />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-lg">สมชาย ใจดี</h2>
            <p className="text-sm text-neutral-500">somchai@email.com · Gold Member</p>
          </div>
          <button className="text-sm border border-neutral-200 px-3 py-2 rounded-lg hover:border-primary-300">เปลี่ยนรูป</button>
        </div>
      </section>

      {/* Personal info form */}
      <section className="bg-white rounded-2xl border border-neutral-200">
        <header className="px-5 py-4 border-b border-neutral-100">
          <h3 className="font-display font-bold text-base">ข้อมูลทั่วไป</h3>
        </header>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="ชื่อ" icon={User} defaultValue="สมชาย" />
            <Field label="นามสกุล" icon={User} defaultValue="ใจดี" />
          </div>
          <Field label="อีเมล" icon={Mail} type="email" defaultValue="somchai@email.com" verified />
          <Field label="เบอร์โทรศัพท์" icon={Phone} type="tel" defaultValue="081-234-5678" verified />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="วันเกิด" icon={Calendar} type="date" defaultValue="1992-03-15" />
            <div>
              <label className="text-sm font-medium block mb-1.5">เพศ</label>
              <select className="w-full border border-neutral-200 rounded-xl px-3 py-3 text-sm outline-none focus:border-primary-400">
                <option>ชาย</option>
                <option>หญิง</option>
                <option>อื่น ๆ / ไม่ระบุ</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5 flex items-center gap-1"><Globe className="w-4 h-4" /> ภาษา</label>
            <div className="flex gap-2">
              <button className="flex-1 border-2 border-primary-600 bg-primary-50 text-primary-700 py-2.5 rounded-lg text-sm font-semibold">ไทย</button>
              <button className="flex-1 border-2 border-neutral-200 hover:border-primary-300 py-2.5 rounded-lg text-sm">English</button>
            </div>
          </div>
          <div className="pt-2">
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-2.5 rounded-lg">บันทึกการเปลี่ยนแปลง</button>
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="bg-white rounded-2xl border border-neutral-200">
        <header className="px-5 py-4 border-b border-neutral-100">
          <h3 className="font-display font-bold text-base flex items-center gap-2"><Bell className="w-4 h-4" /> การแจ้งเตือน</h3>
        </header>
        <ul className="divide-y divide-neutral-100">
          <NotifRow title="อัปเดตคำสั่งซื้อ" sub="สถานะการจัดส่ง, การชำระเงิน, การยกเลิก" email sms push />
          <NotifRow title="โปรโมชั่นและ Flash Sale" sub="ส่วนลดพิเศษ, deal ใหม่" email push />
          <NotifRow title="ข่าวสาร Homesphere" sub="บล็อก, tips, newsletter" email />
          <NotifRow title="ความปลอดภัยบัญชี" sub="ล็อกอินจากอุปกรณ์ใหม่" email sms push />
        </ul>
      </section>

      {/* Security */}
      <section className="bg-white rounded-2xl border border-neutral-200">
        <header className="px-5 py-4 border-b border-neutral-100">
          <h3 className="font-display font-bold text-base flex items-center gap-2"><Shield className="w-4 h-4" /> ความปลอดภัย</h3>
        </header>
        <ul className="divide-y divide-neutral-100">
          <SecurityRow icon={Lock} title="รหัสผ่าน" sub="เปลี่ยนล่าสุด 3 เดือนที่แล้ว" action="เปลี่ยนรหัสผ่าน" />
          <SecurityRow icon={Smartphone} title="การยืนยันตัวตน 2 ขั้น (2FA)" sub="ยังไม่เปิดใช้งาน" action="ตั้งค่า" warn />
          <SecurityRow icon={Shield} title="อุปกรณ์ที่ล็อกอิน" sub="3 อุปกรณ์ (iPhone, MacBook, Windows)" action="ดูรายการ" />
        </ul>
      </section>

      {/* Danger zone */}
      <section className="bg-white rounded-2xl border border-red-200">
        <header className="px-5 py-4 border-b border-red-100 bg-red-50">
          <h3 className="font-display font-bold text-base text-red-800">Danger Zone</h3>
        </header>
        <div className="p-5 flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="font-semibold text-sm">ปิดบัญชี</div>
            <p className="text-xs text-neutral-500 mt-0.5">การปิดบัญชีเป็นการถาวร · ข้อมูลจะถูกลบใน 30 วัน</p>
          </div>
          <button className="text-sm text-red-600 border border-red-200 hover:bg-red-50 px-4 py-2 rounded-lg font-medium">ปิดบัญชี</button>
        </div>
      </section>
    </div>
  );
}

function Field({ label, icon: Icon, type = "text", defaultValue, verified }: {
  label: string; icon: React.ComponentType<{ className?: string }>; type?: string; defaultValue?: string; verified?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium block mb-1.5">{label}</span>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          type={type} defaultValue={defaultValue}
          className="w-full border border-neutral-200 rounded-xl pl-10 pr-20 py-3 text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        />
        {verified && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">
            ✓ VERIFIED
          </span>
        )}
      </div>
    </label>
  );
}

function NotifRow({ title, sub, email, sms, push }: { title: string; sub: string; email?: boolean; sms?: boolean; push?: boolean }) {
  return (
    <li className="p-5 flex items-center gap-4 flex-wrap">
      <div className="flex-1 min-w-[200px]">
        <div className="font-medium text-sm">{title}</div>
        <div className="text-xs text-neutral-500 mt-0.5">{sub}</div>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <Toggle label="Email" on={email} />
        <Toggle label="SMS" on={sms} />
        <Toggle label="Push" on={push} />
      </div>
    </li>
  );
}

function Toggle({ label, on = false }: { label: string; on?: boolean }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <span className="text-neutral-600 min-w-[40px]">{label}</span>
      <span className={`relative w-10 h-5 rounded-full transition ${on ? "bg-primary-600" : "bg-neutral-300"}`}>
        <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition ${on ? "left-5" : "left-0.5"}`} />
      </span>
    </label>
  );
}

function SecurityRow({ icon: Icon, title, sub, action, warn }: { icon: React.ComponentType<{ className?: string }>; title: string; sub: string; action: string; warn?: boolean }) {
  return (
    <li className="p-5 flex items-center gap-4 flex-wrap">
      <Icon className={`w-5 h-5 shrink-0 ${warn ? "text-orange-500" : "text-neutral-500"}`} />
      <div className="flex-1 min-w-[180px]">
        <div className="font-medium text-sm">{title}</div>
        <div className={`text-xs mt-0.5 ${warn ? "text-orange-600" : "text-neutral-500"}`}>{sub}</div>
      </div>
      <button className="text-sm border border-neutral-200 hover:border-primary-300 px-3 py-1.5 rounded-lg font-medium">{action}</button>
    </li>
  );
}
