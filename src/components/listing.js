import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            title
            date(formatString: "dddd, MMMM Do YYYY, h:mm:ss a")
          }
        }
      }
    }
  }
`

const Listing = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY)

  return allMarkdownRemark.edges.map(({ node }) => (
    <article key={node.frontmatter.slug}>
      <Link to={`/blog${node.frontmatter.slug}`}>
        <h2>{node.frontmatter.title}</h2>
      </Link>
      <p>{node.frontmatter.date}</p>
      <p>{node.excerpt}</p>
      <Link to={`/blog${node.frontmatter.slug}`}>Read More</Link>
    </article>
  ))
}

export default Listing
