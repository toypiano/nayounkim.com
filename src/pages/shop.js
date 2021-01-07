import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TransitionFade from '../components/transition-fade'

const StyledShopPage = styled('div')`
  height: 100%;
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

const ShopPage = () => {
  return (
    <TransitionFade>
      <StyledShopPage>
        <StyledShopPage>
          <h1>Coming Soon</h1>
        </StyledShopPage>
      </StyledShopPage>
    </TransitionFade>
  )
}

ShopPage.propTypes = {}

export default ShopPage
