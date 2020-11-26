import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNavLinks = styled('ul')`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  li {
    margin: 0 1em;
    a {
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
    </StyledNavLinks>
  )
}

export default NavLinks
