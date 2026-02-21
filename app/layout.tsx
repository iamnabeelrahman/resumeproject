import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CV Optimizer - Professional CV Writing & Optimization Service',
  description: 'Transform your CV into a powerful career tool. Professional editing, optimization, and formatting to land your dream job.',
  generator: 'v0.app',
  openGraph: {
    title: 'CV Optimizer - Professional CV Writing & Optimization Service',
    description: 'Transform your CV into a powerful career tool with expert editing and optimization.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
