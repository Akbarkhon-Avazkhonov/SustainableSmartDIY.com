"use client"

import { useState } from "react"
import Image from "next/image"

const products = [
  {
    id: 1,
    category: "Nocturnal Flora",
    title: "Glow-In-The-Night Flowers",
    description: "Botanically enhanced flowers that emit their own soft phosphorescent light at dusk.",
    image: "/images/glow-flowers.jpg",
    features: ["Natural bioluminescence", "Requires no watering", "Year-round bloom"],
  },
  {
    id: 2,
    category: "Glowing Substrates",
    title: "Biolume Soil Mix",
    description: "Premium growing medium infused with bio-luminescent microorganisms.",
    image: "/images/biolume-soil.jpg",
    features: ["pH balanced", "Rich nutrients", "Self-glowing"],
  },
  {
    id: 3,
    category: "Bio-Furniture",
    title: "Luminescent Wood Bench",
    description: "Sustainable reclaimed wood embedded with natural glow compounds.",
    image: "/images/wood-bench.jpg",
    features: ["Eco-friendly wood", "Integrated LEDs optional", "Glows naturally"],
  },
  {
    id: 4,
    category: "Garden Ecosystems",
    title: "Night Garden Starter Kit",
    description: "Complete ecosystem for creating your own bioluminescent garden.",
    image: "/images/garden-kit.jpg",
    features: ["All-in-one setup", "Detailed guide included", "Expandable"],
  },
]

export default function ProductGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="products" className="relative py-20 px-4 md:px-8" style={{ backgroundColor: "#0a0e1a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#00ffff" }}>
            Lumen Grid
          </h2>
          <p className="text-xl" style={{ color: "#aaa" }}>
            Explore our collection of bioluminescent products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="product-card group cursor-pointer"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(10, 14, 26, 0.8), transparent)",
                  }}
                />
              </div>

              <p className="text-sm font-display font-semibold mb-2" style={{ color: "#ccff00" }}>
                {product.category}
              </p>

              <h3 className="font-display text-xl font-bold mb-3 transition" style={{ color: "#00ffff" }}>
                {product.title}
              </h3>

              <p className="text-sm mb-4" style={{ color: "#aaa" }}>
                {product.description}
              </p>

              {hoveredId === product.id && (
                <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(0, 255, 255, 0.3)" }}>
                  <ul className="text-xs space-y-2" style={{ color: "#00ffff" }}>
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span style={{ color: "#ccff00" }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                className="mt-6 w-full py-2 px-4 rounded-lg text-sm font-semibold transition"
                style={{
                  backgroundColor: "rgba(0, 255, 255, 0.1)",
                  border: "1px solid rgba(0, 255, 255, 0.5)",
                  color: "#00ffff",
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
