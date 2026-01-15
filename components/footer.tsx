"use client"

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-4 md:px-8"
      style={{
        backgroundColor: "#0a0e1a",
        borderTop: "1px solid rgba(75, 0, 130, 0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-display text-lg font-bold mb-4" style={{ color: "#00ffff" }}>
              About
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "#aaa" }}>
              <li>
                <a
                  href="#"
                  className="transition"
                  style={{ textDecoration: "none", color: "#aaa" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition"
                  style={{ textDecoration: "none", color: "#aaa" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ccff00")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition"
                  style={{ textDecoration: "none", color: "#aaa" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4" style={{ color: "#ccff00" }}>
              Products
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "#aaa" }}>
              <li>
                <a
                  href="#"
                  className="transition"
                  style={{ textDecoration: "none", color: "#aaa" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition"
                  style={{ textDecoration: "none", color: "#aaa" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ccff00")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition"
                  style={{ textDecoration: "none", color: "#aaa" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4" style={{ color: "#00ffff" }}>
              Support
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "#aaa" }}>
              <li>
                <a
                  href="#"
                  className="transition"
                  style={{ textDecoration: "none", color: "#aaa" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ccff00")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition"
                  style={{ textDecoration: "none", color: "#aaa" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition"
                  style={{ textDecoration: "none", color: "#aaa" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ccff00")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4" style={{ color: "#ccff00" }}>
              Connect
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "#aaa" }}>
              <li>
                <a
                  href="#"
                  className="transition"
                  style={{ textDecoration: "none", color: "#aaa" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition"
                  style={{ textDecoration: "none", color: "#aaa" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ccff00")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition"
                  style={{ textDecoration: "none", color: "#aaa" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderTop: "1px solid rgba(75, 0, 130, 0.3)" }}
        >
          <p className="text-sm mb-4 md:mb-0" style={{ color: "#aaa" }}>
            © 2025 SustainableSmartDIY. Lighting the future, naturally.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm transition"
              style={{ color: "#aaa", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm transition"
              style={{ color: "#aaa", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ccff00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm transition"
              style={{ color: "#aaa", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
