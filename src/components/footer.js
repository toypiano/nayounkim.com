import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { SiInstagram, SiSociety6, SiFacebook } from 'react-icons/si'

import { mq } from '../styles'

const StyledFooter = styled('footer')`
  padding: 0 1em;
  color: var(--black);

  .divider {
    border-top: 1px solid var(--text-placeholder);
  }
  .content {
    padding: 1em;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: 17rem;
    text-align: center;

    .page-link {
      padding: 0.5em;
      li {
        &:not(:last-of-type) {
          margin-bottom: 0.5em;
        }
        a {
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
    }

    // TODO: add pulsing animation
    .social {
      width: 100%;
      max-width: 220px;
      display: flex;
      margin: 1.25em 0.75em;

      align-items: center;
      justify-content: space-between;
      span {
        font-size: 2rem;
      }
      &--instagram {
        svg * {
          fill: var(--black);
        }
        &:hover svg * {
          fill: url(#rg);
        }
      }
      &--society6 {
        &:hover {
          opacity: 0.6;
        }
      }
      &--facebook {
        &:hover {
          color: #4267b2;
        }
      }
    }

    .credit {
      padding: 0.5em;
      align-self: center;
      display: flex;
      flex-direction: column;
      .nayoun {
        margin-bottom: 0.75em;
        text-transform: uppercase;
        .copyright {
          font-size: 1.1rem;
          position: relative;
          top: 1px;
        }
        p {
          font-size: 0.9rem;
        }
      }
      .toypiano > p {
        font-weight: var(--fw-light);
        font-size: 0.8rem;
      }
    }
  }

  @media (min-width: ${mq.tablet}px) {
    .content {
      padding: 3em 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: ${mq.desktop}px;
      text-align: left;
      place-items: center;

      .credit {
        height: 100%;
        justify-content: center;
      }
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="divider"></div>
      <div className="content">
        <ul className="page-link">
          <li className="privacy">
            <Link to="#">Privacy Policy</Link>
          </li>
          <li className="conditions">
            <Link to="#">Terms &amp; Conditions</Link>
          </li>
          <li className="contact">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="social">
          <li>
            <Link to="#" className="social--instagram">
              <svg width="0" height="0">
                <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                  <stop stop-color="#fdf497" offset="0" />
                  <stop stop-color="#fdf497" offset="0.05" />
                  <stop stop-color="#fd5949" offset="0.45" />
                  <stop stop-color="#d6249f" offset="0.6" />
                  <stop stop-color="#285AEB" offset="0.9" />
                </radialGradient>
              </svg>
              <span>
                <SiInstagram />
              </span>
            </Link>
          </li>
          <li>
            <a
              href="https://society6.com/nayounkim"
              className="social--society6"
              target="blank"
            >
              <span>
                <SiSociety6 />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/nayoun.kim"
              target="blank"
              className="social--facebook"
            >
              <span>
                <SiFacebook />
              </span>
            </a>
          </li>
        </ul>
        <div className="credit">
          <div className="nayoun">
            <p>
              <span className="copyright">&copy;</span>Copyright{' '}
              <span className="credit__year">{new Date().getFullYear()}</span>{' '}
              Nayoun Kim
            </p>
          </div>
          <div className="toypiano">
            <p>
              Website designed &amp; created by{' '}
              <a href="mailto:sidhlee@gmail.com">Sid H. Lee</a>
            </p>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
