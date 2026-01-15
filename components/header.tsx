"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: "rgba(10, 14, 26, 0.8)",
        borderColor: "rgba(75, 0, 130, 0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center glow-cyan-sm"
            style={{ backgroundColor: "#00ffff" }}
          >
            <span className="font-display font-bold" style={{ color: "#0a0e1a" }}>
              ✨
            </span>
          </div>
          <span className="font-display text-xl font-bold" style={{ color: "#00ffff" }}>
            SustainableSmartDIY
          </span>
        </div>

        <nav className="hidden md:flex gap-8">
          <Link
            href="#products"
            className="transition"
            style={{ color: "#ffffff", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            Products
          </Link>
          <Link
            href="#guides"
            className="transition"
            style={{ color: "#ffffff", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            DIY Guides
          </Link>
          <Link
            href="#integration"
            className="transition"
            style={{ color: "#ffffff", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            Smart Integration
          </Link>
        </nav>

        <button className="btn-glow text-sm hidden md:block">Shop Now</button>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} style={{ color: "#00ffff" }} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
