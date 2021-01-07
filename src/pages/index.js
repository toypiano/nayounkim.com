import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { mq } from '../styles'

import TransitionFade from '../components/transition-fade'

const StyledIndexPage = styled.div`
  height: 100%;
  display: grid;
  place-items: center;

  .main-image {
    width: 100%;
    height: calc(100vh - var(--header-height));
    .gatsby-image-wrapper {
      height: 100%;
      img {
        max-height: 100%;
        width: auto;
      }
    }
    @media (min-width: ${mq.desktop}px) {
      --size: calc(30vh + 30vw);
      width: var(--size);
      height: var(--size);
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <TransitionFade>
      <StyledIndexPage>
        <div className="main-image">
          <Img
            fluid={data.mainImage.childImageSharp.fluid}
            // cannot set objectFit via styled-components
            imgStyle={{ objectFit: 'cover', objectPosition: '29% center' }}
          />
        </div>
      </StyledIndexPage>
    </TransitionFade>
  )
}

export const query = graphql`
  query MainImageQuery {
    mainImage: file(relativePath: { eq: "works/a guy with long hair.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.shape({
    mainImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }),
    }),
  }),
}

export default IndexPage
