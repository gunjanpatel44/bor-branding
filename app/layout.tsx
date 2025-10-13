import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'

import { FloatButton } from 'antd'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import './globals.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import company from '@/config/company.json'
import Providers from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  title: 'Blck Orack',
  description: 'Embrace the cracks',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body
        className={`${inter.variable} ${bebas.variable} antialiased relative min-h-screen bg-brand-900 text-brand-100 overflow-x-hidden`}
      >
        <GoogleAnalytics gaId="G-0DTR0WYN51" />
        <Providers>
          <div className="relative mx-auto z-10">
            <Header />
            <FloatButton
              style={{
                insetInlineEnd: 32,
                insetBlockEnd: 32,
                height: 56,
                width: 56,
              }}
              type="primary"
              target="_blank"
              icon={<AiOutlineWhatsApp />}
              href={company.whatsappLink}
            />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
