import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { GlobalStyle } from '../styles'
import Header from './header'

export const StyledLayout = styled.main`
  position: relative;
  margin: 0 auto;
  padding-top: var(--navbar-height);
  width: 100%;
  max-width: 800px;
  height: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
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
      <StyledLayout>{children}</StyledLayout>
      <footer style={{ display: 'none' }}>
        © {new Date().getFullYear()}, by
        {` `}
        <a href="https://github.com/toypiano">toypiano</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
