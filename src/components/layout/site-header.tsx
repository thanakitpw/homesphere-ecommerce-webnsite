import {
  Zap, Clock, Phone, Globe, ChevronDown, Search, Heart, User,
  ShoppingCart, MapPin, Menu, Flame, Truck, HousePlug,
} from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-primary-900 text-white text-xs">
      <div className="max-w-[1440px] mx-auto px-6 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-orange-400">
            <Zap className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span className="font-medium">Flash Sale สิ้นสุดใน</span>
          </span>
          <span className="flex items-center gap-1.5 font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>23 : 59 : 42</span>
          </span>
          <span className="hidden md:inline text-white/80">ลดสูงสุด 50%</span>
        </div>
        <div className="hidden md:flex items-center gap-5 text-white/80">
          <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> ช่วยเหลือ 1284</span>
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> ค้นหาสาขา</span>
          <button className="flex items-center gap-1 hover:text-white">
            <Globe className="w-3.5 h-3.5" /> TH <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

function IconBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center gap-0.5 px-2 text-xs hover:text-primary-600">
      {icon}<span>{label}</span>
    </button>
  );
}

export function SiteHeader() {
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-30">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center gap-6">
        <a href="/" className="flex items-center gap-2 font-display font-bold text-2xl text-primary-700">
          <span className="w-9 h-9 rounded-lg bg-primary-600 text-white grid place-items-center">
            <HousePlug className="w-5 h-5" strokeWidth={2.5} />
          </span>
          Homesphere
        </a>
        <div className="flex-1 flex items-center rounded-full border-2 border-primary-600 overflow-hidden">
          <select className="pl-4 pr-2 py-2.5 bg-primary-50 text-primary-700 text-sm font-medium border-r border-primary-200 outline-none">
            <option>ทุกหมวด</option>
          </select>
          <input type="text" placeholder="ค้นหาสินค้า, แบรนด์ หรือหมวดหมู่…" className="flex-1 px-4 py-2.5 text-sm outline-none" />
          <button className="px-5 py-2.5 bg-primary-600 text-white"><Search className="w-5 h-5" /></button>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 text-sm">
          <Truck className="w-4 h-4 text-primary-600" />
          <div className="leading-tight">
            <div className="text-[11px] text-neutral-500">จัดส่งที่</div>
            <div className="font-medium">กรุงเทพฯ</div>
          </div>
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        </div>
        <div className="flex items-center gap-4 text-neutral-700">
          <IconBtn icon={<Heart className="w-5 h-5" />} label="ถูกใจ" />
          <IconBtn icon={<User className="w-5 h-5" />} label="บัญชี" />
          <div className="relative">
            <IconBtn icon={<ShoppingCart className="w-5 h-5" />} label="ตะกร้า" />
            <span className="absolute -top-1 right-3 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] grid place-items-center font-bold">3</span>
          </div>
        </div>
      </div>
      <nav className="border-t border-neutral-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 flex items-center gap-1 overflow-x-auto no-scrollbar">
          <button className="flex items-center gap-2 px-4 py-3 bg-primary-600 text-white text-sm font-medium">
            <Menu className="w-4 h-4" /> หมวดหมู่ทั้งหมด
          </button>
          {["เครื่องใช้ไฟฟ้า","เฟอร์นิเจอร์","ห้องน้ำ","ห้องครัว","ไฟและโคมไฟ","สมาร์ทโฮม","เครื่องมือช่าง"].map((c) => (
            <a key={c} href="#" className="px-3 py-3 text-sm text-neutral-700 hover:text-primary-600 whitespace-nowrap">{c}</a>
          ))}
          <a href="/flash-sale" className="ml-auto px-3 py-3 text-sm font-semibold text-red-500 flex items-center gap-1 whitespace-nowrap">
            <Flame className="w-4 h-4" /> FLASH SALE
          </a>
        </div>
      </nav>
    </header>
  );
}
