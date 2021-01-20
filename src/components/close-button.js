import React from 'react'
import { Component } from 'react'
import styled from 'styled-components'

const StyledCloseButton = styled.button`
  --size: 40px;
  margin-left: 2em;
  padding: 8px;
  color: var(--accent);
  width: var(--size);
  height: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-weight: bold;
    font-size: 25px;
  }
`

const CloseButton = ({ onClick, style, className }) => (
  <StyledCloseButton className={className} onClick={onClick} style={style}>
    <span>&#10005;</span>
  </StyledCloseButton>
)

export default CloseButton
