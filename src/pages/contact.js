import React from 'react'

import styled from 'styled-components'
import TransitionFade from '../components/transition-fade'
import Input from '../components/input'
import Button from '../components/button'

const StyledContactPage = styled('div')`
  background: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .inner {
    max-width: 450px;
    margin: auto;
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
`

const inputs = [
  { name: 'email', required: true, type: 'email' },
  { name: 'name', required: true, type: 'text' },
  { name: 'subject', required: false, type: 'text' },
  { name: 'message', required: true, type: 'textarea' },
]

const ContactPage = () => {
  return (
    <TransitionFade>
      <StyledContactPage className="container">
        <div className="inner">
          <div className="contact-header">
            <h2>Contact</h2>
            <p>
              For commisions, collaborations and other exciting projects, please
              contact me here or email me at: hello@nayounkim.com
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
      </StyledContactPage>
    </TransitionFade>
  )
}

export default ContactPage
