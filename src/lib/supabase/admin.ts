import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey || serviceRoleKey === "TBD") {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is missing or unset. Set it in .env.local before calling createAdminClient().",
    );
  }

  return createSupabaseClient<Database>(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
