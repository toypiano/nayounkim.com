import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const StyledWorkPost = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 50px auto 3rem;
`

export default function WorkPost({ data }) {
  return (
    <StyledWorkPost>
      <div className="post-header">
        <div className="post-header__social"></div>
        <button className="post-header__close">
          <span>&#10005;</span>
        </button>
      </div>
    </StyledWorkPost>
  )
}
