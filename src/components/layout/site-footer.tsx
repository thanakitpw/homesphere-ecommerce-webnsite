import { Mail, HousePlug } from "lucide-react";
import { IconFacebook, IconInstagram, IconLine, IconYoutube } from "@/components/icons/brand";

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-white/60">
        {links.map((l) => (
          <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-neutral-900 text-white mt-10">
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Mail className="w-10 h-10 text-orange-400" strokeWidth={1.5} />
            <div>
              <h3 className="font-display font-bold text-lg">รับส่วนลดและโปรใหม่ก่อนใคร</h3>
              <p className="text-sm text-white/70">สมัคร Newsletter ลด 10% ครั้งแรก</p>
            </div>
          </div>
          <form className="flex w-full md:w-auto max-w-md">
            <input type="email" placeholder="your-email@example.com" className="flex-1 px-4 py-2.5 rounded-l-lg bg-white text-neutral-900 text-sm outline-none min-w-[260px]" />
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2.5 rounded-r-lg font-semibold text-sm">สมัครเลย</button>
          </form>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-xl mb-3">
            <span className="w-8 h-8 rounded-lg bg-primary-600 grid place-items-center">
              <HousePlug className="w-4 h-4" strokeWidth={2.5} />
            </span>
            Homesphere
          </div>
          <p className="text-white/60 text-sm mb-4 max-w-xs leading-relaxed">
            ศูนย์รวมของบ้านครบครัน — เครื่องใช้ไฟฟ้า เฟอร์นิเจอร์ ห้องน้ำ เครื่องมือช่าง พร้อมบริการติดตั้งและส่งถึงบ้าน
          </p>
          <div className="flex gap-3">
            {[IconFacebook, IconInstagram, IconLine, IconYoutube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange-500 grid place-items-center transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="ช้อปปิ้ง" links={["หมวดหมู่ทั้งหมด","โปรโมชั่น","Flash Sale","Homesphere Card","ค้นหาสาขา"]} />
        <FooterCol title="บริการลูกค้า" links={["ช่วยเหลือ","ติดต่อเรา","การจัดส่ง","คืนสินค้า","ประกันและบริการ"]} />
        <FooterCol title="เกี่ยวกับ" links={["เกี่ยวกับเรา","ข่าวสาร","ร่วมงานกับเรา","นโยบายความเป็นส่วนตัว","เงื่อนไขการใช้งาน"]} />
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>© 2026 Homesphere. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <span>ชำระเงิน:</span>
            {["VISA","MASTER","JCB","PROMPT","COD"].map((p) => (
              <span key={p} className="px-2 py-1 rounded bg-white/10 font-mono font-semibold">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
