import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

export type ProductCardProps = {
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  image?: string;
  name: string;
  price: number;
  original?: number;
  rating: number;
  reviews: number;
  badge?: string;
  slug?: string;
};

export function ProductCard({ icon: Icon, image, name, price, original, rating, reviews, badge, slug }: ProductCardProps) {
  const href = slug ? `/product/${slug}` : "/product/aeris-aircon-12000btu";
  return (
    <div className="relative bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md hover:border-primary-200 transition group">
      <Link href={href} className="block">
        <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 relative grid place-items-center">
          {image ? (
            <Image src={image} alt={name} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
          ) : Icon ? (
            <Icon className="w-20 h-20 text-neutral-400" strokeWidth={1.5} />
          ) : null}
          {badge && (
            <span className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">{badge}</span>
          )}
        </div>
        <div className="p-3">
          <p className="text-sm text-neutral-800 line-clamp-2 h-10 mb-1.5 group-hover:text-primary-700 transition-colors">{name}</p>
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            <span className="text-xs font-medium">{rating}</span>
            <span className="text-xs text-neutral-400">({reviews})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-700 font-bold text-lg">฿{price.toLocaleString()}</span>
            {original && (
              <span className="text-xs text-neutral-400 line-through">฿{original.toLocaleString()}</span>
            )}
          </div>
        </div>
      </Link>
      {/* Overlay action buttons — absolute so they don't nest inside Link */}
      <button
        type="button"
        aria-label="Add to wishlist"
        className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white grid place-items-center shadow opacity-0 group-hover:opacity-100 transition z-20"
      >
        <Heart className="w-4 h-4 text-neutral-500" />
      </button>
      <button
        type="button"
        aria-label="Add to cart"
        className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-primary-50 hover:bg-primary-100 text-primary-600 grid place-items-center z-20"
      >
        <ShoppingCart className="w-4 h-4" />
      </button>
    </div>
  );
}
