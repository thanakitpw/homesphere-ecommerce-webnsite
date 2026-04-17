import Link from "next/link";
import { HousePlug, ArrowLeft, Shield, BadgeCheck, Truck } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left — promo panel */}
      <aside className="relative hidden lg:flex flex-col bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 text-white p-12 overflow-hidden">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-2xl relative z-10">
          <span className="w-10 h-10 rounded-xl bg-white text-primary-700 grid place-items-center">
            <HousePlug className="w-6 h-6" strokeWidth={2.5} />
          </span>
          Homesphere
        </Link>

        <div className="mt-auto relative z-10 max-w-md">
          <span className="text-orange-400 font-semibold text-sm mb-2 inline-block tracking-wider">WELCOME TO HOMESPHERE</span>
          <h1 className="font-display font-extrabold text-4xl leading-tight mb-4">
            ทุกอย่างสำหรับบ้าน<br />ในที่เดียว
          </h1>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            สมัครสมาชิกวันนี้ รับคูปอง ฿500 ฟรี + รับส่วนลดและโปรพิเศษก่อนใคร
          </p>

          <div className="space-y-3 text-sm">
            <Feature icon={BadgeCheck} label="รับคูปอง ฿500 ทันที" sub="ใช้กับออร์เดอร์แรก (ขั้นต่ำ ฿3,000)" />
            <Feature icon={Truck} label="ส่งฟรีในกรุงเทพ" sub="ไม่ขั้นต่ำ · ถึงภายใน 2-3 วัน" />
            <Feature icon={Shield} label="ประกันสินค้า 1 ปี" sub="ของแท้ 100% · คืนสินค้าได้ 14 วัน" />
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      </aside>

      {/* Right — form */}
      <main className="flex flex-col bg-neutral-50 min-h-screen">
        <header className="px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-neutral-600 hover:text-primary-600">
            <ArrowLeft className="w-4 h-4" /> กลับหน้าแรก
          </Link>
          <Link href="/" className="lg:hidden flex items-center gap-2 font-display font-bold text-xl text-primary-700">
            <span className="w-7 h-7 rounded-lg bg-primary-600 text-white grid place-items-center">
              <HousePlug className="w-4 h-4" strokeWidth={2.5} />
            </span>
            Homesphere
          </Link>
        </header>
        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <div className="w-full max-w-md">{children}</div>
        </div>
        <footer className="px-6 py-5 text-center text-xs text-neutral-500">
          © 2026 Homesphere · <Link href="/terms" className="hover:underline">ข้อตกลง</Link> · <Link href="/policy" className="hover:underline">นโยบายความเป็นส่วนตัว</Link>
        </footer>
      </main>
    </div>
  );
}

function Feature({ icon: Icon, label, sub }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string; sub: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-8 h-8 rounded-lg bg-white/10 grid place-items-center shrink-0">
        <Icon className="w-4 h-4 text-orange-400" strokeWidth={2} />
      </span>
      <div>
        <div className="font-semibold">{label}</div>
        <div className="text-white/60 text-xs">{sub}</div>
      </div>
    </div>
  );
}
