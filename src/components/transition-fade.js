import React from 'react'
import { TransitionState } from 'gatsby-plugin-transition-link'
import { useTransition, a } from 'react-spring'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Transition = ({ mount, children }) => {
  const transition = useTransition(mount, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <>
      {transition((styles, mount) =>
        mount ? (
          <a.div style={{ ...styles, height: '100%' }}>{children}</a.div>
        ) : null
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
    <TransitionState style={{ height: '100%' }}>
      {({ mount }) => {
        return <Transition mount={mount}>{children}</Transition>
      }}
    </TransitionState>
  )
}

TransitionFade.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TransitionFade
