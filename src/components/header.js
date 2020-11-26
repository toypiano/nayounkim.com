import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import logo from "../images/nayoun-kim-logo.svg"
import NavLinks from "./nav-links"

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: var(--navbar-height);
  width: 100%;
  /* max-width: 1200px; */
  padding: 0 1em;
  background: var(--bg);
  .container {
    max-width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      margin: 0;
      img {
        display: block;
        margin: 0;
        width: 10rem;
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div className="container">
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
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
