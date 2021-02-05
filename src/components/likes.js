import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const StyledLikes = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 0.5rem;

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
  .like-count {
    font-family: var(--ff-ss);
    font-style: normal;
  }
`

const Likes = ({ liked, handleLikeClick, likes, light, className }) => {
  return (
    <StyledLikes className={className}>
      <button className="like-button" onClick={handleLikeClick}>
        {liked ? (
          <BsHeartFill style={{ color: 'red' }} />
        ) : (
          <BsHeart style={{ color: light ? 'gray' : 'white' }} />
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
  light: PropTypes.bool,
  className: PropTypes.string,
}

export default Likes
