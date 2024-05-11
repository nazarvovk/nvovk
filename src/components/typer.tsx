import { useEffect, useState } from 'react'

type TyperProps = {
  children: string
  speed?: number
}

const DEFAULT_DELAY = 30 // ms

export const Typer = ({
  children: fullText,
  speed = Math.max(fullText.length / 50, 0.5),
}: TyperProps) => {
  const lastTick = fullText.length + 2
  const [state, setState] = useState({
    tick: 1,
    text: '0',
  })

  useEffect(() => {
    let tickTimeout: NodeJS.Timeout

    const handleTick = () => {
      const randomChars = Array.from({ length: 2 }, () =>
        String.fromCharCode(Math.floor(Math.random() * 30) + 97),
      ).join('')
      setState((prev) => {
        const tick = prev.tick + 1
        const text = `${fullText.substring(0, tick - 2)}${randomChars}`.slice(0, fullText.length)
        const rest = fullText.substring(tick - 2).replace(/[^ ]/g, '\u00A0')
        return {
          tick,
          text: `${text}${rest}`,
        }
      })
    }
    if (state.tick < lastTick) {
      const delay = Math.floor(DEFAULT_DELAY / speed)
      tickTimeout = setTimeout(handleTick, delay)
    }

    return () => clearTimeout(tickTimeout)
  }, [fullText, lastTick, state, speed])

  return (
    <>
      <span className='sr-only'>{fullText}</span>
      <span className='whitespace-break-spaces'>{state.text}</span>
    </>
  )
}
