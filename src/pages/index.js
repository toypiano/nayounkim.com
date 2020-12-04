import React, { useRef, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FullImageContainer = styled('div')`
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

const IndexPage = ({ data, className }) => {
  const ref = useRef()

  useEffect(() => {
    ref.current.scrollIntoView({
      block: 'center',
    })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <FullImageContainer ref={ref}>
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
      </FullImageContainer>
    </Layout>
  )
}

export default IndexPage

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
