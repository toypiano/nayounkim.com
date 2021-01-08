import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledImageContainer = styled('div')``

// TODO: 1 . show backdrop on over & display title & likes
// 2. connect to mongodb, store likes & view data
// 3. open image modal on click

const ImageContainer = ({ image }) => {
  return (
    <StyledImageContainer>
      <Img
        fluid={image.node.childImageSharp.fluid}
        alt={image.node.base.split('.')[0]} // use filename as alt text after splitting it from the extension
      />
    </StyledImageContainer>
  )
}

ImageContainer.propTypes = {
  image: PropTypes.shape({
    node: PropTypes.shape({
      base: PropTypes.string.isRequired,
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          aspectRatio: PropTypes.number.isRequired,
          base64: PropTypes.string.isRequired,
          sizes: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired,
          srcSet: PropTypes.string.isRequired,
        }),
      }),
    }),
  }),
}

export default ImageContainer
