import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { mq } from '../styles'

const StyledMenuButton = styled('button')`
  position: absolute;
  left: 1em;
  top: 50%;
  transform: translateY(-50%);

  --size: max(30px, min(7vw, 38px));
  width: calc(var(--size) * 1.1);
  height: var(--size);
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    width: 100%;
    height: 3px;
    background: var(--text-main);
    border-radius: 3px;
  }

  @media (min-width: 475px) {
    /* position: relative;
    margin-right: 0; // rel-pos child is contained in parent's content-box
    bottom: 5px; */
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
