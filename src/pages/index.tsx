import { ArrowLeftIcon, CrossIcon } from '@/components/icons'
import { useMeta } from '@/components/meta'
import { cn } from '@/utils/cn'
import Head from 'next/head'

export default function Home() {
  const { metaList, setMetaList, MetaLink } = useMeta()

  const currentMeta = metaList[metaList.length - 1]

  return (
    <>
      <Head>
        <title>n. vovk</title>
      </Head>
      <div className='flex justify-between'>
        <div className='w-full grow-0 py-2'>
          <p>
            {`Hi! I'm`}{' '}
            <MetaLink
              title='Na·zar'
              body="My legal name is Nazarii, but I go by Nazar, so don't be surprised if you see either somewhere."
            >
              Nazar
            </MetaLink>{' '}
            {`and I'm a fullstack engineer.`}
          </p>
        </div>
        <div className='hidden min-h-96 w-px bg-neutral-200 lg:block' />
        <div
          className={cn('fixed left-0 top-0 size-full grow-0 bg-neutral-50 py-2 lg:relative', {
            'max-lg:hidden': !currentMeta,
          })}
        >
          {currentMeta && (
            <div className='mb-2 flex gap-4 border-b px-4 pb-2 text-lg'>
              <button onClick={() => setMetaList(metaList.slice(0, metaList.length - 1))}>
                {metaList.length > 1 ? (
                  <ArrowLeftIcon className='inline' />
                ) : (
                  <CrossIcon className='transition hover:drop-shadow' />
                )}
              </button>
              <h3 className=''>{currentMeta.title}</h3>
            </div>
          )}
          <div className='px-4'>
            {currentMeta?.body ?? (
              <>
                <p className='mb-2'>
                  <ArrowLeftIcon className='mr-2 inline' /> click on links over there to see more
                  info
                </p>
                <p>
                  <MetaLink
                    title='me·ta links'
                    body="There's only so much I can fit in one cohesive text, so this is how I hide some important details."
                  >
                    why?
                  </MetaLink>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
