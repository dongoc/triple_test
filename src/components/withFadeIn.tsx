import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import { ComponentType, useCallback, useState } from 'react'

const withFadeIn = (Component: ComponentType) => () => {
  const [visible, setVisible] = useState<boolean>(false)

  const onIntersect: IntersectionObserverCallback = useCallback((entries) => {
    const [entry] = entries

    if (entry.isIntersecting) {
      setVisible(true)
    }
  }, [])

  const { ref } = useIntersectionObserver(onIntersect)

  return <div ref={ref}>{visible ? <Component /> : null}</div>
}

export default withFadeIn
