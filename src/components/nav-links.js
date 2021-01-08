import React from 'react'
import PropTypes from 'prop-types'
import TransitionLink from 'gatsby-plugin-transition-link'

import styled, { css } from 'styled-components'

import { mq } from '../styles'

const linkCss = css`
  width: 50%;
  max-width: 40rem;
  margin-left: 01em;
  display: none;
  flex-direction: row;
  align-items: center;
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
  width: 100%;
  margin-left: 0;
  display: 'flex';
  flex-direction: column;
  align-items: 'flex-start';

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
  justify-content: space-between;

  li {
    position: relative;
    width: 100;

    a {
      text-transform: uppercase;
      text-decoration: none;
      &.active {
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

const NavLinks = ({ sidebar = false, closeMenu }) => {
  const links = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/portfolio', text: 'Portfolio' },
    { to: '/contact', text: 'Contact' },
    { to: '/comingsoon', text: 'Shop' },
  ]

  const handleLinkItemClick = () => {
    if (sidebar && closeMenu) {
      closeMenu()
    }
  }
  // TODO: try using AniLink and see if it improves perf (Sidebar animation seems to be interfering with page transition)

  return (
    <StyledNavLinks sidebar={sidebar}>
      {links.map(link => (
        <li key={link.text} onClick={handleLinkItemClick}>
          <TransitionLink
            to={link.to}
            activeClassName="active"
            entry={{ length: 0.5 }}
            exit={{ length: 0.5 }}
          >
            {link.text}
          </TransitionLink>
        </li>
      ))}
    </StyledNavLinks>
  )
}

NavLinks.propTypes = {
  sidebar: PropTypes.bool,
  closeMenu: PropTypes.func,
}

export default NavLinks
