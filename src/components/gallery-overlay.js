import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useMotionAppear } from '../hooks'
import CloseButton from './close-button'
import Carousel from './carousel'

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

  @media (min-width: 760px) {
    .prev-button,
    .next-button {
      display: block;
    }
  }
`

const GalleryOverlay = ({
  show,
  closeOverlay,
  currentIndex,
  works,
  setCurrentIndex,
  next,
  prev,
  toggleLike,
}) => {
  const [showControls, flashControls] = useMotionAppear()

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
        backTo={works[currentIndex].slug}
      />
      <button className="prev-button" onClick={prev}>
        <BsChevronLeft />
      </button>
      <button className="next-button" onClick={next}>
        <BsChevronRight />
      </button>
      <Carousel
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        works={works}
        toggleLike={toggleLike}
      />
    </StyledGalleryOverlay>
  )
}

GalleryOverlay.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  works: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      fluid: PropTypes.object,
    })
  ),
  closeOverlay: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired,
}

export default GalleryOverlay
