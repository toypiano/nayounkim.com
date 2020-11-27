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
    width: 13rem;
    margin: 3em auto 1em;
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
        <img src={logo} alt="logo" />
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
