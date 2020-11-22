import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import logo from "../images/nayoun-kim-logo.svg"

const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  height: var(--navbar-height);
  width: 100%;
  max-width: 1200px;
  padding: 0 1em;
  background: var(--bg);
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
  .nav-links {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    li {
      margin: 0 1em;
      a {
        text-decoration: none;
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
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
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
