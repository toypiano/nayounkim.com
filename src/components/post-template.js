import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "./layout"
import Archive from "./archive"

const Container = styled.div`
  padding: 2em;
  max-width: 700px;
  margin: auto;
`

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <Container>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <Archive />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`

export default PostTemplate
