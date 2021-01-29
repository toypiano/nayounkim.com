import React, { useEffect, useRef, useState } from 'react'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash-es/clamp'
import styled from 'styled-components'
import CloseButton from './close-button'
import Img from 'gatsby-image'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const StyledGalleryOverlay = styled.div`
  position: fixed;
  z-index: var(--z-gallery-overlay);
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--white);
  will-change: opacity;
  --btn-bg: rgba(255, 255, 255, 0.7);
  --control-margin: calc(1vh + 3vw);
  .close-button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 100;
    background-color: var(--btn-bg);

    span {
      font-size: 2rem;
    }
  }

  .prev-button,
  .next-button {
    display: none;
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    svg {
      width: 100%;
      height: 100%;
    }
    z-index: 100;
    background: var(--btn-bg);
    opacity: ${props => (props.showControls ? 1 : 0)};
    transition: all 250ms ease-in-out;
  }

  .prev-button {
    left: var(--control-margin);
  }
  .next-button {
    right: var(--control-margin);
  }
  .work-contents {
    height: 90%;
    position: absolute;
    left: 0;
    display: flex;
    will-change: transform; // this impacts optimization a lot!
  }
  .work-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    touch-action: none;
  }

  /* gatsby-image-wrapper container is always styled with position:relative; & overflow:hidden */
  /* and contained image is absolute positioned against the container */
  .overlay-img {
    width: 100%;
    max-width: 800px;
    max-height: 90%;
    margin: 1em auto;
    touch-action: none;
  }
  .overlay-caption {
    padding: 0 2em;
    text-align: center;
    font-size: 0.75;
    font-style: italic;
    font-family: var(--ff-se);
  }

  @media (min-width: 760px) {
    .work-content {
      width: 90%;
    }
    .prev-button,
    .next-button {
      display: block;
    }
  }
`
// TODO: refactor

const GalleryOverlay = ({
  show,
  closeOverlay,
  currentIndex,
  works,
  setCurrentIndex,
  next,
  prev,
}) => {
  const isInitialMount = useRef(true)
  const hideControlTimeoutRef = useRef(null)

  const [showControls, setShowControls] = useState(false)

  const [{ x }, setSpring] = useSpring(() => ({}))
  // no animation on mount
  useEffect(() => {
    setSpring({
      to: { x: -1 * currentIndex * window?.innerWidth },
      immediate: true,
    })
  }, [])

  useEffect(() => {
    return () => {
      if (hideControlTimeoutRef.current) {
        window?.clearTimeout(hideControlTimeoutRef.current)
      }
    }
  }, [])

  // animate on prev / next
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      setSpring({
        to: { x: -1 * currentIndex * window?.innerWidth },
      })

      navigate(`/portfolio/#${works[currentIndex].node.frontmatter.slug}`)
    }
  }, [currentIndex])

  // animate on swipe gesture
  const bind = useDrag(({ swipe: [swipeX] }) => {
    if (swipeX) {
      // If dragged to the right, show work at index - 1
      const newIndex = currentIndex - swipeX
      const clamped = clamp(newIndex, 0, works.length - 1)

      setCurrentIndex(clamped)
    }
  })

  const flashControls = () => {
    if (hideControlTimeoutRef.current !== null) return

    window?.clearTimeout(hideControlTimeoutRef.current)
    hideControlTimeoutRef.current = window?.setTimeout(() => {
      setShowControls(false)
      hideControlTimeoutRef.current = null
    }, 2000)
    setShowControls(true)
  }

  const workContents = works.map((work, i) => (
    <figure
      className="work-content"
      key={i}
      style={{ width: `${window?.innerWidth}px` }}
    >
      <Img
        className="overlay-img"
        fluid={work.node.frontmatter.featuredImage.childImageSharp.fluid}
        alt={work.node.frontmatter.title}
        imgStyle={{
          objectFit: 'contain',
          height: '100%',
          padding: '16px',
          // could not use box-shadow because contained image has wider box (i.e. shadow will be wider than the image)
          // https://fvsch.com/object-fit-decoratio
          filter: 'drop-shadow(0px 1px 5px rgba(0,0,0,0.2))',
        }}
        draggable={false}
      />
      <div className="overlay-caption">
        <figcaption>{work.node.frontmatter.title}</figcaption>
      </div>
    </figure>
  ))

  return (
    <StyledGalleryOverlay
      show={show}
      showControls={showControls}
      onMouseMove={flashControls}
      onClick={flashControls}
    >
      <CloseButton
        className="close-button"
        onClick={closeOverlay}
        style={{ color: 'black' }}
        backTo={works[currentIndex].node.frontmatter.slug}
      />
      <animated.div {...bind()} className="work-contents" style={{ x }}>
        {workContents}
      </animated.div>
      <button className="prev-button" onClick={prev}>
        <BsChevronLeft />
      </button>
      <button className="next-button" onClick={next}>
        <BsChevronRight />
      </button>
    </StyledGalleryOverlay>
  )
}

GalleryOverlay.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  works: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          slug: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          featuredImage: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object,
            }),
          }),
        }),
      }),
    })
  ),
  closeOverlay: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
}

export default GalleryOverlay
