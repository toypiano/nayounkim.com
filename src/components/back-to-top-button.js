import React from 'react'
import styled from 'styled-components'
import BackToTop from '../assets/svgs/back-to-top.svg'
import { useTransition, a, config } from 'react-spring'

import { useScrollAppear } from '../hooks/useScroll'

const StyledBackToTopButton = styled(a.div)`
  position: fixed;
  --size: 4rem;
  bottom: 2rem;
  right: 1rem;
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
  &:hover {
    cursor: pointer;
  }
`

const BackToTopButton = () => {
  const scrolled = useScrollAppear()

  const transition = useTransition(scrolled, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: config.slow,
  })

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      {transition(({ opacity }, scrolled) =>
        scrolled ? (
          <StyledBackToTopButton onClick={scrollToTop} style={{ opacity }}>
            <div className="icon-wrapper">
              <BackToTop />
            </div>
          </StyledBackToTopButton>
        ) : null
      )}
    </>
  )
}

export default BackToTopButton
