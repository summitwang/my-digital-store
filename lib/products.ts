// lib/products.ts
// This is your mock "database" — just a plain TypeScript file with product data.
// No real database needed for this project!

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  features: string[];
  badge?: string;        // e.g. "Best Seller", "New"
  color: string;         // Tailwind gradient classes for the card accent
  icon: string;          // Emoji icon for the product
};

export const products: Product[] = [
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    category: "Productivity Suite",
    price: 99.99,
    originalPrice: 149.99,
    badge: "Best Seller",
    icon: "🪟",
    color: "from-blue-500 to-cyan-500",
    description: "The complete Microsoft Office suite with cloud storage and collaboration tools.",
    longDescription:
      "Microsoft 365 is the world's most popular productivity suite, trusted by millions of businesses and individuals. Get the full Office apps plus 1TB of OneDrive cloud storage, advanced security features, and real-time collaboration. Always stay up to date with the latest features automatically.",
    features: [
      "Word, Excel, PowerPoint, Outlook & more",
      "1TB OneDrive cloud storage",
      "Up to 6 users on Family plan",
      "Works on PC, Mac, iPhone & Android",
      "Always up-to-date with latest features",
      "Advanced security & privacy controls",
    ],
  },
  {
    id: "office-2024",
    name: "Office 2024",
    category: "Office Suite",
    price: 249.99,
    badge: "New",
    icon: "📄",
    color: "from-orange-500 to-red-500",
    description: "One-time purchase of Office with the classic apps you know and love.",
    longDescription:
      "Microsoft Office 2024 is a one-time purchase — buy it once, own it forever. No subscription required. Get the essential Office apps including Word, Excel, and PowerPoint with a clean, modern interface and improved performance. Perfect for users who prefer a traditional software purchase model.",
    features: [
      "Word, Excel & PowerPoint included",
      "One-time purchase — no subscription",
      "Compatible with Windows 11 & macOS",
      "Improved performance & new dark mode",
      "Microsoft Teams integration",
      "Lifetime license for one device",
    ],
  },
  {
    id: "autodesk",
    name: "Autodesk Suite",
    category: "Design & Engineering",
    price: 299.99,
    originalPrice: 399.99,
    badge: "Pro",
    icon: "🏗️",
    color: "from-violet-500 to-purple-600",
    description: "Professional CAD and design tools for engineers, architects and creators.",
    longDescription:
      "Autodesk provides the industry-leading design and engineering software used by professionals worldwide. From 3D modeling and rendering to architectural design and manufacturing, Autodesk tools power the creation of everything from skyscrapers to smartphone components. Includes AutoCAD, Revit, Fusion 360, and more.",
    features: [
      "AutoCAD for 2D & 3D drafting",
      "Revit for BIM & architecture",
      "Fusion 360 for product design",
      "Cloud collaboration & storage",
      "Access on desktop & web browser",
      "Industry-standard file formats",
    ],
  },
];

// Helper function: find a single product by its ID
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
