import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const StyledLikes = styled('div')`
  display: flex;
  align-items: center;

  .like-button {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.25rem;
    svg {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
`

const Likes = ({ liked, handleLikeClick, likes }) => {
  return (
    <StyledLikes>
      <button className="like-button" onClick={handleLikeClick}>
        {liked ? (
          <BsHeartFill style={{ color: 'red' }} />
        ) : (
          <BsHeart style={{ color: 'white' }} />
        )}
      </button>
      <span className="like-count">{likes}</span>
    </StyledLikes>
  )
}

Likes.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  handleLikeClick: PropTypes.func.isRequired,
}

export default Likes
