// app/products/page.tsx  ← Shown at http://localhost:3000/products

import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-3">All Products</h1>
        <p className="text-gray-400 text-lg">
          {products.length} premium software licenses available
        </p>
      </div>

      {/* Stats bar */}
      <div className="flex flex-wrap gap-4 mb-10">
        {[
          { label: "Products", value: products.length },
          { label: "Brands", value: "3" },
          { label: "Happy Customers", value: "10,000+" },
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-xl px-6 py-3 flex items-center gap-3">
            <span className="text-2xl font-bold text-white">{stat.value}</span>
            <span className="text-gray-400 text-sm">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Bottom help note */}
      <div className="mt-12 text-center bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <h3 className="text-xl font-semibold text-white mb-2">Can&apos;t find what you need?</h3>
        <p className="text-gray-400 mb-4">We can source almost any software license. Get in touch!</p>
        <a
          href="/contact"
          className="inline-block px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
