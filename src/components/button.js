import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Button = ({ children, to, className }) => {
  const button = to ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    <button className={className}>{children}</button>
  )

  return button
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  className: PropTypes.string,
}

export default styled(Button)`
  width: 176px;
  height: 57.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: inherit;
  color: var(--text-inverse);
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  background: var(--accent);
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
`
