import { ContactForm } from '@/components/contact-form'
import { Typer, useMultiTyper } from '@/components/typer'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const [tc1, tc2, tc3] = useMultiTyper(`I also run a publishing house `, 'Third Color', '.')
  const [c1, c2, c3, c4, c5] = useMultiTyper(
    `If you want to chat, you can text me on `,
    'Telegram',
    ` or `,
    'LinkedIn',
    '.',
  )
  const [e1, e2, e3, arrowDown, arrowLeft] = useMultiTyper(
    `You can also send me an email here - `,
    'nazar@nvovk.com',
    ', or fill out the form over there ',
    '↓',
    '→',
  )

  return (
    <>
      <Head>
        <title>n. vovk</title>
      </Head>
      <div className='mb-8 flex flex-col items-stretch lg:flex-row'>
        <div className='w-full grow-0 space-y-4 border-b py-4 lg:py-2 lg:pr-8'>
          <p>
            <Typer>{`Hi! I'm Nazar and I'm a software engineer.`}</Typer>
          </p>
          <p>
            <Typer>
              {`I focus on serverless system design, writing maintainable code at scale and managing cloud infrastructure with IaC.`}
            </Typer>
          </p>
          <p>
            {tc1}
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='https://coliiir.com'
              target='_blank'
            >
              {tc2}
            </Link>
            {tc3}
          </p>
          <p>
            {c1}
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='https://t.me/nvovk'
              target='_blank'
            >
              {c2}
            </Link>
            {c3}
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='https://www.linkedin.com/in/nvovk/'
              target='_blank'
            >
              {c4}
            </Link>
            {c5}
          </p>
          <p>
            {e1}
            <Link
              className='underline decoration-dashed hover:decoration-solid'
              href='mailto:nazar@nvovk.com'
            >
              {e2}
            </Link>
            {e3}
            <span className='lg:hidden'>{arrowDown}</span>
            <span className='max-lg:hidden'>{arrowLeft}</span>
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
