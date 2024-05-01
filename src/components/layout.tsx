import { ReactNode } from 'react'
import { ContentBoundary } from './content-boundary'
import { cn } from '@/utils/cn'
import { Titillium_Web } from 'next/font/google'

const titillium = Titillium_Web({ weight: '400', subsets: ['latin'] })

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cn(titillium.className, 'bg-neutral-50 text-neutral-950')}>
      <header>
        <ContentBoundary>
          <div className='flex justify-between border-b py-2'>
            <h1 className='text-3xl'>n. vovk</h1>
            <div></div>
          </div>
        </ContentBoundary>
      </header>
      <main>
        <ContentBoundary>{children}</ContentBoundary>
      </main>
    </div>
  )
}
