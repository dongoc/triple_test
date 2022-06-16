import { ReactElement, useCallback, useState } from 'react'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'

const FadeInContainer = (component: ReactElement) => {
  const [visible, setVisible] = useState<boolean>(false)

  const onIntersect: IntersectionObserverCallback = useCallback((entries) => {
    const [entry] = entries

    if (entry.isIntersecting) {
      setVisible(true)
    }
  }, [])

  const { ref } = useIntersectionObserver(onIntersect)

  return <div ref={ref}>{visible ? component : null}</div>
}

export default FadeInContainer
