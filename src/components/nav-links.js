import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import { mq } from '../styles'

const linkCss = css`
  li {
    a {
      font-size: 0.9rem;
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
`
const sidebarLinkCss = css`
  li {
    padding: 1em;
    a {
      font-size: 1.2rem;
      font-weight: var(--fw-light);
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      display: block;
      width: 10em;
      border-top: 0.5px solid rgba(0, 0, 0, 0.03);
    }
  }
`

const StyledNavLinks = styled('ul')`
  width: 100%;
  margin-left: ${props => (props.sidebar ? 0 : '1em')};
  display: ${props => (props.sidebar ? 'flex' : 'none')};
  flex-direction: column;
  align-items: ${props => (props.sidebar ? 'flex-start' : 'center')};
  justify-content: space-between;

  li {
    position: relative;
    width: 100;

    a {
      text-transform: uppercase;
      text-decoration: none;
      &[aria-current='page'] {
        color: var(--accent);
      }
    }
  }

  ${props => (props.sidebar ? sidebarLinkCss : linkCss)}

  @media (min-width: ${mq.desktop}px) {
    display: flex;
    flex-direction: row;
  }
`

const NavLinks = ({ sidebar = false }) => {
  const links = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/blog', text: 'Blog' },
    { to: '/#', text: 'Contact' },
    { to: '/#', text: 'Shop' },
  ]
  return (
    <StyledNavLinks sidebar={sidebar}>
      {links.map(link => (
        <li key={link.text}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </StyledNavLinks>
  )
}

NavLinks.propTypes = {
  sidebar: PropTypes.bool,
}

export default NavLinks
