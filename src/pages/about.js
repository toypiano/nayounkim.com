import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import TransitionFade from '../components/transition-fade'
import Button from '../components/button'
import { mq } from '../styles'
import FluidPadding from '../components/fluid-padding'

const StyledAboutPage = styled.div`           
    .intro {
      padding-top: 0;
      max-width: ${mq.tablet}px;
      margin: auto;
      .intro-kor-name {
        display: none;
      }
      .gatsby-image-wrapper {
        width: 100%;
        max-width: ${mq.tablet}px;
        margin: 0 auto;
        height: 75vw;
        max-height: 576px;
        background: var(--img-bg-blend);

        img {
          background-blend-mode: overlay, normal;
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
          
        }      
      }
      background-color: var(--primary);
      color: black;
      .intro-header{
        display: flex;
        justify-content: center;  
        h2 {
          margin-bottom: 0.5em;          
        }    
      }
    }
    .body {
      padding-bottom: 0;
      p:last-of-type {
        margin-bottom: 0;
      }
    }
    .contact-btn {
      width: 100%;
      padding: 4rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: ${mq.desktop}px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 413px 1em 1fr;
      gap: 2em;
      max-width: 1271px;
      margin: 0 auto;
      padding: 0 var(--gutter-desktop) 6em;
      
      .intro {
        width: 100%;
        max-width: initial;
        height: 443px;
        padding: 2em;

        grid-column: 1 / -1;
        grid-row: 1 / 2;

        display: grid;
        grid-template-columns: 1fr minmax(450px, 523px) 300px;
        gap: 1em;

        position: relative;
        /* bottom: 1em; */
        .intro-body {
          /* override global container padding */
          padding: 0; 
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .intro-kor-name {
          display: none;
          @media (min-width: 1300px) {
            display: block;
          }
          grid-column: 1 / 2;
          grid-row: 1 / 2;
          font-family: 'Nanum Myeongjo', serif;
          .sm {
            position: absolute;
            left: 1rem;
            bottom: 1rem;
            font-size: 72px;
            z-index: 1;
          }
          .lg {
            font-size: 200px;
            font-weight: bold;
            position: absolute;
            left: 0;
            bottom: 0; 
            color: var(--white);
            opacity: 0.35;
            z-index: 0;
          }

        }
        .gatsby-image-wrapper {
          grid-column: 3 / 4;
          grid-row: 1 / 2;
          max-width: 262px;
          height: 378px;
          position: relative;
          top: 4em;
        }

        .container {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
          position: relative; // bring on top of kor-name by enabling stacking context
        }
      }

      .body {
        padding: 1em 0;
        grid-column: 2 / 3;
        grid-row: 3 / 4;

        .contact-btn {
          justify-content: flex-start;
          padding-bottom: 0;
        }
      }

      .about-dream {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
        height: 100%;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`

// TODO: Add Style and Layout, Get some photos
const AboutPage = ({ data }) => {
  return (
    <TransitionFade>
      <StyledAboutPage>
        <div className="intro">
          <Img
            fluid={data.nayoun.childImageSharp.fluid}
            imgStyle={{ objectPosition: 'center 10%' }}
          />
          <div className="intro-kor-name">
            <span className="sm">김나연</span>
            <span className="lg">나연</span>
          </div>
          <div className="intro-body container">
            <div className="intro-header">
              <h2>
                Hi, my name is Nayoun Kim, an illustrator based in Toronto |
                Seoul
              </h2>
            </div>
            <p>
              I like telling stories through symbols and characters. They are
              very useful tools for capturing spontaneous thoughts and hidden
              feelings.
            </p>
          </div>
        </div>
        <Img
          fluid={data.dream.childImageSharp.fluid}
          className="desktop-only about-dream"
          alt="Dream"
        />

        <div className="body container">
          <p>
            For as long as I can remember, I’ve been always drawing something
            whenever I had a chance. Sometimes I would just start drawing even
            before I knew what I wanted to draw. It’s like having a good
            conversation with your friend. You talk, listen, and suddenly you
            discover something you didn’t know about yourself.{' '}
          </p>
          <p>
            After finishing my degree in illustration in 2012, I have exhibited
            in various galleries and shows around Toronto and Seoul. I also
            enjoy working with artists in different fields. You can find my
            works on books & magazines, album covers, music videos, and a
            popular Korean Drama.
          </p>
          <p>
            A good illustration draw people instantly and pose a question unique
            to each individual. It only takes a few seconds to make the readers
            wonder about the rest of the story. That’s why a good illustration
            can be a very strong yet personal invitation to what you have to say
            to your audience.
          </p>
          <p>
            Leave me a message if you have any questions. We can work together
            to start a fun conversation with the viewers and invite them to see
            what you have to offer.
          </p>
          <div className="contact-btn">
            <Button to="/contact">Contact</Button>
          </div>
        </div>
      </StyledAboutPage>
    </TransitionFade>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    nayoun: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }),
    }),
    dream: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }),
    }),
  }),
}

export const query = graphql`
  query AboutImageQuery {
    nayoun: file(relativePath: { eq: "nayoun-about.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dream: file(relativePath: { eq: "dream.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
