import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Malak Elnagar | Hybrid Engineer',
  description: 'Telecommunication Engineer & AI & Data Science Engineer - Building intelligent networks at the intersection of infrastructure and intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

