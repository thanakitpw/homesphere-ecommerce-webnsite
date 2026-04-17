import type { SeedClient } from "../clients/admin";
import { categoriesSeed } from "../data/categories";
import { brandsSeed } from "../data/brands";
import { roomsSeed } from "../data/rooms";
import { stylesSeed } from "../data/styles";
import { servicesSeed } from "../data/services";

export async function seedCatalog(sb: SeedClient) {
  const { error: catErr } = await sb.from("categories").insert(categoriesSeed);
  if (catErr) throw new Error(`categories: ${catErr.message}`);

  const { error: brandErr } = await sb.from("brands").insert(brandsSeed);
  if (brandErr) throw new Error(`brands: ${brandErr.message}`);

  const { error: roomErr } = await sb.from("rooms").insert(roomsSeed);
  if (roomErr) throw new Error(`rooms: ${roomErr.message}`);

  const { error: styleErr } = await sb.from("styles").insert(stylesSeed);
  if (styleErr) throw new Error(`styles: ${styleErr.message}`);

  const { error: svcErr } = await sb.from("services").insert(servicesSeed);
  if (svcErr) throw new Error(`services: ${svcErr.message}`);

  console.log(
    `  ✓ catalog: ${categoriesSeed.length} categories, ${brandsSeed.length} brands, ` +
      `${roomsSeed.length} rooms, ${stylesSeed.length} styles, ${servicesSeed.length} services`,
  );
}
