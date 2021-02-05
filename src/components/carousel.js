import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useCarousel } from '../hooks'
import Likes from './likes'

const StyledCarousel = styled.div`
  height: 90%;
  position: absolute;
  left: 0;
  display: flex;
  will-change: transform; // this impacts optimization a lot!

  .work-content {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    touch-action: none;
  }
  --img-max-width: 800px;
  /* gatsby-image-wrapper container is always styled with position:relative; & overflow:hidden */
  /* and contained image is absolute positioned against the container */
  .overlay-img {
    width: 100%;
    max-width: var(--img-max-width);
    max-height: 90%;
    margin: 1em auto;
    touch-action: none;
  }
  .overlay-caption {
    width: 100%;
    max-width: var(--img-max-width);
    padding: 0 1em;
    text-align: center;
    font-size: 0.75;
    font-style: italic;
    font-family: var(--ff-se);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    figcaption {
      padding-top: 2px;
    }
  }
  .likes {
    position: absolute;
    bottom: -1rem;
    right: 1.5rem;
  }

  @media (min-width: 760px) {
    .work-content {
      width: 90%;
    }
    .overlay-caption {
      display: flex;
      figcaption {
        margin-left: 2rem;
      }
    }
    .likes {
      margin-left: 2rem;
      bottom: 0;
      right: 7vh;
    }
  }
`

const AnimatedStyledCarousel = animated(StyledCarousel)

const Carousel = ({ currentIndex, setCurrentIndex, works, toggleLike }) => {
  const { bind, x } = useCarousel({ currentIndex, setCurrentIndex, works })

  const workContents = works.map((work, i) => (
    <figure
      className="work-content"
      key={i}
      style={{ width: `${window?.innerWidth}px` }}
    >
      <Img
        className="overlay-img"
        fluid={work.fluid}
        alt={work.title}
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
        <figcaption>{work.title}</figcaption>
        <Likes
          className="likes"
          likes={work.likes}
          liked={work.liked}
          handleLikeClick={() => toggleLike(work)}
          light={true}
        />
      </div>
    </figure>
  ))

  return (
    <AnimatedStyledCarousel {...bind()} className="work-contents" style={{ x }}>
      {workContents}
    </AnimatedStyledCarousel>
  )
}

Carousel.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  works: PropTypes.arrayOf(PropTypes.object),
  toggleLike: PropTypes.func.isRequired,
}

export default Carousel
