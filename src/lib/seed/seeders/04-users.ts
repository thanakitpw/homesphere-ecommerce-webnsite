import type { SeedClient } from "../clients/admin";
import { usersSeed } from "../data/users";

// Auth user creation + profile tier adjustment.
// handle_new_user() trigger auto-creates profiles rows; we UPDATE to set tier.
export async function seedUsers(sb: SeedClient) {
  const created: { id: string; email: string; role: string }[] = [];

  for (const u of usersSeed) {
    const { data, error } = await sb.auth.admin.createUser({
      email: u.email,
      password: u.password,
      email_confirm: true,
      user_metadata: { full_name: u.full_name },
    });
    if (error) throw new Error(`createUser ${u.email}: ${error.message}`);
    if (!data.user) throw new Error(`createUser ${u.email}: no user returned`);

    const id = data.user.id;
    created.push({ id, email: u.email, role: u.role });

    // Trigger auto-created profile; update fields the trigger doesn't fill.
    const tier = u.role === "admin" ? "admin" : (u.tier ?? "bronze");
    const { error: profErr } = await sb
      .from("profiles")
      .update({ phone: u.phone, tier })
      .eq("id", id);
    if (profErr) throw new Error(`profile update ${u.email}: ${profErr.message}`);
  }

  console.log(`  ✓ users: ${created.length} accounts (${created.filter((u) => u.role === "admin").length} admin)`);
  return created;
}
