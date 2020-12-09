import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'

import { mq } from '../styles'

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

    .main-masonry-grid_column {
      margin-left: var(--gutter); /* gutter size offset */
    }
    .main-masonry-grid_column > div {
      margin-bottom: var(--gutter); /* space between items */
    }
  }
  @media (min-width: ${mq.tablet}px) {
    --gutter: var(--gutter-tablet);

    .main-masonry-grid_column {
      margin-left: var(--gutter); /* gutter size offset */
    }
    .main-masonry-grid_column > div {
      margin-bottom: var(--gutter); /* space between items */
    }
  }
  @media (min-width: ${mq.desktop}px) {
    --gutter: var(--gutter-desktop);

    .main-masonry-grid_column {
      margin-left: var(--gutter); /* gutter size offset */
    }
    .main-masonry-grid_column > div {
      margin-bottom: var(--gutter); /* space between items */
    }
  }
  @media (min-width: ${mq.wide}px) {
    --gutter: var(--gutter-wide);

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
        <Img
          key={image.node.base}
          fluid={image.node.childImageSharp.fluid}
          alt={image.node.base.split('.')[0]} // use filename as alt text after splitting it from the extension
        />
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
