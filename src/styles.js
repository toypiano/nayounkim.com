import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: white;
    --bg: var(--white);
    --navbar-height: 150px;
    --text-main: #333;
    --text-secondary: rgba(0,0,0,0.6);
  }

  html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 112.5%/1.45em georgia, serif, sans-serif;
  box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    position: relative;
    width: 100vw;
    max-width: 1200px;
    margin: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: hsla(0, 0%, 0%, 0.8);
    font-family: Quasimoda, sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    background-color: var(--bg);
  }

  h1, h2, h3, p {
    margin: 0;
    line-height: 1.6;
  }

  ul {
    list-style: none;
  }

  li {
    text-decoration: none;
    
    }
  }

  a {
    color: var(--text-main);
    text-decoration: none;
    transition: opacity .2s;
    &:hover {  
      opacity: 0.7;
    }
    &:visited {
      color: var(--text-main);
    }
  }
  
`

export const StyledLayout = styled('div')`
  position: relative;
  margin: 0 auto;
  padding-top: var(--navbar-height);
  width: 100%;
  max-width: 800px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  main {
    position: relative;
    max-width: 100%;
    height: calc(100% - 2em);
    max-height: 100vh;
  }

  footer {
    width: 100%;
    text-align: right;
    font-size: 0.7rem;
    padding: 0.5em 2em;
  }
`

export const FullImageContainer = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 750px) {
    height: 100%;
  }
`
