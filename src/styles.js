import { createGlobalStyle } from 'styled-components'

export const mq = {
  landscape: 500,
  tablet: 700,
  desktop: 1130,
  wide: 1600,
}

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --white: white;
    --black: black;
    --primary: hsla(51,90%,53%,1.0); 
    --primary: #f0cbc2; 
    --accent: hsla(3, 58%, 56%, 1.0);
    --accent: #24714f;
    --accent-light: #68bf9d;
    --accent-dark: #4b9075;
    --accent: #5aa688;
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
    
    /* Typography */
    --fw-black: 900;
    --fw-regular: 400;
    --fw-bold: 600;
    --fw-light: 300;

    --ff-se: 'Raleway', serif;
    --ff-ss: 'Open Sans', sans-serif;

    --fz-sidebar-link: max(1.75rem, min(5vw, 3rem));
    --font-sidebar-link: var(--fw-light) var(--fz-sidebar-link) var(--ff-se); 
    
    /* Dimensions */
    --header-height: 96px;
    --header-height-tablet: 136px;
    --header-height-desktop: 170px;
    --header-height-wide: 192px;
    --footer-max-width: 704px;

    --gutter-landscape: 1em;
    --gutter-tablet: 2em;
    --gutter-desktop: 3em;
    --gutter-wide: 4em;

    /* Z-indexes */
    --z-header: 1000;
    --z-backdrop: 1200;
    --z-sidebar: 1500;
    --z-back-to-top-button: 800;
    --z-gallery-overlay: 2000;

  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    
    /* Fluid font size */
    font-size: 100%;
    
    @media (min-width: ${mq.landscape}px) {
      font-size: 110%;  
    }
    @media (min-width: ${mq.tablet}px) {
      font-size: 115%;  
    }
    @media (min-width: ${mq.desktop}px) {
      font-size: 125%;
    }
       
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
    font-family: var(--ff-ss);
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
    color: var(--black);
    text-decoration: none;
    
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
    padding: max(2.3em, min(10vw,5em)) max(1.5em, min(7vw, 3em));
    max-width: ${mq.tablet}px;
    margin: 0 auto;

    @media (min-width: ${mq.desktop}px) {
      padding: max(2.3em, min(10vw,5em)) max(1.5em, min(7vw, 3em));
      width: 100%;
      max-width: 1271px;
    }
  }

  .desktop-only {
    display: none;
  }

  @media (min-width: ${mq.desktop}px) {
     /* html {
       font-size: 18px;
     } 

     h2 {
       font-size: 2.25rem;      
     }   */

     .desktop-only {
       display: block;
     }
  }

  /* In order to set the child element absolute to the <main> */
  .tl-edges, .tl-wrapper {
    position: static;
  }
`
