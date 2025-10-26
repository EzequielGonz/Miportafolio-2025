import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "¡Bienvenido a mi Portafolio! | Ezequiel González",
  description: "Diseñador y Desarrollador Web especializado en crear experiencias digitales únicas y funcionales",
  openGraph: {
    title: "¡Bienvenido a mi Portafolio! | Ezequiel González",
    description: "Diseñador y Desarrollador Web especializado en crear experiencias digitales únicas y funcionales",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: "Ezequiel González"
      }
    ]
  },
  twitter: {
    title: "¡Bienvenido a mi Portafolio! | Ezequiel González",
    description: "Diseñador y Desarrollador Web especializado en crear experiencias digitales únicas y funcionales",
    card: "summary_large_image",
    images: [
      {
        url: "/og-image.png",
        alt: "Ezequiel González"
      }
    ]
  },
  icons: {
    icon: "/favicon.ico"
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

