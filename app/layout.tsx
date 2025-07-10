import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quick app",
  description: "خدمات التعبئة -  الكويت",
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: false,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body >{children}</body>
    </html>
  )
}