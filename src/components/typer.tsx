import { useEffect, useState } from 'react'

const DEFAULT_DELAY = 30 // ms

export const useTyper = (
  fullText: string,
  active = true,
  speed = Math.max(fullText.length / 50, 0.5),
) => {
  const lastTick = fullText.length + 2
  const [state, setState] = useState({
    tick: 1,
    text: '',
  })

  useEffect(() => {
    let tickTimeout: NodeJS.Timeout
    if (!active) return

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
  }, [fullText, lastTick, state, speed, active])

  return {
    current: state.text,
    complete: state.tick >= lastTick,
    fullText,
  }
}

type Typer = ReturnType<typeof useTyper>

export const useMultiTyper = (...strings: readonly string[]) => {
  const typers: Typer[] = []

  for (let i = 0; i < strings.length; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    typers.push(useTyper(strings[i], i === 0 || typers[i - 1].complete))
  }

  return typers.map((typer) => typer.current)
}

export const Typer = ({ children }: { children: string }) => {
  const { current } = useTyper(children)

  return <span className='whitespace-break-spaces'>{current}</span>
}
