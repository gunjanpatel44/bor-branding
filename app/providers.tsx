'use client'

import React from 'react'

import queryClient from '@/services/queryClient'
import theme from '@/utils/theme'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ConfigProvider } from 'antd'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AntdRegistry>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </AntdRegistry>
      <ReactQueryDevtools client={queryClient} buttonPosition="bottom-right" position="bottom" />
    </QueryClientProvider>
  )
}
