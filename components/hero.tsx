"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ backgroundColor: "#0a0e1a" }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bioluminescent-garden-bg.jpg')",
          }}
        ></div>
        {/* Dark overlay for better text contrast */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(10, 14, 26, 0.6)",
          }}
        ></div>
        <div
          className="absolute top-20 left-10 w-80 h-80 rounded-full filter blur-3xl animate-pulse"
          style={{ backgroundColor: "rgba(0, 255, 255, 0.1)" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full filter blur-3xl animate-pulse"
          style={{ backgroundColor: "rgba(204, 255, 0, 0.05)", animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="font-display text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text leading-tight"
          style={{
            backgroundImage: "linear-gradient(to right, #00ffff, #ccff00, #00ffff)",
          }}
        >
          Light Your Garden with Nature's DNA
        </h1>

        <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: "#aaa" }}>
          Discover the intersection of sustainability and bioluminescence. No plugs, no batteries—just pure, natural
          glow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-glow">Explore Products</button>
          <button className="btn-glow-outline">Learn More</button>
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: "rgba(15, 30, 61, 0.5)",
              borderColor: "rgba(0, 255, 255, 0.3)",
              border: "1px solid",
            }}
          >
            <p className="font-display" style={{ color: "#ccff00" }}>
              🌱 100% Sustainable
            </p>
          </div>
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: "rgba(15, 30, 61, 0.5)",
              borderColor: "rgba(0, 255, 255, 0.3)",
              border: "1px solid",
            }}
          >
            <p className="font-display" style={{ color: "#00ffff" }}>
              ⚡ Zero Energy
            </p>
          </div>
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: "rgba(15, 30, 61, 0.5)",
              borderColor: "rgba(0, 255, 255, 0.3)",
              border: "1px solid",
            }}
          >
            <p className="font-display" style={{ color: "#ccff00" }}>
              🔬 Bio-Engineered
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
