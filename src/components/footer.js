import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { SiInstagram, SiSociety6, SiFacebook } from 'react-icons/si'

import { mq } from '../styles'

const StyledFooter = styled('footer')`
  padding: 1em;

  .divider {
    border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  }
  .content {
    padding-top: 1em;
    display: grid;

    margin: auto;
    width: 100%;
    max-width: 14rem;
    .page-link {
      padding-left: 1em;
      h6 {
        font-size: 1.2rem;
      }
    }

    // TODO: add pulsing animation
    .social {
      width: 100%;
      display: flex;
      padding: 1em 0;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 2rem;
      }
    }

    .credit {
      text-align: center;
      font-size: 0.9rem;
      font-weight: var(--fw-light);
      align-self: center;
    }
  }

  @media (min-width: ${mq.tablet}px) {
    .content {
      grid-gap: 1em;
      padding: 2em 0;
      max-width: var(--footer-max-width);
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      .page-link {
        font-size: 1rem;
      }
      .privacy {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
      .conditions {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
      .contact {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
        justify-self: end;
        align-self: start;
        position: relative;
        right: 2em;
      }
      .social {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        justify-content: space-around;
      }
      .credit {
        grid-column: 3 / 4;
        grid-row: 1 / 2;
        justify-self: end;
        align-self: end;
        position: relative;
        right: 2em;
      }
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="divider"></div>
      <div className="content">
        <div className="page-link privacy">
          <h6>
            <Link to="/privacy">Privacy Policy</Link>
          </h6>
        </div>
        <div className="page-link conditions">
          <h6>
            <Link to="/conditions">Terms &amp; Conditions</Link>
          </h6>
        </div>
        <div className="page-link contact">
          <h6>
            <Link to="/contact">Contact</Link>
          </h6>
        </div>
        <ul className="social">
          <li>
            <Link to="#" className="social--instagram">
              <span>
                <SiInstagram />
              </span>
            </Link>
          </li>
          <li>
            <Link to="#" className="social--society6">
              <span>
                <SiSociety6 />
              </span>
            </Link>
          </li>
          <li>
            <Link to="#" className="social--facebook">
              <span>
                <SiFacebook />
              </span>
            </Link>
          </li>
        </ul>
        <div className="credit">
          <p>
            &copy;Nayoun Kim{' '}
            <span className="credit__year">{new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
