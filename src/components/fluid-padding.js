import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mq } from '../styles'

const StyledFluidPadding = styled('div')`
  width: 100%;
  height: 100%;
  @media (min-width: ${mq.landscape}px) {
    padding: 0 var(--gutter-landscape);
  }
  @media (min-width: ${mq.tablet}px) {
    padding: 0 var(--gutter-tablet);
  }
  @media (min-width: ${mq.desktop}px) {
    padding: 0 var(--gutter-desktop);
  }
  @media (min-width: ${mq.wide}px) {
    padding: 0 var(--gutter-wide);
  }
`

const FluidPadding = ({ children }) => {
  return <StyledFluidPadding>{children}</StyledFluidPadding>
}

FluidPadding.propTypes = {}

export default FluidPadding
