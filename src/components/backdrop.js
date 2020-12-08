import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledBackdrop = styled('div')`
  position: ${props => (props.show ? 'fixed' : 'none')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: var(--z-backdrop);
`

const Backdrop = ({ show, close }) => {
  const content = <StyledBackdrop show={show} onClick={close}></StyledBackdrop>
  return show
    ? ReactDOM.createPortal(content, document.getElementById('backdrop-root'))
    : null
}

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func,
}

export default Backdrop
