// Dates relative to seed run time — app computes +N days at runtime
const DAYS = 24 * 60 * 60 * 1000;

// Explicit defaults for every column — supabase-js omits `undefined` so any
// NOT NULL column without app default must be set here.
const base = {
  applicable_category_ids: [] as string[],
  applicable_product_ids: [] as string[],
  applicable_brand_ids: [] as string[],
  applicable_tiers: [] as Array<"bronze" | "silver" | "gold" | "admin">,
  first_order_only: false,
  stackable: false,
  per_user_limit: 1,
  is_active: true,
};

export const couponsSeed = () => {
  const now = Date.now();
  return [
    {
      ...base,
      code: "WELCOME10",
      title: { th: "ส่วนลดสมาชิกใหม่ 10%", en: "10% off for new members" },
      description: { th: "สำหรับออเดอร์แรกเท่านั้น", en: "First order only" },
      discount_type: "percent" as const,
      discount_value: 10,
      min_order_amount: 500,
      max_discount_amount: 300,
      first_order_only: true,
      starts_at: new Date(now).toISOString(),
      ends_at: new Date(now + 90 * DAYS).toISOString(),
      usage_limit: 1000,
      stack_type: "code" as const,
    },
    {
      ...base,
      code: "FLASH50",
      title: { th: "Flash Sale 50%", en: "Flash Sale 50% off" },
      description: { th: "ลด 50% จำนวนจำกัด", en: "Limited quantity" },
      discount_type: "percent" as const,
      discount_value: 50,
      max_discount_amount: 2000,
      starts_at: new Date(now).toISOString(),
      ends_at: new Date(now + 3 * DAYS).toISOString(),
      usage_limit: 100,
      stack_type: "code" as const,
    },
    {
      ...base,
      code: "FREESHIP",
      title: { th: "ส่งฟรี!", en: "Free Shipping" },
      description: { th: "ไม่มียอดขั้นต่ำ", en: "No minimum order" },
      discount_type: "free_shipping" as const,
      discount_value: null,
      starts_at: new Date(now).toISOString(),
      ends_at: new Date(now + 30 * DAYS).toISOString(),
      stack_type: "free_shipping" as const,
      stackable: true,
    },
    {
      ...base,
      code: "SAVE500",
      title: { th: "ลดทันที 500 บาท", en: "500 THB off" },
      description: { th: "เมื่อซื้อครบ 3,000 บาท", en: "On orders over 3,000 THB" },
      discount_type: "fixed_amount" as const,
      discount_value: 500,
      min_order_amount: 3000,
      starts_at: new Date(now).toISOString(),
      ends_at: new Date(now + 60 * DAYS).toISOString(),
      stack_type: "code" as const,
    },
    {
      ...base,
      code: "GOLD20",
      title: { th: "สมาชิก Gold ลด 20%", en: "Gold member 20% off" },
      description: { th: "เฉพาะสมาชิก Gold", en: "Gold tier exclusive" },
      discount_type: "percent" as const,
      discount_value: 20,
      max_discount_amount: 1500,
      applicable_tiers: ["gold"],
      starts_at: new Date(now).toISOString(),
      ends_at: new Date(now + 30 * DAYS).toISOString(),
      stack_type: "auto_apply" as const,
      stackable: true,
    },
  ];
};
