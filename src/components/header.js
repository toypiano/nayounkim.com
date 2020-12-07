import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import NavLinks from './nav-links'

import { mq } from '../styles'

const StyledHeader = styled.header`
  height: var(--navbar-height);
  z-index: var(--z-header);
  width: 100%;
  max-width: 1600px;
  margin: 1em 0;

  background: white;
  display: flex;
  align-items: flex-end;
  /* max-width: 1200px; */

  .logo {
    margin-left: 5vw;
    position: relative;
    right: 4px;
    h1 {
      /* letter-spacing: 2px; */
      font-weight: 900;
      font-size: 4.25rem;
      overflow-wrap: normal;
      color: var(--text-main);
      line-height: 1;
      text-align: left;
    }
  }

  @media (min-width: ${mq.landscape}px) {
    margin: 2em 0;
    .logo {
      margin: 0;
    }
  }
  @media (min-width: ${mq.tablet}px) {
    margin: 3em 0;
  }
  @media (min-width: ${mq.desktop}px) {
    margin: 3em 0;
  }
  @media (min-width: ${mq.wide}px) {
    margin: 6em 0 3em;
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
