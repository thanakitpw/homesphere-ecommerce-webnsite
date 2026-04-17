"use client";

import Link from "next/link";
import { AlertCircle, RefreshCcw, Home, Phone } from "lucide-react";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full text-center">
        <div className="inline-block mb-6">
          <span className="w-20 h-20 rounded-3xl bg-red-100 text-red-600 grid place-items-center">
            <AlertCircle className="w-10 h-10" strokeWidth={2} />
          </span>
        </div>
        <h1 className="font-display font-extrabold text-3xl text-neutral-900">มีบางอย่างผิดพลาด</h1>
        <p className="text-neutral-600 mt-3">
          ขออภัยในความไม่สะดวก · ทีมงานได้รับแจ้งแล้วและกำลังแก้ไข · ลองรีเฟรชหน้า หรือกลับหน้าแรก
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <button onClick={reset} className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-2.5 rounded-lg inline-flex items-center gap-2">
            <RefreshCcw className="w-4 h-4" /> ลองอีกครั้ง
          </button>
          <Link href="/" className="border border-neutral-200 hover:border-primary-300 px-5 py-2.5 rounded-lg font-medium inline-flex items-center gap-2">
            <Home className="w-4 h-4" /> หน้าแรก
          </Link>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-500 bg-white rounded-full px-4 py-2 border border-neutral-200">
          <Phone className="w-4 h-4 text-primary-600" />
          ต้องการความช่วยเหลือ? โทร <a href="tel:1284" className="font-semibold text-primary-600 ml-1">1284</a>
        </div>
      </div>
    </main>
  );
}
