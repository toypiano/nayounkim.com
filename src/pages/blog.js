import React from 'react'
import styled from 'styled-components'

import Archive from '../components/archive'
import Listing from '../components/listing'
import TransitionFade from '../components/transition-fade'

const StyledBlog = styled.aside``

const Blog = () => {
  return (
    <TransitionFade>
      <StyledBlog>
        <Listing />
        <Archive />
      </StyledBlog>
    </TransitionFade>
  )
}

export default Blog
