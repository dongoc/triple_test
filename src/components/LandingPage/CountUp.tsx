import { useState, useEffect } from 'react'

type CountUpProps = {
  end: number
  duration: number
}

const CountUp = (props: CountUpProps) => {
  const { end, duration } = props

  return <span>{end}</span>
}

export default CountUp
