import React from 'react'
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

const Backdrop = ({ show }) => {
  return <StyledBackdrop show={show}></StyledBackdrop>
}

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Backdrop
