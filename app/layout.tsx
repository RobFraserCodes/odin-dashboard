import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Odin Project - Dashboard',
  description: 'Made for The Odin Project by Rob Fraser',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' bg-slate-300'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
