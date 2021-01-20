import React, { useState, useReducer } from 'react'
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
    default:
      return state
  }
}

const PortfolioPage = ({ data, location }) => {
  const {
    allMarkdownRemark: { edges: works },
  } = data

  const initialState = {
    showOverlay: false,
    currentIndex: 2,
    prevIndex: 2,
  }

  const layoutDispatch = useLayoutDispatch()

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
    navigate(-1)
  }

  const setCurrentIndex = index => {
    console.log({ index })
    dispatch({ type: 'SET_CURRENT_INDEX', payload: index })
  }

  return (
    <TransitionFade>
      <SEO title="Home" />
      <StyledPortfolioPage>
        <WorksMasonry
          works={works}
          openOverlay={openOverlay}
          setCurrentIndex={setCurrentIndex}
        />
        <GalleryOverlay
          work={works[currentIndex]}
          show={showOverlay}
          closeOverlay={closeOverlay}
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
