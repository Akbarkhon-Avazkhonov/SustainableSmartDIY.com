import type React from "react"
import type { Metadata } from "next"
import { Exo_2, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-display" })
const inter = Inter({ subsets: ["latin"], variable: "--font-body" })

export const metadata: Metadata = {
  title: "SustainableSmartDIY - Bioluminescent Gardens",
  description:
    "Discover the intersection of sustainability and bioluminescence. Create glowing night gardens with natural, eco-friendly solutions.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo2.variable} ${inter.variable} antialiased`}
        style={{
          fontFamily: "var(--font-body)",
          backgroundColor: "#0a0e1a",
          color: "#ffffff",
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
