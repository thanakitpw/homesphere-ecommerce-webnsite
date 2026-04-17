import { createClient } from "@/lib/supabase/server";

export type ProductSpec = { k: string; v: string };

export type ProductDetail = {
  id: string;
  slug: string;
  sku: string;
  title_th: string;
  title_en: string;
  short_description_th: string;
  description_th: string;
  base_price: number;
  compare_at_price: number | null;
  flash_sale_price: number | null;
  is_flash_sale: boolean;
  discount_percent: number;
  rating_average: number;
  rating_count: number;
  sales_count: number;
  stock_quantity: number;
  warranty_months: number;
  gallery: string[];
  specs: ProductSpec[];
  features: string[];
  brand: { id: string; name: string; slug: string } | null;
  category: { id: string; slug: string; title_th: string } | null;
};

type ProductRowRaw = {
  id: string;
  slug: string;
  sku: string;
  title: Record<string, string | undefined> | null;
  description: Record<string, string | undefined> | null;
  short_description: Record<string, string | undefined> | null;
  base_price: number;
  compare_at_price: number | null;
  flash_sale_price: number | null;
  is_flash_sale: boolean | null;
  rating_average: number | null;
  rating_count: number | null;
  sales_count: number | null;
  stock_quantity: number | null;
  warranty_months: number | null;
  gallery: unknown;
  specifications: unknown;
  brand: { id: string; name: string; slug: string } | { id: string; name: string; slug: string }[] | null;
  category: { id: string; slug: string; name: Record<string, string | undefined> | null } | { id: string; slug: string; name: Record<string, string | undefined> | null }[] | null;
};

function parseGallery(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item) => {
      if (typeof item === "string") return item;
      if (item && typeof item === "object" && "url" in item && typeof (item as { url?: unknown }).url === "string") {
        return (item as { url: string }).url;
      }
      return null;
    })
    .filter((x): x is string => !!x);
}

function parseSpecs(raw: unknown): ProductSpec[] {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw
      .map((entry) => {
        if (entry && typeof entry === "object") {
          const e = entry as Record<string, unknown>;
          const k = typeof e.k === "string" ? e.k : typeof e.key === "string" ? e.key : typeof e.label === "string" ? e.label : null;
          const v = typeof e.v === "string" ? e.v : typeof e.value === "string" ? e.value : null;
          if (k && v) return { k, v };
        }
        return null;
      })
      .filter((x): x is ProductSpec => !!x);
  }
  if (typeof raw === "object") {
    return Object.entries(raw as Record<string, unknown>).map(([k, v]) => ({
      k,
      v: typeof v === "string" ? v : String(v ?? ""),
    }));
  }
  return [];
}

export async function getProductBySlug(slug: string): Promise<ProductDetail | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select(`
      id, slug, sku, title, description, short_description,
      base_price, compare_at_price, flash_sale_price, is_flash_sale,
      rating_average, rating_count, sales_count, stock_quantity, warranty_months,
      gallery, specifications,
      brand:brands(id, name, slug),
      category:categories(id, slug, name)
    `)
    .eq("slug", slug)
    .eq("status", "active")
    .maybeSingle();

  if (!data) return null;
  const row = data as unknown as ProductRowRaw;

  const title = row.title ?? {};
  const description = row.description ?? {};
  const shortDescription = row.short_description ?? {};
  const brand = Array.isArray(row.brand) ? row.brand[0] ?? null : row.brand;
  const categoryRaw = Array.isArray(row.category) ? row.category[0] ?? null : row.category;
  const category = categoryRaw
    ? {
        id: categoryRaw.id,
        slug: categoryRaw.slug,
        title_th: (categoryRaw.name ?? {}).th ?? categoryRaw.slug,
      }
    : null;

  const currentPrice =
    row.is_flash_sale && row.flash_sale_price != null ? Number(row.flash_sale_price) : Number(row.base_price ?? 0);
  const originalPrice = row.compare_at_price != null ? Number(row.compare_at_price) : Number(row.base_price ?? 0);
  const discount = originalPrice > currentPrice ? Math.round((1 - currentPrice / originalPrice) * 100) : 0;

  const descriptionText = description.th ?? "";
  const features = descriptionText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && (line.startsWith("- ") || line.startsWith("• ")))
    .map((line) => line.replace(/^[-•]\s*/, ""));

  return {
    id: row.id,
    slug: row.slug,
    sku: row.sku,
    title_th: title.th ?? row.slug,
    title_en: title.en ?? "",
    short_description_th: shortDescription.th ?? "",
    description_th: descriptionText,
    base_price: Number(row.base_price ?? 0),
    compare_at_price: row.compare_at_price != null ? Number(row.compare_at_price) : null,
    flash_sale_price: row.flash_sale_price != null ? Number(row.flash_sale_price) : null,
    is_flash_sale: Boolean(row.is_flash_sale),
    discount_percent: discount,
    rating_average: Number(row.rating_average ?? 0),
    rating_count: Number(row.rating_count ?? 0),
    sales_count: Number(row.sales_count ?? 0),
    stock_quantity: Number(row.stock_quantity ?? 0),
    warranty_months: Number(row.warranty_months ?? 12),
    gallery: parseGallery(row.gallery),
    specs: parseSpecs(row.specifications),
    features,
    brand: brand ? { id: brand.id, name: brand.name, slug: brand.slug } : null,
    category,
  };
}

export type RelatedProduct = {
  id: string;
  slug: string;
  title_th: string;
  base_price: number;
  compare_at_price: number | null;
  flash_sale_price: number | null;
  is_flash_sale: boolean;
  rating_average: number;
  rating_count: number;
};

type RelatedRowRaw = {
  id: string;
  slug: string;
  title: Record<string, string | undefined> | null;
  base_price: number;
  compare_at_price: number | null;
  flash_sale_price: number | null;
  is_flash_sale: boolean | null;
  rating_average: number | null;
  rating_count: number | null;
};

export async function getRelatedProducts(
  categoryId: string,
  excludeId: string,
  limit = 5,
): Promise<RelatedProduct[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select("id, slug, title, base_price, compare_at_price, flash_sale_price, is_flash_sale, rating_average, rating_count")
    .eq("category_id", categoryId)
    .eq("status", "active")
    .neq("id", excludeId)
    .order("sales_count", { ascending: false })
    .limit(limit);

  const rows = (data ?? []) as unknown as RelatedRowRaw[];
  return rows.map((r) => ({
    id: r.id,
    slug: r.slug,
    title_th: (r.title ?? {}).th ?? r.slug,
    base_price: Number(r.base_price ?? 0),
    compare_at_price: r.compare_at_price != null ? Number(r.compare_at_price) : null,
    flash_sale_price: r.flash_sale_price != null ? Number(r.flash_sale_price) : null,
    is_flash_sale: Boolean(r.is_flash_sale),
    rating_average: Number(r.rating_average ?? 0),
    rating_count: Number(r.rating_count ?? 0),
  }));
}
