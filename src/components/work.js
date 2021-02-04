import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes, { shape } from 'prop-types'
import ImageContainer from './image-container'
import { useLayoutDispatch, actionTypes } from '../store'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const StyledWork = styled.div`
  position: relative;
  overflow: hidden;
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
    .likes {
      display: flex;
      align-items: center;
    }
    .like-button {
      width: 1.5rem;
      height: 1.5rem;
      padding: 0.25rem;
      svg {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
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
  a {
    display: block;
    width: 100%;
    height: 100%;
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
    <StyledWork className="image" id={work.node.frontmatter.slug}>
      <div className="overlay-content">
        <figcaption>{work.node.frontmatter.title}</figcaption>
        <div className="likes">
          <button className="like-button" onClick={handleLikeClick}>
            {liked ? <BsHeartFill style={{ color: 'red' }} /> : <BsHeart />}
          </button>
          <span className="like-count">123</span>
        </div>
      </div>
      <div className="overlay-bg"></div>
      <a href={`#${slug}`} onClick={handleWorkClick}>
        <ImageContainer fluid={fluid} alt={title} />
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
