import React from 'react'
import PropTypes from 'prop-types'
import { useTransition, a } from 'react-spring'
import styled from 'styled-components'

import LanguageSelect from './language-select'
import NavLinks from './nav-links'
import Portal from './portal'

const StyledSidebar = styled(a.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 66%;
  max-width: 25rem;
  height: 100%; // 100vh will not take account mobile browser UIs (eg. bottom bar)
  padding: 2em 0;
  background: white;
  z-index: var(--z-sidebar);

  button {
    --size: 40px;
    margin-left: 2em;
    padding: 8px;
    color: var(--accent);
    width: var(--size);
    height: var(--size);
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-weight: bold;
      font-size: 25px;
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

  return <Portal id={'sidebar-root'}>{content}</Portal>
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
}

export default Sidebar
