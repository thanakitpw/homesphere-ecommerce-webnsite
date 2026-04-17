import Link from "next/link";
import {
  User, Package, MapPin, Heart, Bell, CreditCard,
  Settings, LogOut, BadgeCheck, Wallet, Ticket,
} from "lucide-react";
import { AnnouncementBar, SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const NAV = [
  { section: "บัญชีของฉัน", items: [
    { href: "/account", icon: User, label: "ภาพรวม" },
    { href: "/account/orders", icon: Package, label: "คำสั่งซื้อ", badge: "3" },
    { href: "/account/addresses", icon: MapPin, label: "ที่อยู่" },
    { href: "/account/wishlist", icon: Heart, label: "ถูกใจ", badge: "12" },
  ]},
  { section: "Homesphere Card", items: [
    { href: "/account/points", icon: BadgeCheck, label: "Points & Tier", hint: "Gold" },
    { href: "/account/coupons", icon: Ticket, label: "คูปอง", badge: "5" },
    { href: "/account/wallet", icon: Wallet, label: "Wallet & ผ่อนชำระ" },
  ]},
  { section: "ตั้งค่า", items: [
    { href: "/account/profile", icon: Settings, label: "ข้อมูลส่วนตัว" },
    { href: "/account/payment-methods", icon: CreditCard, label: "บัตร & การชำระ" },
    { href: "/account/notifications", icon: Bell, label: "การแจ้งเตือน" },
  ]},
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main className="flex-1 bg-neutral-50">
        <div className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="space-y-4">
            {/* User card */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-5">
              <div className="flex items-center gap-3">
                <span className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white grid place-items-center font-display font-bold text-xl">ส</span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">สมชาย ใจดี</div>
                  <div className="text-xs text-neutral-500 truncate">somchai@email.com</div>
                  <span className="inline-flex items-center gap-1 text-[10px] bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-0.5 rounded mt-1 font-bold">
                    <BadgeCheck className="w-3 h-3" /> GOLD MEMBER
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-100 grid grid-cols-3 gap-2 text-center text-xs">
                <Link href="/account/orders" className="block">
                  <div className="font-bold text-primary-700">24</div>
                  <div className="text-neutral-500">คำสั่งซื้อ</div>
                </Link>
                <Link href="/account/points" className="block">
                  <div className="font-bold text-orange-600">1,250</div>
                  <div className="text-neutral-500">Points</div>
                </Link>
                <Link href="/account/coupons" className="block">
                  <div className="font-bold text-primary-700">5</div>
                  <div className="text-neutral-500">คูปอง</div>
                </Link>
              </div>
            </div>

            {/* Nav */}
            <nav className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
              {NAV.map((sec, si) => (
                <div key={si} className={si > 0 ? "border-t border-neutral-100" : ""}>
                  <div className="px-5 pt-4 pb-2 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">{sec.section}</div>
                  <ul>
                    {sec.items.map((n) => (
                      <li key={n.href}>
                        <Link href={n.href} className="flex items-center gap-3 px-5 py-2.5 text-sm hover:bg-primary-50 hover:text-primary-700 transition">
                          <n.icon className="w-4 h-4 text-neutral-500" />
                          <span className="flex-1">{n.label}</span>
                          {n.badge && (
                            <span className="text-[10px] bg-primary-100 text-primary-700 px-1.5 py-0.5 rounded font-bold">{n.badge}</span>
                          )}
                          {n.hint && (
                            <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">{n.hint}</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="border-t border-neutral-100 px-5 py-3">
                <button className="flex items-center gap-3 text-sm text-red-600 hover:text-red-700 w-full">
                  <LogOut className="w-4 h-4" /> ออกจากระบบ
                </button>
              </div>
            </nav>

            {/* Help card */}
            <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 text-xs">
              <div className="font-semibold text-primary-900 mb-1">ต้องการความช่วยเหลือ?</div>
              <p className="text-neutral-600 mb-2">Call Center 24 ชม. ช่วยได้ทุกเรื่อง</p>
              <a href="tel:1284" className="font-semibold text-primary-600">📞 1284</a>
            </div>
          </aside>

          {/* Content */}
          <section>{children}</section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
