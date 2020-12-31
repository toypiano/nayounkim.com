import { createGlobalStyle } from 'styled-components'

export const mq = {
  landscape: 500,
  tablet: 700,
  desktop: 1130,
  wide: 1600,
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: white;
    --primary: hsla(51,90%,53%,1.0);
    --accent: hsla(3, 58%, 56%, 1.0);
    --bg: var(--white);
    --text-main: #4e4e4e;
    --text-secondary: #555;
    --text-muted: #e5e5e5;
    --text-inverse: #ffffff;
    --text-placeholder: hsla(0,0%,31%,.5);
    --img-bg-blend: hsla(209, 29%, 38%, 0.3);
    --cl-icon: var(--text-main);
    --cl-icon-alpha: 1;
    --cl-gray: #eee;
    
    --fw-black: 900;
    --fw-regular: 400;
    --fw-bold: 600;
    --fw-light: 300;

    
    --header-height: 7rem;
    --header-height-desktop: 10rem;
    --footer-max-width: 44rem;

    --gutter-landscape: 1em;
    --gutter-tablet: 2em;
    --gutter-desktop: 3em;
    --gutter-wide: 4em;

    --z-header: 1000;
    --z-backdrop: 1200;
    --z-sidebar: 1500;
    --z-back-to-top-button: 800;

  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
        
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    position: relative;
    min-height: 100vh;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: hsla(0, 0%, 0%, 0.8);
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    background-color: var(--bg);

    
  }

  h1, h2, h3,h4, h5, h6, p {
    margin: 0;
    line-height: 1.6;
    margin-bottom: 1.5em;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  h1, h2, h3 {
    font-family: Raleway;
    font-weight: 400;
    line-height: 1.3;
  }

  h2 {
    font-size: 2rem;
  }

  h6 {
    font-weight: var(--fw-bold);
  }

  p {
    font-size: 1rem;
    line-height: 2;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    text-decoration: none;    
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
  
  .container {
    padding: max(2.3em, min(10vw,3em)) max(1.5em, min(7vw, 3em));
    max-width: ${mq.tablet}px;
    margin: auto;

    @media (min-width: ${mq.desktop}px) {
      padding: 0;
      width: 100%;
      max-width: 1271px;
    }
  }

  .desktop-only {
    display: none;
  }

  @media (min-width: ${mq.desktop}px) {
     html {
       font-size: 18px;
     } 

     h2 {
       font-size: 2.25rem;      
     }  

     .desktop-only {
       display: block;
     }
  }
`
