import { AntdRegistry } from '@ant-design/nextjs-registry'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { StarryBackground } from '@/components/StarryBackground'
import COMPANY from '@/config/company.json'

import TopBar from '@/components/Topbar'
import theme from '@/utils/theme'
import { ConfigProvider, FloatButton } from 'antd'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import './globals.css'

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
              <div className="sticky top-0 z-50">
                <TopBar />
                <Header />
              </div>
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
                href={COMPANY.whatsappLink}
              />
              {children}
              <Footer />
            </ConfigProvider>
          </AntdRegistry>
        </div>
      </body>
    </html>
  )
}
