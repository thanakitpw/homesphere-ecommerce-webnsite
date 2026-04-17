import type { SeedClient } from "../clients/admin";
import { productsSeed } from "../data/products";

export async function seedProducts(sb: SeedClient) {
  // Resolve slug → id lookups.
  const { data: categories, error: catErr } = await sb
    .from("categories")
    .select("id, slug");
  if (catErr) throw new Error(`lookup categories: ${catErr.message}`);

  const { data: brands, error: brandErr } = await sb
    .from("brands")
    .select("id, slug");
  if (brandErr) throw new Error(`lookup brands: ${brandErr.message}`);

  const { data: rooms, error: roomErr } = await sb.from("rooms").select("id, slug");
  if (roomErr) throw new Error(`lookup rooms: ${roomErr.message}`);

  const { data: styles, error: styleErr } = await sb.from("styles").select("id, slug");
  if (styleErr) throw new Error(`lookup styles: ${styleErr.message}`);

  const catBySlug = new Map(categories!.map((c) => [c.slug, c.id]));
  const brandBySlug = new Map(brands!.map((b) => [b.slug, b.id]));
  const roomBySlug = new Map(rooms!.map((r) => [r.slug, r.id]));
  const styleBySlug = new Map(styles!.map((s) => [s.slug, s.id]));

  let productCount = 0;
  let variantCount = 0;

  for (const p of productsSeed) {
    const category_id = catBySlug.get(p.category_slug);
    const brand_id = brandBySlug.get(p.brand_slug);
    if (!category_id || !brand_id) {
      throw new Error(`Missing category/brand for ${p.slug}`);
    }

    const gallery = p.image_urls.map((url, i) => ({
      url,
      is_primary: i === 0,
    }));

    const { data: inserted, error: prodErr } = await sb
      .from("products")
      .insert({
        slug: p.slug,
        sku: p.sku,
        title: p.title,
        short_description: p.short_description ?? null,
        category_id,
        brand_id,
        base_price: p.base_price,
        compare_at_price: p.compare_at_price ?? null,
        stock_quantity: p.stock_quantity,
        gallery,
        tags: p.tags ?? [],
        room_tag_ids: (p.room_slugs ?? [])
          .map((s) => roomBySlug.get(s))
          .filter((x): x is string => !!x),
        style_tag_ids: (p.style_slugs ?? [])
          .map((s) => styleBySlug.get(s))
          .filter((x): x is string => !!x),
        is_featured: p.is_featured ?? false,
        is_flash_sale: p.is_flash_sale ?? false,
        flash_sale_price: p.flash_sale_price ?? null,
        flash_sale_starts_at: p.is_flash_sale ? new Date().toISOString() : null,
        flash_sale_ends_at: p.is_flash_sale
          ? new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
          : null,
        has_variants: (p.variants?.length ?? 0) > 0,
        variant_options: p.variant_options ?? [],
        status: "active",
        published_at: new Date().toISOString(),
      })
      .select("id")
      .single();
    if (prodErr) throw new Error(`product ${p.slug}: ${prodErr.message}`);

    productCount++;

    if (p.variants) {
      const variantRows = p.variants.map((v) => ({
        product_id: inserted!.id,
        sku: v.sku,
        option_values: v.option_values,
        price: v.price,
        stock_quantity: v.stock_quantity,
      }));
      const { error: vErr } = await sb.from("product_variants").insert(variantRows);
      if (vErr) throw new Error(`variants for ${p.slug}: ${vErr.message}`);
      variantCount += variantRows.length;
    }
  }

  console.log(`  ✓ products: ${productCount} products, ${variantCount} variants`);
}
