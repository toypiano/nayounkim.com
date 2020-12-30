import React from 'react'
import styled from 'styled-components'

import TransitionFade from '../components/transition-fade'

const StyledIndexPage = styled.div`
  height: 300px;
  display: grid;
  place-items: center;

  h1 {
    animation: pulse 3s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }

    30% {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const IndexPage = () => {
  return (
    <TransitionFade>
      <StyledIndexPage>
        <h1>Coming Soon</h1>
      </StyledIndexPage>
    </TransitionFade>
  )
}

export default IndexPage
