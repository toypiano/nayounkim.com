import { useRef, useState, useEffect } from 'react'

/**
 * @returns {[showControls: boolean, flashControls: () => void)]}
 */
const useMotionAppear = () => {
  const hideControlTimeoutRef = useRef(null)

  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    return () => {
      if (hideControlTimeoutRef.current) {
        window?.clearTimeout(hideControlTimeoutRef.current)
      }
    }
  }, [])

  const flashControls = () => {
    if (hideControlTimeoutRef.current !== null) return

    window?.clearTimeout(hideControlTimeoutRef.current)
    hideControlTimeoutRef.current = window?.setTimeout(() => {
      setShowControls(false)
      hideControlTimeoutRef.current = null
    }, 2000)
    setShowControls(true)
  }

  return [showControls, flashControls]
}

export default useMotionAppear
