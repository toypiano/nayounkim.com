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
  left: 0;
  width: 66%;
  max-width: 25rem;
  height: 100vh;
  padding: 2em 0;
  background: white;
  z-index: var(--z-sidebar);

  button {
    margin-left: 2em;
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

const Sidebar = ({ isOpen, closeMenu }) => {
  const transition = useTransition(isOpen, {
    key: isOpen,
    from: {
      x: '-50%',
      opacity: 1,
      rotate: 0,
    },
    enter: {
      x: '0%',
      opacity: 1,
      rotate: 720,
    },
    leave: {
      x: '-50%',
      opacity: 0,
    },
  })

  const content = (
    <>
      {transition(({ rotate, ...styles }, isOpen) =>
        isOpen ? (
          <StyledSidebar style={styles}>
            <a.button onClick={closeMenu} style={{ rotate }}>
              <span>&#10005;</span>
            </a.button>
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
