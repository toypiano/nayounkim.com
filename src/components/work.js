import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes, { shape } from 'prop-types'
import ImageContainer from './image-container'
import { useLayoutDispatch, actionTypes } from '../store'

const StyledWork = styled.div`
  position: relative;
  overflow: hidden;
  a {
    display: block;
    width: 100%;
    height: 100%;
    .overlay-text {
      position: absolute;
      z-index: 10;
      bottom: -100%;
      color: var(--text-inverse);
      padding: 0.5em 0.75em;
      transition: bottom 200ms ease-in-out;
    }
    .overlay-bg {
      position: absolute;
      width: 101%;
      height: 101%;
      z-index: 7;
      background-color: #000000;
      opacity: 0;
      transition: all 200ms ease-in-out;
    }

    &:hover,
    &:focus {
      .overlay-text {
        bottom: 0%;
      }
      .overlay-bg {
        opacity: 0.6;
      }
    }
  }
`

const Work = ({ work, openOverlay, updateCurrentIndex }) => {
  const ref = useRef()

  // fix iphone6 chrome focusing the first work component on page load
  useEffect(() => {
    ref.current.blur()
  }, [])

  // when changing image name, things can get weird due to the caching.
  // try deleting .cache folder and rebuild
  if (!work.node.frontmatter.featuredImage) {
    console.log(work.node.frontmatter.title)
  }

  const dispatch = useLayoutDispatch()

  const handleClick = () => {
    dispatch({ type: actionTypes.LOCK_SCROLL })
    openOverlay()
    updateCurrentIndex()
  }

  return (
    <StyledWork className="image" id={work.node.frontmatter.slug} ref={ref}>
      <a href={`#${work.node.frontmatter.slug}`} onClick={handleClick}>
        <div className="overlay-text">
          <figcaption>{work.node.frontmatter.title}</figcaption>
        </div>
        <div className="overlay-bg"></div>
        <ImageContainer
          fluid={work.node.frontmatter.featuredImage?.childImageSharp.fluid}
          alt={work.node.frontmatter.title}
        />
      </a>
    </StyledWork>
  )
}

Work.propTypes = {
  updateCurrentIndex: PropTypes.func.isRequired,
  openOverlay: PropTypes.func.isRequired,
  work: shape({
    node: shape({
      frontmatter: shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        featuredImage: shape({
          childImageSharp: shape({
            fluid: PropTypes.object.isRequired,
          }),
        }),
      }),
    }),
  }),
}

export default Work
