import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GlobalStyle } from '../styles'
import Header from './header'
import Footer from './footer'
import { mq } from '../styles'
import BackToTopButton from './back-to-top-button'
import { LayoutStateProvider, useLayoutState } from '../store'

export const StyledLayout = styled.div`
  position: absolute; // to inherit height from body
  /* overflow: 'auto' will prevent scroll event from propagating!
    https://github.com/gatsbyjs/gatsby/issues/7885#issuecomment-510664369
   */
  overflow-y: ${props => (props.scrollLock ? 'hidden' : 'initial')};
  margin: 0 auto;
  /* width: 100vw; */ // Don't use 100vw inside 100% container
  width: 100%; // of body (viewport height)
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
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nayoun Kim, Illustrator</title>
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
      <LayoutStateProvider>
        <StyledLayoutConsumer>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main className="layout-main">{children}</main>
          <Footer />
        </StyledLayoutConsumer>
      </LayoutStateProvider>
      <BackToTopButton />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/**
 * Use layout context and pass into StyledLayout
 * @param {*} param0
 */
function StyledLayoutConsumer({ children }) {
  const { scrollLock } = useLayoutState()
  return <StyledLayout scrollLock={scrollLock}>{children}</StyledLayout>
}
