/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Runs when the site is built and register things like pages.

const { resolve } = require("path")
const path = require("path")

// functions are passed graphql, actions by Gatsby
exports.createPages = async ({ graphql, actions }) => {
  try {
    const result = await graphql(`
      query BlogPostSlug {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)

    // result looks like this
    /* 
    { data: [Object: null prototype] {
        allMarkdownRemark: [Object: null prototype] { 
          edges: [Array] 
        } 
      } 
    } 
    */

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      actions.createPage({
        path: `/blog${node.frontmatter.slug}`,
        component: path.resolve("./src/components/post-template.js"),
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  } catch (err) {
    console.log(err)
  }
}
