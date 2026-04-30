// components/Navbar.tsx
// The top navigation bar — shown on every page.

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-2xl">🛍️</span>
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              SoftwareHub
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/products"
              className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
