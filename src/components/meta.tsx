import { ReactNode, useState } from 'react'

type Meta = {
  title?: string
  body: ReactNode
}

type MetaLinkProps = Meta & {
  children: string
  push?: boolean
}

export const useMeta = () => {
  const [metaList, setMetaList] = useState<Meta[]>([])

  const MetaLink = ({ children, body, title, push }: MetaLinkProps) => {
    return (
      <button
        className='underline decoration-dashed hover:decoration-solid'
        onClick={() => {
          const meta = { title, body }
          const newState = push ? [...metaList, meta] : [meta]
          setMetaList(newState)
        }}
      >
        {children}
      </button>
    )
  }

  return { metaList, setMetaList, MetaLink }
}
