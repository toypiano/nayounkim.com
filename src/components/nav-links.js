import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { mq } from '../styles'

const StyledNavLinks = styled('ul')`
  width: 28rem;
  margin: 0 0 0 3em;
  display: none;
  align-items: center;
  justify-content: space-around;
  li {
    position: relative;

    width: 100;

    a {
      font-size: 0.9rem;
      text-transform: uppercase;
      text-decoration: none;
    }

    &::after {
      content: '';
      display: block;
      position: relative;
      height: 1px;
      width: 0%;
      background: var(--text-main);
    }
    /* hover state bust be on parent element! */
    &:hover::after {
      transition: width 120ms ease-in-out;
      width: 100%;
    }
  }

  @media (min-width: ${mq.desktop}px) {
    display: flex;
  }
`

const NavLinks = () => {
  return (
    <StyledNavLinks>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/blog">Contact</Link>
      </li>
      <li>
        <Link to="/blog">Shop</Link>
      </li>
    </StyledNavLinks>
  )
}

export default NavLinks
