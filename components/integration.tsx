"use client"

export default function Integration() {
  return (
    <section id="integration" className="relative py-20 px-4 md:px-8" style={{ backgroundColor: "#0a0e1a" }}>
      <div className="max-w-4xl mx-auto">
        <div className="product-card p-12 text-center glow-lime">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "#ccff00" }}>
            Smart Garden Integration
          </h2>

          <p className="text-lg mb-8" style={{ color: "#aaa" }}>
            Monitor your bioluminescent garden with our IoT sensors. Track growth, luminosity, and ecosystem health in
            real-time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "rgba(15, 30, 61, 0.5)", border: "1px solid rgba(204, 255, 0, 0.3)" }}
            >
              <p className="text-3xl mb-2">📱</p>
              <p className="font-display font-semibold" style={{ color: "#00ffff" }}>
                Mobile App
              </p>
              <p className="text-sm mt-2" style={{ color: "#aaa" }}>
                Control & monitor from anywhere
              </p>
            </div>
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "rgba(15, 30, 61, 0.5)", border: "1px solid rgba(204, 255, 0, 0.3)" }}
            >
              <p className="text-3xl mb-2">🌐</p>
              <p className="font-display font-semibold" style={{ color: "#00ffff" }}>
                Cloud Sync
              </p>
              <p className="text-sm mt-2" style={{ color: "#aaa" }}>
                Automatic data backup & analytics
              </p>
            </div>
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "rgba(15, 30, 61, 0.5)", border: "1px solid rgba(204, 255, 0, 0.3)" }}
            >
              <p className="text-3xl mb-2">⚙️</p>
              <p className="font-display font-semibold" style={{ color: "#00ffff" }}>
                Smart Automation
              </p>
              <p className="text-sm mt-2" style={{ color: "#aaa" }}>
                Self-adjusting ecosystem controls
              </p>
            </div>
          </div>

          <button className="btn-glow">Activate Smart Mode</button>
        </div>
      </div>
    </section>
  )
}
