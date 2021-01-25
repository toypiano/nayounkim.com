import React from 'react'
import PropTypes from 'prop-types'
import { useSpring } from 'react-spring'
import styled from 'styled-components'
import CloseButton from './close-button'
import Img from 'gatsby-image'

const StyledGalleryOverlay = styled.div`
  position: fixed;
  z-index: var(--z-gallery-overlay);
  overflow-y: hidden;
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--white);
  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.6);
  }
  /* gatsby-image-wrapper container is always styled with position:relative; & overflow:hidden */
  /* and contained image is absolute positioned against the container */
  .overlay-img {
    width: 90%;
    max-width: 800px;
    margin: 2em auto;
    max-height: 80%;
  }
  .overlay-caption {
    padding: 0 2em;
    text-align: center;
    font-size: 0.75;
    font-style: italic;
    font-family: var(--ff-se);
  }
`
// TODO: add prev / next button
// TODO: show overlay when touched for long than "tab"
const GalleryOverlay = ({ show, work, closeOverlay }) => {
  return (
    <StyledGalleryOverlay show={show}>
      <CloseButton
        className="close-button"
        onClick={closeOverlay}
        style={{ color: 'black' }}
      />
      <Img
        className="overlay-img"
        fluid={work.node.frontmatter.featuredImage.childImageSharp.fluid}
        alt={work.node.frontmatter.title}
        imgStyle={{ objectFit: 'contain', height: '100%' }}
      />
      <div className="overlay-caption">
        <figcaption>{work.node.frontmatter.title}</figcaption>
      </div>
    </StyledGalleryOverlay>
  )
}

GalleryOverlay.propTypes = {
  closeOverlay: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  work: PropTypes.shape({
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
  }),
}

export default GalleryOverlay
