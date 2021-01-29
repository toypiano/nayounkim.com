import React, { useRef, useEffect } from 'react'
import { navigate } from 'gatsby'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash-es/clamp'

/**
 *
 * @param {{currentIndex: number, setCurrentIndex: () => void, works: any[]}}
 * @returns {{Carousel: React.FunctionComponent }}
 */
const useCarousel = ({ currentIndex, setCurrentIndex, works }) => {
  const isInitialMount = useRef(true)

  const [{ x }, setSpring] = useSpring(() => ({}))
  // no animation on mount
  useEffect(() => {
    setSpring({
      to: { x: -1 * currentIndex * window?.innerWidth },
      immediate: true,
    })
  }, [])

  // animate on prev / next
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      setSpring({
        to: { x: -1 * currentIndex * window?.innerWidth },
      })

      navigate(`/portfolio/#${works[currentIndex].node.frontmatter.slug}`)
    }
  }, [currentIndex])

  // animate on swipe gesture
  const bind = useDrag(({ swipe: [swipeX] }) => {
    if (swipeX) {
      // If dragged to the right, show work at index - 1
      const newIndex = currentIndex - swipeX
      const clamped = clamp(newIndex, 0, works.length - 1)

      setCurrentIndex(clamped)
    }
  })

  // const Carousel = ({ children }) => (
  //   <animated.div {...bind()} className="work-contents" style={{ x }}>
  //     {children}
  //   </animated.div>
  // )

  return { bind, x }
}

export default useCarousel
