"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export type AuthState = {
  error?: string;
  ok?: boolean;
};

function mapAuthError(message: string): string {
  const m = message.toLowerCase();
  if (m.includes("invalid login")) return "อีเมลหรือรหัสผ่านไม่ถูกต้อง";
  if (m.includes("email not confirmed")) return "กรุณายืนยันอีเมลก่อนเข้าสู่ระบบ";
  if (m.includes("user already registered")) return "อีเมลนี้ถูกใช้งานแล้ว ลองเข้าสู่ระบบแทน";
  if (m.includes("password should be")) return "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
  return message;
}

export async function loginAction(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "กรุณากรอกอีเมลและรหัสผ่าน" };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: mapAuthError(error.message) };

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function registerAction(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const fullName = String(formData.get("full_name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const pdpa = formData.get("pdpa") === "on";

  if (!fullName || !email || !password) {
    return { error: "กรุณากรอกข้อมูลให้ครบ" };
  }
  if (!pdpa) {
    return { error: "กรุณายอมรับข้อตกลงการใช้บริการและนโยบายความเป็นส่วนตัว" };
  }
  if (password.length < 6) {
    return { error: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร" };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  });
  if (error) return { error: mapAuthError(error.message) };

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
