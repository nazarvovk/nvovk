import { ReactNode } from 'react'
import { ContentBoundary } from './content-boundary'
import { cn } from '@/utils/cn'
import { Titillium_Web } from 'next/font/google'
import { Banner } from './banner'
import Link from 'next/link'

const titillium = Titillium_Web({ weight: '400', subsets: ['latin'] })

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cn(titillium.className, 'bg-neutral-50 text-neutral-950')}>
      <Banner>Some important stuff here</Banner>
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
      <footer className='py-4'>
        <ContentBoundary>
          <div className='flex justify-between'>
            <p>
              <Link
                className='underline decoration-dashed hover:decoration-solid'
                href='https://github.com/nazarvovk'
                target='_blank'
              >
                github
              </Link>
              {' | '}
              <Link
                className='underline decoration-dashed hover:decoration-solid'
                href='https://t.me/nvovk'
                target='_blank'
              >
                telegram
              </Link>
            </p>
            <p>© {new Date().getFullYear()} Nazar Vovk</p>
            <Link
              href='mailto:nazar@nvovk.com'
              className='underline decoration-dashed hover:decoration-solid'
            >
              nazar@nvovk.com
            </Link>
          </div>
        </ContentBoundary>
      </footer>
    </div>
  )
}
