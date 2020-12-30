import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../assets/images/nayounkim-logo.png'

import NavLinks from './nav-links'
import MenuButton from './menu-button'
import Sidebar from './sidebar'

import { mq } from '../styles'
import { useState } from 'react'
import Backdrop from './backdrop'

const StyledHeader = styled.header`
  position: relative;
  height: var(--header-height);
  width: 100%;
  max-width: ${mq.wide}px;
  padding: 1em 0.5em;
  background: white;
  .logo {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    a {
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  /* max-width: 1200px; */

  @media (min-width: ${mq.landscape}px) {
    padding: 3em 0.5em;
    .logo {
      margin: 0;
    }
  }
  @media (min-width: ${mq.tablet}px) {
    padding: 4em 0.5em;
  }
  @media (min-width: ${mq.desktop}px) {
    padding: 5em 0.5em;
  }
  @media (min-width: ${mq.wide}px) {
    padding: 6em 0.5em;
  }
`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <StyledHeader>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            {/* <h1>Nayoun Kim</h1> */}
          </Link>
        </div>
        <MenuButton isOpen={isMenuOpen} handleClick={openMenu} />
        <NavLinks />
      </StyledHeader>
      <Backdrop show={isMenuOpen} close={closeMenu} />
      <Sidebar isOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
