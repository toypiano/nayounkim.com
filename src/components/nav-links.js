import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNavLinks = styled('ul')`
  max-width: 30rem;
  margin: 0 auto 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  li {
    margin: 0 2.5em;
    a {
      font-size: 0.9rem;
      text-transform: uppercase;
      text-decoration: none;
    }
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
