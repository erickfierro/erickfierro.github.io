import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const title = "Erick Fierro - Mainframe & COBOL Developer"
const description =
  "COBOL developer with experience maintaining and optimizing mission-critical systems. Mainframe specialist focused on legacy process modernization."

export const metadata: Metadata = {
  metadataBase: new URL("https://erickfierro.github.io"),
  title,
  description,
  keywords: ["COBOL", "Mainframe", "z/OS", "JCL", "CICS", "VSAM", "DB2", "Software Developer"],
  authors: [{ name: "Erick Fierro" }],
  generator: "v0.app",
  openGraph: {
    title,
    description,
    url: "https://erickfierro.github.io",
    siteName: "Erick Fierro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">
        <noscript>
          <style>{`.opacity-0 { opacity: 1 !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
