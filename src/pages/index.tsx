import { ArrowLeftIcon, CrossIcon } from '@/components/icons'
import { useMeta } from '@/components/meta'
import { cn } from '@/utils/cn'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
  return {
    revalidate: 60 * 60,
    props: {
      experienceYears: new Date().getFullYear() - 2017,
    },
  }
}

type HomeProps = {
  experienceYears: number
}

export default function Home(props: HomeProps) {
  const { experienceYears } = props
  const { metaList, setMetaList, MetaLink } = useMeta()

  const currentMeta = metaList[metaList.length - 1]

  return (
    <>
      <Head>
        <title>n. vovk</title>
      </Head>
      <div className='flex items-stretch gap-x-8'>
        <div className='w-full grow-0 space-y-4 py-2'>
          <p>
            {`Hi! I'm `}
            <MetaLink
              title="It's pronounced Nah-zah-r"
              body="My legal name is Nazarii, but I go by Nazar, so don't be surprised if you see either somewhere."
            >
              Nazar
            </MetaLink>
            {` and I'm a fullstack engineer.`}
          </p>
          <p>
            {`For the past ${experienceYears} years, I’ve been professionally developing all kinds of software. I focus on writing clean and maintainable code, managing cloud infrastructure, and designing systems for growth.`}
          </p>
          <p>
            {`Over the years I’ve tried out and worked with a lot of different tools and technologies, but lately I’ve been mostly working with the `}
            <MetaLink title='JavaScript ecosystem' body={<JSEcosystemMeta />}>
              JavaScript ecosystem
            </MetaLink>
            {`, AWS, generative AI, and IaC, building and maintaining cloud software.`}
          </p>
          <p>
            {`I love doing silly (as well as some serious and sometimes even useful) side projects, some of which you can find on my `}
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='https://github.com/nazarvovk'
              target='_blank'
            >
              GitHub
            </Link>
            .
          </p>
          <p>
            {`I run a publishing house `}
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='https://coliiir.com'
              target='_blank'
            >
              Third Color
            </Link>
            .
          </p>
          <p>
            <MetaLink
              title='Stuff'
              body='bababooey... ' // TODO: fill this in
            >
              Click here
            </MetaLink>
            {` if you want to know some less relevant random stuff about me.`}
          </p>
          <p>
            {`If you have a project for me or just wanna chat hit me up on `}
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='https://t.me/nvovk'
              target='_blank'
            >
              Telegram
            </Link>
            {` or `}
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='https://www.linkedin.com/in/nvovk/'
              target='_blank'
            >
              LinkedIn
            </Link>
            .
          </p>
          <p>
            {`Or, if you’re all official (or represent a company) it’s probably better to shoot me an email - `}
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='mailto:nazar@nvovk.com'
            >
              nazar@nvovk.com
            </Link>
            .
          </p>
        </div>
        <div
          className={cn(
            'fixed left-0 top-0 w-full grow-0 bg-neutral-50 py-2 max-lg:h-full lg:relative lg:border-l',
            {
              'max-lg:hidden': !currentMeta,
            },
          )}
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

const JSEcosystemMeta = () => (
  <p>
    By <i>“JS ecosystem”</i> I mean all kinds of tools and skills needed to be effective: from
    different runtimes, libraries and frameworks, (whether frontend, backend or full stack), to
    intricacies of TypeScript, dev tooling, CI/CD, testing, and so on.
  </p>
)
