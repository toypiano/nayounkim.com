import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import NavLinks from './nav-links'

const StyledHeader = styled.header`
  height: var(--navbar-height);
  z-index: var(--z-header);
  width: 100%;
  max-width: 1600px;
  margin: 2em 0 5em;
  padding: 0 2em;
  background: white;
  display: flex;
  align-items: flex-end;
  /* max-width: 1200px; */

  .logo {
    width: 100%;

    /* margin: 3em auto 1em; */
    margin: 1em auto 0;
    h1 {
      position: relative;
      left: 3px;
      letter-spacing: 6px;
      font-family: acumin-pro-wide, sans-serif;
      font-size: 4.25rem;
      color: var(--text-main);
      line-height: 1;
      text-align: left;
    }
  }
`

const Header = () => (
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
