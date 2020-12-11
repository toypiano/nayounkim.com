import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { GlobalStyle } from '../styles'
import Header from './header'
import Footer from './footer'
import { mq } from '../styles'

export const StyledLayout = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100vw;
  height: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  @media (min-width: ${mq.landscape}px) {
    padding: 0 var(--gutter-landscape);
  }
  @media (min-width: ${mq.tablet}px) {
    padding: 0 var(--gutter-tablet);
  }
  @media (min-width: ${mq.desktop}px) {
    padding: 0 var(--gutter-desktop);
  }
  @media (min-width: ${mq.wide}px) {
    padding: 0 var(--gutter-wide);
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <StyledLayout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
