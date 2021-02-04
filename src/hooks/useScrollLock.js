import { useLayoutDispatch, actionTypes } from '../store'

export const useScrollLock = () => {
  const dispatch = useLayoutDispatch()
  const lockScroll = () => {
    dispatch({ type: actionTypes.LOCK_SCROLL })
  }
  const unlockScroll = () => {
    dispatch({ type: actionTypes.UNLOCK_SCROLL })
  }

  return { lockScroll, unlockScroll }
}
