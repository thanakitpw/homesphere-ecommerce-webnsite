import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

export function getSeedClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey || serviceRoleKey === "TBD") {
    throw new Error(
      "Seed requires SUPABASE_SERVICE_ROLE_KEY in .env.local. Get it from Supabase dashboard → Project Settings → API.",
    );
  }

  return createClient<Database>(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export type SeedClient = ReturnType<typeof getSeedClient>;
