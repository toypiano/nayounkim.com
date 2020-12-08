import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { useTransition, a } from 'react-spring'
import styled from 'styled-components'

import LanguageSelect from './language-select'
import NavLinks from './nav-links'

const StyledSidebar = styled(a.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 60%;
  max-width: 100%;
  height: 100vh;
  padding: 2em 0;
  background: white;
  z-index: var(--z-sidebar);

  button {
    margin-left: 1em;
    padding: 0.5em;
    color: var(--accent);
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
`

// TODO: add path animation to close button (\ then / => X)
// TODO: Hide select box on focus

const Sidebar = ({ isOpen, closeMenu }) => {
  const transition = useTransition(isOpen, {
    key: isOpen,
    from: {
      x: '50%',
      opacity: 1,
    },
    enter: {
      x: '0%',
      opacity: 1,
    },
    leave: {
      x: '50%',
      opacity: 0,
    },
  })

  const content = (
    <>
      {transition((styles, isOpen) =>
        isOpen ? (
          <StyledSidebar style={styles}>
            <button onClick={closeMenu}>
              <span>&#10005;</span>
            </button>
            <NavLinks sidebar closeMenu={closeMenu} />
            <LanguageSelect />
          </StyledSidebar>
        ) : null
      )}
    </>
  )

  return ReactDOM.createPortal(content, document.getElementById('sidebar-root'))
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
}

export default Sidebar
