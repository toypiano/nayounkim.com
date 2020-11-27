import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { GlobalStyle } from '../styles'
import Header from './header'

export const StyledLayout = styled('div')`
  position: relative;
  margin: 0 auto;
  padding-top: var(--navbar-height);
  width: 100%;
  max-width: 800px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  main {
    position: relative;
    max-width: 100%;
    height: calc(100% - 2em);
    max-height: 100vh;
  }

  footer {
    width: 100%;
    text-align: right;
    font-size: 0.7rem;
    padding: 0.5em 2em;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/zmx0zdq.css" />
      </Helmet>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledLayout>
        {children}
        <footer>
          © {new Date().getFullYear()}, by
          {` `}
          <a href="#">toypiano</a>
        </footer>
      </StyledLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
