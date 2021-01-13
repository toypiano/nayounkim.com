import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLanguageSelect = styled('div')`
  position: absolute;
  --pt: 0.5rem;
  --pl: 1rem;
  padding: var(--pt) var(--pl);
  background: var(--cl-gray);
  bottom: 0;
  width: 100%;

  select {
    position: absolute;
    top: var(--pt);
    left: var(--pl);
    font-size: var(--fz-sidebar-link);
    width: 5rem;
    // options will still open when clicked
    opacity: 0;
    option {
      font-size: 1rem;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .lang-display {
    pointer-events: none;
    .lang-flag {
      pointer-events: inherit;
      font-size: var(--fz-sidebar-link);
      margin-right: 0.25em;
      vertical-align: middle;
    }
    .lang-text {
      pointer-events: inherit;
      line-height: 1.8;
      font-size: var(--fz-sidebar-link);
      font-family: Raleway, serif;
      vertical-align: middle;
    }
  }
`

const LANGUAGES = {
  eng: {
    flag: '🇺🇸',
    text: 'ENG',
  },
  kor: {
    flag: '🇰🇷',
    text: 'KOR',
  },
}

const LanguageSelect = () => {
  const [language, setLanguage] = useState('eng')

  const handleChange = e => {
    e.preventDefault()
    setLanguage(e.target.value)
  }

  return (
    <StyledLanguageSelect>
      <select name="lang" id="lang" onChange={handleChange}>
        <option value="eng">ENG</option>
        <option value="kor">KOR</option>
      </select>
      <div className="lang-display">
        <span className="lang-flag">{LANGUAGES[language].flag}</span>
        <span className="lang-text">{LANGUAGES[language].text}</span>
      </div>
    </StyledLanguageSelect>
  )
}

LanguageSelect.propTypes = {}

export default LanguageSelect
