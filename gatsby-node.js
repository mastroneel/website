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

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/templates/page.js`)
  const teamTemplate = path.resolve(`src/templates/team.js`)

  return graphql(`
    {
      pages: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/markdown/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      team: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/team/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: pageTemplate,
        context: {}, // additional data can be passed via context
      })
    })

    result.data.team.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: teamTemplate,
        context: {},
      })
    })
  })
}
