import Head from 'next/head'
import Link from 'next/link'

const HelpUkraine = () => {
  return (
    <>
      <Head>
        <title>🇺🇦 Help Ukraine</title>
      </Head>
      <h1 className='my-4 text-2xl font-bold'>🇺🇦 Help Ukraine</h1>
      <article className='mb-8 max-w-screen-md space-y-2'>
        <p>
          I personally believe that the most impact-per-dollar you can get is by donating to local
          volunteers with small fundraisers.
        </p>
        <p>
          {`Understandably, donating to a random person without concrete proof that the money goes to
          the right place is a bit risky. That's why `}
          <Link
            href='https://vyshybanky.com/'
            className='font-bold underline decoration-dashed hover:decoration-solid'
          >
            Vyshybanky
          </Link>
          {` exists. It's a platform that aggregates and promotes small fundraisers, all while verifying volunteers and requiring reports.`}
        </p>
        <p>
          <Link
            href='https://vyshybanky.com/'
            target='_blank'
            className='font-bold underline decoration-dashed hover:decoration-solid'
          >
            Vyshybanky
          </Link>
          {` is a great project, and I can personally recommend it.`}
        </p>
        <p>
          {`If you want to go for a more traditional way,
          here's a list of trusted charity organizations that I recommend:`}
        </p>
        <ul className='list-disc pl-4'>
          <li>
            <Link
              href='https://savelife.in.ua/en/'
              target='_blank'
              className='font-bold underline decoration-dashed hover:decoration-solid'
            >
              Come Back Alive
            </Link>
          </li>
          <li>
            <Link
              href='https://musiciansdefendukraine.com/en'
              target='_blank'
              className='font-bold underline decoration-dashed hover:decoration-solid'
            >
              Musicians Defend Ukraine
            </Link>
          </li>
          <li>
            <Link
              href='https://u24.gov.ua/en'
              target='_blank'
              className='font-bold underline decoration-dashed hover:decoration-solid'
            >
              United 24
            </Link>
          </li>
        </ul>

        <p>{`And remember - no donation is "too small".`}</p>
      </article>
    </>
  )
}

export default HelpUkraine
