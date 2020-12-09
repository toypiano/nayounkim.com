import React from 'react'
import SEO from '../components/seo'
import TransitionFade from '../components/transition-fade'
import WorksMasonry from '../components/works-masonry'

const IndexPage = () => {
  return (
    <TransitionFade>
      <SEO title="Home" />
      <WorksMasonry />
    </TransitionFade>
  )
}

export default IndexPage
