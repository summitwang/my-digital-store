// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <span>🛍️</span>
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                SoftwareHub
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium software licenses at the best prices. Instant delivery, genuine keys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link>
              <Link href="/products" className="text-gray-400 hover:text-white text-sm transition-colors">All Products</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <span>📧 support@softwarehub.com</span>
              <span>⏰ Mon–Fri, 9am–6pm</span>
              <span>🔒 Secure & Encrypted Checkout</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SoftwareHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
