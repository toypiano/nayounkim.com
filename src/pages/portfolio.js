import React, { useEffect, useReducer } from 'react'
import PropTypes, { shape } from 'prop-types'
import { graphql, navigate } from 'gatsby'
import { useTransition, animated } from 'react-spring'
import SEO from '../components/seo'
import TransitionFade from '../components/transition-fade'
import styled from 'styled-components'
import WorksMasonry from '../components/works-masonry'
import GalleryOverlay from '../components/gallery-overlay'
import { usePortfolio } from '../hooks/usePortfolio'
import { useScrollLock } from '../hooks/useScrollLock'

const StyledPortfolioPage = styled.div`
  overflow: hidden;
`

const PortfolioPage = ({ data }) => {
  // disable page scroll when overlay is up

  const { unlockScroll } = useScrollLock()
  // on page mount, remove any hash params and make sure the scroll is unlocked
  useEffect(() => {
    navigate('/portfolio/', { replace: true }) // history.replace (default: push)
    unlockScroll()
  }, [])

  const {
    allMarkdownRemark: { edges: works },
  } = data

  const {
    currentIndex,
    setCurrentIndex,
    next,
    prev,
    showOverlay,
    openOverlay,
    closeOverlay,
  } = usePortfolio(works)

  const transition = useTransition(showOverlay, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })

  const AnimatedGalleryOverlay = animated(GalleryOverlay)

  return (
    <TransitionFade>
      <SEO title="Home" />
      <StyledPortfolioPage>
        {transition(
          ({ opacity }, showOverlay) =>
            showOverlay && (
              <AnimatedGalleryOverlay
                show={showOverlay}
                closeOverlay={closeOverlay}
                currentIndex={currentIndex}
                works={works}
                setCurrentIndex={setCurrentIndex}
                next={next}
                prev={prev}
                style={{ opacity }}
              />
            )
        )}
        <WorksMasonry
          works={works}
          openOverlay={openOverlay}
          setCurrentIndex={setCurrentIndex}
        />
      </StyledPortfolioPage>
    </TransitionFade>
  )
}

export const query = graphql`
  query WorkPostQuery {
    allMarkdownRemark(
      filter: { frontmatter: { featuredImage: { absolutePath: { ne: null } } } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`

PortfolioPage.propTypes = {
  data: shape({
    allMarkdownRemark: shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
}

export default PortfolioPage
