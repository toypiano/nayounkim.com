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
  margin: auto;
  padding: 1em 0.5em;
  background: white;
  display: flex;
  align-items: center;
  .logo {
    width: 50%;
    height: 100%;
    max-width: 224px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    a {
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  // add cross-fade effect to the bottom edge of the header
  /* &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2em;
    top: 100%;
    left: 0;
    z-index: 100;
    pointer-events: none;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
  } */

  /* max-width: 1200px; */

  @media (min-width: ${mq.landscape}px) {
  }
  @media (min-width: ${mq.tablet}px) {
    height: var(--header-height-tablet);
  }
  @media (min-width: ${mq.desktop}px) {
    flex-direction: column;
    justify-content: space-between;
    height: var(--header-height-desktop);
    margin-bottom: 1em;
    .logo {
      max-width: 256px;
    }
  }
  @media (min-width: ${mq.wide}px) {
    height: var(--header-height-wide);
    margin-bottom: 1em;
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
