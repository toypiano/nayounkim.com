import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import stranger from '../images/stranger.jpg'

const FullImageContainer = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 750px) {
    height: 100%;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FullImageContainer>
      <img src={stranger} alt="stranger" />
    </FullImageContainer>
  </Layout>
)

export default IndexPage
