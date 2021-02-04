import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes, { shape } from 'prop-types'
import ImageContainer from './image-container'
import { useLayoutDispatch, actionTypes } from '../store'
import Likes from './likes'

const StyledWork = styled.div`
  position: relative;
  overflow: hidden;
  .work-link {
    display: block;
    width: 100%;
    height: 100%;
  }

  .overlay-content {
    position: absolute;
    z-index: 10;
    width: 100%;
    bottom: -100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: var(--text-inverse);
    padding: 0.5em 0.75em;
    transition: bottom 200ms ease-in-out;
  }
  .overlay-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 101%;
    height: 101%;
    z-index: 7;
    background-color: #000000;
    opacity: 0;
    transition: all 200ms ease-in-out;
    pointer-events: none; // allow user to click link through overlay
  }

  &:hover,
  &:focus {
    .overlay-content {
      bottom: 0%;
    }
    .overlay-bg {
      opacity: 0.6;
    }
  }
`

const Work = ({ work, openOverlay, updateCurrentIndex, blur }) => {
  const fluid = work.node.frontmatter.featuredImage?.childImageSharp.fluid
  const title = work.node.frontmatter.title
  const slug = work.node.frontmatter.slug
  const likeId = 'like:' + title
  const initialLiked =
    window?.localStorage.getItem(likeId) === 'true' ? true : false

  const [liked, setLiked] = useState(initialLiked)
  // when changing image name, things can get weird due to the caching.
  // try deleting .cache folder and rebuild
  if (!work.node.frontmatter.featuredImage) {
    console.log(work.node.frontmatter.title)
  }

  const dispatch = useLayoutDispatch()

  const handleWorkClick = () => {
    dispatch({ type: actionTypes.LOCK_SCROLL })
    openOverlay()
    updateCurrentIndex()
  }

  const handleLikeClick = e => {
    e.stopPropagation() // prevent GalleryOverlay from opening
    setLiked(bool => !bool)
    const liked = window?.localStorage.getItem(likeId) === 'true' ? true : false
    window?.localStorage.setItem(likeId, (!liked).toString())
  }

  return (
    <StyledWork className="work" id={work.node.frontmatter.slug}>
      <a className="work-link" href={`#${slug}`} onClick={handleWorkClick}>
        <ImageContainer fluid={fluid} alt={title} />
      </a>
      <div className="overlay-content">
        <figcaption>{work.node.frontmatter.title}</figcaption>
        <Likes liked={liked} handleLikeClick={handleLikeClick} />
      </div>
      <div className="overlay-bg"></div>
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
