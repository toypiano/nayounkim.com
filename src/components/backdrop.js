import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Portal from './portal'

const StyledBackdrop = styled('div')`
  position: ${props => (props.show ? 'fixed' : 'none')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: var(--z-backdrop);
`

const Backdrop = ({ show, close }) =>
  show && (
    <Portal id={'backdrop-root'}>
      <StyledBackdrop show={show} onClick={close} />
    </Portal>
  )

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func,
}

export default Backdrop
