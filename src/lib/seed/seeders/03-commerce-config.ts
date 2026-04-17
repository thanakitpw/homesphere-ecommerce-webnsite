import type { SeedClient } from "../clients/admin";
import { paymentMethodsSeed } from "../data/payment-methods";
import { shippingMethodsSeed } from "../data/shipping-methods";
import { couponsSeed } from "../data/coupons";
import { bannersSeed } from "../data/banners";
import { storesSeed } from "../data/stores";
import { pagesSeed } from "../data/pages";

export async function seedCommerceConfig(sb: SeedClient) {
  const { error: pmErr } = await sb.from("payment_methods").insert(paymentMethodsSeed);
  if (pmErr) throw new Error(`payment_methods: ${pmErr.message}`);

  const { error: smErr } = await sb.from("shipping_methods").insert(shippingMethodsSeed);
  if (smErr) throw new Error(`shipping_methods: ${smErr.message}`);

  const { error: couponErr } = await sb.from("coupons").insert(couponsSeed());
  if (couponErr) throw new Error(`coupons: ${couponErr.message}`);

  const { error: bannerErr } = await sb.from("banners").insert(bannersSeed());
  if (bannerErr) throw new Error(`banners: ${bannerErr.message}`);

  const { error: storeErr } = await sb.from("stores").insert(storesSeed);
  if (storeErr) throw new Error(`stores: ${storeErr.message}`);

  const { error: pageErr } = await sb.from("pages").insert(pagesSeed());
  if (pageErr) throw new Error(`pages: ${pageErr.message}`);

  console.log(
    `  ✓ commerce config: ${paymentMethodsSeed.length} payment methods, ` +
      `${shippingMethodsSeed.length} shipping, 5 coupons, 3 banners, ` +
      `${storesSeed.length} stores, 5 pages`,
  );
}
