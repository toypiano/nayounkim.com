import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledImageContainer = styled('div')``

const ImageContainer = ({ fluid, alt }) => {
  return (
    <StyledImageContainer>
      <Img
        fluid={fluid}
        alt={alt} // use filename as alt text after splitting it from the extension
      />
    </StyledImageContainer>
  )
}

ImageContainer.propTypes = {
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
}

export default ImageContainer
