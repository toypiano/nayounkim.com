import React, { useEffect, useReducer } from 'react'
import PropTypes, { shape } from 'prop-types'
import { graphql, navigate } from 'gatsby'
import SEO from '../components/seo'
import TransitionFade from '../components/transition-fade'
import styled from 'styled-components'
import WorksMasonry from '../components/works-masonry'
import GalleryOverlay from '../components/gallery-overlay'
import { useLayoutDispatch } from '../store'

const StyledPortfolioPage = styled.div`
  overflow: hidden;
`

const PortfolioPage = ({ data, location }) => {
  const layoutDispatch = useLayoutDispatch()
  // on page mount, remove any hash params and make sure the scroll is unlocked
  useEffect(() => {
    navigate('/portfolio/', { replace: true }) // history.replace (default: push)
    layoutDispatch({ type: 'UNLOCK_DISPATCH' })
  }, [])

  const {
    allMarkdownRemark: { edges: works },
  } = data

  const initialState = {
    showOverlay: false,
    currentIndex: 2,
    prevIndex: 2,
  }

  const portfolioReducer = (state, action) => {
    switch (action.type) {
      case 'OVERLAY_OPEN':
        return {
          ...state,
          showOverlay: true,
        }
      case 'OVERLAY_CLOSE':
        return {
          ...state,
          showOverlay: false,
        }
      case 'SET_CURRENT_INDEX':
        return {
          ...state,
          currentIndex: action.payload ?? state.currentIndex,
        }
      case 'NEXT':
        return {
          ...state,
          currentIndex: (state.currentIndex + 1) % works.length,
        }
      case 'PREV':
        return {
          ...state,
          currentIndex: (state.currentIndex - 1 + works.length) % works.length,
        }
      default:
        return state
    }
  }

  const [{ showOverlay, currentIndex }, dispatch] = useReducer(
    portfolioReducer,
    initialState
  )

  const openOverlay = () => {
    dispatch({ type: 'OVERLAY_OPEN' })
  }

  const closeOverlay = () => {
    dispatch({ type: 'OVERLAY_CLOSE' })
    layoutDispatch({ type: 'UNLOCK_SCROLL' })
    // const slug = works[currentIndex].node.frontmatter.slug
    // navigate(`#${slug}`)
  }

  const setCurrentIndex = index => {
    dispatch({ type: 'SET_CURRENT_INDEX', payload: index })
  }

  const next = () => {
    dispatch({ type: 'NEXT' })
  }

  const prev = () => {
    dispatch({ type: 'PREV' })
  }

  return (
    <TransitionFade>
      <SEO title="Home" />
      <StyledPortfolioPage>
        {showOverlay ? (
          <GalleryOverlay
            show={showOverlay}
            closeOverlay={closeOverlay}
            currentIndex={currentIndex}
            works={works}
            setCurrentIndex={setCurrentIndex}
            next={next}
            prev={prev}
          />
        ) : (
          <WorksMasonry
            works={works}
            openOverlay={openOverlay}
            setCurrentIndex={setCurrentIndex}
          />
        )}
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
                  ...GatsbyImageSharpFluid
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
