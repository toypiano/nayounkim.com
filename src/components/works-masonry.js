import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

const StyledMasonry = styled(Masonry)`
  --gutter: 4em;
  --width: calc(100vw - 2 * var(--gutter));
  width: var(--width);
  margin-left: calc(50% - 0.5 * var(--width));
  display: flex;

  .main-masonry-grid_column {
    padding-left: 4em; /* gutter size */
    background-clip: padding-box;

    & > div {
      background: grey;
      margin-bottom: var(--gutter);
    }
  }

  /* Optional, different gutter size on mobile */
  @media (max-width: 800px) {
    .my-masonry-grid {
      margin-left: -15px; /* gutter size offset */
    }
    .my-masonry-grid_column {
      padding-left: 15px; /* gutter size offset */
    }
    .my-masonry-grid_column > div {
      margin-bottom: 15px; /* space between items */
    }
  }
`

const WorksMasonry = () => {
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
