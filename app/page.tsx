import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductGrid from "@/components/product-grid"
import DIYGuides from "@/components/diy-guides"
import Integration from "@/components/integration"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/bioluminescent-garden-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(10, 14, 26, 0.7)",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Hero />
        <ProductGrid />
        <DIYGuides />
        <Integration />
        <Footer />
      </div>
    </main>
  )
}
