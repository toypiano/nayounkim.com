import React from 'react'
import styled from 'styled-components'
import { mq } from '../styles'
import mainGif from '../assets/images/main-810-opt.gif'
import TransitionFade from '../components/transition-fade'

const StyledIndexPage = styled.div`
  height: 100%;

  .main-image {
    // fill entire display height
    height: calc(100vh - var(--header-height));
    margin: 0 auto;
    .gatsby-image-wrapper,
    .image-wrapper {
      position: relative;
      height: 100%;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 28% center;
      }
    }
    @media (min-width: ${mq.desktop}px) {
      --size: 810px;
      width: var(--size);
      height: var(--size);
    }
  }
`

const IndexPage = () => {
  return (
    <TransitionFade>
      <StyledIndexPage>
        <div className="main-image">
          <div className="image-wrapper">
            <img src={mainGif} alt="A guy with a long hair winking at you" />
          </div>
        </div>
      </StyledIndexPage>
    </TransitionFade>
  )
}

export default IndexPage
