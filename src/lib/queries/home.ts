import { createClient } from "@/lib/supabase/server";

export type HomeCategory = {
  id: string;
  slug: string;
  title_th: string;
  title_en: string;
  icon_name: string | null;
};

export type HomeProduct = {
  id: string;
  slug: string;
  title_th: string;
  title_en: string;
  brand_name: string | null;
  base_price: number;
  compare_at_price: number | null;
  flash_sale_price: number | null;
  is_flash_sale: boolean;
  rating_average: number;
  rating_count: number;
  sales_count: number;
  image_url: string | null;
};

type ProductRow = {
  id: string;
  slug: string;
  title: Record<string, string | undefined> | null;
  base_price: number;
  compare_at_price: number | null;
  flash_sale_price: number | null;
  is_flash_sale: boolean | null;
  rating_average: number | null;
  rating_count: number | null;
  sales_count: number | null;
  brand: { name: string } | { name: string }[] | null;
};

function mapProduct(p: ProductRow): HomeProduct {
  const title = p.title ?? {};
  const brand = Array.isArray(p.brand) ? p.brand[0] : p.brand;
  return {
    id: p.id,
    slug: p.slug,
    title_th: title.th ?? p.slug,
    title_en: title.en ?? "",
    brand_name: brand?.name ?? null,
    base_price: Number(p.base_price ?? 0),
    compare_at_price: p.compare_at_price != null ? Number(p.compare_at_price) : null,
    flash_sale_price: p.flash_sale_price != null ? Number(p.flash_sale_price) : null,
    is_flash_sale: Boolean(p.is_flash_sale),
    rating_average: Number(p.rating_average ?? 0),
    rating_count: Number(p.rating_count ?? 0),
    sales_count: Number(p.sales_count ?? 0),
    image_url: null,
  };
}

type CategoryRow = {
  id: string;
  slug: string;
  name: Record<string, string | undefined> | null;
  icon_name: string | null;
};

export async function getHomeCategories(): Promise<HomeCategory[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("categories")
    .select("id, slug, name, icon_name")
    .eq("is_active", true)
    .is("parent_id", null)
    .order("display_order", { ascending: true })
    .limit(8);

  return ((data ?? []) as unknown as CategoryRow[]).map((c) => {
    const name = c.name ?? {};
    return {
      id: c.id,
      slug: c.slug,
      title_th: name.th ?? c.slug,
      title_en: name.en ?? "",
      icon_name: c.icon_name,
    };
  });
}

export async function getFlashSaleProducts(): Promise<HomeProduct[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select("id, slug, title, base_price, compare_at_price, flash_sale_price, is_flash_sale, rating_average, rating_count, sales_count, brand:brands(name)")
    .eq("is_flash_sale", true)
    .eq("status", "active")
    .limit(5);

  return (data ?? []).map(mapProduct as never);
}

export async function getTrendingProducts(limit = 5): Promise<HomeProduct[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select("id, slug, title, base_price, compare_at_price, flash_sale_price, is_flash_sale, rating_average, rating_count, sales_count, brand:brands(name)")
    .eq("status", "active")
    .order("sales_count", { ascending: false })
    .order("rating_average", { ascending: false })
    .limit(limit);

  return (data ?? []).map(mapProduct as never);
}

export async function getNewArrivals(limit = 5): Promise<HomeProduct[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select("id, slug, title, base_price, compare_at_price, flash_sale_price, is_flash_sale, rating_average, rating_count, sales_count, brand:brands(name)")
    .eq("status", "active")
    .order("created_at", { ascending: false })
    .limit(limit);

  return (data ?? []).map(mapProduct as never);
}

export type CategoryDetail = {
  id: string;
  slug: string;
  title_th: string;
  title_en: string;
  icon_name: string | null;
  product_count: number;
};

export async function getCategoryBySlug(slug: string): Promise<CategoryDetail | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("categories")
    .select("id, slug, name, icon_name")
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();

  if (!data) return null;
  const row = data as unknown as CategoryRow;
  const name = row.name ?? {};

  const { count } = await supabase
    .from("products")
    .select("id", { count: "exact", head: true })
    .eq("category_id", row.id)
    .eq("status", "active");

  return {
    id: row.id,
    slug: row.slug,
    title_th: name.th ?? row.slug,
    title_en: name.en ?? "",
    icon_name: row.icon_name,
    product_count: count ?? 0,
  };
}

export async function getCategoryProducts(categoryId: string, limit = 24): Promise<HomeProduct[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select("id, slug, title, base_price, compare_at_price, flash_sale_price, is_flash_sale, rating_average, rating_count, sales_count, brand:brands(name)")
    .eq("category_id", categoryId)
    .eq("status", "active")
    .order("sales_count", { ascending: false })
    .limit(limit);

  return (data ?? []).map(mapProduct as never);
}

export async function getBrands(): Promise<{ id: string; name: string; slug: string }[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("brands")
    .select("id, name, slug")
    .order("name", { ascending: true });

  return (data ?? []) as { id: string; name: string; slug: string }[];
}
