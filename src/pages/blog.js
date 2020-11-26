import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Archive from "../components/archive"
import Listing from "../components/listing"

const StyledBlog = styled.aside``

const Blog = () => {
  return (
    <Layout>
      <StyledBlog>
        <Listing />
        <Archive />
      </StyledBlog>
    </Layout>
  )
}

export default Blog
