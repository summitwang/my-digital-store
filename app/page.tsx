// app/page.tsx  ← This is the HOMEPAGE (shown at http://localhost:3000)

import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-gray-950 to-violet-950/40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/60 rounded-full px-4 py-1.5 text-blue-300 text-sm mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Instant Digital Delivery
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
            Premium Software
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              at Unbeatable Prices
            </span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Genuine license keys for Microsoft, Autodesk & more. Delivered to your inbox in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white transition-all shadow-lg shadow-blue-900/40"
            >
              Browse All Products →
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl font-semibold border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-colors"
            >
              Contact Support
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {["🔒 Secure Payment", "⚡ Instant Delivery", "✅ Genuine Licenses", "🔄 Easy Refunds"].map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Products</h2>
            <p className="text-gray-400 mt-1">Our most popular software licenses</p>
          </div>
          <Link
            href="/products"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors hidden sm:block"
          >
            View all →
          </Link>
        </div>

        {/* Product grid — 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── WHY US SECTION ── */}
      <section className="border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">Why Choose SoftwareHub?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "Instant Delivery", desc: "Get your license key via email within minutes of purchase." },
              { icon: "🔒", title: "100% Secure", desc: "All payments are encrypted. We never store card details." },
              { icon: "✅", title: "Genuine Licenses", desc: "Every key is sourced directly from official vendors." },
              { icon: "💬", title: "24/7 Support", desc: "Our team is always available to help you activate your software." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-700 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
