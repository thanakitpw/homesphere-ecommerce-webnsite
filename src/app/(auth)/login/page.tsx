"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Mail, Lock, Eye, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { IconFacebook, IconLine } from "@/components/icons/brand";
import { loginAction, type AuthState } from "@/lib/actions/auth";

const INITIAL_STATE: AuthState = {};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, INITIAL_STATE);

  return (
    <div>
      <h1 className="font-display font-bold text-3xl text-neutral-900 mb-2">ยินดีต้อนรับกลับมา</h1>
      <p className="text-sm text-neutral-500 mb-8">เข้าสู่ระบบเพื่อติดตามคำสั่งซื้อและรับสิทธิประโยชน์สมาชิก</p>

      {/* Social login */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <SocialButton icon={<GoogleIcon />} label="Google" />
        <SocialButton icon={<IconFacebook className="w-5 h-5 text-[#1877F2]" />} label="Facebook" />
        <SocialButton icon={<IconLine className="w-5 h-5 text-[#06C755]" />} label="LINE" />
      </div>
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-neutral-200" />
        <span className="text-xs text-neutral-500">หรือ</span>
        <div className="flex-1 h-px bg-neutral-200" />
      </div>

      {state.error && (
        <div className="mb-4 flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{state.error}</span>
        </div>
      )}

      <form action={formAction} className="space-y-4">
        <Field name="email" label="อีเมล" icon={Mail} type="email" placeholder="your@email.com" autoComplete="email" required />
        <div>
          <Field name="password" label="รหัสผ่าน" icon={Lock} type="password" placeholder="••••••••" autoComplete="current-password" rightIcon={Eye} required />
          <div className="mt-2 flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" name="remember" className="accent-primary-600" />
              <span>จำฉันไว้</span>
            </label>
            <Link href="/forgot-password" className="text-sm text-primary-600 hover:underline">ลืมรหัสผ่าน?</Link>
          </div>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 text-white font-semibold py-3 rounded-xl inline-flex items-center justify-center gap-2 transition"
        >
          {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : <>เข้าสู่ระบบ <ArrowRight className="w-4 h-4" /></>}
        </button>
      </form>

      <p className="text-center text-sm text-neutral-600 mt-6">
        ยังไม่มีบัญชี? <Link href="/register" className="text-primary-600 font-semibold hover:underline">สมัครสมาชิกฟรี</Link>
      </p>

      <div className="mt-8 pt-6 border-t border-neutral-200 text-xs text-neutral-500 text-center">
        <p>การเข้าสู่ระบบหมายถึงคุณยอมรับ <Link href="/terms" className="text-primary-600 hover:underline">ข้อตกลงการใช้บริการ</Link></p>
      </div>
    </div>
  );
}

function Field({
  name, label, icon: Icon, rightIcon: RightIcon, type = "text", placeholder, autoComplete, required,
}: {
  name: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  rightIcon?: React.ComponentType<{ className?: string }>;
  type?: string; placeholder?: string; autoComplete?: string; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-700 block mb-1.5">{label}</span>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          name={name}
          type={type} placeholder={placeholder} autoComplete={autoComplete} required={required}
          className="w-full border border-neutral-200 rounded-xl pl-10 pr-10 py-3 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
        />
        {RightIcon && (
          <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-primary-600">
            <RightIcon className="w-4 h-4" />
          </button>
        )}
      </div>
    </label>
  );
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button type="button" className="flex items-center justify-center gap-2 border border-neutral-200 rounded-xl py-2.5 text-sm hover:border-neutral-400 hover:bg-neutral-50 transition">
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}
