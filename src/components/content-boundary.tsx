import { ReactNode } from 'react'

export const ContentBoundary = ({ children }: { children: ReactNode }) => {
  return <div className='mx-auto max-w-screen-xl px-3 md:px-5 xl:px-8'>{children}</div>
}
