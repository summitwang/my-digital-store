// app/products/[id]/page.tsx
// The [id] in the folder name means it's a DYNAMIC route.
// Example: /products/microsoft-365 will show Microsoft 365's detail page.

import { getProductById, products } from "@/lib/products";
import Link from "next/link";
import { notFound } from "next/navigation";

// This tells Next.js which product pages to pre-build
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  // If the product doesn't exist, show a 404 page
  if (!product) return notFound();

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb navigation */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-white transition-colors">Products</Link>
        <span>/</span>
        <span className="text-gray-300">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: Product Visual */}
        <div>
          {/* Big product card */}
          <div className={`bg-gradient-to-br ${product.color} rounded-3xl p-1 shadow-2xl`}>
            <div className="bg-gray-900 rounded-3xl p-10 flex flex-col items-center justify-center min-h-[320px]">
              <div className="text-8xl mb-6">{product.icon}</div>
              <h1 className="text-3xl font-bold text-white text-center">{product.name}</h1>
              <p className="text-gray-400 mt-2 text-center">{product.category}</p>
              {product.badge && (
                <span className="mt-4 text-xs font-semibold px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Trust signals below the card */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {["⚡ Instant Key", "✅ Genuine", "🔒 Secure"].map((t) => (
              <div key={t} className="bg-gray-900 border border-gray-800 rounded-xl p-3 text-center text-xs text-gray-400">
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info & Purchase */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{product.category}</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">{product.name}</h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">{product.longDescription}</p>

          {/* Price block */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-bold text-white">${product.price}</span>
              {product.originalPrice && (
                <div className="flex flex-col">
                  <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                  <span className="text-green-400 text-xs font-semibold">Save {discount}%</span>
                </div>
              )}
            </div>

            {/* Buy button */}
            <button className={`w-full py-4 rounded-xl text-lg font-bold bg-gradient-to-r ${product.color} text-white hover:opacity-90 transition-opacity shadow-lg mb-3`}>
              Buy Now — ${product.price}
            </button>
            <p className="text-center text-gray-500 text-xs">
              🔑 License key delivered instantly to your email
            </p>
          </div>

          {/* Features list */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">What&apos;s Included</h2>
            <div className="space-y-3">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center text-xs font-bold`}>
                    ✓
                  </span>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          ← Back to all products
        </Link>
      </div>
    </div>
  );
}
