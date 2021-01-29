import { useRef, useEffect } from 'react'

/**
 * Returns saved value from the last render
 * @param value
 */
export default function usePrevious(value) {
  const ref = useRef(null)
  useEffect(() => {
    console.log('usePrevious effect')
    ref.current = value
  }, [value])

  return ref.current
}
