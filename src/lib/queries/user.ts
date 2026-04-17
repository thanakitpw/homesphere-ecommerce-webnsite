import { createClient } from "@/lib/supabase/server";

export type CurrentUser = {
  id: string;
  email: string;
  full_name: string;
  phone: string | null;
  avatar_url: string | null;
  tier: string;
  points_balance: number;
};

export async function getCurrentUser(): Promise<CurrentUser | null> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, phone, avatar_url, tier, points_balance")
    .eq("id", user.id)
    .maybeSingle();

  const p = (profile ?? {}) as {
    full_name?: string | null;
    phone?: string | null;
    avatar_url?: string | null;
    tier?: string | null;
    points_balance?: number | null;
  };

  return {
    id: user.id,
    email: user.email ?? "",
    full_name: p.full_name ?? (user.user_metadata?.full_name as string | undefined) ?? "",
    phone: p.phone ?? null,
    avatar_url: p.avatar_url ?? null,
    tier: p.tier ?? "bronze",
    points_balance: p.points_balance ?? 0,
  };
}
