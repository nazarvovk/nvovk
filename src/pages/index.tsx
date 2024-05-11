import { ContactForm } from '@/components/contact-form'
import { Typer } from '@/components/typer'
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

  return (
    <>
      <Head>
        <title>n. vovk</title>
      </Head>
      <div className='mb-8 flex flex-col items-stretch lg:flex-row'>
        <div className='w-full grow-0 space-y-4 border-b py-4 lg:py-2 lg:pr-8'>
          <p>
            <Typer>{`Hi! I'm Nazar and I'm a fullstack engineer.`}</Typer>
          </p>
          <p>
            <Typer>
              {`For the past ${experienceYears} years, I’ve been professionally developing all kinds of software. I focus on writing clean and maintainable code, managing cloud infrastructure, and designing systems for growth.`}
            </Typer>
          </p>
          <p>
            <Typer>
              {`Over the years I’ve tried out and worked with a lot of different tools and technologies, but lately I’ve been mostly working with the JavaScript ecosystem, AWS, generative AI, and IaC, building and maintaining cloud-based software.`}
            </Typer>
          </p>
          <p>
            <Typer>
              {`I love doing silly (as well as some serious and sometimes even useful) side projects, some of which you can find on my `}
            </Typer>
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='https://github.com/nazarvovk'
              target='_blank'
            >
              <Typer>GitHub</Typer>
            </Link>
            .
          </p>
          <p>
            <Typer>{`I run a publishing house `}</Typer>
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='https://coliiir.com'
              target='_blank'
            >
              <Typer>Third Color</Typer>
            </Link>
            .
          </p>
          <p>
            <Typer>{`If you have a project for me or just wanna chat hit me up on `}</Typer>
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='https://t.me/nvovk'
              target='_blank'
            >
              <Typer>Telegram</Typer>
            </Link>
            <Typer>{` or `}</Typer>
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='https://www.linkedin.com/in/nvovk/'
              target='_blank'
            >
              <Typer>LinkedIn</Typer>
            </Link>
            .
          </p>
          <p>
            <Typer>
              {`Or, if you’re all official (or represent a company) it’s probably better to shoot me an email - `}
            </Typer>
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='mailto:nazar@nvovk.com'
            >
              nazar@nvovk.com
            </Link>
            .
          </p>
        </div>
        <div className='w-full grow-0 border-b pb-4 pt-2 lg:flex lg:flex-col lg:justify-center lg:border-l lg:py-4 lg:pl-4'>
          <h3 className='mb-2 text-xl font-bold'>Contact me</h3>
          <ContactForm />
        </div>
      </div>
    </>
  )
}
