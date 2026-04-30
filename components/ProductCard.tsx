// components/ProductCard.tsx
// A reusable card component — used on the homepage and products page.
// "Props" = data passed into the component from outside.

import Link from "next/link";
import { Product } from "@/lib/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/40 hover:-translate-y-1">
      {/* Colored accent banner at top */}
      <div className={`h-2 bg-gradient-to-r ${product.color}`} />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{product.icon}</div>
          {product.badge && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product info */}
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{product.description}</p>

        {/* Price row */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl font-bold text-white">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
          )}
          {discount && (
            <span className="text-green-400 text-xs font-semibold bg-green-950 px-2 py-0.5 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-medium border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-colors"
          >
            View Details
          </Link>
          <button className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r ${product.color} text-white hover:opacity-90 transition-opacity`}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
