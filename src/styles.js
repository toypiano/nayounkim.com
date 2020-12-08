import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: white;
    --primary: #5adbf0;
    --accent: #fb4732;
    --bg: var(--white);
    --text-main: #333;
    --text-secondary: rgba(0,0,0,0.6);
    --cl-icon: var(--text-main);
    --cl-icon-alpha: 1;
    --cl-gray: #eee;
    
    --fw-black: 900;
    --fw-regular: 400;
    --fw-light: 300;

    --header-height: 15rem;

    --gutter-landscape: 1em;
    --gutter-tablet: 2em;
    --gutter-desktop: 3em;
    --gutter-wide: 4em;

    --z-header: 1000;
    --z-backdrop: 1200;
    --z-sidebar: 1500;
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
    min-height: 100vw;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: hsla(0, 0%, 0%, 0.8);
    font-family: 'Inter', sans-serif;
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
    padding: 0;
    margin: 0;
  }

  li {
    text-decoration: none;
    
    }
  }

  a, button {
    cursor: pointer;
  }

  a {
    color: var(--text-main);
    text-decoration: none;
    transition: color .2s;
    &:hover {  
      color: var(--accent);
    }
  }

  button {
    border: none;
    outline: none;
    background: transparent;
    font: inherit;
    padding: 0;
  }

  .sr-only:not(:focus):not(:active) {
      overflow: hidden;
      white-space: nowrap;
      position: absolute;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      width: 1px;
    }
  
`

export const mq = {
  landscape: 500,
  tablet: 700,
  desktop: 1130,
  wide: 1600,
}
