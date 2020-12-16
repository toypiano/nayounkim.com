import { useState, useLayoutEffect, useRef } from 'react'

/**
 * Return true on page scroll and wait given duration to return false
 * @param {number} duration
 */
export function useScrollAppear(duration = 3000) {
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef()

  useLayoutEffect(() => {
    // will ignore addition scroll event for the given duration
    const handleScroll = () => {
      if (timeoutRef.current) return

      setScrolled(true)
      timeoutRef.current = window.setTimeout(() => {
        setScrolled(false)
        timeoutRef.current = null
      }, duration)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrolled
}
