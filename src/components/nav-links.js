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
      transition: color 0.2s;
      &:hover {
        color: var(--accent);
      }
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        right: -0.5em;
        display: block;
        opacity: 0;
        transition: opacity 250ms ease-in-out;
      }

      &.active {
        &::after {
          content: '';
          display: block;
          height: 4px;
          width: 4px;
          opacity: 1;
          background: var(--text-main);
        }
      }
    }

    /* hover state bust be on parent element! */
    &:hover::after {
      transition: color 120ms ease-in-out;
      color: var(--accent);
    }
  }
`
const sidebarLinkCss = css`
  width: 100%;
  margin: 1em 1em;
  display: 'flex';
  flex-direction: column;
  align-items: 'flex-start';

  li {
    padding: 1.5em 0 1em;
    a {
      font-size: 2rem;
      font-weight: var(--fw-light);
      &.active {
        transition: color 120ms ease-in-out;
        color: var(--accent);
      }
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      display: block;
      width: 10em;
      border-top: 0.5px solid rgba(0, 0, 0, 0.1);
    }
  }
`

const StyledNavLinks = styled('ul')`
  justify-content: space-between;

  li {
    position: relative;
    width: 100;

    a {
      text-transform: lowercase;
      text-decoration: none;
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
