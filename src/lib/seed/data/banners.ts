// TODO: replace image_url with curated Unsplash URLs or keep seed/flash-sale/*
// placeholder until lead provides fal-generated hero banners.
export const bannersSeed = () => [
  {
    code: "home-hero-flash-sale",
    title: { th: "แอร์ Aeris ลด 50%", en: "Aeris Air 50% OFF" },
    subtitle: { th: "วันนี้เท่านั้น", en: "Today only" },
    cta_label: { th: "ช้อปเลย", en: "Shop now" },
    image_url: "/seed/flash-sale/aeris-aircon.png",
    link_url: "/flash-sale",
    placement: "home_hero" as const,
    sort_order: 1,
  },
  {
    code: "home-hero-new-arrival",
    title: { th: "สินค้าใหม่มาแล้ว", en: "New Arrivals" },
    subtitle: { th: "คอลเลกชันฤดูใหม่", en: "Fresh seasonal collection" },
    cta_label: { th: "ดูสินค้า", en: "Browse" },
    image_url: "/seed/flash-sale/aeris-aircon.png",
    link_url: "/category/furniture",
    placement: "home_hero" as const,
    sort_order: 2,
  },
  {
    code: "home-hero-installment",
    title: { th: "ผ่อน 0% นาน 10 เดือน", en: "0% Installment for 10 months" },
    subtitle: { th: "ทุกสินค้า ทุกบัตร", en: "All products, all cards" },
    cta_label: { th: "รายละเอียด", en: "Details" },
    image_url: "/seed/flash-sale/aeris-aircon.png",
    link_url: "/promotions",
    placement: "home_hero" as const,
    sort_order: 3,
  },
];
