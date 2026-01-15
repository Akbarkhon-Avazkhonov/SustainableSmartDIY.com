"use client"

const guides = [
  {
    id: 1,
    title: "Create Your First Biolume Garden",
    duration: "2 hours",
    difficulty: "Beginner",
    image: "🌍",
  },
  {
    id: 2,
    title: "Advanced Bio-Luminescence Techniques",
    duration: "4 hours",
    difficulty: "Expert",
    image: "🔬",
  },
  {
    id: 3,
    title: "Maintaining Glowing Ecosystems",
    duration: "1 hour",
    difficulty: "Intermediate",
    image: "🛠️",
  },
]

export default function DIYGuides() {
  return (
    <section
      id="guides"
      className="relative py-20 px-4 md:px-8"
      style={{ backgroundImage: "linear-gradient(to bottom, #0a0e1a, rgba(15, 30, 61, 0.2), #0a0e1a)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ccff00" }}>
            DIY Guides
          </h2>
          <p className="text-xl" style={{ color: "#aaa" }}>
            Master the art of bioluminescent gardening
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="group relative p-8 rounded-2xl transition-all duration-300"
              style={{
                backgroundImage: "linear-gradient(to bottom right, rgba(26, 0, 51, 0.5), rgba(15, 30, 61, 0.5))",
                border: "1px solid rgba(0, 255, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(204, 255, 0, 0.5)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.2)"
              }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{guide.image}</div>

              <h3 className="font-display text-xl font-bold mb-2 transition" style={{ color: "#00ffff" }}>
                {guide.title}
              </h3>

              <div className="flex gap-4 text-sm mb-6" style={{ color: "#aaa" }}>
                <span className="flex items-center gap-1">
                  <span style={{ color: "#ccff00" }}>⏱️</span> {guide.duration}
                </span>
                <span className="flex items-center gap-1">
                  <span style={{ color: "#00ffff" }}>📊</span> {guide.difficulty}
                </span>
              </div>

              <button
                className="w-full py-3 px-4 rounded-lg font-semibold transition"
                style={{
                  backgroundColor: "rgba(204, 255, 0, 0.1)",
                  border: "1px solid rgba(204, 255, 0, 0.5)",
                  color: "#ccff00",
                }}
              >
                Start Guide
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
