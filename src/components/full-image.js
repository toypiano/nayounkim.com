import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const StyledFullImage = styled('div')`
  position: relative;
  width: 100vw;
  --mw: 1600px;
  max-width: var(--mw);
  height: auto;
  margin-left: calc(50% - 50vw);

  @media (min-width: 1600px) {
    margin-left: calc(50% - var(--mw) / 2); // 50% - 50vw + (50vw - 1600 / 2)
  }
`

const FullImage = ({ data }) => {
  const ref = useRef()

  useEffect(() => {
    ref.current.scrollIntoView({
      block: 'center',
    })
  }, [])

  return (
    <StyledFullImage ref={ref}>
      <Img
        style={{
          width: '100%',
          height: '100%',
        }}
        imgStyle={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        fluid={data.file.childImageSharp.fluid}
        alt="Stranger by Nayoun Kim"
      />
    </StyledFullImage>
  )
}

export default FullImage

export const query = graphql`
  query MainImageQuery {
    file(relativePath: { regex: "/stranger/" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

FullImage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }),
    }),
  }),
}
