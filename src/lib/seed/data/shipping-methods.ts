export const shippingMethodsSeed = [
  {
    code: "standard",
    name: { th: "จัดส่งมาตรฐาน", en: "Standard Delivery" },
    description: { th: "3-5 วันทำการ", en: "3-5 business days" },
    base_price: 0,
    estimated_days_min: 3,
    estimated_days_max: 5,
    sort_order: 1,
  },
  {
    code: "express",
    name: { th: "จัดส่งด่วน", en: "Express Delivery" },
    description: { th: "ภายใน 1-2 วัน", en: "1-2 days" },
    base_price: 199,
    estimated_days_min: 1,
    estimated_days_max: 2,
    sort_order: 2,
  },
  {
    code: "store_pickup",
    name: { th: "รับที่สาขา", en: "Store Pickup" },
    description: { th: "รับได้ภายใน 2 ชม.", en: "Ready in 2 hours" },
    base_price: 0,
    estimated_days_min: 0,
    estimated_days_max: 0,
    sort_order: 3,
  },
];
