import React from 'react'
import { TransitionState } from 'gatsby-plugin-transition-link'
import { useTransition, a } from 'react-spring'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTransitionState = styled(TransitionState)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const Transition = ({ mount, children }) => {
  const transition = useTransition(mount, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <>
      {transition((styles, mount) =>
        mount ? <a.div style={styles}>{children}</a.div> : null
      )}
    </>
  )
}

Transition.propTypes = {
  mount: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

const TransitionFade = ({ children }) => {
  return (
    <StyledTransitionState>
      {({ mount }) => {
        return <Transition mount={mount}>{children}</Transition>
      }}
    </StyledTransitionState>
  )
}

TransitionFade.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TransitionFade
