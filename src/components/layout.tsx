import { ReactNode, useEffect, useReducer, useState } from 'react'
import { ContentBoundary } from './content-boundary'
import { cn } from '@/utils/cn'
import { Inconsolata } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'

const font = Inconsolata({ weight: ['400', '700'], subsets: ['latin'] })

export const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  return (
    <div className={cn(font.className, 'min-h-screen bg-neutral-50 text-neutral-950')}>
      <Link href='/help-ukraine' className='block bg-neutral-950 py-2 text-sm text-white'>
        <ContentBoundary>
          🇺🇦 please consider donating to help us defend from the russian war of conquest. click to
          learn more...
        </ContentBoundary>
      </Link>
      <header>
        <ContentBoundary>
          <div className='flex items-center justify-between border-b py-2'>
            <Title />
            <div>
              {router.pathname !== '/' && (
                <Link href='/' className='underline decoration-dashed hover:decoration-solid'>
                  Home
                </Link>
              )}
            </div>
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
    <h1 className='cursor-pointer text-3xl font-bold' onClick={expand}>
      {state} vovk
    </h1>
  )
}
