import { ReactNode, useEffect, useReducer, useState } from 'react'
import { ContentBoundary } from './content-boundary'
import { cn } from '@/utils/cn'
import { Inconsolata } from 'next/font/google'
import { Banner } from './banner'
import Link from 'next/link'

const font = Inconsolata({ weight: '400', subsets: ['latin'] })

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cn(font.className, 'min-h-screen bg-neutral-50 text-neutral-950')}>
      <Banner>Some important stuff here</Banner>
      <header>
        <ContentBoundary>
          <div className='flex justify-between border-b py-2'>
            <Title />
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

const TRANSITIONS = [
  ['nazarii', 'nazari', 'nazar', 'naza', 'naz', 'na', 'n-', 'n.'],
  ['nc', 'npw', 'naep', 'naz>q', 'nazaf\\', 'nazar$', 'nazar.'],
  ['nazar.', 'nazarw', 'nazarcp', 'nazariv', 'nazarii'],
]

const Title = () => {
  const [stage, expand] = useReducer((state) => (state + 1) % TRANSITIONS.length, 0)
  const lastStateOfStage = TRANSITIONS[stage][TRANSITIONS[stage].length - 1]
  const [state, setState] = useState(lastStateOfStage)

  useEffect(() => {
    if (state === lastStateOfStage) return
    const animationTime = 50
    let timeout = setTimeout(function tick() {
      setState(() => {
        return TRANSITIONS[stage][TRANSITIONS[stage].indexOf(state) + 1]
      })
      timeout = setTimeout(tick, animationTime)
    }, animationTime)

    return () => clearTimeout(timeout)
  }, [stage, lastStateOfStage, state])

  return (
    <h1 className='cursor-pointer text-3xl' onClick={expand}>
      {state} vovk
    </h1>
  )
}
