import { ReactNode } from 'react'
import { ContentBoundary } from './content-boundary'

export const Banner = ({ children }: { children: ReactNode }) => {
  return (
    <div className='bg-neutral-950 py-2 text-sm text-white'>
      <ContentBoundary>{children}</ContentBoundary>
    </div>
  )
}
