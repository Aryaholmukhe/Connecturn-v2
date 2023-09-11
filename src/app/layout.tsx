import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Connecturn',
  description: 'We create opportunities for you.',
  keywords: ['connecturn', 'opportunities', 'networking', 'students', 'small businesses'],
  author: 'Connecturn',
  image: 'https://example.com/your-image.png',
  url: 'https://example.com/your-page-url',
  og: {
    title: 'Connecturn - We create opportunities for you.',
    description: 'Connect with students and small businesses to build meaningful connections.',
    image: 'https://example.com/your-image.png',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto p-4`}>{children}</body>
    </html>
  )
}
