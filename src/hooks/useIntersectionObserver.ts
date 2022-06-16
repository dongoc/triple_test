import { MutableRefObject, useEffect, useRef } from 'react'

const useIntersectionObserver = (onIntersect: IntersectionObserverCallback) => {
  const ref = useRef() as MutableRefObject<HTMLElement>

  useEffect(() => {
    const { current } = ref
    let observer: IntersectionObserver

    if (current) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 })
      observer.observe(current)
    }

    return () => observer && observer.disconnect()
  }, [onIntersect])

  return { ref }
}

export default useIntersectionObserver
