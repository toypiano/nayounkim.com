import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import TransitionFade from '../components/transition-fade'
import Input from '../components/input'
import Button from '../components/button'
import Img from 'gatsby-image'
import { mq } from '../styles'
import SEO from '../components/seo'

const StyledContactPage = styled('div')`
  .container {
    background: var(--primary);
    width: 100%;
    /* height: 100%; */
    margin: 0 auto;
    .contact {
      max-width: 400px;
      margin: 0 auto;
      .contact-header {
        text-align: center;
        margin-bottom: 1em;
        h2 {
          margin-bottom: 0.5em;
          font-size: 2.5rem;
        }
        p {
          color: var(--black);
        }
      }

      .contact-form {
        width: 100%;
        display: flex;
        flex-direction: column;

        .submit-btn {
          padding-top: 3em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .contact-img {
    display: none;
    height: 100%;
  }

  @media (min-width: ${mq.desktop}px) {
    width: 100%;
    position: relative; // to contain abs-positioned image wrapper
    max-width: ${mq.wide}px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .contact-img {
      display: block; // show image on desktop mode
      grid-column: 2 / 3; // You MUST specify grid column to be able to contain abs-positioned element within the grid
      // image was pushing the container down to become longer than needed by form height
      // probably because Gatsby Image set the image to keep its aspect ratio when container height is not specified
      // so we're removing image from the normal flow to take up as much height as the container has to fit the form element
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      .gatsby-image-wrapper {
        height: 100%;
      }
    }
  }
`

const inputs = [
  { name: 'email', required: true, type: 'email' },
  { name: 'name', required: true, type: 'text' },
  { name: 'subject', required: false, type: 'text' },
  { name: 'message', required: true, type: 'textarea' },
]

// TODO: create a success page at /pages/success
// https://docs.netlify.com/forms/setup/?_ga=2.31060159.1455634184.1611450709-2100244496.1610393043#success-messages
const ContactPage = ({ data }) => {
  return (
    <TransitionFade>
      <SEO />
      <StyledContactPage>
        <div className="container">
          <div className="contact">
            <div className="contact-header">
              <h2>Contact</h2>
              <p>
                For commisions, collaborations and other exciting projects,
                please contact me here or email me at:{' '}
                <a href="mailto:hello@nayounkim.com">hello@nayounkim.com</a>
              </p>
            </div>
            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/*  */}
              <input type="hidden" name="bot-field" />
              {/* This to add this for Gatsby */}
              <input type="hidden" name="form-name" value="contact" />
              {inputs.map(input => (
                <Input key={input.name} {...input} />
              ))}
              <div className="submit-btn">
                <Button type="submit">Send</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-img">
          <Img
            fluid={data.contactImage.childImageSharp.fluid}
            imgStyle={{ objectFit: 'cover' }}
          />
        </div>
      </StyledContactPage>
    </TransitionFade>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    contactImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }),
    }),
  }),
}

export const query = graphql`
  query contactImageQuery {
    contactImage: file(relativePath: { eq: "contact-mural.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactPage
