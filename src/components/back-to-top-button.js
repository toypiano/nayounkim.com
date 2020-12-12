import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BackToTop from '../images/back-to-top.svg'

const StyledBackToTopButton = styled('div')`
  position: fixed;
  --size: 3.5rem;
  bottom: 3rem;
  right: calc((100% - 340px) / 2);
  width: var(--size);
  height: var(--size);

  z-index: var(--z-back-to-top-button);
  .icon-wrapper {
    width: 100%;
    height: 100%;
    svg {
      width: 100%;
      height: 100%;
      fill: rgba(0, 0, 0, 0.8);
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
    }
  }
`

// TODO: fade button 3s after scrolling
const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <StyledBackToTopButton onClick={scrollToTop}>
      <div className="icon-wrapper">
        <BackToTop />
      </div>
    </StyledBackToTopButton>
  )
}

BackToTopButton.propTypes = {}

export default BackToTopButton
