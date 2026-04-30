# 🛍️ SoftwareHub — Digital Product Store

A beginner-friendly digital product store built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

---

## 📁 Folder Structure

```
digital-store/
├── app/                     ← All your pages live here (Next.js App Router)
│   ├── layout.tsx           ← Main shell: Navbar + Footer (wraps every page)
│   ├── page.tsx             ← Homepage  → localhost:3000/
│   ├── globals.css          ← Global styles (Tailwind import)
│   ├── products/
│   │   ├── page.tsx         ← Products listing → localhost:3000/products
│   │   └── [id]/
│   │       └── page.tsx     ← Product detail  → localhost:3000/products/microsoft-365
│   └── contact/
│       └── page.tsx         ← Contact page    → localhost:3000/contact
│
├── components/              ← Reusable UI building blocks
│   ├── Navbar.tsx           ← Top navigation bar
│   ├── Footer.tsx           ← Bottom footer
│   └── ProductCard.tsx      ← Card shown for each product
│
├── lib/
│   └── products.ts          ← Your mock product data (edit this to add products!)
│
├── package.json             ← Project config & dependencies list
├── tsconfig.json            ← TypeScript config
├── next.config.ts           ← Next.js config
└── postcss.config.mjs       ← Tailwind CSS config
```

---

## 🚀 How to Run Locally (Step by Step)

### Step 1 — Install Node.js
If you don't have it yet, download Node.js from **https://nodejs.org**
(Choose the "LTS" version — the recommended one)

After installing, verify it works by opening your Terminal (or Command Prompt on Windows) and typing:
```bash
node --version
# Should print something like: v22.0.0
```

### Step 2 — Open this folder in Terminal
Navigate into the project folder:
```bash
cd digital-store
```

### Step 3 — Install dependencies
This downloads all the packages the project needs (React, Next.js, Tailwind, etc.):
```bash
npm install
```
⏳ This may take 1–2 minutes. You'll see a `node_modules` folder appear.

### Step 4 — Start the development server
```bash
npm run dev
```

### Step 5 — Open your browser
Visit: **http://localhost:3000**

Your store is running! 🎉

---

## ✏️ How to Add or Edit Products

Open `lib/products.ts` and add a new product object to the `products` array:

```typescript
{
  id: "adobe-creative",           // URL-friendly ID (no spaces!)
  name: "Adobe Creative Cloud",
  category: "Design Suite",
  price: 54.99,
  originalPrice: 79.99,           // Optional: shows a crossed-out original price
  badge: "Popular",               // Optional: "Best Seller", "New", "Pro", etc.
  icon: "🎨",                     // Any emoji
  color: "from-red-500 to-pink-500",  // Tailwind gradient colors
  description: "Short description shown on cards.",
  longDescription: "Longer description shown on the detail page.",
  features: [
    "Photoshop & Illustrator",
    "100GB cloud storage",
    "Access on 2 devices",
  ],
}
```

Save the file — the browser updates automatically!

---

## 🎨 Changing Colors

Edit the `color` field in any product using Tailwind gradient classes:
- Blue: `from-blue-500 to-cyan-500`
- Purple: `from-violet-500 to-purple-600`
- Green: `from-green-500 to-emerald-600`
- Orange: `from-orange-500 to-red-500`
- Pink: `from-pink-500 to-rose-500`

---

## 📦 Build for Production

When you're ready to deploy:
```bash
npm run build
npm start
```

Or deploy for free on **Vercel**: https://vercel.com (just connect your GitHub repo!)
