import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { GlobalStyle } from '../styles'
import Header from './header'
import Footer from './footer'
import { mq } from '../styles'
import BackToTopButton from './back-to-top-button'

export const StyledLayout = styled.div`
  position: relative;
  margin: 0 auto;
  /* width: 100vw; */ // Don't use 100vw inside 100% container
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr min-content;

  /* Global layout padding is more headache than what it's worth..*/
  /* @media (min-width: ${mq.landscape}px) {
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
  } */
  .layout-main {
    position: relative;
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
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Raleway&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <GlobalStyle />
      <StyledLayout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="layout-main">{children}</main>
        <Footer />
        <BackToTopButton />
      </StyledLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
