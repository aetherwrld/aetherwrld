import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AETHERWRLD — Beyond the Ordinary',
  description: 'A streetwear brand built for those who exist between worlds.',
  openGraph: {
    title: 'AETHERWRLD',
    description: 'Beyond the Ordinary.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}