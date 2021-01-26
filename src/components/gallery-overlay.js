import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import { useSpring, animated, useTransition } from 'react-spring'
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
  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.6);
  }

  .prev-button,
  .next-button {
    display: none;
    position: absolute;
    top: 50%;
    z-index: 100;
    font-size: 2.25rem;
    opacity: 0.4;
    transition: all 250ms ease-in-out;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
  --distance: calc(0.5vh + 1.2vw);
  .prev-button {
    left: var(--distance);
  }
  .next-button {
    right: var(--distance);
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
// TODO: hide buttons after 1 sec of inactivity. show on mouse move
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

  const transition = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })
  const [{ x }, setSpring] = useSpring(() => ({}))
  // no animation on mount
  useEffect(() => {
    console.log('overlay mount')
    setSpring({
      to: { x: -1 * currentIndex * window?.innerWidth },
      immediate: true,
    })
  }, [])

  // animate on prev / next
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      console.log('overlay update')
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

  const AnimatedStyledGalleryOverlay = animated(StyledGalleryOverlay)

  return (
    <>
      {transition(({ opacity }, show) => (
        <AnimatedStyledGalleryOverlay show={show} style={{ opacity }}>
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
        </AnimatedStyledGalleryOverlay>
      ))}
    </>
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
