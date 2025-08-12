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
        <p>{`Here's a list of trusted charity organizations that I recommend:`}</p>
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

        <p>{`Every dollar and euro counts. And remember - no donation is ever "too small".`}</p>
      </article>
    </>
  )
}

export default HelpUkraine
