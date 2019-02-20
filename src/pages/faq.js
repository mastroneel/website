import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

export default ({ data }) => {
  const { edges: faq } = data.allFaqJson
  return (
    <>
      <SEO
        title="The Answers You Want to Know"
        description="These are some of the most frequent questions asked of us and our responses."
      />
      <div
        id="main"
        className="alt"
      >
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>The Answers You Want to Know</h1>
              <p>These are some of the most frequent questions asked of us and our responses</p>
            </header>
            <span className="image main" />
            {faq.map(entry => (
              <div key={entry.node.id}>
                <h2>{entry.node.section}</h2>
                {entry.node.faq.map((qa, idx) => (
                  <div key={idx}>
                    <h4>{qa.q}</h4>
                    <p>{qa.a}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export const allPages = graphql`
  query {
    allFaqJson {
      edges {
        node {
          id
          section
          faq {
            q
            a
          }
        }
      }
    }
  }
`
