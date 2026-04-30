// lib/products.ts

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  description: string;
  longDescription: string;
  features: string[];
  badge: string;
  color: string;
  icon: string;
};

export const products: Product[] = [
  {
    id: "win11-pro",
    name: "Windows 11 Pro License Key",
    category: "Microsoft",
    price: 9.99,
    originalPrice: 49.99,
    description: "Lifetime activation for Windows 11 Pro.",
    longDescription:
      "Genuine Windows 11 Pro license key. Instant delivery via email. Supports all regions.",
    features: ["Lifetime Activation", "Instant Delivery", "Global Key"],
    badge: "Best Seller",
    color: "from-blue-500 to-cyan-500",
    icon: "🪟",
  },
  {
    id: "office-365",
    name: "Microsoft 365 (1 Year)",
    category: "Office",
    price: 19.99,
    originalPrice: 69.99,
    description: "1-year subscription for Office apps.",
    longDescription:
      "Full Microsoft 365 package including Word, Excel, PowerPoint. Works on all devices.",
    features: ["1 Year Subscription", "All Devices", "Official License"],
    badge: "Popular",
    color: "from-green-500 to-emerald-500",
    icon: "📊",
  },
  {
    id: "adobe-cc",
    name: "Adobe Creative Cloud",
    category: "Design",
    price: 29.99,
    originalPrice: 99.99,
    description: "Full Adobe suite access.",
    longDescription:
      "Access Photoshop, Premiere Pro, After Effects and more. Delivered instantly.",
    features: ["Full Suite", "Instant Access", "Creative Tools"],
    badge: "Pro",
    color: "from-purple-500 to-pink-500",
    icon: "🎨",
  },
  {
    id: "autocad",
    name: "Autodesk AutoCAD",
    category: "Engineering",
    price: 39.99,
    originalPrice: 149.99,
    description: "Professional CAD software.",
    longDescription:
      "AutoCAD license for engineers and designers. Fast delivery and activation support.",
    features: ["Professional Tool", "Instant Key", "Support Included"],
    badge: "New",
    color: "from-orange-500 to-red-500",
    icon: "📐",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
