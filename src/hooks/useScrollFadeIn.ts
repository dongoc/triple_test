import { MutableRefObject, useEffect, useRef, useCallback } from 'react'

const initialStyle = {
  transform: 'translateY(30px)',
  opacity: 0,
}

const useScrollFadeIn = (duration: number, delay: number) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  const onIntersect: IntersectionObserverCallback = useCallback(
    (entries) => {
      const { current } = ref
      const [entry] = entries

      if (entry.isIntersecting) {
        current.style.transition = `all ${duration}ms ease-in-out ${delay}ms`
        current.style.transform = 'translateY(0)'
        current.style.opacity = '1'
      }
    },
    [duration, delay],
  )

  useEffect(() => {
    const { current } = ref
    let observer: IntersectionObserver

    if (current) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 })
      observer.observe(current)
    }

    return () => observer && observer.disconnect()
  }, [onIntersect])

  return { ref, style: initialStyle }
}

export default useScrollFadeIn
