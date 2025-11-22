# Verde Haven - Sustainable Home Decor E-Commerce

A complete, responsive e-commerce website for a sustainable home decor brand built with React, Vite, and modern web technologies.

## 🌿 About Verde Haven

Verde Haven bridges the gap between high-end interior design and environmental responsibility, proving that sustainability does not require a sacrifice in style. We curate and sell home goods made exclusively from reclaimed, biodegradable, or ethically sourced materials.

## 🎨 Design Features

- **Color Palette**: Sage Green (#8A9A5B), Warm Terracotta (#E2725B), and Cream (#FFFDD0)
- **Theme**: Earthy, minimalist, and serene
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text

## 🛠️ Tech Stack

- **Framework**: React 19 with Functional Components and Hooks
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context API
- **Icons**: Lucide React
- **Animation**: Framer Motion

## 📦 Features

### Core Functionality

- ✅ Responsive design (mobile & desktop)
- ✅ Shopping cart with localStorage persistence
- ✅ Product filtering by category, material, and values
- ✅ Product detail pages with artisan stories
- ✅ Smooth page transitions and hover effects
- ✅ Impact-based filtering system

### Pages

1. **Home** - Hero section, featured categories, mission statement
2. **Shop** - Product catalog with sidebar filtering
3. **Product Detail** - Image gallery, sustainability impact, artisan stories
4. **About** - Brand story, values, and impact metrics
5. **Cart** - Shopping cart with checkout summary

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/       # Reusable components (Navbar, Footer, ProductCard)
├── context/         # React Context for global state (CartContext)
├── data/            # Mock product data
├── pages/           # Page components (Home, Shop, About, Cart, ProductDetail)
├── App.jsx          # Main app component with routing
└── main.jsx         # Entry point
```

## 🎯 Key React Concepts Used

- **Functional Components** with Hooks
- **useState** - Local state management
- **useEffect** - Side effects and lifecycle
- **useContext** - Global cart state
- **Custom Hooks** - useCart()
- **React Router** - Navigation
- **Framer Motion** - Animations

## 🌱 Sustainability Features

- Impact-based filtering (Shop by Material, Shop by Value)
- Artisan stories for transparency
- Sustainability impact metrics for each product
- Eco-tags (Recycled, Organic, Fair Trade)
- Carbon-neutral shipping information

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 👥 Target Audience

**Eco-Conscious Consumers (25-40 years old)**

- Urban renters or first-time homeowners
- Values sustainability without compromising style
- Seeks affordable ethical alternatives

---

Built with ♻️ for MIS Project
