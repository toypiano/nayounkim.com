import React, { createContext, useReducer, useContext } from 'react'
import stateReducer from './reducer'
import { actionTypes } from './actions'

// The defaultValue argument is only used when a component does not have a matching Provider above it in the tree.
// https://reactjs.org/docs/context.html#reactcreatecontext
const LayoutStateContext = createContext({})
const LayoutDispatchContext = createContext({})

const initialState = {
  scrollLock: false,
}

const LayoutStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState)
  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  )
}

const useLayoutState = () => {
  const context = useContext(LayoutStateContext)
  if (context === undefined) {
    throw new Error('useLayoutState must be used within a LayoutStateProvider')
  }
  return context
}

const useLayoutDispatch = () => {
  const context = useContext(LayoutDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useLayoutDispatch must be used within a LayoutStateProvider'
    )
  }
  return context
}

export { LayoutStateProvider, useLayoutState, useLayoutDispatch, actionTypes }
