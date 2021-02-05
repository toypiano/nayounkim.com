import { useReducer } from 'react'
import useScrollLock from './useScrollLock'

export default function usePortfolio(works) {
  const initialState = {
    showOverlay: false,
    currentIndex: 2,
    prevIndex: 2,
  }

  const portfolioReducer = (state, action) => {
    switch (action.type) {
      case 'OVERLAY_OPEN':
        return {
          ...state,
          showOverlay: true,
        }
      case 'OVERLAY_CLOSE':
        return {
          ...state,
          showOverlay: false,
        }
      case 'SET_CURRENT_INDEX':
        return {
          ...state,
          currentIndex: action.payload ?? state.currentIndex,
        }
      case 'NEXT':
        return {
          ...state,
          currentIndex: (state.currentIndex + 1) % works.length,
        }
      case 'PREV':
        return {
          ...state,
          currentIndex: (state.currentIndex - 1 + works.length) % works.length,
        }
      default:
        return state
    }
  }

  const [{ showOverlay, currentIndex }, dispatch] = useReducer(
    portfolioReducer,
    initialState
  )

  const { unlockScroll } = useScrollLock()

  const openOverlay = () => {
    dispatch({ type: 'OVERLAY_OPEN' })
  }

  const closeOverlay = () => {
    dispatch({ type: 'OVERLAY_CLOSE' })
    unlockScroll()
    // const slug = works[currentIndex].node.frontmatter.slug
    // navigate(`#${slug}`)
  }

  const setCurrentIndex = index => {
    dispatch({ type: 'SET_CURRENT_INDEX', payload: index })
  }

  const next = () => {
    dispatch({ type: 'NEXT' })
  }

  const prev = () => {
    dispatch({ type: 'PREV' })
  }

  return {
    showOverlay,
    currentIndex,
    openOverlay,
    closeOverlay,
    setCurrentIndex,
    next,
    prev,
  }
}
