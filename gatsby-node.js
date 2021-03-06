const path = require('path')
const kebabCase = require('lodash/kebabCase')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `markdown` })
    if (node.fileAbsolutePath.includes('markdown')) {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    } else if (node.fileAbsolutePath.includes('team')) {
      createNodeField({
        node,
        name: `slug`,
        value: `/team/${ kebabCase(slug) }/`,
      })
    }
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/templates/page.js`)
  const teamTemplate = path.resolve(`src/templates/team.js`)

  await graphql(`
    {
      team: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/team/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              name
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              name
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.team.edges.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: teamTemplate,
        context: {
          next: next,
          prev: previous,
        },
      })
    })
  })
}
