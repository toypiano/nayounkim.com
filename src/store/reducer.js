import { actionTypes } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOCK_SCROLL:
      return lockScroll(state, action)
    case actionTypes.UNLOCK_SCROLL:
      return unlockScroll(state, action)
    default:
      return state
  }
}

export default reducer

function lockScroll(state, action) {
  return {
    ...state,
    scrollLock: true,
  }
}

function unlockScroll(state, action) {
  return {
    ...state,
    scrollLock: false,
  }
}
