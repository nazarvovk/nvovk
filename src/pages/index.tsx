import { ContentBoundary } from '@/components/content-boundary'
import { cn } from '@/utils/cn'
import { Titillium_Web } from 'next/font/google'

const titillium = Titillium_Web({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className={cn(titillium.className, '')}>
      <ContentBoundary>
        <p>Hi! I'm Nazar and I'm a fullstack engineer.</p>
      </ContentBoundary>
    </main>
  )
}
