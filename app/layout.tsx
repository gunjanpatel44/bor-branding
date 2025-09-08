import { AntdRegistry } from '@ant-design/nextjs-registry'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { StarryBackground } from '@/components/StarryBackground'

import './globals.css'
import TopBar from '@/components/Topbar'
import { ConfigProvider } from 'antd'
import theme from '@/utils/theme'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Blck Orac',
  description: 'Fast fashion brand',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden`}
      >
        <StarryBackground />
        <div className="relative z-10">
          <AntdRegistry>
            <ConfigProvider theme={theme}>
              <TopBar />
              <Header />
              {children}
              <Footer />
            </ConfigProvider>
          </AntdRegistry>
        </div>
      </body>
    </html>
  )
}
