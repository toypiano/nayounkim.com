import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import TransitionFade from '../components/transition-fade'
import Button from '../components/button'

const StyledAboutPage = styled.div`    
    
    .gatsby-image-wrapper {
      width: 100%;
      height: 75vw;
      background: var(--img-bg-blend);
      img {
        background-blend-mode: overlay, normal;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        
      }      
    }
    .intro {
      background-color: var(--primary);
      color: black;
      .intro-header{
        display: flex;
        justify-content: center;  
        h2 {
          margin-bottom: 1em;
          
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
      height: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

// TODO: Add Style and Layout, Get some photos
const about = ({ data }) => {
  return (
    <TransitionFade>
      <StyledAboutPage>
        <Img
          fluid={data.file.childImageSharp.fluid}
          imgStyle={{ objectPosition: 'center 10%' }}
        />
        <div className="intro container">
          <div className="intro-header">
            <h2>
              Hi, my name is Nayoun Kim, an illustrator based in Toronto | Seoul
            </h2>
          </div>
          <p>
            I like telling stories through symbols and characters. They are very
            useful tools for capturing spontaneous thoughts and hidden feelings.
          </p>
        </div>
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
        </div>
        <div className="contact-btn">
          <Button to="/contact">Contact</Button>
        </div>
      </StyledAboutPage>
    </TransitionFade>
  )
}

export const query = graphql`
  query AboutImageQuery {
    file(relativePath: { eq: "nayoun-about.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default about
