import type { SeedClient } from "../clients/admin";

// Seed reviews + wishlists for demo UX.
// Skipped detailed 10-orders generation — left for Phase 5 as a separate pass
// once checkout flow is in place (avoid drift between seed + real order shape).
export async function seedEngagement(
  sb: SeedClient,
  customerIds: string[],
) {
  const { data: products } = await sb.from("products").select("id").limit(8);
  if (!products || products.length === 0) return;

  // 15 reviews: distribute across products + customers
  const reviews = [];
  for (let i = 0; i < 15; i++) {
    const product = products[i % products.length];
    const customerId = customerIds[i % customerIds.length];
    reviews.push({
      product_id: product.id,
      profile_id: customerId,
      rating: (3 + (i % 3)) as 3 | 4 | 5,
      title: ["ดีมาก", "พอใช้", "คุ้มค่า", "สวยงาม", "เยี่ยมมาก"][i % 5],
      body: "สินค้ามาตรฐาน ส่งเร็ว บริการประทับใจ",
      is_verified_purchase: false,
      status: "published" as const,
    });
  }
  const { error: rErr } = await sb.from("reviews").insert(reviews);
  if (rErr) throw new Error(`reviews: ${rErr.message}`);

  // Wishlists: each of first 4 customers has 2 random products
  const wishlistRows = [];
  for (let i = 0; i < Math.min(4, customerIds.length); i++) {
    for (let j = 0; j < 2; j++) {
      wishlistRows.push({
        profile_id: customerIds[i],
        product_id: products[(i + j) % products.length].id,
      });
    }
  }
  const { error: wErr } = await sb.from("wishlists").insert(wishlistRows);
  if (wErr) throw new Error(`wishlists: ${wErr.message}`);

  console.log(`  ✓ engagement: ${reviews.length} reviews, ${wishlistRows.length} wishlists`);
}
