import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const StyledArchive = styled.aside`
  margin-top: 1em;
  ul {
    list-style: initial;

    li {
      a {
        display: flex;
        align-items: center;
        margin: 0;

        p {
          margin: 0 1em;
          font-size: 0.8rem;
        }
      }
    }
  }
`

const POST_ARCHIVE_QUERY = graphql`
  query BlogPosts {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

const Archive = () => {
  const { allMarkdownRemark } = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <StyledArchive>
      <h2>Archive</h2>
      <ul>
        {allMarkdownRemark.edges.map((edge, i) => (
          <li key={edge.node.frontmatter.slug}>
            <Link to={`/blog${edge.node.frontmatter.slug}`}>
              <h3>{edge.node.frontmatter.title}</h3>
              <p>{edge.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </StyledArchive>
  )
}

export default Archive
