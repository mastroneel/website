import React from 'react'
import { Link, graphql } from 'gatsby'

import Banner from '../components/Banner'
import SEO from '../components/SEO'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

const banners = [pic01, pic02, pic03, pic04, pic05, pic06]

export default ({ data }) => {
  const { edges: pages } = data.allMarkdownRemark

  console.log(pages)
  return (
    <>
      <Banner />
      <div id="main">
        <SEO title="Home" />
        <section
          id="one"
          className="tiles"
        >
          {pages.map((page, idx) => (
            <article
              key={page.node.id}
              style={{ backgroundImage: `url(${ banners[idx] })` }}
            >
              <Link
                to={page.node.fields.slug}
                className="main-tile link primary"
              >
                <header className="major">
                  <h3>{page.node.frontmatter.title}</h3>
                  <p>{page.node.frontmatter.intro}</p>
                </header>
              </Link>
            </article>
          ))}
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Massa libero</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed
              nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa
              vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
              sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.
            </p>
            <ul className="actions">
              <li>
                <Link
                  to="/landing"
                  className="button next"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export const allPages = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            intro
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
