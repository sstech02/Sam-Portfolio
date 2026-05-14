import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import 'keen-slider/keen-slider.min.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Sam Schill Portfolio (2026)',
  description: 'My Eportfolio website for 2026'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className='min-h-full flex flex-col'>
        <Script
          src='https://kit.fontawesome.com/3c805dd68c.js'
          crossOrigin='anonymous'
          strategy='afterInteractive'
        />
        {children}
      </body>
    </html>
  )
}
