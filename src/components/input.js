import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Input = (
  { name, type, required, className } = { type: 'text', required: false }
) => {
  const placeholder = required ? name + ' *' : name
  const input =
    type === 'textarea' ? (
      <textarea
        className={className}
        placeholder={placeholder}
        required={required}
      />
    ) : (
      <input
        className={className}
        placeholder={placeholder}
        required={required}
      />
    )
  return input
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string.isRequired,
}

const textareaCss = css`
  min-height: 8em;
  resize: vertical;
`

export default styled(Input)`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--text-main);
  font: inherit;
  padding: 0.5em;
  margin-bottom: 1.5em;
  &::placeholder {
    color: var(--text-secondary);
    text-transform: capitalize;
  }
  ${props => (props.type === 'textarea' ? textareaCss : null)}
`
