// 15 products across 8 categories.
// Images point to seed placeholder (aeris-aircon.png) for now — replace with
// curated Unsplash URLs via unsplashUrl() once photo IDs are picked.
//
// Each product references category + brand by **slug**; seeder resolves to uuid.
// has_variants=true products include 2-3 sample variants.

export interface ProductSeed {
  slug: string;
  sku: string;
  title: { th: string; en?: string };
  short_description?: { th: string; en?: string };
  category_slug: string;
  brand_slug: string;
  base_price: number;
  compare_at_price?: number;
  stock_quantity: number;
  image_urls: string[];
  tags?: string[];
  room_slugs?: string[];
  style_slugs?: string[];
  is_featured?: boolean;
  is_flash_sale?: boolean;
  flash_sale_price?: number;
  variants?: Array<{
    sku: string;
    option_values: Array<{ name: string; value: string }>;
    price: number;
    stock_quantity: number;
  }>;
  variant_options?: Array<{ name: string; values: string[] }>;
}

const PLACEHOLDER = "/seed/flash-sale/aeris-aircon.png";

export const productsSeed: ProductSeed[] = [
  // ----- Appliances (2) -----
  {
    slug: "aeris-smart-aircon-18000",
    sku: "HS-APP-AERIS-001",
    title: { th: "แอร์ Aeris Smart Inverter 18,000 BTU", en: "Aeris Smart Inverter 18,000 BTU" },
    short_description: { th: "ประหยัดไฟ เย็นเร็ว ควบคุมผ่านแอป", en: "Smart cooling with app control" },
    category_slug: "appliances",
    brand_slug: "aeris",
    base_price: 24900,
    compare_at_price: 29900,
    stock_quantity: 25,
    image_urls: [PLACEHOLDER],
    tags: ["flash-sale", "bestseller"],
    room_slugs: ["living-room", "bedroom"],
    style_slugs: ["modern"],
    is_featured: true,
    is_flash_sale: true,
    flash_sale_price: 14950,
  },
  {
    slug: "haven-french-door-fridge",
    sku: "HS-APP-HAVEN-002",
    title: { th: "ตู้เย็น Haven French Door 520L", en: "Haven French Door Refrigerator 520L" },
    category_slug: "appliances",
    brand_slug: "haven",
    base_price: 39900,
    stock_quantity: 10,
    image_urls: [PLACEHOLDER],
    tags: ["bestseller"],
    room_slugs: ["kitchen"],
    style_slugs: ["modern", "minimal"],
  },
  // ----- Kitchen (2) -----
  {
    slug: "kisho-air-fryer-7l",
    sku: "HS-KIT-KISHO-001",
    title: { th: "หม้อทอดไร้น้ำมัน Kisho 7L", en: "Kisho Air Fryer 7L" },
    category_slug: "kitchen",
    brand_slug: "kisho",
    base_price: 3490,
    compare_at_price: 4290,
    stock_quantity: 50,
    image_urls: [PLACEHOLDER],
    tags: ["bestseller"],
    room_slugs: ["kitchen"],
    style_slugs: ["minimal"],
    is_featured: true,
  },
  {
    slug: "kisho-microwave-28l",
    sku: "HS-KIT-KISHO-002",
    title: { th: "ไมโครเวฟ Kisho 28L", en: "Kisho Microwave 28L" },
    category_slug: "kitchen",
    brand_slug: "kisho",
    base_price: 4900,
    stock_quantity: 30,
    image_urls: [PLACEHOLDER],
    room_slugs: ["kitchen"],
  },
  // ----- Bathroom (2) -----
  {
    slug: "haven-rain-shower-set",
    sku: "HS-BAT-HAVEN-001",
    title: { th: "ชุดฝักบัว Haven Rain Shower", en: "Haven Rain Shower Set" },
    category_slug: "bathroom",
    brand_slug: "haven",
    base_price: 8900,
    stock_quantity: 20,
    image_urls: [PLACEHOLDER],
    room_slugs: ["bathroom"],
    style_slugs: ["luxury", "modern"],
  },
  {
    slug: "haven-smart-toilet",
    sku: "HS-BAT-HAVEN-002",
    title: { th: "สุขภัณฑ์อัจฉริยะ Haven", en: "Haven Smart Toilet" },
    category_slug: "bathroom",
    brand_slug: "haven",
    base_price: 45900,
    stock_quantity: 5,
    image_urls: [PLACEHOLDER],
    tags: ["new-arrival"],
    room_slugs: ["bathroom"],
    style_slugs: ["luxury"],
    is_featured: true,
  },
  // ----- Furniture (2) -----
  {
    slug: "arbor-solid-wood-sofa-3seat",
    sku: "HS-FUR-ARBOR-001",
    title: { th: "โซฟาไม้จริง Arbor 3 ที่นั่ง", en: "Arbor Solid Wood 3-Seater Sofa" },
    category_slug: "furniture",
    brand_slug: "arbor",
    base_price: 32900,
    compare_at_price: 38900,
    stock_quantity: 8,
    image_urls: [PLACEHOLDER],
    tags: ["bestseller"],
    room_slugs: ["living-room"],
    style_slugs: ["scandinavian", "loft"],
    is_featured: true,
    variant_options: [{ name: "สี", values: ["Walnut", "Oak"] }],
    variants: [
      {
        sku: "HS-FUR-ARBOR-001-WAL",
        option_values: [{ name: "สี", value: "Walnut" }],
        price: 32900,
        stock_quantity: 5,
      },
      {
        sku: "HS-FUR-ARBOR-001-OAK",
        option_values: [{ name: "สี", value: "Oak" }],
        price: 32900,
        stock_quantity: 3,
      },
    ],
  },
  {
    slug: "arbor-dining-table-6",
    sku: "HS-FUR-ARBOR-002",
    title: { th: "โต๊ะทานอาหาร Arbor 6 ที่นั่ง", en: "Arbor 6-Seat Dining Table" },
    category_slug: "furniture",
    brand_slug: "arbor",
    base_price: 18900,
    stock_quantity: 12,
    image_urls: [PLACEHOLDER],
    room_slugs: ["kitchen"],
    style_slugs: ["scandinavian"],
  },
  // ----- Lighting (2) -----
  {
    slug: "luma-pendant-gold",
    sku: "HS-LIG-LUMA-001",
    title: { th: "โคมแขวน Luma สีทอง", en: "Luma Gold Pendant Light" },
    category_slug: "lighting",
    brand_slug: "luma",
    base_price: 5490,
    stock_quantity: 25,
    image_urls: [PLACEHOLDER],
    room_slugs: ["living-room", "kitchen"],
    style_slugs: ["luxury", "modern"],
    is_featured: true,
  },
  {
    slug: "luma-floor-lamp",
    sku: "HS-LIG-LUMA-002",
    title: { th: "โคมตั้งพื้น Luma", en: "Luma Floor Lamp" },
    category_slug: "lighting",
    brand_slug: "luma",
    base_price: 3290,
    stock_quantity: 40,
    image_urls: [PLACEHOLDER],
    room_slugs: ["living-room", "bedroom"],
    style_slugs: ["scandinavian", "minimal"],
  },
  // ----- Garden (1) -----
  {
    slug: "arbor-patio-set-4",
    sku: "HS-GAR-ARBOR-001",
    title: { th: "ชุดโต๊ะสวน Arbor 4 ที่นั่ง", en: "Arbor Patio Set 4-Seater" },
    category_slug: "garden",
    brand_slug: "arbor",
    base_price: 12900,
    stock_quantity: 15,
    image_urls: [PLACEHOLDER],
    room_slugs: ["garden"],
    style_slugs: ["modern"],
  },
  // ----- Tools (2) -----
  {
    slug: "haven-cordless-drill",
    sku: "HS-TOO-HAVEN-001",
    title: { th: "สว่านไร้สาย Haven 20V", en: "Haven Cordless Drill 20V" },
    category_slug: "tools",
    brand_slug: "haven",
    base_price: 2490,
    stock_quantity: 60,
    image_urls: [PLACEHOLDER],
    tags: ["bestseller"],
  },
  {
    slug: "haven-aluminum-ladder",
    sku: "HS-TOO-HAVEN-002",
    title: { th: "บันไดอลูมิเนียม Haven 4 ขั้น", en: "Haven Aluminum Ladder 4-Step" },
    category_slug: "tools",
    brand_slug: "haven",
    base_price: 1290,
    stock_quantity: 80,
    image_urls: [PLACEHOLDER],
  },
  // ----- Smart Home (2) -----
  {
    slug: "nimbus-smart-cctv-4ch",
    sku: "HS-SMH-NIMBUS-001",
    title: { th: "กล้องวงจรปิด Nimbus 4CH", en: "Nimbus Smart CCTV 4-Channel" },
    category_slug: "smart-home",
    brand_slug: "nimbus",
    base_price: 8900,
    compare_at_price: 10900,
    stock_quantity: 20,
    image_urls: [PLACEHOLDER],
    tags: ["new-arrival"],
    room_slugs: ["office"],
    style_slugs: ["modern"],
    is_featured: true,
  },
  {
    slug: "nimbus-smart-lock",
    sku: "HS-SMH-NIMBUS-002",
    title: { th: "Smart Lock Nimbus", en: "Nimbus Smart Lock" },
    category_slug: "smart-home",
    brand_slug: "nimbus",
    base_price: 6490,
    stock_quantity: 30,
    image_urls: [PLACEHOLDER],
    tags: ["new-arrival", "bestseller"],
    room_slugs: ["office"],
  },
];
