import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FullImageContainer } from "../styles"
import stranger from "../images/stranger.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FullImageContainer>
      <img src={stranger} alt="stranger" />
    </FullImageContainer>
  </Layout>
)

export default IndexPage
