import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import TransitionFade from '../components/transition-fade'
import Input from '../components/input'
import Button from '../components/button'
import Img from 'gatsby-image'
import { mq } from '../styles'

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

  /* TODO: find better way than using overflow: hidden */
  @media (min-width: ${mq.desktop}px) {
    width: 100%;
    max-width: ${mq.wide}px;
    height: 886px;
    overflow-y: hidden;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .contact-img {
      display: block;
      .gatsby-image-wrapper {
        width: 100%;
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

// TODO: send email on submit

const ContactPage = ({ data }) => {
  return (
    <TransitionFade>
      <StyledContactPage>
        <div className="container">
          <div className="contact">
            <div className="contact-header">
              <h2>Contact</h2>
              <p>
                For commisions, collaborations and other exciting projects,
                please contact me here or email me at: hello@nayounkim.com
              </p>
            </div>
            <div className="contact-form">
              {inputs.map(input => (
                <Input key={input.name} {...input} />
              ))}
              <div className="submit-btn">
                <Button>Send</Button>
              </div>
            </div>
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
