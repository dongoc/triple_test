import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import { useState, useCallback } from 'react'

type CountUpProps = {
  start?: number
  end: number
  duration: number
}

const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

const frameDuration = 1000 / 60 // 16.66

const CountUp = (props: CountUpProps) => {
  const { start = 0, end, duration } = props
  const [current, setCurrent] = useState<number>(start)

  const countUp = useCallback(() => {
    let frame = 0
    const totalFrames = Math.floor(duration / frameDuration)
    const timerId = setInterval(() => {
      const progress = easeOutExpo(++frame / totalFrames)
      setCurrent(end * progress)

      if (frame === totalFrames) clearInterval(timerId)

      return () => clearInterval(timerId)
    }, frameDuration)
  }, [start, end, duration])

  const { ref } = useIntersectionObserver(countUp)

  return <span ref={ref}>{Math.floor(current)}</span>
}

export default CountUp
