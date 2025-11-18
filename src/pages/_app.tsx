import { Layout } from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SpeedInsights />
      <Analytics />
      <Component {...pageProps} />
    </Layout>
  )
}
