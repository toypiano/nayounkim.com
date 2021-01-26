import React from 'react'
import PropTypes, { shape } from 'prop-types'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'
import Work from './work'
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
  height: 100%;
  .main-masonry-grid_column {
    background-clip: padding-box;

    & > div {
      background: grey;
      margin-bottom: 10px;
      box-shadow: var(--box-shadow);
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

const WorksMasonry = ({ works, openOverlay, setCurrentIndex }) => {
  return (
    <StyledMasonry
      breakpointCols={breakpointColumnsObj}
      className="main-masonry-grid"
      columnClassName="main-masonry-grid_column"
    >
      {works.map((work, i) => (
        <Work
          key={work.node.frontmatter.slug}
          work={work}
          openOverlay={openOverlay}
          updateCurrentIndex={() => setCurrentIndex(i)}
        />
      ))}
    </StyledMasonry>
  )
}

// Add multiple images from a directory
// https://www.gatsbyjs.com/docs/recipes/working-with-images#optimizing-and-querying-local-images-with-gatsby-image
// Directions > 2 > c. several images from a directory ...

WorksMasonry.propTypes = {
  setCurrentIndex: PropTypes.func.isRequired,
  openOverlay: PropTypes.func.isRequired,
  works: PropTypes.arrayOf(
    shape({
      node: shape({
        frontmatter: shape({
          slug: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          featuredImage: shape({
            childImageSharp: shape({
              fluid: PropTypes.object.isRequired,
            }),
          }),
        }),
      }),
    })
  ),
}

export default WorksMasonry
