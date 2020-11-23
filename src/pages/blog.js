import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Archive from "../components/archive"

const StyledBlog = styled.aside``

const Blog = () => {
  return (
    <Layout>
      <StyledBlog>
        <Archive />
      </StyledBlog>
    </Layout>
  )
}

export default Blog
