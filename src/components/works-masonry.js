import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'

import { mq } from '../styles'
import ImageContainer from './image-container'

const breakpointColumnsObj = {
  default: 4,
  // 'up until' : '# cols'
  [mq.desktop - 1]: 3,
  [mq.tablet - 1]: 2,
  [mq.landscape - 1]: 1,
}

const StyledMasonry = styled(Masonry)`
  --gutter: 4em;
  width: auto;
  display: flex;

  .main-masonry-grid_column {
    background-clip: padding-box;

    & > div {
      background: grey;
    }
    &:first-of-type {
      margin-left: 0;
    }
  }

  @media (min-width: ${mq.landscape}px) {
    --gutter: var(--gutter-landscape);
    padding: 0 var(--gutter);
    .main-masonry-grid_column {
      margin-left: var(--gutter); /* gutter size offset */
    }
    .main-masonry-grid_column > div {
      margin-bottom: var(--gutter); /* space between items */
    }
  }
  @media (min-width: ${mq.tablet}px) {
    --gutter: var(--gutter-tablet);
    padding: 0 var(--gutter);
    .main-masonry-grid_column {
      margin-left: var(--gutter); /* gutter size offset */
    }
    .main-masonry-grid_column > div {
      margin-bottom: var(--gutter); /* space between items */
    }
  }
  @media (min-width: ${mq.desktop}px) {
    --gutter: var(--gutter-desktop);
    padding: 0 var(--gutter);
    .main-masonry-grid_column {
      margin-left: var(--gutter); /* gutter size offset */
    }
    .main-masonry-grid_column > div {
      margin-bottom: var(--gutter); /* space between items */
    }
  }
  @media (min-width: ${mq.wide}px) {
    --gutter: var(--gutter-wide);
    padding: 0 var(--gutter);
    .main-masonry-grid_column {
      margin-left: var(--gutter); /* gutter size offset */
    }
    .main-masonry-grid_column > div {
      margin-bottom: var(--gutter); /* space between items */
    }
  }
`

const WorksMasonry = ({ mount }) => {
  const data = useStaticQuery(query)

  return (
    <StyledMasonry
      breakpointCols={breakpointColumnsObj}
      className="main-masonry-grid"
      columnClassName="main-masonry-grid_column"
    >
      {data.allFile.edges.map(image => (
        <ImageContainer key={image.node.base} image={image} />
      ))}
    </StyledMasonry>
  )
}

export default WorksMasonry

// Add multiple images from a directory
// https://www.gatsbyjs.com/docs/recipes/working-with-images#optimizing-and-querying-local-images-with-gatsby-image
// Directions > 2 > c. several images from a directory ...
export const query = graphql`
  {
    allFile(
      filter: {
        extension: { regex: "/jpg/" }
        dir: {}
        relativeDirectory: { eq: "works" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
