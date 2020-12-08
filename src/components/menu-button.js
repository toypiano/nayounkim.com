import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { mq } from '../styles'

const StyledMenuButton = styled('button')`
  position: absolute;
  --logo-offset: 10px;

  right: 0;
  bottom: var(--logo-offset);
  margin-right: 0.5em; // abs-positioned child is contained in parent's padding box
  margin-left: 1em;

  --size: 40px;
  width: var(--size);
  height: var(--size);
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    width: 100%;
    height: 5px;
    background: var(--text-main);
    opacity: 0.8;
  }

  @media (min-width: 475px) {
    position: relative;
    margin-right: 0; // rel-pos child is contained in parent's content-box
  }

  @media (min-width: ${mq.desktop}px) {
    display: none;
  }
`

const MenuButton = ({ isOpen, handleClick }) => {
  return (
    <StyledMenuButton isOpen={isOpen} onClick={handleClick}>
      <span className="top"></span>
      <span className="middle"></span>
      <span className="bottom"></span>
    </StyledMenuButton>
  )
}

MenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default MenuButton
