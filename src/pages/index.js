import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import WorksMasonry from '../components/works-masonry'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <WorksMasonry />
    </Layout>
  )
}

export default IndexPage
