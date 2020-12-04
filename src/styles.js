import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: white;
    --accent: #fb4732;
    --bg: var(--white);
    --text-main: #333;
    --text-secondary: rgba(0,0,0,0.6);


    --header-height: 15rem;

    --z-header: 1000;
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
    min-height: 100vw;
    margin: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: hsla(0, 0%, 0%, 0.8);
    font-family: 'Quasimoda', sans-serif;
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
  }

  li {
    text-decoration: none;
    
    }
  }

  a {
    color: var(--text-main);
    text-decoration: none;
    transition: color .2s;
    &:hover {  
      color: var(--accent);
    }
  }
  
`
