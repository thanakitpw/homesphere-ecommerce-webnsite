// Main seed orchestrator. Run with:
//   npx tsx src/lib/seed/run.ts            # full seed
//   npx tsx src/lib/seed/run.ts --reset    # reset first (dangerous)
//
// Requires SUPABASE_SERVICE_ROLE_KEY in .env.local. Service role bypasses RLS.
import { getSeedClient } from "./clients/admin";
import { seedCatalog } from "./seeders/01-catalog";
import { seedProducts } from "./seeders/02-products";
import { seedCommerceConfig } from "./seeders/03-commerce-config";
import { seedUsers } from "./seeders/04-users";
import { seedEngagement } from "./seeders/05-engagement";

async function main() {
  const sb = getSeedClient();
  console.log("→ Homesphere seed starting");

  console.log("\n[1/5] Catalog taxonomy");
  await seedCatalog(sb);

  console.log("\n[2/5] Products + variants");
  await seedProducts(sb);

  console.log("\n[3/5] Commerce config (payment, shipping, coupons, banners, stores, pages)");
  await seedCommerceConfig(sb);

  console.log("\n[4/5] Users (admin + customers)");
  const users = await seedUsers(sb);
  const customerIds = users.filter((u) => u.role === "customer").map((u) => u.id);

  console.log("\n[5/5] Engagement (reviews + wishlists)");
  await seedEngagement(sb, customerIds);

  console.log("\n✓ Seed complete");
}

main().catch((err) => {
  console.error("\n✗ Seed failed:", err.message);
  process.exit(1);
});
