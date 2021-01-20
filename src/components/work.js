import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes, { shape } from 'prop-types'
import ImageContainer from './image-container'
import { useLayoutDispatch, actionTypes } from '../store'

const StyledWork = styled.div`
  position: relative;
  overflow: hidden;
  .overlay-text {
    position: absolute;
    z-index: 10;
    bottom: -100%;
    color: var(--text-inverse);
    padding: 1em 0.75em;
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

  &:hover {
    .overlay-text {
      bottom: 0%;
    }
    .overlay-bg {
      opacity: 0.6;
    }
  }
`

const Work = ({ work, openOverlay, setCurrentIndex }) => {
  // when changing image name, things can get weird due to the caching.
  // try deleting .cache folder and rebuild
  if (!work.node.frontmatter.featuredImage) {
    console.log(work.node.frontmatter.title)
  }

  const dispatch = useLayoutDispatch()

  const handleClick = e => {
    dispatch({ type: actionTypes.LOCK_SCROLL })
    openOverlay()
    setCurrentIndex()
  }
  return (
    <StyledWork className="image">
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
  setCurrentIndex: PropTypes.func.isRequired,
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
