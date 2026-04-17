import Link from "next/link";
import { HousePlug, Search, ArrowLeft, Home, ShoppingBag, Flame } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-orange-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center">
        {/* Big 404 */}
        <div className="relative inline-block mb-8">
          <div className="font-display font-black text-[10rem] leading-none text-primary-600 opacity-10 select-none">404</div>
          <div className="absolute inset-0 grid place-items-center">
            <span className="w-24 h-24 rounded-3xl bg-primary-600 text-white grid place-items-center shadow-xl">
              <HousePlug className="w-12 h-12" strokeWidth={2} />
            </span>
          </div>
        </div>

        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-neutral-900">หน้าที่คุณหาไม่พบ</h1>
        <p className="text-neutral-600 mt-3 max-w-md mx-auto">
          อาจเป็นเพราะลิงก์เสีย · URL ผิด · หรือหน้าถูกลบแล้ว · ลองค้นหาสิ่งที่ต้องการ หรือกลับหน้าแรก
        </p>

        {/* Search */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="ค้นหาสินค้า, แบรนด์, หมวดหมู่..."
              className="w-full pl-12 pr-4 py-3.5 border-2 border-primary-200 rounded-full text-base outline-none focus:border-primary-500 bg-white"
            />
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto">
          <QuickLink href="/" icon={Home} label="หน้าแรก" />
          <QuickLink href="/category/appliances" icon={ShoppingBag} label="หมวดสินค้า" />
          <QuickLink href="/flash-sale" icon={Flame} label="Flash Sale" accent />
        </div>

        <Link href="/" className="mt-8 inline-flex items-center gap-2 text-sm text-primary-600 hover:underline">
          <ArrowLeft className="w-4 h-4" /> กลับหน้าแรก
        </Link>
      </div>
    </main>
  );
}

function QuickLink({ href, icon: Icon, label, accent }: { href: string; icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string; accent?: boolean }) {
  return (
    <Link href={href} className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition ${accent ? "bg-red-50 border-red-200 text-red-700 hover:bg-red-100" : "bg-white border-neutral-200 hover:border-primary-300 hover:bg-primary-50 text-neutral-700"}`}>
      <Icon className="w-6 h-6" strokeWidth={1.8} />
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
}
