import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import logo from '../images/nayoun-kim-logo.svg'
import NavLinks from './nav-links'

const StyledHeader = styled.header`
  position: fixed;
  height: var(--navbar-height);
  top: 0;
  left: 0;
  z-index: var(--z-header);
  width: 100%;
  background: white;
  /* max-width: 1200px; */

  .logo {
    width: 20rem;
    text-align: center;
    white-space: nowrap;
    /* margin: 3em auto 1em; */
    margin: 1em auto 0;
    h1 {
      font-family: 'cantoni-pro', serif;
      font-size: 5rem;
      color: var(--text-main);
    }
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="logo">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {/* <img src={logo} alt="logo" /> */}
        <h1>Nayoun Kim</h1>
      </Link>
    </div>
    <NavLinks />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
