import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

const StyledMyFiles = styled.div`
  padding: 1em;
  h1 {
    margin-bottom: 1em;
  }
  thead {
    text-align: left;
    th {
      padding-right: 1em;
      padding-bottom: 1em;
    }
  }
  td {
    padding-top: 0.5em;
    padding-bottom: 1em;
    border-bottom: 1px solid var(--text-muted);
  }
`

export default function MyFiles({ data }) {
  console.log(data)
  return (
    <StyledMyFiles>
      <h1>Images &amp; Posts</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>size</th>
            <th>ext</th>
            <th>created</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, i) => (
            <tr key={i}>
              <td>{node.relativePath}</td>
              <td>{node.prettySize}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledMyFiles>
  )
}

MyFiles.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            relativePath: PropTypes.string.isRequired,
            prettySize: PropTypes.string.isRequired,
            extension: PropTypes.string.isRequired,
            birthTime: PropTypes.string.isRequired,
          }),
        })
      ),
    }),
  }),
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
