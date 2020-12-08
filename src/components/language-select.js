import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLanguageSelect = styled('div')`
  position: absolute;
  padding: 0.75em 1em;
  background: var(--cl-gray);
  bottom: 0;
  width: 100%;
  select {
    /* display: none; */
  }
  .lang-display {
    &:hover {
      cursor: pointer;
    }
    .lang-flag {
      position: relative;
      top: 3px;
      font-size: 1.8rem;
      margin-right: 0.25em;
    }
    .lang-text {
      font-size: 1.2rem;
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
  const selectRef = useRef()

  const handleChange = e => {
    e.preventDefault()
    setLanguage(e.target.value)
  }

  const focusSelect = () => {
    selectRef.current.focus()
  }

  return (
    <StyledLanguageSelect>
      <select ref={selectRef} name="lang" id="lang" onChange={handleChange}>
        <option value="eng">ENG</option>
        <option value="kor">KOR</option>
      </select>
      <div className="lang-display" onClick={focusSelect}>
        <span className="lang-flag">{LANGUAGES[language].flag}</span>
        <span className="lang-text">{LANGUAGES[language].text}</span>
      </div>
    </StyledLanguageSelect>
  )
}

LanguageSelect.propTypes = {}

export default LanguageSelect
