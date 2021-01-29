import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'

import { mq } from '../styles'

const StyledMenuButton = styled('button')`
  position: absolute;
  left: 1em;
  top: 50%;
  transform: translateY(-50%);
  --size: max(40px, min(7vw, 50px));
  width: calc(var(--size) * 1.1);
  height: var(--size);
  padding: 5px;
  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${mq.desktop}px) {
    display: none;
  }
`

const MenuButton = ({ isOpen, handleClick }) => {
  return (
    <StyledMenuButton isOpen={isOpen} onClick={handleClick}>
      <FiMenu />
    </StyledMenuButton>
  )
}

MenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default MenuButton
